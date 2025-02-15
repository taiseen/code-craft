import { useEffect } from "react";

const useHandleClickOutside = (
    dropdownRef: React.RefObject<HTMLDivElement>,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownRef, setIsOpen]);
}

export default useHandleClickOutside