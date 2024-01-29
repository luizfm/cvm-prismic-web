import Link from "next/link";
import {
  NavigationItensSliceDefaultItem,
  Simplify,
} from "../../../prismicio-types";
import { ImageFieldImage, LinkField } from "@prismicio/client";

import styles from "./styles.module.css";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";
import { LinkFieldProps } from "@/models/links.model";

interface NavItems extends Simplify<NavigationItensSliceDefaultItem> {
  link: LinkFieldProps;
}

interface NavMenuProps {
  items: NavItems[];
  homeLink: LinkFieldProps;
  homeImage?: ImageFieldImage | null;
}

export function NavMenu({ items, homeLink, homeImage }: NavMenuProps) {
  return (
    <div className={styles["navContainer"]}>
      <nav className={styles["navMenu"]}>
        <PrismicLink field={homeLink} className={styles["navMenu-homeLink"]}>
          <PrismicNextImage field={homeImage} alt="" />
        </PrismicLink>
        <ul className={styles["navList"]}>
          {items.map((navItem) => (
            <li key={navItem.label} className={styles["navList-listItem"]}>
              <Link className={styles.link} href={navItem.link.url || "/"}>
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
