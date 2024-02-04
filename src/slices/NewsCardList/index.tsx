import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";

import styles from "./styles.module.css";

/**
 * Props for `NewsCardList`.
 */
export type NewsCardListProps = SliceComponentProps<Content.NewsCardListSlice>;

/**
 * Component for "NewsCardList" Slices.
 */
const NewsCardList = ({ slice }: NewsCardListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles["sectionContainer"]}
    >
      <h2 className={styles["sectionTitle"]}>{slice.primary.sectiontitle}</h2>
      <div className={styles["newsContainer"]}>
        {slice.items.map((item) => (
          <PrismicLink
            key={`${item.newstitle}-${item.newsresume}`}
            field={item.newslink}
            className={styles["newsLink"]}
          >
            <div className={styles["newsCoverImage"]}>
              <PrismicNextImage
                field={item.newscoverimage}
                className={styles["image"]}
              />
            </div>
            <div className={styles["newsWrapper"]}>
              <h3 className={styles["newsTitle"]}>{item.newstitle}</h3>
              <p className={styles["newsResume"]}>{item.newsresume}</p>
            </div>
          </PrismicLink>
        ))}
      </div>
    </section>
  );
};

export default NewsCardList;
