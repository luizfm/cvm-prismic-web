"use client";
import { Content, ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

import styles from "./styles.module.css";
import { PhotoModal } from "@/components/photo-modal";
import { useCallback, useState } from "react";

/**
 * Props for `Photos`.
 */
export type PhotosProps = SliceComponentProps<Content.PhotosSlice>;

/**
 * Component for "Photos" Slices.
 */
const Photos = ({ slice }: PhotosProps): JSX.Element => {
  const [currentImage, setCurrentImage] = useState<ImageField<never> | null>(
    null
  );

  const onPhotoClick = useCallback((image?: ImageField<never>) => {
    setCurrentImage(image ?? null);
  }, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles["sectionContainer"]}
    >
      <h1 className={styles["sectionTitle"]}>{slice.primary.sectiontitle}</h1>
      <div className={styles["photosContainer"]}>
        {slice.items.map((photo, index) => (
          <div key={`${index}`} className={styles["photoWrapper"]}>
            <PrismicNextImage
              field={photo.picture}
              className={styles["image"]}
              fill
              onClick={() => onPhotoClick(photo.picture)}
            />
          </div>
        ))}
      </div>

      {currentImage && (
        <PhotoModal
          open={!!currentImage}
          onClose={onPhotoClick}
          field={currentImage}
        />
      )}
    </section>
  );
};

export default Photos;
