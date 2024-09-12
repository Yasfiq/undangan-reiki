import React, { useState, useEffect } from "react";
import styles from "./PhotoGallery.module.css";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { CiLink } from "react-icons/ci";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { IoMdCloseCircleOutline } from "react-icons/io";

const photos = [
  "/images/photo1.jpeg",
  "/images/photo1.jpeg",
  "/images/photo1.jpeg",
  "/images/photo1.jpeg",
  "/images/photo1.jpeg",
  "/images/photo1.jpeg",
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleSwipe = (e) => {
      if (currentIndex === null) return;
      const touchStartX = e.touches[0].clientX;
      let touchEndX = 0;

      const handleTouchMove = (e) => {
        touchEndX = e.touches[0].clientX;
      };

      const handleTouchEnd = () => {
        if (touchStartX - touchEndX > 50) {
          handleNext(); // Swipe kiri
        } else if (touchEndX - touchStartX > 50) {
          handlePrev(); // Swipe kanan
        }
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };

      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    };

    if (currentIndex !== null) {
      document.addEventListener("touchstart", handleSwipe);
    }

    return () => {
      document.removeEventListener("touchstart", handleSwipe);
    };
  }, [currentIndex]);

  const handleClick = (index) => {
    setCurrentIndex(index);
    setZoomLevel(1); // Reset zoom setiap kali membuka foto baru
  };

  const handleClose = () => {
    setCurrentIndex(null);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
    setZoomLevel(1);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.2);
  };

  const handleZoomOut = () => {
    setZoomLevel(Math.max(1, zoomLevel - 0.2));
  };

  const handleShare = () => {
    const currentPhotoUrl = window.location.origin + photos[currentIndex];
    navigator.clipboard.writeText(currentPhotoUrl);
    alert("URL foto disalin ke clipboard!");
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.photoGrid}>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className={styles.thumbnail}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      {currentIndex !== null && (
        <div className={styles.lightbox}>
          <button className={styles.closeButton} onClick={handleClose}>
            <IoMdCloseCircleOutline />
          </button>
          <div className={styles.controls}>
            <button className={`${styles.prevButton}`} onClick={handlePrev}>
              <GrFormPrevious />
            </button>
            <button className={`${styles.nextButton}`} onClick={handleNext}>
              <GrFormNext />
            </button>
          </div>
          <div className="flex justify-between items-center space-x-5 text-3xl text-white mb-3">
            <button onClick={handleZoomIn}>
              <AiOutlineZoomIn />
            </button>
            <button onClick={handleZoomOut}>
              <AiOutlineZoomOut />
            </button>
            <button onClick={handleShare}>
              <CiLink />
            </button>
          </div>
          <div className={styles.photoPreview}>
            <img
              src={photos[currentIndex]}
              alt={`Photo ${currentIndex + 1}`}
              style={{ transform: `scale(${zoomLevel})` }}
              className={styles.previewImage}
            />
          </div>
          <p className={styles.photoCount}>
            {currentIndex + 1} / {photos.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
