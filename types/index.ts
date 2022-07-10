import { MicroCMSContentId, MicroCMSDate } from "@microcms";

export type Article = MicroCMSContentId &
  MicroCMSDate & {
    title: string;
    body: string;
  };
