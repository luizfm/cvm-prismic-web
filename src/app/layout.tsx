import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";

import { League_Spartan } from "next/font/google";

import "./global.css";
import { NavMenu } from "@/components/nav-menu";
import { Footer } from "@/components/footer";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const client = createClient();

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationMenu = await client.getByType("navigationmenu");

  const navItems = navigationMenu.results[0].data.slices[0]?.items ?? [];
  const homeLink = navigationMenu.results[0].data.homelink;
  const homeImage = navigationMenu.results[0].data.cvmlogo;
  const dropdownMenuItem =
    navigationMenu.results[0].data.slices[0]?.primary.drodpownmenuitem;
  const dropdownMenuItemLabel =
    navigationMenu.results[0].data.slices[0]?.primary.dropdownmenulabel;
  const dropdownMenuItemLink =
    navigationMenu.results[0].data.slices[0]?.primary.dropdownmenuitemlink;

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
        <NavMenu
          items={navItems}
          homeLink={homeLink}
          homeImage={homeImage}
          dropdownMenu={{
            menuItem: dropdownMenuItem,
            menuItemLabel: dropdownMenuItemLabel,
            menuItemLabelLink: dropdownMenuItemLink,
          }}
        />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <Footer />
      </body>
    </html>
  );
}
