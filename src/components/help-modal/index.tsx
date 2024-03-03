import { Content, ImageField } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as Dialog from "@radix-ui/react-dialog";

import styles from "./styles.module.css";
import { useCallback } from "react";
import {
  Simplify,
  SocialMediaSliceDefaultItem,
} from "../../../prismicio-types";
import { PrismicRichText } from "@prismicio/react";

interface HelpModalProps {
  open: boolean;
  item: Simplify<Content.HelpSliceDefaultItem>;
  onClose: (item?: Simplify<Content.HelpSliceDefaultItem>) => void;
  socialMediaContent: Simplify<SocialMediaSliceDefaultItem>[] | undefined;
}

export function HelpModal({
  open,
  item,
  onClose,
  socialMediaContent,
}: HelpModalProps) {
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
            {item.helptitle === "Divulgando o trabalho" && (
              <div className={styles["socialMediaContainer"]}>
                {socialMediaContent?.map((socialMedia) => (
                  <PrismicNextLink
                    key={socialMedia.socialname}
                    field={socialMedia.sociallink}
                    className={styles["socialMediaLink"]}
                  >
                    <div className={styles["imageWrapper"]}>
                      <PrismicNextImage
                        field={socialMedia.sociallogo}
                        className={styles["image"]}
                        fill
                      />
                    </div>
                    <p>{socialMedia.socialname}</p>
                  </PrismicNextLink>
                ))}
              </div>
            )}
            <PrismicNextImage
              field={item.helpbodyadditionalimage}
              className={styles["additionalImage"]}
            />
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
