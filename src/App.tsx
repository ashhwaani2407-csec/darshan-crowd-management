import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookingProvider } from "@/contexts/BookingContext";
import { AuthProvider } from "@/contexts/MockAuthContext";
import { ChatBot } from "@/components/ai/ChatBot";
import { useState } from "react";
import Index from "./pages/Index";
import BookingFlow from "./pages/BookingFlow";
import AdminDashboard from "./pages/AdminDashboard";
import HelpCenter from "./pages/HelpCenter";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [language, setLanguage] = useState<"en" | "hi" | "gu">("en");
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <BookingProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index language={language} onLanguageChange={setLanguage} />} />
                <Route path="/booking/:templeId" element={<BookingFlow language={language} />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/help" element={<HelpCenter language={language} />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
            <ChatBot
              language={language}
              isOpen={isChatBotOpen}
              onToggle={() => setIsChatBotOpen(!isChatBotOpen)}
            />
          </BookingProvider>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
