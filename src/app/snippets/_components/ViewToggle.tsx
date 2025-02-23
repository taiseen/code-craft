import { Grid, Layers } from "lucide-react";

type ViewToggleTypes = {
  setView: (layout: "grid" | "list") => void;
  view: "grid" | "list";
};

const ViewToggle = ({ setView, view }: ViewToggleTypes) => {
  return (
    <div className="flex items-center gap-1 p-1 bg-[#1e1e2e] rounded-lg ring-1 ring-gray-800">
      <button
        onClick={() => setView("grid")}
        className={`p-2 rounded-md transition-all ${
          view === "grid"
            ? "bg-blue-500/20 text-blue-400"
            : "text-gray-400 hover:text-gray-300 hover:bg-[#262637]"
        }`}
      >
        <Grid className="w-4 h-4" />
      </button>

      <button
        onClick={() => setView("list")}
        className={`p-2 rounded-md transition-all ${
          view === "list"
            ? "bg-blue-500/20 text-blue-400"
            : "text-gray-400 hover:text-gray-300 hover:bg-[#262637]"
        }`}
      >
        <Layers className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ViewToggle;
