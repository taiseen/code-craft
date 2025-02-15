"use client";

import useHandleClickOutside from "@/hooks/useHandleClickOutside";
import ThemeDropdownList from "./ThemeDropdownList";
import useMounted from "@/hooks/useMounted";
import ThemeSelected from "./ThemeSelected";
import { useRef, useState } from "react";

const ThemeSelector = () => {
  // for preventing hydration failed error
  const mounted = useMounted();

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useHandleClickOutside(dropdownRef, setIsOpen);

  if (!mounted) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <ThemeSelected setIsOpen={setIsOpen} isOpen={isOpen} />

      <ThemeDropdownList isOpen={isOpen} />
    </div>
  );
};

export default ThemeSelector;
