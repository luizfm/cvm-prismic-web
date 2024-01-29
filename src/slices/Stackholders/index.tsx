import { LinkFieldProps } from "@/models/links.model";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";

import styles from "./styles.module.css";

/**
 * Props for `Stackholders`.
 */
export type StackholdersProps = SliceComponentProps<Content.StackholdersSlice>;

/**
 * Component for "Stackholders" Slices.
 */
const Stackholders = ({ slice }: StackholdersProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles["stackholdersSection"]}
    >
      <h2 className={styles["sectionTitle"]}>
        {slice.primary.stackholderstitle}
      </h2>
      <div className={styles["stackholdersContainer"]}>
        {slice.items.map((item) => {
          const stackholderLink = item.stackholderlink as LinkFieldProps;

          return (
            <PrismicLink
              href={stackholderLink.url || ""}
              key={item.stackholdername}
              className={styles["stackholderItem"]}
            >
              <div className={styles["stackholderImageWrapper"]}>
                <PrismicNextImage
                  field={item.stackholderimage}
                  fill
                  className={styles["image"]}
                />
              </div>
              <p className={styles["stackholderName"]}>
                {item.stackholdername}
              </p>
            </PrismicLink>
          );
        })}
      </div>
    </section>
  );
};

export default Stackholders;
