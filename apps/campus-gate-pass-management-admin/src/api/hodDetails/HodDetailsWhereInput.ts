import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HodDetailsWhereInput = {
  department?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
