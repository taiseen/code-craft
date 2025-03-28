import { RotateCcwIcon, ShareIcon, TypeIcon } from "lucide-react";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { motion } from "framer-motion";
import LanguageConfig from "../../_constants/languageConfig";
import Image from "next/image";

type EditorHeaderType = {
  setIsShareDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditorHeader = ({ setIsShareDialogOpen }: EditorHeaderType) => {
  const {
    setMinimapOpen,
    setFontSize,
    isMinimapOpen,
    fontSize,
    language,
    editor,
  } = useCodeEditorStore();

  // update font size when change
  const handleFontSizeChange = (newSize: number) => {
    const size = Math.min(Math.max(newSize, 12), 24);

    setFontSize(size);
    localStorage.setItem("editor-font-size", size.toString());
  };

  // update font size when change
  const handleResetLanguage = () => {
    const defaultCode = LanguageConfig[language].defaultCode;

    if (editor) editor.setValue(defaultCode);
    localStorage.removeItem(`editor-code-${language}`);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1e1e2e] ring-1 ring-white/5">
          <Image
            src={"/" + language + ".png"}
            alt="Logo"
            width={24}
            height={24}
          />
        </div>

        <div>
          <h2 className="text-sm font-medium text-white">Code Editor</h2>
          <p className="text-xs text-gray-500">Write and execute your code</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex items-center gap-1 justify-center text-gray-400">
          <input
            id="minimap"
            type="checkbox"
            checked={isMinimapOpen}
            onChange={setMinimapOpen}
            className="appearance-none w-4 h-4 rounded-sm bg-gray-600 checked:bg-blue-500 mb-0.5 duration-300"
          />
          {isMinimapOpen && (
            <span className="absolute top-0 left-px text-black">✔</span>
          )}
          <label htmlFor="minimap">Mini Map</label>
        </div>

        {/* Font Size Slider */}
        <div className="flex items-center gap-3 px-3 py-2 bg-[#1e1e2e] rounded-lg ring-1 ring-white/5">
          <TypeIcon className="size-4 text-gray-400" />

          <div className="flex items-center gap-3">
            <input
              min="12"
              max="24"
              type="range"
              value={fontSize}
              onChange={(e) => handleFontSizeChange(parseInt(e.target.value))}
              className="w-20 h-1 bg-gray-600 rounded-lg cursor-pointer"
            />
            <span className="text-sm font-medium text-gray-400 min-w-[2rem] text-center">
              {fontSize}
            </span>
          </div>
        </div>

        <motion.button
          title="Reset to default code"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleResetLanguage}
          aria-label="Reset to default code"
          className="p-2 bg-[#1e1e2e] hover:bg-[#2a2a3a] rounded-lg ring-1 ring-white/5 transition-colors"
        >
          <RotateCcwIcon className="size-4 text-gray-400" />
        </motion.button>

        {/* Share Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsShareDialogOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg overflow-hidden bg-gradient-to-r
       from-blue-500 to-blue-600 opacity-90 hover:opacity-100 transition-opacity"
        >
          <ShareIcon className="size-4 text-white" />
          <span className="text-sm font-medium text-white ">Share</span>
        </motion.button>
      </div>
    </div>
  );
};

export default EditorHeader;
