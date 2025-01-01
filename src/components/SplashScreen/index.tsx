"use client";

import { TypeAnimation } from "react-type-animation";

interface SplashScreenProps {
  onClick: () => any; // Define the type for the onClick prop
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onClick }) => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      onClick={onClick}
    >
      <TypeAnimation
        sequence={[
          "Want to read some story, Numpun?",
          1500,
          "Want to read some story, Bibu?",
          1500,
          "Want to read some story, Baby?",
          1500,
          "Want to read some story, or ที่รัก?",
          1500,
          "Press anywhere to start",
          5000,
        ]}
        speed={25}
        style={{ fontSize: "1.5rem" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default SplashScreen;
