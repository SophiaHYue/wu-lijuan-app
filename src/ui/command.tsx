import React, { useState } from "react";

interface CommandProps {
  placeholder?: string;
  commands: string[];
  onExecute: (command: string) => void;
  className?: string;
}

export const Command: React.FC<CommandProps> = ({
  placeholder = "Type a command...",
  commands,
  onExecute,
  className,
}) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onExecute(input.trim());
      setInput("");
    }
  };

  return (
    <div className={`space-y-2 ${className || ""}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder={placeholder}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </form>
      <div className="flex flex-wrap gap-2">
        {commands.map((cmd, i) => (
          <button
            key={i}
            onClick={() => onExecute(cmd)}
            className="px-2 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};
