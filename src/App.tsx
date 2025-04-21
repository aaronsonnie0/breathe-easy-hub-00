import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScoreAssessment from "./pages/ScoreAssessment";
import Emergency from "./pages/Emergency";
import Reminders from "./pages/Reminders";
import DiaryPage from "./pages/DiaryPage";
import TriggersPage from "./pages/TriggersPage";
import ChatbotPage from "./pages/ChatbotPage";
import AsthmaGuide from "./pages/AsthmaGuide";
import MedicalResearch from "./pages/MedicalResearch";
import FAQs from "./pages/FAQs";
import Support from "./pages/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "./lib/firebase";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/triggers" element={<TriggersPage />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/score" element={<ScoreAssessment />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/chat" element={<ChatbotPage />} />
          <Route path="/guide" element={<AsthmaGuide />} />
          <Route path="/research" element={<MedicalResearch />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
