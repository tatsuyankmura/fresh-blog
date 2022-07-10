/** @jsx h */
import { h } from "preact";
import { tw, css } from "@twind";
import { TITLE } from "../config/constants.ts";

const footerStyle = css`
  top: 100vh;
`;

const LINKS = [
  {
    title: "YOUTRUST",
    href: "https://youtrust.jp/users/tatsuyankmura",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/tatsuya_nkmura",
  },
  {
    title: "GitHub",
    href: "https://github.com/tatsuyankmura",
  },
];

export const Footer = () => (
  <footer
    class={tw`sticky flex flex-col gap-4 justify-center tw-${footerStyle} pt-20`}
  >
    <div
      class={tw`mx-auto max-w-screen-lg flex items-center justify-center gap-8`}
    >
      {LINKS.map((link) => (
        <a
          href={link.href}
          class={tw`text-gray-600 hover:underline`}
          target="_blank"
          rel="noopener"
        >
          {link.title}
        </a>
      ))}
    </div>
    <div class={tw`text(gray-600 center)`}>
      <span>
        © {new Date().getFullYear()} {TITLE}
      </span>
    </div>
  </footer>
);
