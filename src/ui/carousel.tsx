import React, { useState } from "react";

interface CarouselProps {
  items: React.ReactNode[];
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({ items, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={`relative w-full overflow-hidden ${className || ""}`}>
      {/* 顯示內容 */}
      <div className="flex transition-transform duration-500"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {item}
          </div>
        ))}
      </div>

      {/* 左右控制按鈕 */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-600"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-600"
      >
        ▶
      </button>

      {/* 指示點 */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-orange-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
