import React, { useEffect, useRef, useState } from "react";
import { FaGooglePlay, FaStopCircle } from "react-icons/fa";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Menyimpan status play/pause

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause audio
      setIsPlaying(false); // Ubah state menjadi paused
    } else {
      audioRef.current.play(); // Play audio
      setIsPlaying(true); // Ubah state menjadi playing
    }
  };

  // useEffect(() => {
  //   if (audioRef) {
  //     audioRef.current.play();
  //     setIsPlaying(true);
  //   }
  // }, [audioRef]);

  return (
    <div className="fixed right-0 bottom-0 p-2">
      <audio ref={audioRef}>
        <source src="/audios/lagu.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={handlePlayPause}>
        {isPlaying ? <FaStopCircle /> : <FaGooglePlay />}
      </button>
    </div>
  );
};

export default MusicPlayer;
