"use client";
import React, { useEffect, useState } from "react";
import styles from "./PhotoGallery.module.css";
import Masonry from "react-masonry-css";
import { useSwipeable } from "react-swipeable";
import { useMediaQuery } from "react-responsive";
import { GrClose, GrNext, GrPrevious } from "react-icons/gr";
const photos = [
  "/images/prewed-1.jpg",
  "/images/prewed-2.jpg",
  "/images/prewed-3.jpg",
  "/images/prewed-4.jpg",
  "/images/prewed-5.jpg",
  "/images/prewed-6.jpg",
  "/images/prewed-7.jpg",
  "/images/prewed-8.jpg",
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleClick = (index) => {
    setCurrentIndex(index);
    history.pushState({}, "", `#lightbox`);
  };

  const handleBackButton = () => {
    setCurrentIndex(null);
  };

  useEffect(() => {
    window.addEventListener("popstate", handleBackButton);
    return () => window.removeEventListener("popstate", handleBackButton);
  }, [history]);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  const handlers = useSwipeable({
    onSwipedRight: () => handlePrev(),
    onSwipedLeft: () => handleNext(),
  });

  const handleClose = () => {
    setCurrentIndex(null);
    history.back();
  };

  return (
    <div className={styles.galleryContainer}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.masonryGrid}
        columnClassName={styles.masonryGridColumn}
      >
        {photos.map((image, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img
              src={image}
              alt={image}
              className={styles.galleryImage}
              onClick={() => handleClick(index)}
            />
          </div>
        ))}
      </Masonry>

      {currentIndex !== null && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.5)] flex flex-col justify-center items-center">
          <div
            className="cursor-pointer p-1 hover:bg-[rgba(0,0,0,0.1)] absolute top-5 right-5 z-[999999999] hidden md:block"
            onClick={handleClose}
          >
            <GrClose color="white" size="30px" />
          </div>
          <div {...handlers}>
            <div className="w-screen h-screen flex justify-center items-center">
              <img
                src={photos[currentIndex]}
                alt={`Photo ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
          <div className="controls fixed top-0 left-0 bottom-0 right-0 hidden md:flex justify-between px-[10%] items-center">
            <div
              className="cursor-pointer p-1 hover:bg-[rgba(0,0,0,0.1)]"
              onClick={handlePrev}
            >
              <GrPrevious color="white" size="50px" />
            </div>
            <div
              className="cursor-pointer p-1 hover:bg-[rgba(0,0,0,0.1)]"
              onClick={handleNext}
            >
              <GrNext color="white" size="50px" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
