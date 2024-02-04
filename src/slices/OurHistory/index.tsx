import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

import styles from "./styles.module.css";
import { PrismicNextImage } from "@prismicio/next";
import { cardUtils } from "@/utils/card.utils";
import classnames from "classnames";

const components: JSXMapSerializer = {
  strong: ({ children }) => (
    <strong className={styles["timelineCardDescription"]}>{children}</strong>
  ),
  heading2: ({ children }) => (
    <h2 className={styles["sectionTitle"]}>{children}</h2>
  ),
};

/**
 * Props for `OurHistory`.
 */
export type OurHistoryProps = SliceComponentProps<Content.OurHistorySlice>;

/**
 * Component for "OurHistory" Slices.
 */
const OurHistory = ({ slice }: OurHistoryProps): JSX.Element => {
  const { getCardContentDirectionClasses } = cardUtils;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles["ourHistoryContainer"]}
    >
      <PrismicRichText
        field={slice.primary.sectiontitle}
        components={components}
      ></PrismicRichText>
      <div className={styles["timelineContainer"]}>
        {slice.items.map((item, key) => {
          const { cardDirection, hasAfterLine, hasBeforeLine } =
            getCardContentDirectionClasses(key, slice.items.length);

          return (
            <div
              key={item.timelinetitle}
              className={`
            ${styles["timelineCardContainer"]}
            ${styles[cardDirection]}
          `}
            >
              <header className={styles["timelineCardHeader"]}>
                <p
                  className={styles["timelineCardTitle"]}
                  style={{ color: item.timelinetitlecolor ?? "black" }}
                >
                  {item.timelinetitle}
                </p>
                <PrismicRichText
                  field={item.timelinebody}
                  components={components}
                />
              </header>

              <div
                className={classnames(styles.divider, {
                  [styles["beforeLine"]]: hasBeforeLine,
                  [styles["afterLine"]]: hasAfterLine,
                })}
              >
                <div className={styles["timelineBullet"]} />
              </div>
              <PrismicNextImage
                field={item.timelineimage}
                height={300}
                width={300}
                className={styles["timelineImage"]}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurHistory;
