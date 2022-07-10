/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export const Header = ({
  isIndexHeader = false,
}: {
  isIndexHeader?: boolean;
}) => (
  <header class={tw`pt-4 pb-16`}>
    {isIndexHeader ? (
      <h1 class={tw`text-2xl font-bold`}>
        <BlogTitle />
      </h1>
    ) : (
      <div class={tw`text-2xl font-bold`}>
        <BlogTitle />
      </div>
    )}
  </header>
);

const BlogTitle = () => <a href={`/`}>tatsuyankmura</a>;
