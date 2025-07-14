import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Book,
  Play,
  Lightbulb,
  Boxes,
  Map,
  Code,
  Database,
  Package,
  BookOpen,
  HelpCircle,
  Users,
  Newspaper,
  Scale,
  Menu,
  X,
  Search,
  ExternalLink
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Overview", url: "/overview", icon: Book },
  { title: "Getting Started", url: "/getting-started", icon: Play },
  { title: "Core Concepts", url: "/core-concepts", icon: Lightbulb },
  { title: "Modules", url: "/modules", icon: Boxes },
  { title: "Guides", url: "/guides", icon: Map },
  { title: "API Reference", url: "/api-reference", icon: Code },
  { title: "Smart Contracts", url: "/smart-contracts", icon: Database },
  { title: "SDKs & Libraries", url: "/sdks", icon: Package },
  { title: "Tutorials", url: "/tutorials", icon: BookOpen },
  { title: "FAQ", url: "/faq", icon: HelpCircle },
  { title: "Community", url: "/community", icon: Users },
  { title: "Blog", url: "/blog", icon: Newspaper },
  { title: "Legal", url: "/legal", icon: Scale },
];

const externalLinks = [
  { title: "Official Docs", url: "https://docs.doma.xyz/", icon: ExternalLink },
  { title: "Testnet Dashboard", url: "https://dashboard-testnet.doma.xyz/", icon: ExternalLink },
  { title: "Testnet Registrar", url: "https://testnet.d3.app", icon: ExternalLink },
];

export function DevPortalSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const [searchQuery, setSearchQuery] = useState("");
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  const filteredItems = navigationItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-72"} transition-all duration-300`} collapsible="icon">
      <SidebarContent className="bg-sidebar border-r border-sidebar-border">
        {/* Logo Section */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-cyber rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-xl font-bold text-glow">Doma</h1>
                <p className="text-xs text-muted-foreground">Developer Portal</p>
              </div>
            )}
          </div>
        </div>

        {/* Search Bar */}
        {!collapsed && (
          <div className="p-4 border-b border-sidebar-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-input border-border/50 focus:border-primary"
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground font-semibold">
            Documentation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-sidebar-accent text-sidebar-primary border-glow"
                            : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-primary"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* External Links */}
        {!collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-sidebar-foreground font-semibold">
              Quick Links
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {externalLinks.map((link) => (
                  <SidebarMenuItem key={link.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-primary"
                      >
                        <link.icon className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{link.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Footer */}
        <div className="mt-auto p-4 border-t border-sidebar-border">
          {!collapsed && (
            <div className="text-xs text-muted-foreground text-center">
              <p>Doma Protocol v1.0</p>
              <p className="mt-1">Built for DomainFi</p>
            </div>
          )}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}