import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import styles from "./styles.module.css";

/**
 * Props for `MissionVisionValues`.
 */
export type MissionVisionValuesProps =
  SliceComponentProps<Content.MissionVisionValuesSlice>;

/**
 * Component for "MissionVisionValues" Slices.
 */
const MissionVisionValues = ({
  slice,
}: MissionVisionValuesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles["missionVisionValueSection"]}
    >
      {slice.items.map((item) => (
        <dl key={item.cardtitle} className={styles["card"]}>
          <PrismicNextImage field={item.cardimage} height="200" width="200" />

          <div className={styles["cardContainer"]}>
            <dt className={styles["cardTitle"]}>{item.cardtitle}</dt>
            <dd className={styles["cardBody"]}>
              <PrismicRichText field={item.cardbody} />
            </dd>
          </div>
        </dl>
      ))}
    </section>
  );
};

export default MissionVisionValues;
