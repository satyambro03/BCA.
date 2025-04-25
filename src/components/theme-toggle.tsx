
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    // Directly toggle between light and dark modes
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    // Use a single button for toggling
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      // Apply the same styling as before for consistency
      className="text-primary-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-0 focus:ring-offset-0 focus:bg-accent"
      aria-label="Toggle theme" // Add aria-label for accessibility
    >
      {/* Conditionally render Sun or Moon icon based on the current theme */}
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

