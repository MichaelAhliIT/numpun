"use client";

import PhotoScreen from "@/components/PhotoScreen";
import SplashScreen from "@/components/SplashScreen";
import WebtoonPage from "@/components/WebtoonPage";
import WelcomePage from "@/components/WelcomePage";
import { useState } from "react";

export default function Home() {
  const [isSplashScreen, setIsSplashScreen] = useState<Boolean>(true);
  const [isWelcomeScreen, setIsWelcomeScreen] = useState<Boolean>(true);
  const [isWebtoonPage, setIsWebtoonPage] = useState<Boolean>(true);
  const handleOnClickSplash = () => {
    setIsSplashScreen(false);
  };
  const handleOnClickWelcome = () => {
    setIsWelcomeScreen(false);
  };
  const handleOnClickWebtoon = () => {
    setIsWebtoonPage(false);
  };
  return (
    <div className="w-full h-full p-5">
      {isSplashScreen ? (
        <SplashScreen onClick={handleOnClickSplash} />
      ) : isWelcomeScreen ? (
        <WelcomePage onClick={handleOnClickWelcome} />
      ) : isWebtoonPage ? (
        <WebtoonPage onClick={handleOnClickWebtoon} />
      ) : (
        <PhotoScreen />
      )}
    </div>
  );
}
