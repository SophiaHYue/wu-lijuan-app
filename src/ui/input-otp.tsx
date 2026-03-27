import React, { useState } from "react";

interface InputOtpProps {
  length?: number;
  onComplete: (code: string) => void;
  className?: string;
}

export const InputOtp: React.FC<InputOtpProps> = ({ length = 6, onComplete, className }) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));

  const handleChange = (index: number, value: string) => {
    const newValues = [...values];
    newValues[index] = value.slice(-1);
    setValues(newValues);
    if (newValues.every((v) => v !== "")) {
      onComplete(newValues.join(""));
    }
  };

  return (
    <div className={`flex space-x-2 ${className || ""}`}>
      {values.map((val, i) => (
        <input
          key={i}
          type="text"
          value={val}
          maxLength={1}
          onChange={(e) => handleChange(i, e.target.value)}
          className="w-10 h-10 text-center border rounded"
        />
      ))}
    </div>
  );
};
