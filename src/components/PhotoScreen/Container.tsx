import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export const Container = ({ children, scrollAxis, className }: any) => (
  <ParallaxProvider scrollAxis={scrollAxis}>
    <div className={scrollAxis}>
      <div className={className}>{children}</div>
    </div>
  </ParallaxProvider>
);
