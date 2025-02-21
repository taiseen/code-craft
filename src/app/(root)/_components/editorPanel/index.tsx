"use client";

import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useEffect, useState } from "react";
import LanguageConfig from "../../_constants/languageConfig";
import ShareSnippetDialog from "./ShareSnippetDialog";
import useMounted from "@/hooks/useMounted";
import EditorHeader from "./EditorHeader";
import CodeEditor from "./CodeEditor";

const EditorPanel = () => {
  const mounted = useMounted();

  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);

  const { language, editor, setFontSize } = useCodeEditorStore();

  useEffect(() => {
    const savedCode = localStorage.getItem(`editor-code-${language}`);
    const newCode = savedCode || LanguageConfig[language].defaultCode;
    if (editor) editor.setValue(newCode);
  }, [language, editor]);

  useEffect(() => {
    const savedFontSize = localStorage.getItem("editor-font-size");
    if (savedFontSize) setFontSize(parseInt(savedFontSize));
  }, [setFontSize]);

  if (!mounted) return null;

  return (
    <div className="relative">
      <div className="relative bg-[#12121a]/90 backdrop-blur rounded-xl border border-white/[0.05] p-6">
        <EditorHeader setIsShareDialogOpen={setIsShareDialogOpen} />

        <CodeEditor />
      </div>

      {isShareDialogOpen && (
        <ShareSnippetDialog onClose={() => setIsShareDialogOpen(false)} />
      )}
    </div>
  );
};
export default EditorPanel;
