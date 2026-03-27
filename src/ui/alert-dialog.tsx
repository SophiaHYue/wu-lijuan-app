import React from "react";

interface AlertDialogProps {
  open: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
  className?: string;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
  open,
  title,
  description,
  onConfirm,
  onCancel,
  className,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-30" onClick={onCancel} />
      <div className={`bg-white rounded shadow-lg p-6 z-10 ${className || ""}`}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={onCancel}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-3 py-1 rounded bg-orange-500 text-white hover:bg-orange-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
