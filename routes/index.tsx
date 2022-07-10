/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import "dotenv/load.ts";
import { getArticles } from "@microcms";
import {
  ArticleList,
  Container,
  Header,
  Head,
  Footer,
} from "../components/index.ts";
import { Article } from "../types/index.ts";
import { TITLE } from "../config/constants.ts";

export const handler: Handlers<Article[]> = {
  async GET(_, ctx) {
    const data = await getArticles();

    return ctx.render(data.contents);
  },
};

export default function Home({ data, url }: PageProps<Article[]>) {
  return (
    <>
      <Head title={TITLE} url={url.href} description="" />
      <Container>
        <Header isIndexHeader />
        <main>
          {data.length > 0 ? (
            <>
              {data.map((article) => (
                <ArticleList key={article.id} article={article} />
              ))}
            </>
          ) : (
            <p>現在記事がありません...もう少々お待ちください</p>
          )}
        </main>
        <Footer />
      </Container>
    </>
  );
}
