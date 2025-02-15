import { Cloud, Github, Laptop, Moon, Sun } from "lucide-react";
import { ThemeIconType, ThemeType } from "@/types";

export const Themes: ThemeType[] = [
    { id: "vs-dark", label: "VS Dark", color: "#1e1e1e", },
    { id: "vs-light", label: "VS Light", color: "#ffffff", },
    { id: "github-dark", label: "GitHub Dark", color: "#0d1117", },
    { id: "monokai", label: "Monokai", color: "#272822", },
    { id: "solarized-dark", label: "Solarized Dark", color: "#002b36", },
];

// export const Themes: ThemeType[] = [
//     { id: "vs-dark", label: "VS Dark", color: "#1e1e1e", icon: Moon },
//     { id: "vs-light", label: "VS Light", color: "#ffffff", icon: Sun },
//     { id: "github-dark", label: "GitHub Dark", color: "#0d1117", icon: Github },
//     { id: "monokai", label: "Monokai", color: "#272822", icon: Laptop },
//     { id: "solarized-dark", label: "Solarized Dark", color: "#002b36", icon: Cloud },
// ];

// Define the ThemeIcons object with proper typing
export const ThemeIcons: ThemeIconType = {
    "vs-dark": Moon,
    "vs-light": Sun,
    "github-dark": Github,
    monokai: Laptop,
    "solarized-dark": Cloud,
};