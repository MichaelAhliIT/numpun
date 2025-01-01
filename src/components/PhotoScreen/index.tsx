import React from "react";

import styles from "./Image.module.scss";
import { Parallax } from "react-scroll-parallax";
import { Container } from "./Container";
import Image from "./Image";

const PhotoScreen = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="text-3xl font-bold mt-5">Pictures of Ours</h1>
      <Container scrollAxis="vertical">
        <div className={styles.images}>
          <Parallax speed={4} className={styles.parallaxImage}>
            <Image src={"/photoAlbum/870488_0.jpg"} />
          </Parallax>
          <Parallax speed={-4} className={styles.parallaxImage}>
            <Image src={"/photoAlbum/870501_0.jpg"} />
          </Parallax>
          <Parallax speed={4} className={styles.parallaxImage2}>
            <Image src={"/photoAlbum/870500_0.jpg"} />
          </Parallax>
          <Parallax speed={-3} className={styles.parallaxImage}>
            <Image src={"/photoAlbum/870489_0.jpg"} />
          </Parallax>
          <Parallax speed={3} className={styles.parallaxImage}>
            <Image src={"/photoAlbum/870492_0.jpg"} />
          </Parallax>
          <Parallax speed={6} className={styles.parallaxImage2}>
            <Image src={"/photoAlbum/870493_0.jpg"} />
          </Parallax>
          <Parallax speed={-3} className={styles.parallaxImage}>
            <Image src={"/photoAlbum/870496_0.jpg"} />
          </Parallax>
          <Parallax speed={3} className={styles.parallaxImage}>
            <Image src={"/photoAlbum/870495_0.jpg"} />
          </Parallax>
          <Parallax speed={6} className={styles.parallaxImage2}>
            <Image src={"/photoAlbum/870497_0.jpg"} />
          </Parallax>
          <Parallax speed={3} className={styles.parallaxImage}>
            <Image src={"/photoAlbum/870491_0.jpg"} />
          </Parallax>
          <Parallax speed={6} className={styles.parallaxImage2}>
            <Image src={"/photoAlbum/870498_0.jpg"} />
          </Parallax>
          <Parallax speed={6} className={styles.parallaxImage2}>
            <Image src={"/photoAlbum/870499_0.jpg"} />
          </Parallax>
        </div>
      </Container>
    </div>
  );
};

export default PhotoScreen;
