import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

import styles from "./styles.module.css";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className={styles["sectionBody"]}>{children}</h2>
  ),
  paragraph: ({ children }) => (
    <p className={styles["sectionBodyText"]}>{children}</p>
  ),
};

/**
 * Props for `ProjectAndSubprojects`.
 */
export type ProjectAndSubprojectsProps =
  SliceComponentProps<Content.ProjectAndSubprojectsSlice>;

/**
 * Component for "ProjectAndSubprojects" Slices.
 */
const ProjectAndSubprojects = ({
  slice,
}: ProjectAndSubprojectsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles["sectionContainer"]}
    >
      <h2 className={styles["sectionTitle"]}>{slice.primary.title}</h2>
      <PrismicNextImage
        field={slice.primary.projectimage}
        width={800}
        height={500}
        className={styles["mainProjectImage"]}
      />
      <PrismicRichText
        field={slice.primary.projectbody}
        components={components}
      />

      <div className={styles["projectContainer"]}>
        {slice.items.map((item, index) => (
          <PrismicNextLink
            key={item.projecttitle}
            field={item.projectlink}
            className={styles["projectLink"]}
          >
            <div className={styles["project"]}>
              <div className={styles["projectImage"]}>
                <PrismicNextImage
                  field={item.projectimage}
                  className={styles["image"]}
                  width={240}
                  height={160}
                />
              </div>
              <div className={styles["projectFooter"]}>
                <h2 className={styles["projectTitle"]}>{item.projecttitle}</h2>
              </div>
            </div>
          </PrismicNextLink>
        ))}
      </div>
    </section>
  );
};

export default ProjectAndSubprojects;
