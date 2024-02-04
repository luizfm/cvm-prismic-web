"use client";

import Link from "next/link";
import {
  NavigationItensSliceDefaultItem,
  Simplify,
} from "../../../prismicio-types";
import { ImageFieldImage, KeyTextField, LinkField } from "@prismicio/client";

import styles from "./styles.module.css";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";
import { LinkFieldProps } from "@/models/links.model";
import DropdownMenu from "../navigation-menu";

interface NavItems extends Simplify<NavigationItensSliceDefaultItem> {
  link: LinkFieldProps;
}

interface DropdownMenuProps {
  menuItem?: KeyTextField;
  menuItemLabel?: KeyTextField;
  menuItemLabelLink?: LinkFieldProps;
}

interface NavMenuProps {
  items: NavItems[];
  homeLink: LinkFieldProps;
  homeImage?: ImageFieldImage | null;
  dropdownMenu: DropdownMenuProps;
}

export function NavMenu({
  items,
  homeLink,
  homeImage,
  dropdownMenu,
}: NavMenuProps) {
  const TRANSPARENCY_ITEMS = [
    {
      id: 1,
      trigger: (
        <button type="button" className={styles.button}>
          {dropdownMenu.menuItem}
        </button>
      ),
      component: (
        <PrismicLink target="_blank" field={dropdownMenu.menuItemLabelLink}>
          {dropdownMenu.menuItemLabel}
        </PrismicLink>
      ),
    },
  ];

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
          <li className={styles["navList-listItem"]}>
            <DropdownMenu items={TRANSPARENCY_ITEMS} />
          </li>
        </ul>
      </nav>
    </div>
  );
}
