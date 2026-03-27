import React from "react";

interface AvatarProps {
  src?: string;        // 圖片來源
  alt?: string;        // 替代文字
  size?: number;       // 大小 (px)
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "avatar",
  size = 40,
  className,
}) => {
  return (
    <div
      className={`rounded-full overflow-hidden bg-gray-300 flex items-center justify-center ${className || ""}`}
      style={{ width: size, height: size }}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="text-gray-600 text-sm">?</span>
      )}
    </div>
  );
};
