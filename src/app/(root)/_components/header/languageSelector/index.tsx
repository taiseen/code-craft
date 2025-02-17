"use client";

import useHandleClickOutside from "@/hooks/useHandleClickOutside";
import LanguageDropdownList from "./LanguageDropdownList";
import LanguageSelected from "./LanguageSelected";
import useMounted from "@/hooks/useMounted";
import { useRef, useState } from "react";

const LanguageSelector = ({ hasAccess }: { hasAccess: boolean }) => {
  const mounted = useMounted();

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useHandleClickOutside(dropdownRef, setIsOpen);

  if (!mounted) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <LanguageSelected
        hasAccess={hasAccess}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />

      <LanguageDropdownList
        hasAccess={hasAccess}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    </div>
  );
};
export default LanguageSelector;
