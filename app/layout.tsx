import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `WisdomTree - ETFs (Exchange Traded Funds) &amp; ETF Investments`,
  description:
    "Welcome to the Future of Investing In June 2006, WisdomTree launched with a big idea and an impressive mission—to create a better way to invest. We believe investors shouldn’t have to choose between cost efficiency and performance potential, so we developed the first family of ETFs designed to deliver both.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ fontSize: "16px" }}>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <title>
          WisdomTree - ETFs (Exchange Traded Funds) &amp; ETF Investments
        </title>
        <meta
          name="description"
          content="Welcome to the Future of Investing In June 2006, WisdomTree launched with a big idea and an impressive mission—to create a better way to invest. We believe investors shouldn’t have to choose between cost efficiency and performance potential, so we developed the first family of ETFs designed to deliver both."
        />
        <meta name="author" content="WisdomTree Investments, Inc." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@WisdomTreeEU" />
        <meta
          name="google-site-verification"
          content="5H4sWavKxUnsQJPdnHX1cCi35tm8kBFQFT8_sgMVUH8"
        />
        <meta name="VIcurrentDateTime" content="638506570487493536" />
        <meta name="VirtualFolder" content="/investments/" />

        <link rel="canonical" href="https://www.wisdomtree.com/investments" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="preload"
          href="/client/fonts/AvenirLTStd-Black/AvenirLTStd-Black.woff2"
          as="font"
          type="font/woff2"
          crossOrigin={"anonymous"}
        />
        <link
          rel="preload"
          href="/client/fonts/AvenirLTStd-Heavy/AvenirLTStd-Heavy.woff2"
          as="font"
          type="font/woff2"
          crossOrigin={"anonymous"}
        />
        <link
          rel="preload"
          href="/client/fonts/AvenirLTStd-Book/AvenirLTStd-Book.woff2"
          as="font"
          type="font/woff2"
          crossOrigin={"anonymous"}
        />
        <link
          rel="preload"
          href="/client/fonts/Verdana/Verdana.woff2"
          as="font"
          type="font/woff2"
          crossOrigin={"anonymous"}
        />
        <link
          rel="preload"
          href="/client/fonts/AvenirLTStd-BlackOblique/AvenirLTStd-BlackOblique.woff2"
          as="font"
          type="font/woff2"
          crossOrigin={"anonymous"}
        />
        <link
          rel="preload"
          href="/client/fonts/AvenirLTStd-Roman/AvenirLTStd-Roman.woff2"
          as="font"
          type="font/woff2"
          crossOrigin={"anonymous"}
        />
        <link rel="preload" as="style" href="default.css" type="text/css" />
        <link rel="stylesheet" href="default.css" type="text/css" />
        <link href="style.css" rel="stylesheet" type="text/css" />
        <link href="important-notices.css" rel="stylesheet" type="text/css" />
        <link href="grunt-less-escape.css" rel="stylesheet" type="text/css" />
        <link href="print.css" rel="stylesheet" type="text/css" media="print" />
        <link
          rel="alternate"
          hrefLang="en-gb"
          href="https://www.wisdomtree.eu/en-gb/"
        />
        <link
          rel="alternate"
          hrefLang="it-it"
          href="https://www.wisdomtree.eu/it-it/"
        />
        <link
          rel="alternate"
          hrefLang="de-de"
          href="https://www.wisdomtree.eu/de-de/"
        />
        <link
          rel="alternate"
          hrefLang="es-es"
          href="https://www.wisdomtree.eu/es-es/"
        />
        <link
          rel="alternate"
          hrefLang="de-at"
          href="https://www.wisdomtree.eu/de-at/"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.wisdomtree.com/"
        />
        <link
          rel="alternate"
          hrefLang="en-us"
          href="https://www.wisdomtree.com/"
        />
        <link
          rel="alternate"
          hrefLang="en-ca"
          href="https://www.wisdomtree.ca/"
        />
        <link
          rel="alternate"
          hrefLang="fr-ca"
          href="https://www.wisdomtree.ca/fr-ca/"
        />
        <link
          rel="alternate"
          hrefLang="en-150"
          href="https://www.wisdomtree.eu/"
        />
        <link
          rel="alternate"
          hrefLang="en-gb"
          href="https://www.wisdomtree.eu/en-gb/"
        />
        <link
          rel="alternate"
          hrefLang="en-ie"
          href="https://www.wisdomtree.eu/en-ie/"
        />
        <link
          rel="alternate"
          hrefLang="en-ch"
          href="https://www.wisdomtree.eu/en-ch/"
        />
        <link
          rel="alternate"
          hrefLang="de"
          href="https://www.wisdomtree.eu/de-de/"
        />
        <link
          rel="alternate"
          hrefLang="de-de"
          href="https://www.wisdomtree.eu/de-de/"
        />
        <link
          rel="alternate"
          hrefLang="de-ch"
          href="https://www.wisdomtree.eu/de-ch/"
        />
        <link
          rel="alternate"
          hrefLang="it"
          href="https://www.wisdomtree.eu/it-it/"
        />
        <link
          rel="alternate"
          hrefLang="it-it"
          href="https://www.wisdomtree.eu/it-it/"
        />
        <link
          rel="alternate"
          hrefLang="it-ch"
          href="https://www.wisdomtree.eu/it-ch/"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://www.wisdomtree.eu/fr-fr/"
        />
        <link
          rel="alternate"
          hrefLang="fr-fr"
          href="https://www.wisdomtree.eu/fr-fr/"
        />
        <link
          rel="alternate"
          hrefLang="fr-lu"
          href="https://www.wisdomtree.eu/fr-lu/"
        />
        <link
          rel="alternate"
          hrefLang="fr-ch"
          href="https://www.wisdomtree.eu/fr-ch/"
        />
        <link
          rel="alternate"
          hrefLang="nl"
          href="https://www.wisdomtree.eu/nl-nl/"
        />
        <link
          rel="alternate"
          hrefLang="fi"
          href="https://www.wisdomtree.eu/fi-fi/"
        />
        <link
          rel="alternate"
          hrefLang="sv"
          href="https://www.wisdomtree.eu/sv-se/"
        />
        <link
          rel="alternate"
          hrefLang="nb"
          href="https://www.wisdomtree.eu/nb-no/"
        />
      </Head>
      <body className={""}>{children}</body>
    </html>
  );
}
