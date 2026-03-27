import React from "react";

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  className,
  disabled = false,
}) => {
  return (
    <button
      type="button"
      onClick={() => !disabled && onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors 
                  ${checked ? "bg-orange-500" : "bg-gray-300"} 
                  ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} 
                  ${className || ""}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform 
                    ${checked ? "translate-x-6" : "translate-x-1"}`}
      />
    </button>
  );
};
