import "dotenv/load.ts";
import { createClient } from "../microcms/index.ts";
export * from "../microcms/index.ts";

const END_POINT = Deno.env.get("END_POINT");

const client = createClient({
  serviceDomain: Deno.env.get("SERVICE_DOMAIN")!,
  apiKey: Deno.env.get("API_KEY")!,
});

export const getArticles = async () =>
  await client.get({ endpoint: END_POINT! });

export const getArticleById = async (contentId: string) =>
  await client.get({ endpoint: END_POINT!, contentId });
