"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import styles from "./styles.module.css";
import { PrismicNextImage } from "@prismicio/next";
import { useCallback, useEffect, useState } from "react";
import {
  Simplify,
  SocialMediaSliceDefaultItem,
} from "../../../prismicio-types";
import { HelpModal } from "@/components/help-modal";
import { client } from "@/app/layout";

/**
 * Props for `Help`.
 */
export type HelpProps = SliceComponentProps<Content.HelpSlice>;

/**
 * Component for "Help" Slices.
 */
const Help = ({ slice }: HelpProps): JSX.Element => {
  const [currentHelpItem, setCurrentHelpItem] =
    useState<Simplify<Content.HelpSliceDefaultItem> | null>(null);

  const [socialMediaContent, setSocialMediaContent] = useState<
    Simplify<SocialMediaSliceDefaultItem>[] | undefined
  >(undefined);

  const onHelpClick = useCallback(
    (item?: Simplify<Content.HelpSliceDefaultItem>) => {
      setCurrentHelpItem(item ?? null);
    },
    []
  );

  useEffect(() => {
    const loadSocialMediaContent = async () => {
      const socialMediaContent = await client.getByType("companymediashare");

      setSocialMediaContent(
        socialMediaContent.results[0].data.slices[0]?.items
      );
    };

    loadSocialMediaContent();
  }, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles["helpSection"]}
    >
      <h1 className={styles["sectionTitle"]}>{slice.primary.sectiontitle}</h1>

      <dl className={styles["helpItemsContainer"]}>
        {slice.items.map((item) => (
          <div className={styles["helpItemCard"]} key={item.helptitle}>
            <div className={styles["helpItemImageContainer"]}>
              <PrismicNextImage
                field={item.helpimage}
                height={52}
                width={52}
                className={styles["image"]}
              />
            </div>
            <dt className={styles["helpItemTitle"]}>{item.helptitle}</dt>
            <dd className={styles["helpItemDescription"]}>
              {item.helpdescription}
            </dd>
            <button
              type="button"
              className={styles["button"]}
              onClick={() => onHelpClick(item)}
            >
              Ajudar desta forma
            </button>
          </div>
        ))}
      </dl>

      {currentHelpItem && (
        <HelpModal
          onClose={onHelpClick}
          item={currentHelpItem}
          open={!!currentHelpItem}
          socialMediaContent={socialMediaContent}
        />
      )}
    </section>
  );
};

export default Help;
