import { Content, ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import * as Dialog from "@radix-ui/react-dialog";

import styles from "./styles.module.css";
import { useCallback } from "react";
import { Simplify } from "../../../prismicio-types";
import { PrismicRichText } from "@prismicio/react";

interface HelpModalProps {
  open: boolean;
  item: Simplify<Content.HelpSliceDefaultItem>;
  onClose: (item?: Simplify<Content.HelpSliceDefaultItem>) => void;
}

export function HelpModal({ open, item, onClose }: HelpModalProps) {
  const handleOnClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Dialog.Root open={open} onOpenChange={handleOnClose}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles["modalOverlay"]} />

        <Dialog.Content className={styles["modalContent"]}>
          <Dialog.Title className={styles["modalTitle"]}>
            <h2>{item.helptitle}</h2>
          </Dialog.Title>
          <div className={styles["modalContentWrapper"]}>
            <PrismicRichText field={item.helpbody} />
          </div>
          <Dialog.Close asChild>
            <button
              className={styles["closeButton"]}
              aria-label="Close"
              onClick={handleOnClose}
            >
              X
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
