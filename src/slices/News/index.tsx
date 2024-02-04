import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import styles from "./styles.module.css";

/**
 * Props for `News`.
 */
export type NewsProps = SliceComponentProps<Content.NewsSlice>;

/**
 * Component for "News" Slices.
 */
const News = ({ slice }: NewsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles["newsSection"]}
    >
      <div className={styles["coverImageHeader"]}>
        <PrismicNextImage
          field={slice.primary.newscoverimage}
          className={styles["image"]}
        />
      </div>
      <div className={styles["newsContainer"]}>
        <h1 className={styles["newsTitle"]}>{slice.primary.newstitle}</h1>
        <PrismicRichText field={slice.primary.newsbody} />
      </div>
    </section>
  );
};

export default News;
