import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

interface ImageProps {
  src: string;
  alt: string;
}

const ImageGaleria: React.FC<ImageProps> = ({ src, alt }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openImageViewer = () => setIsViewerOpen(true);

  const closeImageViewer = () => setIsViewerOpen(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight" && currentImage < 1) {
      setCurrentImage(currentImage + 1);
    } else if (event.key === "ArrowLeft" && currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div className="relative cursor-pointer group" onKeyDown={handleKeyDown}>
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-48 transition-transform transform scale-100 rounded-lg group-hover:scale-105"
        onClick={openImageViewer}
      />
      {isViewerOpen && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeImageViewer}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-0 right-0 m-4 text-2xl text-white"
              onClick={closeImageViewer}
            >
              &times;
            </button>
            <ImageViewer
              src={[src]}
              currentIndex={currentImage}
              onClose={closeImageViewer}
              backgroundStyle={{
                backgroundColor: "transparent",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGaleria;
