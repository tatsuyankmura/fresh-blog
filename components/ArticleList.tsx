/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { MicroCMSContentId, MicroCMSDate } from "@microcms";
import { dateFormat } from "@dayjs";

type Article = MicroCMSContentId &
  MicroCMSDate & {
    title: string;
    body: string;
  };

export const ArticleList = ({ article }: { article: Article }) => (
  <article key={article.id} class={tw`py-4`}>
    <a href={`articles/${article.id}`}>
      <h2 class={tw`text-xl font-medium font-semibold`}>{article.title}</h2>
      <time class={tw`text-s text-gray-500`} dateTime={article.publishedAt}>
        公開: {dateFormat(article.publishedAt!)}
      </time>
      <span class={tw`text-s text-gray-500 pl-4`}>
        更新: {dateFormat(article.updatedAt)}
      </span>
    </a>
  </article>
);
