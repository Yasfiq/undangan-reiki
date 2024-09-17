import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const AddToCalendarButton = () => {
  const event = {
    title: "Wedding Invitation - Reiki & Irma",
    location: "Jombang, Indonesia",
    startDate: "2024-10-12T08:00:00", // Format ISO: YYYY-MM-DDTHH:mm:ss
    endDate: "2024-10-12T18:00:00",
  };

  const handleAddToCalendar = () => {
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${event.startDate.replace(/[-:]/g, "")}/${event.endDate.replace(
      /[-:]/g,
      ""
    )}&location=${encodeURIComponent(event.location)}&sf=true&output=xml`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <div
      onClick={handleAddToCalendar}
      className="shadow-xl px-5 py-3 bg-white text-primary flex space-x-2 w-fit mx-auto rounded-xl mt-7 cursor-pointer items-center hover:bg-primary hover:text-white duration-300 border-2 hover:border-white"
    >
      <FaCalendarAlt />
      <p className="font-holyfriday">Add to Calendar</p>
    </div>
  );
};

export default AddToCalendarButton;
