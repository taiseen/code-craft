"use client";

import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { useState } from "react";

import SnippetsPageSkeleton from "./_components/SnippetsPageSkeleton";
import SnippetsContainer from "./_components/SnippetsContainer";
import SnippetsNotFound from "./_components/SnippetsNotFound";
import NavigationHeader from "@/components/NavigationHeader";
import InputSearch from "./_components/InputSearch";
import InputFilter from "./_components/InputFilter";
import HeroArea from "./_components/HeroArea";

const SnippetsPage = () => {
  const snippets = useQuery(api.controllers.snippets.getSnippets);

  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  // loading state
  if (snippets === undefined) {
    return (
      <div className="min-h-screen">
        <NavigationHeader />
        <SnippetsPageSkeleton />
      </div>
    );
  }

  const languages = [...new Set(snippets.map((s) => s.language))];
  const popularLanguages = languages.slice(0, 5);

  const filteredSnippets = snippets.filter((snippet) => {
    const matchesSearch =
      snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.userName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLanguage =
      !selectedLanguage || snippet.language === selectedLanguage;

    return matchesSearch && matchesLanguage;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <NavigationHeader />

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <HeroArea />

        {/* Filters Section */}
        <div className="relative max-w-5xl mx-auto mb-12 space-y-6">
          <InputSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <InputFilter
            setSelectedLanguage={setSelectedLanguage}
            popularLanguages={popularLanguages}
            selectedLanguage={selectedLanguage}
            filteredSnippets={filteredSnippets}
            setView={setView}
            view={view}
          />
        </div>

        <SnippetsContainer filteredSnippets={filteredSnippets} view={view} />

        {/* edge case: empty state */}
        {filteredSnippets.length === 0 && (
          <SnippetsNotFound
            setSelectedLanguage={setSelectedLanguage}
            selectedLanguage={selectedLanguage}
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
          />
        )}
      </div>
    </div>
  );
};

export default SnippetsPage;
