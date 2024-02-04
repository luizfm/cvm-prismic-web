import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import styles from "./styles.module.css";

/**
 * Props for `InstitutionalVideo`.
 */
export type InstitutionalVideoProps =
  SliceComponentProps<Content.InstitutionalVideoSlice>;

/**
 * Component for "InstitutionalVideo" Slices.
 */
const InstitutionalVideo = ({
  slice,
}: InstitutionalVideoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles["institutionalVideoSection"]}
    >
      <h2 className={styles["sectionTitle"]}>{slice.primary.sectiontitle}</h2>

      <div
        className={styles["videoContainer"]}
        dangerouslySetInnerHTML={{
          __html: slice.primary.videourl.html as TrustedHTML,
        }}
      />
    </section>
  );
};

export default InstitutionalVideo;
