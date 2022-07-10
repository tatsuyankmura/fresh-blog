/**
 * Parse query.
 *
 * @param {object} queries
 * @return {string} queryString
 */
import { qs } from "qs";
import { isObject } from "./isCheckValue.ts";
import { MicroCMSQueries } from "../types.ts";

export const parseQuery = (queries: MicroCMSQueries): string => {
  if (!isObject<MicroCMSQueries>(queries)) {
    throw new Error("queries is not object");
  }
  const queryString = qs.stringify(queries, { arrayFormat: "comma" });

  return queryString;
};
