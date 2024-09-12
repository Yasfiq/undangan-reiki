import React, { useEffect } from "react";

const FallingFlowers = () => {
  useEffect(() => {
    const container = document.querySelector("#flower-container");

    const createFlower = () => {
      const flower = document.createElement("div");
      flower.classList.add("flower");
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.animationDelay = "0s";
      flower.style.animationDuration = Math.random() * 3 + 5 + "s";
      container.appendChild(flower);

      // Hapus bunga setelah selesai animasi untuk menghindari terlalu banyak elemen
      setTimeout(() => {
        container.removeChild(flower);
      }, 8000); // Sesuaikan dengan durasi animasi
    };

    // Buat bunga baru setiap 500ms
    const flowerInterval = setInterval(createFlower, 300);

    // Bersihkan interval saat komponen di-unmount
    return () => clearInterval(flowerInterval);
  }, []);

  return <div id="flower-container" className="flowerContainer"></div>;
};

export default FallingFlowers;
