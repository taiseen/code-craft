import { Code, X } from "lucide-react";
import { motion } from "framer-motion";

type SnippetsNotFoundTypes = {
  setSelectedLanguage: (lang: string | null) => void;
  setSearchQuery: (query: string) => void;
  selectedLanguage: string | null;
  searchQuery: string;
};

const SnippetsNotFound = ({
  setSelectedLanguage,
  selectedLanguage,
  setSearchQuery,
  searchQuery,
}: SnippetsNotFoundTypes) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative max-w-md mx-auto mt-20 p-8 rounded-2xl overflow-hidden"
    >
      <div className="text-center">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br 
      from-blue-500/10 to-purple-500/10 ring-1 ring-white/10 mb-6"
        >
          <Code className="w-8 h-8 text-gray-400" />
        </div>

        <h3 className="text-xl font-medium text-white mb-3">
          No snippets found
        </h3>

        <p className="text-gray-400 mb-6">
          {searchQuery || selectedLanguage
            ? "Try adjusting your search query or filters"
            : "Be the first to share a code snippet with the community"}
        </p>

        {(searchQuery || selectedLanguage) && (
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedLanguage(null);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#262637] text-gray-300 hover:text-white rounded-lg 
          transition-colors"
          >
            <X className="w-4 h-4" />
            Clear all filters
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default SnippetsNotFound;
