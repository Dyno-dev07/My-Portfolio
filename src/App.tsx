import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar"; // Import the Navbar component
import About from "./pages/About"; // Placeholder for About page
import Projects from "./pages/Projects"; // Placeholder for Projects page
import Contact from "./pages/Contact"; // Placeholder for Contact page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar /> {/* Render the Navbar here */}
        <div className="pt-16"> {/* Add padding to prevent content from being hidden by fixed navbar */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} /> {/* New About route */}
            <Route path="/projects" element={<Projects />} /> {/* New Projects route */}
            <Route path="/contact" element={<Contact />} /> {/* New Contact route */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;