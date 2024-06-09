import { RequestCreateNestedManyWithoutStudentsInput } from "./RequestCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  classField?: string | null;
  name?: string | null;
  requests?: RequestCreateNestedManyWithoutStudentsInput;
  rollNumber?: string | null;
};
