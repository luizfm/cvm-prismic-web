import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";

import { League_Spartan } from "next/font/google";

import "./global.css";
import { NavMenu } from "@/components/nav-menu";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = createClient();
  const navigationMenu = await client.getByType("navigationmenu");

  const navItems = navigationMenu.results[0].data.slices[0]?.items ?? [];
  const homeLink = navigationMenu.results[0].data.homelink;
  const homeImage = navigationMenu.results[0].data.cvmlogo;

  return (
    <html lang="en" className={leagueSpartan.className}>
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="https://prismic.io/favicon.ico"
        />
      </head>
      <body>
        <NavMenu items={navItems} homeLink={homeLink} homeImage={homeImage} />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
