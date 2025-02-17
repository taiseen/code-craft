import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { ChevronDownIcon } from "lucide-react";
import { LanguagePropType } from "@/types";
import { motion } from "framer-motion";
import LanguageConfig from "@/app/(root)/_constants/languageConfig";
import Image from "next/image";

const LanguageSelected = ({
  hasAccess,
  setIsOpen,
  isOpen,
}: LanguagePropType) => {
  const { language } = useCodeEditorStore();

  const currentLanguageObj = LanguageConfig[language];

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setIsOpen(!isOpen)}
      className={`group languageSelected ${
        !hasAccess && language !== "javascript"
          ? "opacity-50 cursor-not-allowed"
          : ""
      }`}
    >
      {/* Decoration */}
      <div className="languageSelectedDecoration" aria-hidden="true" />

      <div className="size-6 rounded-md bg-gray-800/50 p-0.5 group-hover:scale-110 transition-transform">
        <Image
          src={currentLanguageObj.logoPath}
          alt="programming language logo"
          width={24}
          height={24}
          className="w-full h-full object-contain relative z-10"
        />
      </div>

      <span className="text-gray-200 min-w-[80px] text-left group-hover:text-white transition-colors">
        {currentLanguageObj.label}
      </span>

      <ChevronDownIcon
        className={`size-4 text-gray-400 transition-all duration-300 group-hover:text-gray-300
      ${isOpen ? "rotate-180" : ""}`}
      />
    </motion.button>
  );
};

export default LanguageSelected;
