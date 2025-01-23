"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";

import styles from "./styles.module.css";
import { useGetInstagramPosts } from "@/app/context/instagram-posts.context";
import Image from "next/image";
import Link from "next/link";

/**
 * Props for `NewsCardList`.
 */
export type NewsCardListProps = SliceComponentProps<Content.NewsCardListSlice>;

/**
 * Component for "NewsCardList" Slices.
 */
const NewsCardList = ({ slice }: NewsCardListProps): JSX.Element => {
  const instagramPosts = useGetInstagramPosts();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles["sectionContainer"]}
    >
      <h2 className={styles["sectionTitle"]}>{slice.primary.sectiontitle}</h2>
      <div className={styles["newsContainer"]}>
        {slice.items.map((item) => (
          <PrismicLink
            key={`${item.newstitle}-${item.newsresume}`}
            field={item.newslink}
            className={styles["newsLink"]}
          >
            <div className={styles["newsCoverImage"]}>
              <PrismicNextImage
                field={item.newscoverimage}
                className={styles["image"]}
              />
            </div>
            <div className={styles["newsWrapper"]}>
              <h3 className={styles["newsTitle"]}>{item.newstitle}</h3>
              <p className={styles["newsResume"]}>{item.newsresume}</p>
            </div>
          </PrismicLink>
        ))}
      </div>

      <h3 className={styles["socialMediaSectionTitle"]}>
        Também estamos no instagram. Veja nossas últimas publicações
      </h3>
      <div className={styles["socialMediaBox"]}>
        {instagramPosts.slice(0, 3).map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            className={styles["postLink"]}
          >
            <div className={styles["instagramCard"]}>
              <div className={styles["imageWrapper"]}>
                <Image
                  src={post.media_url}
                  alt={post.caption ?? post.id}
                  fill
                  className={styles["image"]}
                />
              </div>
              {!!post.caption && (
                <p className={styles["postCaption"]}>{post.caption}</p>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default NewsCardList;
