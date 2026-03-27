import React from "react";

interface InputGroupProps {
  label: string;          // 標籤文字
  placeholder?: string;   // 輸入框提示文字
  type?: string;          // 輸入框類型 (text, email, password...)
  helperText?: string;    // 輔助提示文字
  value?: string;         // 預設值
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputGroup: React.FC<InputGroupProps> = ({
  label,
  placeholder,
  type = "text",
  helperText,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
      />
      {helperText && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};
