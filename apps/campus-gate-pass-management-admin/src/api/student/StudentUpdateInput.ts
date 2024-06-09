import { RequestUpdateManyWithoutStudentsInput } from "./RequestUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  classField?: string | null;
  name?: string | null;
  requests?: RequestUpdateManyWithoutStudentsInput;
  rollNumber?: string | null;
};
