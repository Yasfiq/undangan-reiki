"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MusicPlayer from "./components/Music";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import Countdown from "./components/Countdown";
import AddToCalendarButton from "./components/AddToCalendar";
import ViewLocationButton from "./components/ViewLocation";
import FallingFlowers from "./components/FallingFlowers";
import Image from "next/image";
import PhotoGallery from "./components/PhotoGallery";
import WeddingGift from "./components/WeddingGift";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Fungsi untuk mengupdate state dengan lebar jendela saat ini
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Panggil fungsi saat komponen pertama kali di-render
    handleResize();

    // Event listener untuk menangkap perubahan ukuran layar (resize)
    window.addEventListener("resize", handleResize);

    // Bersihkan event listener ketika komponen di-unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isOpen && <FallingFlowers />}
      <div className="bg-[url('https://i.pinimg.com/564x/69/6e/40/696e40288349d2c68150b6427fb699c2.jpg')] min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <div className="p-8 w-full max-w-md">
          <div className="text-center mb-6 text-white">
            {!isOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h2 className="text-2xl">
                    Dear {searchParams.get("/to") || "Invisitory"},
                  </h2>
                  <h1 className="text-4xl font-holyfriday">You're Invited!</h1>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-lg font-medium tracking-widest"
                >
                  The Wedding Celebration of
                </motion.h3>
              </>
            )}
            {isOpen && (
              <h3 className="text-lg font-medium tracking-widest">
                WE ARE GETTTING MARRIED
              </h3>
            )}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.3 }}
              className="text-7xl mt-4 font-greatvibes"
            >
              Reiki & Irma
            </motion.h2>
            {isOpen && (
              <h3 className="text-lg font-medium tracking-widest">
                13 OKTOBER 2024
              </h3>
            )}
          </div>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
              className="flex justify-center"
            >
              <div
                className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-12 rounded-full focus:outline-none focus:shadow-outline cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                Open Invitation
              </div>
            </motion.div>
          )}
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, display: "none" }}
            transition={{ duration: 2 }}
            className="bg-black fixed top-0 bottom-0 left-0 right-0"
          ></motion.div>
        )}

        {isOpen && <MusicPlayer />}
      </div>
      {isOpen && (
        <div className="wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="-mt-[23%]"
          >
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,160L34.3,170.7C68.6,181,137,203,206,192C274.3,181,343,139,411,138.7C480,139,549,181,617,197.3C685.7,213,754,203,823,197.3C891.4,192,960,192,1029,208C1097.1,224,1166,256,1234,229.3C1302.9,203,1371,117,1406,74.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>

          <div className="bg-white text-primary text-center min-h-screen pb-10 md:pb-20">
            <h3 className="w-[60%] mx-auto">
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas to odio dignissimos ducimus molestias excepturi"
            </h3>

            {/* Foto Pasangan */}
            <div className="flex my-10 md:my-20 mx-auto text-white flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-5 ">
              <div className="md:w-[550px] w-[300px] h-[300px] md:h-[500px] rounded-3xl pasangan-pria bg-[length:900px] bg-center overflow-hidden">
                <div className="w-full h-full bg-[rgba(0,0,0,.2)] hover:bg-[rgba(0,0,0,.3)] duration-500 flex flex-col items-center justify-end pb-8">
                  <h3 className="font-greatvibes text-3xl md:text-5xl">
                    Reiki Alisyahbana
                  </h3>
                  <p className="text-sm md:text-xl font-sans font-light">
                    The son of <br />
                    Mr. Roy Sarob & Mrs. Rina Saona
                  </p>
                  <Link
                    href="https://www.instagram.com/_reyyy05/"
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2 hover:text-primary">
                      <FaInstagram size="20px" />
                      <p>_reyyy05</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="md:w-[550px] w-[300px] h-[300px] md:h-[500px] rounded-3xl pasangan-wanita bg-[length:900px] bg-center overflow-hidden">
                <div className="w-full h-full bg-[rgba(0,0,0,.2)] hover:bg-[rgba(0,0,0,.3)] duration-500 flex flex-col items-center justify-end pb-8">
                  <h3 className="font-greatvibes text-3xl md:text-5xl">
                    Irma Alisyahbana
                  </h3>
                  <p className="text-sm md:text-xl font-sans font-light">
                    The son of <br />
                    Mr. Man & Mrs. Woman
                  </p>
                  <Link
                    href="https://www.instagram.com/irmaqwe0_/"
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2 hover:text-primary">
                      <FaInstagram size="20px" />
                      <p>irmaqwe0_</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Image
              src="/images/wave.png"
              className="w-full"
              alt=""
              width={windowWidth}
              height={320}
            />

            <div className="bg-primary text-white">
              {/* Countdown */}
              <h3 className="font-greatvibes text-white text-3xl md:text-5xl font-bold mb-5">
                Counting Down
              </h3>
              <Countdown />

              {/* Add to Calendar */}
              <AddToCalendarButton />

              {/* Reception */}
              <Image
                src="/images/decoration1.png"
                width={400}
                height={100}
                className="mt-20 mx-auto mb-10"
              />
              <h3 className="font-greatvibes text-white text-5xl font-bold mb-5">
                Reception
              </h3>
              <p className="text-2xl font-sans font-light">
                Sunday, October 13, 2024 at 9:00 AM
              </p>
              <p className="text-2xl font-bold font-sans">
                Jombang, Jawa Timur, Indonesia
              </p>

              {/* View Location */}
              <ViewLocationButton />

              <Image
                src="/images/decoration1.png"
                width={400}
                height={100}
                className="mt-20 mx-auto rotate-180 -translate-y-1/2"
              />
            </div>

            <Image
              src="/images/wave2.png"
              className="w-full rotate-180"
              alt=""
              width={windowWidth}
              height={320}
            />

            <div>
              <h3 className="font-greatvibes text-primary text-3xl md:text-5xl font-bold mb-5">
                Gallery
              </h3>

              <PhotoGallery />
            </div>

            <Image
              src="/images/wave3.png"
              className="w-full mt-20"
              alt=""
              width={windowWidth}
              height={320}
            />

            <div className="bg-primary text-white pb-20">
              <WeddingGift />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
