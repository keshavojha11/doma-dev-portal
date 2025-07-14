import { Menu, Github, ExternalLink, Sun, Moon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useState } from "react";

export function Header() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Theme toggling logic can be implemented later
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Left side - Sidebar trigger */}
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-foreground hover:text-primary" />
          
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search documentation..."
              className="pl-10 bg-input/50 border-border/50 focus:border-primary w-full"
            />
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center gap-2">
          {/* GitHub Link */}
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-foreground hover:text-primary"
          >
            <a
              href="https://github.com/doma-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>

          {/* Discord Link */}
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-foreground hover:text-primary"
          >
            <a
              href="https://discord.gg/doma"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Discord</span>
            </a>
          </Button>

          {/* Get Started Button */}
          <Button className="btn-cyber hidden sm:flex">
            Get Started
          </Button>

          {/* Mobile Search Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-foreground hover:text-primary"
          >
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}