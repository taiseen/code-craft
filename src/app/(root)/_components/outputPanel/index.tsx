"use client";

import OutputHeader from "./OutputHeader";
import OutputArea from "./OutputArea";

const OutputPanel = () => {
  return (
    <div className="relative bg-[#181825] rounded-xl p-4 ring-1 ring-gray-800/50">
      <OutputHeader />

      <OutputArea />
    </div>
  );
};

export default OutputPanel;
