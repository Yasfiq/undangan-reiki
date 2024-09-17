import React from "react";
import { SiGooglemaps } from "react-icons/si";

const ViewLocationButton = () => {
  const location =
    "Stasiun Kereta Api Jombang, Jl. Basuki Rahmad No.1, Kaliwungu, Kec. Jombang, Kabupaten Jombang, Jawa Timur 61419";

  const handleViewLocation = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      location
    )}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div
      onClick={handleViewLocation}
      className="shadow-xl px-5 py-3 bg-white text-primary flex space-x-2 w-fit mx-auto rounded-xl mt-7 cursor-pointer items-center hover:bg-primary hover:text-white duration-300 border-2 hover:border-white"
    >
      <SiGooglemaps size="20px" />
      <p className="font-holyfriday">View Location</p>
    </div>
  );
};

export default ViewLocationButton;
