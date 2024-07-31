import React, { useState } from "react";

interface CarouselProps {
  urls: string[];
}

const Carousel: React.FC<CarouselProps> = ({ urls }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % urls.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + urls.length) % urls.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute top-0 left-0  w-full h-full flex transition-transform duration-700 ease-in-out">
        {urls.map((url, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } transition-opacity duration-700 ease-in-out`}
          >
            <img
              src={url}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-50 rounded-full"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white z-50 p-2 rounded-full"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
