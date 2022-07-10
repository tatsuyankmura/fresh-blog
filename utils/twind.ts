import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export { css } from "twind/css";
export * from "twind";

const theme = {
  extend: {
    fontFamily: {
      sans: "Noto Sans JP, sans-serif",
    },
  },
  preflight: {
    "@import": `url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap')`,
    "@font-face": [
      {
        fontFamily: "Noto Sans JP",
        fontWeight: "400",
      },
      {
        fontFamily: "Noto Sans JP",
        fontWeight: "500",
      },
    ],
  },
};

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: theme,
};

if (IS_BROWSER) setup(config);
