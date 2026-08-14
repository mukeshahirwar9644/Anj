import React, { useState } from 'react';
import { MoveHorizontal, Moon, Sun } from 'lucide-react';

interface BeforeAfterSliderProps {
  sofaImage: string;
  bedImage: string;
  sofaTitle?: string;
  bedTitle?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  sofaImage,
  bedImage,
  sofaTitle = 'Daytime Sofa Mode',
  bedTitle = 'Nighttime Queen Bed',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Mode Quick Toggle Buttons */}
      <div className="flex items-center gap-3 mb-6 bg-cream-200/80 p-1.5 rounded-full border border-sand">
        <button
          onClick={() => setSliderPosition(100)}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
            sliderPosition > 60
              ? 'bg-terracotta-500 text-white shadow-soft'
              : 'text-brown-800 hover:text-terracotta-600'
          }`}
        >
          <Sun className="w-3.5 h-3.5" />
          {sofaTitle}
        </button>
        <button
          onClick={() => setSliderPosition(0)}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
            sliderPosition < 40
              ? 'bg-brown-900 text-cream-100 shadow-soft'
              : 'text-brown-800 hover:text-terracotta-600'
          }`}
        >
          <Moon className="w-3.5 h-3.5" />
          {bedTitle}
        </button>
      </div>

      {/* Interactive Slider Container */}
      <div
        className="relative w-full max-w-4xl aspect-[16/10] rounded-3xl overflow-hidden shadow-elevated select-none cursor-ew-resize border border-sand/60"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Daytime Sofa Base Layer */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={sofaImage}
            alt={sofaTitle}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-6 left-6 bg-brown-900/80 text-cream-100 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium tracking-wide border border-white/10">
            ☀️ {sofaTitle}
          </div>
        </div>

        {/* Nighttime Bed Overlay Layer */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden transition-all ease-out"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={bedImage}
            alt={bedTitle}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-6 left-6 bg-terracotta-600/90 text-white backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium tracking-wide shadow-soft">
            🌙 {bedTitle}
          </div>
        </div>

        {/* Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white/90 shadow-[0_0_15px_rgba(0,0,0,0.4)] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-brown-900 shadow-elevated flex items-center justify-center border-2 border-terracotta-500">
            <MoveHorizontal className="w-5 h-5 text-terracotta-600" />
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs font-medium text-brown-600/70 tracking-wide flex items-center gap-2">
        <MoveHorizontal className="w-3.5 h-3.5 text-terracotta-500" /> Drag slider or tap modes to reveal transformation
      </p>
    </div>
  );
};
