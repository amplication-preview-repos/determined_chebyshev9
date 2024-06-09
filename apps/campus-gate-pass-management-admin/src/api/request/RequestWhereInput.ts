import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type RequestWhereInput = {
  id?: StringFilter;
  requestLetter?: JsonFilter;
  status?: "Option1";
  student?: StudentWhereUniqueInput;
  submissionDate?: DateTimeNullableFilter;
};
