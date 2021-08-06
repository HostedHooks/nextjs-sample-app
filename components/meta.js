import Head from 'next/head';

export default function Meta() {
  return (
    <Head>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <link
        rel="android-chrome-192x192"
        sizes="192x192"
        href="/favicon/android-chrome-192x192.png"
      />
      <link
        rel="android-chrome-256x256"
        sizes="256x256"
        href="/favicon/android-chrome-256x256.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#ffffff"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content="A nextjs open source Todo app that implements HostedHooks" />
    </Head>
  )
}