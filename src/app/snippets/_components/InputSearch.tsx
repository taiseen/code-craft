import { Search } from "lucide-react";

type SearchTypes = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const InputSearch = ({ searchQuery, setSearchQuery }: SearchTypes) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

      <div className="relative flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-gray-400" />

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search snippets by title, language, or author..."
          className="w-full pl-12 pr-4 py-4 bg-[#1e1e2e]/80 hover:bg-[#1e1e2e] text-white
        rounded-xl border border-[#313244] hover:border-[#414155] transition-all duration-200
        placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        />
      </div>
    </div>
  );
};

export default InputSearch;
