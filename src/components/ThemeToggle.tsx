"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Safe theme hook usage
  let theme = "light";
  let toggleTheme = () => {};
  
  try {
    const themeContext = useTheme();
    theme = themeContext.theme;
    toggleTheme = themeContext.toggleTheme;
  } catch (error) {
    // Handle the case where component is rendered outside provider
    console.warn("ThemeToggle used outside ThemeProvider");
  }

  // Don't render during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="relative w-10 h-10 rounded-full p-0 border-2 border-slate-300 bg-slate-50"
        disabled
      >
        <Sun className="w-4 h-4 text-slate-400" />
      </Button>
    );
  }

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="sm"
      className={cn(
        "relative w-10 h-10 rounded-full p-0 border-2 transition-all duration-300",
        theme === "light"
          ? "border-orange-300 bg-gradient-to-br from-orange-50 to-yellow-50 hover:from-orange-100 hover:to-yellow-100"
          : "border-blue-400 bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800"
      )}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Sun Icon */}
        <Sun
          className={cn(
            "absolute w-4 h-4 text-orange-600 transition-all duration-300 transform",
            theme === "light"
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 rotate-90 opacity-0"
          )}
        />
        
        {/* Moon Icon */}
        <Moon
          className={cn(
            "absolute w-4 h-4 text-blue-400 transition-all duration-300 transform",
            theme === "dark"
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 -rotate-90 opacity-0"
          )}
        />
      </div>
      
      {/* Animated background glow */}
      <div
        className={cn(
          "absolute inset-0 rounded-full transition-all duration-300",
          theme === "light"
            ? "bg-gradient-to-br from-orange-200/20 to-yellow-200/20 shadow-orange-300/50"
            : "bg-gradient-to-br from-blue-500/20 to-indigo-500/20 shadow-blue-400/50",
          "shadow-lg"
        )}
      />
    </Button>
  );
}