
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine where to go back: history or Home
  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  // Don't render on the home page
  if (location.pathname === "/") return null;

  return (
    <div
      className="fixed top-4 left-4 z-50 animate-fade-in"
      style={{ animation: "fade-in 0.3s ease-out" }}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            aria-label="Back to Home"
            onClick={handleBack}
            className="bg-white border border-gray-200 shadow-sm rounded-full p-2 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            tabIndex={0}
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="right">
          Back to Home
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default BackButton;
