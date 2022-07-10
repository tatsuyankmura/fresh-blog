/** @jsx h */
import { h, ComponentChildren } from "preact";
import { tw } from "@twind";

export const Container = ({ children }: { children: ComponentChildren }) => (
  <div class={tw`p-4 mx-auto max-w-screen-md`}>{children}</div>
);
