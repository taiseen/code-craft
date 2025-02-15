import { LanguageConfigType } from "@/types";
import defaultCode from "./defaultCode";

const LanguageConfig: LanguageConfigType = {
    javascript: {
        id: "javascript",
        label: "JavaScript",
        logoPath: "/javascript.png",
        pistonRuntime: { language: "javascript", version: "18.15.0" }, // api that we're gonna be using
        monacoLanguage: "javascript",
        defaultCode: defaultCode.javascript,
    },
    typescript: {
        id: "typescript",
        label: "TypeScript",
        logoPath: "/typescript.png",
        pistonRuntime: { language: "typescript", version: "5.0.3" },
        monacoLanguage: "typescript",
        defaultCode: defaultCode.typescript,
    },
    python: {
        id: "python",
        label: "Python",
        logoPath: "/python.png",
        pistonRuntime: { language: "python", version: "3.10.0" },
        monacoLanguage: "python",
        defaultCode: defaultCode.python,
    },
    java: {
        id: "java",
        label: "Java",
        logoPath: "/java.png",
        pistonRuntime: { language: "java", version: "15.0.2" },
        monacoLanguage: "java",
        defaultCode: defaultCode.java,
    },
    go: {
        id: "go",
        label: "Go",
        logoPath: "/go.png",
        pistonRuntime: { language: "go", version: "1.16.2" },
        monacoLanguage: "go",
        defaultCode: defaultCode.go,
    },
    rust: {
        id: "rust",
        label: "Rust",
        logoPath: "/rust.png",
        pistonRuntime: { language: "rust", version: "1.68.2" },
        monacoLanguage: "rust",
        defaultCode: defaultCode.rust,
    },
    cpp: {
        id: "cpp",
        label: "C++",
        logoPath: "/cpp.png",
        pistonRuntime: { language: "cpp", version: "10.2.0" },
        monacoLanguage: "cpp",
        defaultCode: defaultCode.cpp,
    },
    csharp: {
        id: "csharp",
        label: "C#",
        logoPath: "/csharp.png",
        pistonRuntime: { language: "csharp", version: "6.12.0" },
        monacoLanguage: "csharp",
        defaultCode: defaultCode.csharp,
    },
    ruby: {
        id: "ruby",
        label: "Ruby",
        logoPath: "/ruby.png",
        pistonRuntime: { language: "ruby", version: "3.0.1" },
        monacoLanguage: "ruby",
        defaultCode: defaultCode.ruby,
    },
    swift: {
        id: "swift",
        label: "Swift",
        logoPath: "/swift.png",
        pistonRuntime: { language: "swift", version: "5.3.3" },
        monacoLanguage: "swift",
        defaultCode: defaultCode.swift,
    },
};

export default LanguageConfig;