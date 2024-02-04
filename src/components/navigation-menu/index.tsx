import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import React from "react";

import styles from "./styles.module.css";

type DropdownMenuItemsProps = {
  id: string | number;
  trigger: JSX.Element;
  component: React.ReactNode;
};

type DropdownMenuProps = {
  items: DropdownMenuItemsProps[];
};

export default function DropdownMenu({ items }: DropdownMenuProps) {
  return (
    <RadixNavigationMenu.Root className={styles["navigationRoot"]}>
      <RadixNavigationMenu.List className={styles["navigationList"]}>
        {items.map((item) => (
          <RadixNavigationMenu.Item key={item.id}>
            <RadixNavigationMenu.Trigger asChild>
              {item.trigger}
            </RadixNavigationMenu.Trigger>
            <RadixNavigationMenu.Content
              className={styles["navigationContent"]}
            >
              <RadixNavigationMenu.Link
                className={styles["navigationLink"]}
                asChild
              >
                {item.component}
              </RadixNavigationMenu.Link>
            </RadixNavigationMenu.Content>
          </RadixNavigationMenu.Item>
        ))}
      </RadixNavigationMenu.List>
    </RadixNavigationMenu.Root>
  );
}
