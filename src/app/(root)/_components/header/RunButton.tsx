"use client";

import { api } from "../../../../../convex/_generated/api";
import { Loader2, Play } from "lucide-react";
import { useMutation } from "convex/react";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import {
  getExecutionResult,
  useCodeEditorStore,
} from "@/store/useCodeEditorStore";

const RunButton = () => {
  const { user } = useUser();
  const { runCode, language, isRunning } = useCodeEditorStore();

  const saveExecution = useMutation(api.codeExecutions.saveExecution);

  const handleRunCode = async () => {
    await runCode(); // 🟢🟢🟢 run code by api calling... [piston docker]

    const result = getExecutionResult();

    if (user && result) {
      // 🟢🟢🟢 save execution result into database...
      await saveExecution({
        language,
        code: result.code,
        output: result.output || undefined,
        error: result.error || undefined,
      });
    }
  };

  return (
    <motion.button
      disabled={isRunning}
      onClick={handleRunCode}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group runButton"
    >
      {/* bg gradient */}
      <div className="runButtonBg" />

      <div className="relative flex items-center gap-2.5">
        {isRunning ? (
          <>
            <div className="relative">
              <Loader2 className="w-4 h-4 animate-spin text-white/70" />
              <div className="absolute inset-0 blur animate-pulse" />
            </div>

            <span className="text-sm font-medium text-white/90">
              Executing...
            </span>
          </>
        ) : (
          <>
            <div className="relative flex items-center justify-center w-4 h-4">
              <Play className="runButtonPlayIcon" />
            </div>

            <span className="text-sm font-medium text-white/90 group-hover:text-white">
              Run Code
            </span>
          </>
        )}
      </div>
    </motion.button>
  );
};

export default RunButton;
