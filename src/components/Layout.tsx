import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Book, Play, Code, Users, HelpCircle } from "lucide-react";

const navItems = [
  { to: "/", icon: <Home />, label: "Home" },
  { to: "/getting-started", icon: <Play />, label: "Get Started" },
  { to: "/api-reference", icon: <Code />, label: "API" },
  { to: "/faq", icon: <HelpCircle />, label: "FAQ" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f1f5f9] text-[#1a1a1a]">
      {/* Modern Glassy Top Nav */}
      <nav className="flex items-center justify-center gap-6 h-20 px-6 sticky top-0 z-50 bg-white/60 backdrop-blur-md shadow-sm rounded-b-2xl border-b border-[#e5e7eb]">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center px-5 py-2 text-2xl rounded-xl transition-all font-semibold ${isActive ? "bg-[#f1f5f9] text-primary shadow" : "text-[#64748b] hover:bg-[#f1f5f9]/80"}`
            }
            title={item.label}
          >
            {item.icon}
            <span className="sr-only">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <main className="flex-1 flex flex-col items-center justify-center w-full px-4 py-8 md:py-16">
        {children}
      </main>
      {/* Modern Glassy Footer */}
      <footer className="w-full text-center py-6 text-sm text-[#64748b] bg-white/60 backdrop-blur-md shadow-sm rounded-t-2xl border-t border-[#e5e7eb]">
        © {new Date().getFullYear()} Doma Protocol · <a href="https://docs.doma.xyz/" className="underline" target="_blank" rel="noopener noreferrer">Docs</a> · <a href="https://discord.gg/doma" className="underline" target="_blank" rel="noopener noreferrer">Discord</a>
      </footer>
    </div>
  );
}