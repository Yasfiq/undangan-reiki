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
import { addData, getAllData } from "./lib/firebase/collection";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const [windowWidth, setWindowWidth] = useState(0);
  const [isJoin, setIsJoin] = useState(null);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [wish, setWish] = useState("");
  const noWhatsapp = "6285894781791";
  const [wishes, setWishes] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllData("UNDANGAN_REIKI");
      setWishes(data);
    };

    fetchData().catch(console.error);
  }, []);

  const handleSendWish = async () => {
    await addData({ username: userName, wish });
    setWishes([{ username: userName, wish }, ...wishes]);
    setUserName("");
    setWish("");
  };

  return (
    <div>
      {/* {isOpen && <FallingFlowers />} */}
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
                  <h2 className="text-2xl font-holyfriday">
                    Dear {searchParams.get("to") || "Invisitory"},
                  </h2>
                  <h1 className="text-4xl font-holyfriday">You're Invited!</h1>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-3xl font-bold font-challista"
                >
                  The Wedding Celebration of
                </motion.h3>
              </>
            )}
            {isOpen && (
              <h3 className="text-5xl font-challista">
                We Are Getting Married
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
          </div>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
              className="flex justify-center"
            >
              <div
                className="bg-white shadow-xl hover:bg-gray-100 text-black font-bold py-2 px-12 rounded-full focus:outline-none focus:shadow-outline cursor-pointer"
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

          <div className="bg-white text-primary text-center min-h-screen py-10 md:pb-20 -mt-1">
            <h3 className="w-[80%] mx-auto font-greatvibes text-xl">
              “Wahai manusia, bertakwalah kepada Tuhan-mu Yang menciptakan kamu
              dari satu jiwa dan darinya Dia menciptakan jodohnya, dan
              mengembang-biakan dari keduanya banyak laki-laki dan perempuan”.
            </h3>
            <p className="font-greatvibes mt-4 text-md">An-Nisa 1</p>

            {/* Foto Pasangan */}
            <div className="flex mt-10 mb-16 md:my-20 mx-auto text-white flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-5 relative">
              <div className="md:w-[550px] w-[340px] h-[300px] md:h-[500px] rounded-3xl pasangan-pria overflow-hidden bg-[length:500px] bg-[position:50%_15%] hover:bg-[length:700px] md:bg-[length:600px] md:bg-[position:top] md:hover:bg-[length:900px] md:hover:bg-[position:50%_15%]">
                <div className="w-full h-full bg-[rgba(0,0,0,.3)] hover:bg-[rgba(0,0,0,.5)] duration-500 flex flex-col items-center justify-end pb-8">
                  <h3 className="font-greatvibes text-4xl md:text-5xl">
                    Reiki Alisyahbana
                  </h3>
                  <p className="text-sm md:text-xl font-light font-holyfriday">
                    Putra dari <br />
                    Bpk. Yudi Yusdiana & Ibu Yoyoh
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
              <div className="md:w-[550px] w-[340px] h-[300px] md:h-[500px] rounded-3xl pasangan-wanita overflow-hidden bg-[length:400px] bg-[position:50%_20%] hover:bg-[length:600px] md:bg-[length:600px] md:bg-[position:top] md:hover:bg-[length:900px] md:hover:bg-[position:50%_15%]">
                <div className="w-full h-full bg-[rgba(0,0,0,.3)] hover:bg-[rgba(0,0,0,.5)] duration-500 flex flex-col items-center justify-end pb-8">
                  <h3 className="font-greatvibes text-4xl md:text-5xl">
                    Tri Ely Ermawati
                  </h3>
                  <p className="text-sm md:text-xl font-light font-holyfriday">
                    Putri dari <br />
                    Bpk. Wagiman & Ibu Inah Wahyuningsih
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
              <div className="absolute right-0 bottom-0 translate-y-32 md:translate-y-24 md:hidden opacity-60">
                <Image
                  src="/images/decoration3.png"
                  alt="decoration2"
                  width={200}
                  height={200}
                />
              </div>
              <div className="absolute right-0 bottom-0 hidden md:block translate-x-20 translate-y-40 scale-x-[-1]">
                <Image
                  src="/images/decoration2.png"
                  alt="decoration2"
                  width={300}
                  height={300}
                />
              </div>
              <div className="absolute left-0 bottom-0 -translate-x-24 translate-y-44 md:translate-y-40 opacity-60">
                <Image
                  src="/images/decoration2.png"
                  alt="decoration2"
                  width={300}
                  height={300}
                />
              </div>
            </div>

            <Image
              src="/images/wave.png"
              className="w-full z-[999] relative"
              alt=""
              width={windowWidth}
              height={320}
            />

            <div className="bg-primary text-white -mt-1 pt-10 relative z-[999]">
              {/* Countdown */}
              <h3 className="font-greatvibes text-white text-3xl md:text-5xl font-bold mb-5">
                Counting Down
              </h3>
              <Countdown />

              {/* Add to Calendar */}
              <AddToCalendarButton />

              <Image
                src="/images/decoration1.png"
                width={400}
                height={100}
                className="mt-20 mx-auto mb-10"
              />
              <h3 className="font-greatvibes text-white text-5xl font-bold mb-5">
                Akad
              </h3>
              <p className="text-3xl font-challista font-light">
                Sunday, October 13, 2024 at 8:00 AM
              </p>
              <p className="text-md font-holyfriday font-light">
                Kerandekan, Kedung Mlati, Kec. Kesamben, Kabupaten Jombang, Jawa
                Timur 61484
              </p>

              {/* View Location */}
              <ViewLocationButton />

              {/* Reception */}
              <h3 className="font-greatvibes text-white text-5xl font-bold mb-5 mt-10">
                Reception
              </h3>
              <p className="text-3xl font-challista font-light">
                Sunday, October 13, 2024 at 11:00 AM
              </p>
              <p className="text-md font-holyfriday font-light">
                Kerandekan, Kedung Mlati, Kec. Kesamben, Kabupaten Jombang, Jawa
                Timur 61484
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
              className="w-full rotate-180 -mt-1"
              alt=""
              width={windowWidth}
              height={320}
            />

            <div className="pt-10 relative">
              <div className="mx-auto absolute translate-x-24 -translate-y-[20%] md:translate-x-[310%] md:-translate-y-10 opacity-70">
                <Image
                  src="/images/decoration4.png"
                  alt="decoration2"
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="font-greatvibes text-primary text-5xl md:text-7xl font-bold mb-10 z-[999] relative mt-20">
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

            <div className="bg-primary text-white pb-16">
              <WeddingGift />
            </div>

            <Image
              src="/images/wave3.png"
              className="w-full rotate-180 -mt-1"
              alt=""
              width={windowWidth}
              height={320}
            />

            <div className="bg-white text-primary pt-10 font-holyfriday">
              <h3 className="font-greatvibes text-3xl md:text-5xl font-bold mb-5">
                Reservation
              </h3>

              <div className="flex text-left flex-col px-10">
                <p>
                  Will you join with us?<span className="text-red-400">*</span>
                </p>
                <div className="flex items-center">
                  <input
                    id="definitelyYes"
                    type="radio"
                    value="Definitely Yes"
                    name="attendance"
                    className="mr-2 accent-primary"
                    onChange={() => setIsJoin(true)}
                    checked={isJoin}
                  />
                  <label for="definitelyYes">Definitely Yes</label>
                </div>
                <div className="flex items-center">
                  <input
                    id="cannotAttend"
                    type="radio"
                    value="Sorry, I Can't Attend Your Wedding"
                    name="attendance"
                    className="mr-2 accent-primary"
                    onChange={() => setIsJoin(false)}
                    checked={!isJoin && isJoin !== null}
                  />
                  <label for="cannotAttend">
                    Sorry, I Can't Attend Your Wedding
                  </label>
                </div>

                <label htmlFor="name" className="text-left mt-5 mb-1 block">
                  Full Name<span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="block focus:outline-none ring-1 ring-primary px-2 py-1 rounded-md selection:text-white selection:bg-primary"
                  onChange={(e) => setFullName(e.target.value)}
                />

                {fullName && isJoin !== null && (
                  <Link
                    href={`https://wa.me/${noWhatsapp}?text=Hello, I'm ${fullName}, ${
                      isJoin
                        ? " I Will Join To Your Wedding Reception"
                        : "Sorry, I Can't Join To Your weddings Reception"
                    }`}
                    target="_blank"
                  >
                    <div className="cursor-pointer px-5 py-1 shadow-xl bg-primary text-white rounded-xl mt-5 w-fit">
                      Send
                    </div>
                  </Link>
                )}
              </div>

              <h3 className="font-greatvibes text-3xl md:text-5xl font-bold mb-5 mt-20">
                Send Wishes
              </h3>

              <div className="max-h-[220px] overflow-y-scroll">
                {wishes.map((item) => (
                  <div className="rounded-xl shadow-xl border w-[90%] bg-white px-5 py-3 mx-auto text-left mb-1">
                    <h5 className="text-sm">{item.username}</h5>
                    <p className="text-gray-600 text-xs">{item.wish}</p>
                  </div>
                ))}
              </div>

              <div className="w-[80%] mx-auto flex flex-col">
                <label
                  htmlFor="name"
                  className="text-left mt-5 mb-1 block text-sm"
                >
                  Name<span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="block focus:outline-none ring-1 ring-primary px-2 py-1 rounded-md selection:text-white selection:bg-primary text-sm"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                />

                <label
                  htmlFor="name"
                  className="text-left mt-3 mb-1 block text-sm"
                >
                  Wish<span className="text-red-400">*</span>
                </label>
                <textarea
                  id="name"
                  type="text"
                  className="block h-[100px] focus:outline-none ring-1 ring-primary px-2 py-1 rounded-md selection:text-white selection:bg-primary text-sm"
                  onChange={(e) => setWish(e.target.value)}
                  value={wish}
                />
                <div
                  className="cursor-pointer px-5 py-1 shadow-xl bg-primary text-white rounded-xl mt-5 w-fit"
                  onClick={handleSendWish}
                >
                  Send Wish
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
