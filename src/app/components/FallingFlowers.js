import React, { useEffect, useRef } from "react";

const FallingFlowers = () => {
  const flowersRef = useRef([]);

  useEffect(() => {
    const container = document.querySelector("#flower-container");

    const createFlower = () => {
      const flower = document.createElement("div");
      flower.classList.add("flower");
      flower.style.left = Math.random() * 100 + "vw";
      flower.dataset.speed = Math.random() * 3 + 5; // Set kecepatan bunga jatuh
      container.appendChild(flower);

      // Simpan referensi ke elemen bunga
      flowersRef.current.push(flower);
    };

    // Buat bunga baru setiap 1500ms
    const flowerInterval = setInterval(createFlower, 1500);

    // Fungsi untuk menjalankan animasi dengan requestAnimationFrame
    const animateFlowers = () => {
      flowersRef.current.forEach((flower, index) => {
        const currentTop = parseFloat(flower.style.top || "-10vh"); // Ambil posisi top sekarang
        const speed = parseFloat(flower.dataset.speed); // Ambil kecepatan dari data atribut
        flower.style.top = currentTop + speed + "px"; // Update posisi bunga

        // Hapus bunga jika sudah keluar layar
        if (currentTop > window.innerHeight) {
          container.removeChild(flower);
          flowersRef.current.splice(index, 1); // Hapus dari array
        }
      });

      // Panggil animasi lagi untuk frame berikutnya
      requestAnimationFrame(animateFlowers);
    };

    // Mulai animasi
    requestAnimationFrame(animateFlowers);

    // Bersihkan interval dan bunga saat komponen di-unmount
    return () => {
      clearInterval(flowerInterval);
      flowersRef.current.forEach((flower) => container.removeChild(flower));
    };
  }, []);

  return <div id="flower-container" className="flowerContainer"></div>;
};

export default FallingFlowers;
