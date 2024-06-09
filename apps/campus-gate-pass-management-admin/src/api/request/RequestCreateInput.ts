import { InputJsonValue } from "../../types";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type RequestCreateInput = {
  requestLetter?: InputJsonValue;
  status?: "Option1" | null;
  student?: StudentWhereUniqueInput | null;
  submissionDate?: Date | null;
};
