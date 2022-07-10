/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import "dotenv/load.ts";
import { cheerio } from "cheerio";
import { getArticleById } from "@microcms";
import { tw, css } from "@twind";
import hljs from "hljs/es/highlight.min.js";
import dayjs from "@dayjs";
import { Container, Header, Head, Footer } from "../../components/index.ts";
import { Article } from "../../types/index.ts";
import { TITLE } from "../../config/constants.ts";

const articleStyle = css`
  h2 {
    margin-top: 32px;
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: bold;
  }
  h3 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: bold;
  }
  h4 {
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: bold;
  }
  p {
    font-size: 18px;
    line-height: 1.8;
  }
  a {
    color: #34b3a5;
    text-decoration: underline;
    transition: opacity 0.2s 0s ease;
    &:hover {
      opacity: 0.7;
    }
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  code {
    width: 100%;
    padding: 8px;
  }
  ul {
    list-style: disc;
    margin-left: 20px;
    & > li {
      margin: 8px 0;
      & > ul {
        margin-left: 20px;
      }
    }
  }
`;

export const handler: Handlers<Article> = {
  async GET(_, ctx) {
    const { id } = ctx.params;

    const data = await getArticleById(id);

    const $ = cheerio.load(data.body);
    $("pre code").each((_: any, elm: any) => {
      console.log($(elm).text());
      const result = hljs.highlightAuto($(elm).text());
      $(elm).html(result.value);
      $(elm).addClass(`hljs`);
    });

    return ctx.render({ ...data, body: $.html() });
  },
};

export default function ArticleDetail({ data, url }: PageProps<Article>) {
  return (
    <>
      <Head title={`${data.title} | ${TITLE}`} url={url.href} description="" />
      <Container>
        <Header isIndexHeader />
        <article>
          <h1 class={tw`text-3xl font-semibold mb-2`}>{data.title}</h1>
          <div class={tw`text-s text-gray-500`}>
            公開: <time>{dayjs(data.publishedAt).format("YYYY-MM-DD")}</time>
          </div>
          <div class={tw`text-s text-gray-500`}>
            更新: {dayjs(data.updatedAt).format("YYYY-MM-DD")}
          </div>

          <div
            class={tw`py-8 tw-${articleStyle}`}
            dangerouslySetInnerHTML={{
              __html: `${data.body}`,
            }}
          />
        </article>
        <Footer />
      </Container>
    </>
  );
}
