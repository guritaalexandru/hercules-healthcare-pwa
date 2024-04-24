import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
    title: "PWA with Next 13",
    description: "PWA application with Next 13",
    generator: "Next.js",
    manifest: "/manifest.json",
    keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
    themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
    authors: [
        { name: "" },
    ],
    viewport:
        "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
    icons: [
        { rel: "apple-touch-icon", url: "icons/favicon.ico" },
        { rel: "icon", url: "icons/favicon.ico" },
    ],
};

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <link rel="manifest" href="/manifest.json"/>
        </Head>
        <body>
        <Main/>
        <NextScript />
      </body>
    </Html>
  );
}