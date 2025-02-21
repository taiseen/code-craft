import LanguageConfig from "../../_constants/languageConfig";
import CodeEditorSkeleton from "./CodeEditorSkeleton";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { defineMonacoThemes } from "../../_constants";
import { Editor } from "@monaco-editor/react";
import { useClerk } from "@clerk/nextjs";

const CodeEditor = () => {
  const clerk = useClerk(); // if clerk is loaded, then editor will be mounted

  const { language, theme, fontSize, isMinimapOpen, setEditor } =
    useCodeEditorStore();

  const handleEditorChange = (value: string | undefined) => {
    if (value) localStorage.setItem(`editor-code-${language}`, value);
  };

  const editorConfigOptions = {
    fontSize,
    automaticLayout: true,
    minimap: { enabled: isMinimapOpen },
    scrollBeyondLastLine: false,
    padding: { top: 16, bottom: 16 },
    contextmenu: true,
    fontLigatures: true,
    smoothScrolling: true,
    roundedSelection: true,
    lineHeight: 1.6,
    letterSpacing: 0.5,
    fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
    renderWhitespace: "selection",
    renderLineHighlight: "all",
    cursorBlinking: "smooth",
    scrollbar: {
      verticalScrollbarSize: 8,
      horizontalScrollbarSize: 8,
    },
  };

  return (
    <div className="relative group rounded-xl overflow-hidden ring-1 ring-white/[0.05]">
      {
        // if clerk is loaded, then editor will be mounted
        clerk.loaded && (
          <Editor
            height="600px"
            theme={theme}
            onChange={handleEditorChange}
            beforeMount={defineMonacoThemes}
            onMount={(editor) => setEditor(editor)}
            language={LanguageConfig[language].monacoLanguage}
            options={editorConfigOptions}
          />
        )
      }

      {!clerk.loaded && <CodeEditorSkeleton />}
    </div>
  );
};

export default CodeEditor;
