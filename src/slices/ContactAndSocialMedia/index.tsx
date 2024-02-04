import { LinkFieldProps } from "@/models/links.model";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import mockSliceContent from './mocks.json'

import styles from "./styles.module.css";

/**
 * Props for `ContactAndSocialMedia`.
 */
export type ContactAndSocialMediaProps =
  SliceComponentProps<Content.ContactAndSocialMediaSlice>;

/**
 * Component for "ContactAndSocialMedia" Slices.
 */
const ContactAndSocialMedia = ({
  slice,
}: ContactAndSocialMediaProps): JSX.Element => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles["socialMediaAndContactSection"]}
    >
      <div className={styles["contactContainer"]}>
        <h2>{slice.primary.sectiontitle}</h2>
        <p>{slice.primary.address}</p>
        <p>{slice.primary.phone}</p>
        <p>{slice.primary.email}</p>
      </div>
      <div className={styles["socialMediaContainer"]}>
        {slice.items.map((socialMediaItem) => {
          const socialMediaLink =
            socialMediaItem.socialmedialink as LinkFieldProps;

          return (
            <PrismicNextLink
              key={socialMediaItem.socialmedialabel}
              href={socialMediaLink?.url || "/"}
              className={styles["socialMediaLink"]}
            >
              <div className={styles["imageWrapper"]}>
                <PrismicNextImage
                  field={socialMediaItem.socialmediaicon}
                  className={styles["image"]}
                  fill
                />
              </div>
              <p>{socialMediaItem.socialmedialabel}</p>
            </PrismicNextLink>
          );
        })}
      </div>
    </section>
  );
};

export default ContactAndSocialMedia;
