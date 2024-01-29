"use client";
import { Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let randomId = setInterval(() => {
      setNumber((prevValue) => {
        if (prevValue + 1 === slice.items.length) return 0;
        return prevValue + 1;
      });
    }, 3000);

    return () => {
      clearInterval(randomId);
    };
  });

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles["hero"]}
    >
      <div className={styles["heroTitle"]}>
        <p>
          {slice.primary.herotitle}{" "}
          <span style={{ color: slice.primary.herospancolor || "white" }}>
            {slice.primary.herotitlespan}
          </span>{" "}
          {slice.primary.herotitlecomplementarytext}
        </p>
      </div>
      <PrismicNextImage
        field={slice.items[number].herocarrouselimage}
        className={styles.image}
      />
    </section>
  );
};

export default Hero;
