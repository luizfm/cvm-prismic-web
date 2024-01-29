import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

import styles from "./styles.module.css";

/**
 * Props for `Donate`.
 */
export type DonateProps = SliceComponentProps<Content.DonateSlice>;

/**
 * Component for "Donate" Slices.
 */
const Donate = ({ slice }: DonateProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles["donateSection"]}
    >
      <PrismicNextImage
        field={slice.primary.donateimage}
        fill
        className={styles["image"]}
      />
    </section>
  );
};

export default Donate;
