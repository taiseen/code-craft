import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { Themes } from "@/app/(root)/_constants/themes";
import { motion } from "framer-motion";
import { Palette } from "lucide-react";

type ThemeSelectionType = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

const ThemeSelected = ({ setIsOpen, isOpen }: ThemeSelectionType) => {
  const { theme } = useCodeEditorStore();

  const currentTheme = Themes.find((themeObj) => themeObj.id === theme);

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setIsOpen(!isOpen)}
      className="themeSelected group"
    >
      {/* hover state bg decorator */}
      <div className="themeSelectedHover" />

      <Palette className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors" />

      <span className="text-gray-300 min-w-[80px] text-left group-hover:text-white transition-colors">
        {currentTheme?.label}
      </span>

      {/* color indicator */}
      <div
        className="relative w-4 h-4 rounded-full border border-gray-600 group-hover:border-gray-500 transition-colors"
        style={{ background: currentTheme?.color }}
      />
    </motion.button>
  );
};

export default ThemeSelected;
