import React from "react";

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  className?: string;
}

export const Form: React.FC<FormProps> = ({ onSubmit, children, className }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`space-y-4 ${className || ""}`}
    >
      {children}
    </form>
  );
};
