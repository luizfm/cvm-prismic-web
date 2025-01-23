"use client";
import React, { useContext } from "react";

interface InstagramPost {
  id: string;
  media_type: string;
  caption?: string;
  media_url: string;
  permalink: string;
  timestamp: string;
}

const InstagramPostsContext = React.createContext<InstagramPost[]>([]);

interface InstagraPostsContextProps {
  children: React.ReactNode;
  posts: InstagramPost[];
}

export async function InstagramPostsProvider({
  children,
  posts,
}: InstagraPostsContextProps) {
  return (
    <InstagramPostsContext.Provider value={posts}>
      {children}
    </InstagramPostsContext.Provider>
  );
}

export function useGetInstagramPosts() {
  const instagramContext = useContext(InstagramPostsContext);

  if (!instagramContext) {
    throw new Error(
      "useGetInstagramPosts should be used within InstagramPostsContext"
    );
  }

  return instagramContext;
}
