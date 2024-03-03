import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SocialMedia`.
 */
export type SocialMediaProps = SliceComponentProps<Content.SocialMediaSlice>;

/**
 * Component for "SocialMedia" Slices.
 */
const SocialMedia = ({ slice }: SocialMediaProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for social_media (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SocialMedia;
