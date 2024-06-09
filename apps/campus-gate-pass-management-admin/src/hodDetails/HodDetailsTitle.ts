import { HodDetails as THodDetails } from "../api/hodDetails/HodDetails";

export const HODDETAILS_TITLE_FIELD = "name";

export const HodDetailsTitle = (record: THodDetails): string => {
  return record.name?.toString() || String(record.id);
};
