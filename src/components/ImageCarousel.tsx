import React, { useState, useEffect } from "react";
import "./ImageCarousel.css";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
      handleNext();
    } else if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
      handlePrev();
    }
  };

  const handleScroll = (event: WheelEvent) => {
    if (event.deltaY > 0) {
      handleNext();
    } else if (event.deltaY < 0) {
      handlePrev();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((media, index) => {
          const isCenter = index === currentIndex;
          const isLeft =
            index === (currentIndex - 1 + images.length) % images.length;
          const isRight = index === (currentIndex + 1) % images.length;

          let className = "carousel-media";
          if (isCenter) className += " center";
          else if (isLeft) className += " left";
          else if (isRight) className += " right";
          else className += " hidden";

          // Check if the current media is a video or an image
          const isVideo = media.endsWith(".mp4") || media.endsWith(".webm");

          return isVideo ? (
            <video
              key={index}
              src={media}
              className={className}
              controls={isCenter} // Enable controls only for the center element
              autoPlay={false}
              muted
              loop
              preload="auto" // Ensure the browser preloads the video
              playsInline
            />
          ) : (
            <img
              key={index}
              src={media}
              alt={`Slide ${index}`} // Fixed alt tag with proper backticks
              className={className}
            />
          );
        })}
      </div>
      <button className="nav-button prev" onClick={handlePrev}>
        &lt;
      </button>
      <button className="nav-button next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
