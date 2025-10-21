import { ChevronDown } from "lucide-react";
import React from "react";
import { MdDone } from "react-icons/md";
const HoverShadowButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative px-8 py-3 bg-black text-white font-semibold rounded-lg border-2 border-yellow-500 hover:border-yellow-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group"
    >
      <span className="flex items-center space-x-2">
        <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
        <span>{text}</span>
      </span>
      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-amber-500/20 to-amber-500/20" />
    </button>
  );
};
export default HoverShadowButton;
