import { AnimatePresence, motion } from "framer-motion";
import { Snippet } from "@/types";
import SnippetCard from "./SnippetCard";

type SnippetsContainerTypes = {
  filteredSnippets: Snippet[];
  view: "grid" | "list";
};

const SnippetsContainer = ({
  filteredSnippets,
  view,
}: SnippetsContainerTypes) => {
  return (
    <motion.div
      className={`grid gap-6 ${
        view === "grid"
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1 max-w-3xl mx-auto"
      }`}
      layout
    >
      <AnimatePresence mode="popLayout">
        {filteredSnippets.map((snippet) => (
          <SnippetCard key={snippet._id} snippet={snippet} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default SnippetsContainer;
