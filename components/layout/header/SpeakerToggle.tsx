"use client";

import useSound from "use-sound";
import SpeakerOn from "@/components/icons/SpekaerOn";
import SpeakerOff from "@/components/icons/SpeakerOff";
import audioToggleOn from "@/sounds/audioToggleOn.mp3";
import audioToggleOff from "@/sounds/audioToggleOff.mp3";
import { useStore } from "@/store/store";
import { useEffect, useState } from "react";

type Props = {};

const SpeakerToggle = (props: Props) => {
  const [soundState, setSoundState] = useState<boolean>();
  const { isSound, setIsSound } = useStore();

  useEffect(() => {
    setSoundState(isSound);
  }, [isSound]);

  const [playOn] = useSound(audioToggleOn, {
    volume: 0.5,
  });

  const [playOff] = useSound(audioToggleOff, {
    volume: 0.5,
  });

  return (
    <>
      <button
        onClick={() => {
          setIsSound(), playOff();
        }}
        className={`${soundState ? `` : `hidden`}`}
      >
        <SpeakerOn className="group h-6 w-6 fill-main-icon hover:fill-main-iconHover dark:fill-main-iconDark dark:hover:fill-main-iconHoverDark" />
      </button>
      <button
        onClick={() => {
          setIsSound(), playOn();
        }}
        className={`${soundState ? "hidden" : ""}`}
      >
        <SpeakerOff className="h-6 w-6 fill-main-icon hover:fill-main-iconHover dark:fill-main-iconDark dark:hover:fill-main-iconHoverDark" />
      </button>
    </>
  );
};

export default SpeakerToggle;
