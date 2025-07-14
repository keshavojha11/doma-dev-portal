import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import Overview from "./pages/Overview";
import GettingStarted from "./pages/GettingStarted";
import CoreConcepts from "./pages/CoreConcepts";
import Modules from "./pages/Modules";
import Community from "./pages/Community";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/core-concepts" element={<CoreConcepts />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/community" element={<Community />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
