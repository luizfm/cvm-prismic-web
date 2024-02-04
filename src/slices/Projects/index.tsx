import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import classnames from "classnames";

import styles from "./styles.module.css";

const components: JSXMapSerializer = {
  strong: ({ children }) => (
    <strong className={styles["sectionParagraph"]}>{children}</strong>
  ),
};

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles["projectSection"]}
    >
      <h1 className={styles["sectionTitle"]}>{slice.primary.sectiontitle}</h1>
      {slice.items.map((item, index) => (
        <div
          key={item.projecttitle}
          className={classnames(styles["projectContainer"], {
            [styles["even"]]: index % 2 === 0,
          })}
        >
          <PrismicNextImage
            field={item.projectimagem}
            className={styles["image"]}
            width={640}
          />
          <div className={styles["projectTextContainer"]}>
            <h2 className={styles["projectTitle"]}>{item.projecttitle}</h2>
            <PrismicRichText field={item.projectbody} components={components} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
