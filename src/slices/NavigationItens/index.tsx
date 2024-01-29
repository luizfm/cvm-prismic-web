import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NavigationItens`.
 */
export type NavigationItensProps =
  SliceComponentProps<Content.NavigationItensSlice>;

/**
 * Component for "NavigationItens" Slices.
 */
const NavigationItens = ({ slice }: NavigationItensProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for navigation_itens (variation: {slice.variation})
      Slices
    </section>
  );
};

export default NavigationItens;
