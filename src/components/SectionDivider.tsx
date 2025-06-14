
import React from "react";

/**
 * A playful, branded section divider with flames for visual rhythm.
 * Props allow for custom color and icon (defaults to flame).
 */
const SectionDivider: React.FC<{
  label?: string;
  iconUrl?: string;
  className?: string;
}> = ({
  label,
  iconUrl = "/lovable-uploads/fc2eea39-bf52-4e85-84f7-b9a3181a054b.png",
  className = "",
}) => (
  <div className={`flex items-center justify-center my-8 w-full ${className}`} aria-hidden="true">
    <div className="flex-grow h-px bg-gradient-to-r from-orange-200 via-red-200/60 to-yellow-200" />
    <img
      src={iconUrl}
      alt=""
      className="w-12 h-8 mx-3 animate-bounce-slow opacity-70"
      style={{ filter: "drop-shadow(0 1px 4px rgba(255,100,0,0.13))" }}
    />
    <div className="flex-grow h-px bg-gradient-to-r from-yellow-200 via-red-200/60 to-orange-200" />
  </div>
);

export default SectionDivider;
