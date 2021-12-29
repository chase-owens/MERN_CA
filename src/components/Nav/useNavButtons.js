import { useRef } from "react";
import { howToRef } from "../HowTo/HowTo";
import { videoRef } from "../Videos/Videos";

const useNavButtons = () => {
  const howToContainerRef = useRef(howToRef);
  const videoContainerRef = useRef(videoRef);

  const navButtons = [
    { title: "How To", ref: howToContainerRef },
    { title: "Videos", ref: videoContainerRef },
    { title: "Languages", location: "/language", inPage: false },
    { title: "Contact", location: "/contact", inPage: false },
  ];

  return navButtons;
};
export default useNavButtons;
