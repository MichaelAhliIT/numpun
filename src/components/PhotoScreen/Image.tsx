import React from "react";

import styles from "./Image.module.scss";
import { useParallaxController } from "react-scroll-parallax";

const Image = (props: any) => {
  const parallaxController = useParallaxController();
  function handleLoad() {
    parallaxController!.update();
  }
  return (
    <div className={styles.image}>
      <img src={props.src} onLoad={handleLoad} />
    </div>
  );
};

export default Image;
