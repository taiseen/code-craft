import ThemesDefinition from "./themesDefinition";
import { Monaco } from "@monaco-editor/react";

// Helper function to define themes in Monaco
export const defineMonacoThemes = (monaco: Monaco) => {
    Object.entries(ThemesDefinition).forEach(([themeName, themeData]) => {
        monaco.editor.defineTheme(themeName, {
            base: themeData.base,
            inherit: themeData.inherit,
            rules: themeData.rules.map((rule) => ({
                ...rule,
                foreground: rule.foreground,
            })),
            colors: themeData.colors,
        });
    });
};