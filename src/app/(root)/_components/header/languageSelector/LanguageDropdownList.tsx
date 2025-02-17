import LanguageConfig from "@/app/(root)/_constants/languageConfig";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { motion, AnimatePresence } from "framer-motion";
import { LanguagePropType } from "@/types";
import { Lock, Sparkles } from "lucide-react";
import Image from "next/image";

const LanguageDropdownList = ({
  setIsOpen,
  isOpen,
  hasAccess,
}: LanguagePropType) => {
  const { language, setLanguage } = useCodeEditorStore();

  const handleLanguageSelect = (langId: string) => {
    if (!hasAccess && langId !== "javascript") return;

    setLanguage(langId);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="languageDropdownList"
        >
          <div className="px-3 pb-2 mb-2 border-b border-gray-800/50">
            <p className="text-xs font-medium text-gray-400">Select Language</p>
          </div>

          <div className="max-h-[280px] overflow-y-auto overflow-x-hidden languageScrollbar">
            {Object.values(LanguageConfig).map((lang, index) => {
              const isLocked = !hasAccess && lang.id !== "javascript";

              return (
                <motion.div
                  key={lang.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group px-2"
                >
                  <button
                    className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
                      ${isLocked ? "opacity-50" : "hover:bg-[#262637]"}
                      ${
                        language === lang.id
                          ? "bg-blue-500/10 text-blue-400"
                          : "text-gray-300"
                      }`}
                    onClick={() => handleLanguageSelect(lang.id)}
                    disabled={isLocked}
                  >
                    {/* decorator */}
                    <div className="languageBtnDecorator" />

                    <div
                      className={`relative size-8 rounded-lg p-1.5 group-hover:scale-110 transition-transform 
                        ${language === lang.id ? "bg-blue-500/10" : "bg-gray-800/50"}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                      <Image
                        width={24}
                        height={24}
                        src={lang.logoPath}
                        alt={`${lang.label} logo`}
                        className="w-full h-full object-contain relative z-10"
                      />
                    </div>

                    <span className="flex-1 text-left group-hover:text-white transition-colors">
                      {lang.label}
                    </span>

                    {/* selected language border */}
                    {language === lang.id && (
                      <motion.div
                        className="absolute inset-0 border-2 border-blue-500/30 rounded-lg"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}

                    {isLocked ? (
                      <Lock className="w-4 h-4 text-gray-500" />
                    ) : (
                      language === lang.id && (
                        <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                      )
                    )}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LanguageDropdownList;
