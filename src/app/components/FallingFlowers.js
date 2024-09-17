import React, { useEffect, useRef } from "react";

const FallingFlowers = () => {
  const flowersRef = useRef([]);
  const maxFlowers = 20; // Batas maksimal bunga di layar
  let lastRenderTime = Date.now(); // Untuk throttling animasi

  useEffect(() => {
    const container = document.querySelector("#flower-container");

    const createFlower = () => {
      // Cek apakah jumlah bunga di layar sudah mencapai batas maksimal
      if (flowersRef.current.length >= maxFlowers) return;

      const flower = document.createElement("div");
      flower.classList.add("flower");
      flower.style.left = Math.random() * 100 + "vw";
      flower.dataset.speed = Math.random() * 2 + 10; // Kecepatan bunga jatuh
      flower.style.top = "-10vh"; // Set posisi awal di atas layar
      container.appendChild(flower);

      // Simpan referensi ke elemen bunga
      flowersRef.current.push(flower);
    };

    // Buat bunga baru setiap 1500ms
    const flowerInterval = setInterval(createFlower, 1500);

    // Fungsi untuk menjalankan animasi dengan requestAnimationFrame dan throttling
    const animateFlowers = () => {
      const now = Date.now();
      const deltaTime = now - lastRenderTime;

      // Update posisi bunga hanya setiap 100ms untuk mengurangi beban di perangkat mobile
      if (deltaTime > 50) {
        flowersRef.current.forEach((flower, index) => {
          const currentTop = parseFloat(flower.style.top || "-10vh");
          const speed = parseFloat(flower.dataset.speed);
          flower.style.top = currentTop + speed + "px"; // Update posisi bunga

          // Hapus bunga jika sudah keluar layar
          if (currentTop > window.innerHeight) {
            container.removeChild(flower);
            flowersRef.current.splice(index, 1); // Hapus dari array
          }
        });
        lastRenderTime = now;
      }

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
