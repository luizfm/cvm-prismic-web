import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

import styles from "./styles.module.css";

/**
 * Props for `SocialImpact`.
 */
export type SocialImpactProps = SliceComponentProps<Content.SocialImpactSlice>;

/**
 * Component for "SocialImpact" Slices.
 */
const SocialImpact = ({ slice }: SocialImpactProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles["socialImpactSection"]}
    >
      <h2 className={styles["sectionTitle"]}>
        {slice.primary.socialimpacttitle}
      </h2>
      <div className={styles["sectionImageWrapper"]}>
        <PrismicNextImage
          field={slice.primary.socialimpactimage}
          className={styles["sectionImage"]}
          fill
        />
      </div>
    </section>
  );
};

export default SocialImpact;
