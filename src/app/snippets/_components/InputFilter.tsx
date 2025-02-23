import { Tag, X } from "lucide-react";
import { Snippet } from "@/types";
import ViewToggle from "./ViewToggle";
import Image from "next/image";

type InputFilterTypes = {
  setSelectedLanguage: (lang: string | null) => void;
  setView: (layout: "grid" | "list") => void;
  selectedLanguage: string | null;
  filteredSnippets: Snippet[];
  popularLanguages: string[];
  view: "grid" | "list";
};

const InputFilter = ({
  setSelectedLanguage,
  popularLanguages,
  selectedLanguage,
  filteredSnippets,
  setView,
  view,
}: InputFilterTypes) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2 px-4 py-2 bg-[#1e1e2e] rounded-lg ring-1 ring-gray-800">
        <Tag className="w-4 h-4 text-gray-400" />
        <span className="text-sm text-gray-400">Languages:</span>
      </div>

      {popularLanguages.map((lang) => (
        <button
          key={lang}
          onClick={() =>
            setSelectedLanguage(lang === selectedLanguage ? null : lang)
          }
          className={`
          group relative px-3 py-1.5 rounded-lg transition-all duration-200
          ${
            selectedLanguage === lang
              ? "text-blue-400 bg-blue-500/10 ring-2 ring-blue-500/50"
              : "text-gray-400 hover:text-gray-300 bg-[#1e1e2e] hover:bg-[#262637] ring-1 ring-gray-800"
          }
        `}
        >
          <div className="flex items-center gap-2">
            <Image
              alt={lang}
              src={`/${lang}.png`}
              width={16}
              height={16}
              className="w-4 h-4 object-contain"
            />
            <span className="text-sm">{lang}</span>
          </div>
        </button>
      ))}

      {selectedLanguage && (
        <button
          onClick={() => setSelectedLanguage(null)}
          className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-gray-300 transition-colors"
        >
          <X className="w-3 h-3" />
          Clear
        </button>
      )}

      <div className="ml-auto flex items-center gap-3">
        <span className="text-sm text-gray-500">
          {filteredSnippets.length} snippets found
        </span>

        <ViewToggle view={view} setView={setView} />
      </div>
    </div>
  );
};

export default InputFilter;
