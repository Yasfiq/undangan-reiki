"use client";
import React, { useEffect, useState } from "react";
import styles from "./PhotoGallery.module.css";
import Masonry from "react-masonry-css";
import { useSwipeable } from "react-swipeable";
import { useMediaQuery } from "react-responsive";
const photos = [
  "/images/photo1.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCLHAbXBe-VgH-KzG4v0VX8epfGUJeuRuQlg&s",
  "https://cdn0.weddingwire.com/article-gallery-o/00000/3_2/960/jpg/editorial-images-2018/4-april/whitney/fotos-by-fola.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-724_DVVB6zjC9QsTadX0uGQ9Ug0eNGipOw&s",
  "https://assets.satumomen.com/images/posts/prewedding-foto-studio-1708330793.jpg",
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
          <div {...handlers}>
            <div className="w-screen h-screen flex justify-center items-center">
              <img
                src={photos[currentIndex]}
                alt={`Photo ${currentIndex + 1}`}
                // style={{ transform: `scale(${zoomLevel})` }}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
