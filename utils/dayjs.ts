import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ja";

dayjs.extend(relativeTime);
dayjs.locale("ja");

export default dayjs;

export const dateFormat = (date: string) => dayjs(date).format("YYYY-MM-DD");
