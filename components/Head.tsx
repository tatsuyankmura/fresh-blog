/** @jsx h */
import { h } from "preact";
import { Head as FreshHead } from "$fresh/src/runtime/head.ts";
import { asset } from "$fresh/src/runtime/utils.ts";
import "dotenv/load.ts";

export const Head = ({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) => {
  const ogImageUrl = new URL(asset("/ogp.png"), url).href;

  return (
    <FreshHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-71F5S7GN91"
      ></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-71F5S7GN91');
        `}
      </script>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@highlightjs/cdn-assets@11.5.0/styles/vs2015.min.css"
      ></link>
    </FreshHead>
  );
};
