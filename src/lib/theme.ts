export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/**
 * Runs before first paint to stamp the resolved theme on <html>, so the page
 * never flashes the wrong palette. Kept as a string because it has to be
 * inlined into the document head, ahead of React.
 */
export const themeBootScript = `(function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");var d=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",s==="light"||s==="dark"?s:(d?"dark":"light"));}catch(e){}})();`;
