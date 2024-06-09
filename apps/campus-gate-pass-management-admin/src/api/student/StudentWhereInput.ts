import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RequestListRelationFilter } from "../request/RequestListRelationFilter";

export type StudentWhereInput = {
  classField?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  requests?: RequestListRelationFilter;
  rollNumber?: StringNullableFilter;
};
