import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

import styles from "./styles.module.css";

/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Component for "Gallery" Slices.
 */
const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles["sectionContainer"]}
    >
      <h1 className={styles["sectionTitle"]}>{slice.primary.sectiontitle}</h1>
      <div className={styles["albumContainer"]}>
        {slice.items.map((item, index) => (
          <PrismicNextLink
            key={item.albumtitle}
            field={item.albumlink}
            className={styles["albumLink"]}
          >
            <div className={styles["album"]}>
              <div className={styles["albumImage"]}>
                <PrismicNextImage
                  field={item.albumimage}
                  className={styles["image"]}
                  width={240}
                  height={160}
                />
              </div>
              <div className={styles["albumFooter"]}>
                <h2 className={styles["albumTitle"]}>{item.albumtitle}</h2>
              </div>
            </div>
          </PrismicNextLink>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
