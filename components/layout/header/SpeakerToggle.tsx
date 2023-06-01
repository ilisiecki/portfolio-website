"use client";

import { useState } from "react";
import useSound from "use-sound";
import SpeakerOn from "@/components/icons/SpekaerOn";
import SpeakerOff from "@/components/icons/SpeakerOff";
import audioToggleOn from "@/sounds/audioToggleOn.mp3";
import audioToggleOff from "@/sounds/audioToggleOff.mp3";

type Props = {};

const SpeakerToggle = (props: Props) => {
  const [soundOn, setSoundOn] = useState(true);

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
          setSoundOn(false), playOff();
        }}
        className={`${soundOn ? `` : `hidden`}`}
      >
        <SpeakerOn className="group h-6 w-6 fill-main-icon hover:fill-main-iconHover dark:fill-main-iconDark dark:hover:fill-main-iconHoverDark" />
      </button>
      <button
        onClick={() => {
          setSoundOn(true), playOn();
        }}
        className={`${soundOn ? "hidden" : ""}`}
      >
        <SpeakerOff className="h-6 w-6 fill-main-icon hover:fill-main-iconHover dark:fill-main-iconDark dark:hover:fill-main-iconHoverDark" />
      </button>
    </>
  );
};

export default SpeakerToggle;
