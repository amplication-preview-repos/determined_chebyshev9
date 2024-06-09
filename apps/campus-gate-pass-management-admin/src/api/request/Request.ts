import { JsonValue } from "type-fest";
import { Student } from "../student/Student";

export type Request = {
  createdAt: Date;
  id: string;
  requestLetter: JsonValue;
  status?: "Option1" | null;
  student?: Student | null;
  submissionDate: Date | null;
  updatedAt: Date;
};
