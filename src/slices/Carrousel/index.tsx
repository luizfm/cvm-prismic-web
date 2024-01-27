import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Carrousel`.
 */
export type CarrouselProps = SliceComponentProps<Content.CarrouselSlice>;

/**
 * Component for "Carrousel" Slices.
 */
const Carrousel = ({ slice }: CarrouselProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for carrousel (variation: {slice.variation}) Slices
    </section>
  );
};

export default Carrousel;
