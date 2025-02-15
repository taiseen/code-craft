import { ThemeIcons, Themes } from "@/app/(root)/_constants/themes";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { AnimatePresence, motion } from "framer-motion";
import { CircleOff } from "lucide-react";

const ThemeDropdownList = ({ isOpen }: { isOpen: boolean }) => {
  const { theme, setTheme } = useCodeEditorStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="themeDropdownList"
        >
          <div className="px-2 pb-2 mb-2 border-b border-gray-800/50">
            <p className="text-xs font-medium text-gray-400 px-2">
              Select Theme
            </p>
          </div>

          {Themes.map((themeObj, index: number) => {
            // Fallback to CircleOff if icon is missing
            const ThemeLogo = ThemeIcons?.[themeObj?.id] || CircleOff;
            // const ThemeLogo = themeObj.icon || CircleOff;

            return (
              <motion.button
                key={themeObj.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setTheme(themeObj.id)}
                className={`themeListBtn group ${
                  theme === themeObj.id
                    ? "bg-blue-500/10 text-blue-400"
                    : "text-gray-300"
                }`}
              >
                {/* bg gradient */}
                <div className="themeListBtnBg" />

                {/* icon */}
                <div
                  className={`themeListBtnIcon ${
                    theme === themeObj.id
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-gray-800/50 text-gray-400"
                  }`}
                >
                  <ThemeLogo className="size-4" />
                </div>

                {/* label */}
                <span className="flex-1 text-left group-hover:text-white transition-colors">
                  {themeObj.label}
                </span>

                {/* color indicator */}
                <div
                  className="themeListBtnColorIndicator"
                  style={{ background: themeObj.color }}
                />

                {/* active theme border */}
                {theme === themeObj.id && (
                  <motion.div
                    className="absolute inset-0 border-2 border-blue-500/30 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThemeDropdownList;
