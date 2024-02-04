import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import * as Dialog from "@radix-ui/react-dialog";

import styles from "./styles.module.css";
import { useCallback } from "react";

interface PhotoModalProps {
  open: boolean;
  field: ImageField<never>;
  onClose: (image?: ImageField<never>) => void;
}

export function PhotoModal({ open, field, onClose }: PhotoModalProps) {
  const handleOnClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Dialog.Root open={open} onOpenChange={handleOnClose}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles["modalOverlay"]} />
        <Dialog.Content className={styles["modalContent"]}>
          <div className={styles["photoWrapper"]}>
            <PrismicNextImage field={field} className={styles["image"]} />
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
