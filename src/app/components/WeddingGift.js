import React, { useEffect, useState } from "react";
import { FaGift } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";

const WeddingGift = () => {
  const [dataRekening, setDataRekening] = useState({
    isCopy1: false,
    isCopy2: false,
    account1: "7361250536",
    // account2: "0234562313",
  });
  const copyToClipboard = async (text) => {
    try {
      // Gunakan API Clipboard modern
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  useEffect(() => {
    if (dataRekening.isCopy1) {
      copyToClipboard(dataRekening.account1);
      setInterval(
        () => setDataRekening({ ...dataRekening, isCopy1: false }),
        1000
      );
    }
    if (dataRekening.isCopy2) {
      copyToClipboard(dataRekening.account2);
      setInterval(
        () => setDataRekening({ ...dataRekening, isCopy2: false }),
        1000
      );
    }
  }, [dataRekening.isCopy1, dataRekening.isCopy2]);

  return (
    <div className="text-white font-holyfriday font-light">
      <FaGift size="100px" className="mx-auto" />
      <h3 className="font-greatvibes text-white text-3xl md:text-5xl font-bold mb-5">
        Wedding Gift
      </h3>
      <p className="w-[90%] md:w-1/2 mx-auto font-greatvibes text-xl">
        Hopefully this limitation does not reduce happiness for both of us and
        does not eliminate the blessings from all of you. Your prayer for our
        marriage is the greatest gift of all.
      </p>
      <div className="flex flex-col w-fit mx-auto mt-5 space-y-5">
        <div className="p-3 border border-white rounded-xl shadow-xl">
          <p className="font-light">
            BCA {dataRekening.account1} - Reiki Alisyahbana
          </p>
          <div className="cursor-pointer flex space-x-2 mx-auto mt-2 items-center px-2 py-1 rounded-full bg-white text-primary text-center w-fit">
            <MdContentCopy size="15px" />
            <p
              onClick={() =>
                setDataRekening({ ...dataRekening, isCopy1: true })
              }
            >
              {dataRekening.isCopy1 ? "Copied" : "Copy Number"}
            </p>
          </div>
        </div>
        {/* <div className="p-3 border border-white rounded-xl shadow-xl">
          <p className="font-light">
            DANA {dataRekening.account2} - Reiki Alisyahbana
          </p>
          <div className="cursor-pointer flex space-x-2 mx-auto mt-2 items-center px-2 py-1 rounded-full bg-white text-primary text-center w-fit">
            <MdContentCopy size="15px" />
            <p
              onClick={() =>
                setDataRekening({ ...dataRekening, isCopy2: true })
              }
            >
              {dataRekening.isCopy2 ? "Copied" : "Copy Number"}
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default WeddingGift;
