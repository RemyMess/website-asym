import React from 'react';
import Script from 'next/script';
import Head from 'next/head';

interface ISeoProps {
  title: string;
  description?: string;
  JSONLD?: object;
}

const Seo = ({ title, JSONLD, description = 'Inferex' }: ISeoProps) => {
  return (
    <>
      <Script id="matamo" strategy="afterInteractive">
        {`
        var _paq = window._paq = window._paq || [];
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u="//analytics.inferex.com/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '1']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();
        `}
      </Script>
      <Head>
        <title>{`${title} | Copilot for mechanical projects `}</title>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
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
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="#"></link>
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content={'https://inferex.com/ogimage.png'}
        />
        <meta property="og:site_name" content="Inferex" />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:title"
          content={title}
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:description"
          content={description}
        />

        {JSONLD ? (
          <script type="application/ld+json">
            {`${JSON.stringify(JSONLD)}`}
          </script>
        ) : (
          <script type="application/ld+json">
            {`
            {
            "@context": "http://www.schema.org",
            "@type": "Organization",
            "name": "Inferex",
            "url": "https://inferex.com",
            "logo": "https://inferex.com/logo.png",
            "description": "Inferex is an early-stage startup aiming to increase the global impact of AI by improving the way AI is deployed. Inferex allows development teams to convert their trained models into fully-fledged APIs in just a few lines of code. It was founded in 2021 and is based in Dublin, Ireland.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dublin",
              "addressCountry": "Ireland"
            },
            "sameAs" : [
              "https://twitter.com/inferexai",
              "https://www.linkedin.com/company/inferex/"
            ]
          }
        `}
          </script>
        )}
      </Head>
    </>
  );
};

export default Seo;
