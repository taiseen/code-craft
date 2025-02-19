import LanguageConfig from "@/app/(root)/_constants/languageConfig";
import { CodeEditorState } from "./../types/index";
import { Monaco } from "@monaco-editor/react";
import { create } from "zustand";

const getInitialState = () => {
    // if we're on the server, return default values
    if (typeof window === "undefined") {
        return {
            language: "javascript",
            fontSize: 16,
            theme: "vs-dark",
        };
    }

    // if we're on the client, return values from local storage 
    // because localStorage is a browser API.
    const savedTheme = localStorage.getItem("editor-theme") || "vs-dark";
    const savedFontSize = localStorage.getItem("editor-font-size") || 16;
    const savedLanguage = localStorage.getItem("editor-language") || "javascript";

    return {
        theme: savedTheme,
        language: savedLanguage,
        fontSize: Number(savedFontSize),
    };
};

export const useCodeEditorStore = create<CodeEditorState>((set, get) => {
    const initialState = getInitialState();

    return {
        ...initialState,
        output: "",
        error: null,
        editor: null,
        isRunning: false,
        isMinimapOpen: false,
        executionResult: null,

        getCode: () => get().editor?.getValue() || "",

        setMinimapOpen: () => {
            set((state) => ({
                ...state,
                isMinimapOpen: !state.isMinimapOpen
            }));
        },

        setEditor: (editor: Monaco) => {
            const savedCode = localStorage.getItem(`editor-code-${get().language}`);

            if (savedCode) editor.setValue(savedCode);

            set({ editor });
        },

        setTheme: (theme: string) => {
            localStorage.setItem("editor-theme", theme);
            set({ theme });
        },

        setFontSize: (fontSize: number) => {
            localStorage.setItem("editor-font-size", fontSize.toString());
            set({ fontSize });
        },

        setLanguage: (language: string) => {
            // Save current language code before switching
            const currentCode = get().editor?.getValue();
            if (currentCode) {
                localStorage.setItem(`editor-code-${get().language}`, currentCode);
            }

            localStorage.setItem("editor-language", language);

            set({
                language,
                output: "",
                error: null,
            });
        },

        runCode: async () => {
            const { language, getCode } = get();
            const code = getCode();

            if (!code) {
                set({ error: "Please enter some code" });
                return;
            }

            set({ isRunning: true, error: null, output: "" });

            try {
                const runTime = LanguageConfig[language].pistonRuntime;

                const bodyOfJsonString = JSON.stringify({
                    language: runTime.language,
                    version: runTime.version,
                    // run this code inside server docker...
                    files: [{ content: code }],
                })

                const url = "https://emkc.org/api/v2/piston/execute";

                const postConfig = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: bodyOfJsonString,
                }

                // api post request to piston (server docker)
                const response = await fetch(url, postConfig);

                // get the output response code from the server
                const data = await response.json();

                console.log("data back from piston:", data);

                // handle API-level errors
                if (data.message) {
                    set({
                        error: data.message,
                        executionResult: {
                            code,
                            output: "",
                            error: data.message
                        }
                    });

                    return;
                }

                // handle compilation errors
                if (data.compile && data.compile.code !== 0) {
                    const error = data.compile.stderr || data.compile.output;
                    set({
                        error,
                        executionResult: {
                            code,
                            output: "",
                            error,
                        },
                    });

                    return;
                }

                if (data.run && data.run.code !== 0) {
                    const error = data.run.stderr || data.run.output;
                    set({
                        error,
                        executionResult: {
                            code,
                            output: "",
                            error,
                        },
                    });

                    return;
                }

                // if we get here, execution was successful
                const output = data.run.output;

                set({
                    output: output.trim(),
                    error: null,
                    executionResult: {
                        code,
                        output: output.trim(),
                        error: null,
                    },
                });
            } catch (error) {
                console.log("Error running code:", error);
                set({
                    error: "Error running code",
                    executionResult: {
                        code,
                        output: "",
                        error: "Error running code"
                    },
                });
            } finally {
                set({ isRunning: false });
            }
        },
    };
});

export const getExecutionResult = () => useCodeEditorStore.getState().executionResult;