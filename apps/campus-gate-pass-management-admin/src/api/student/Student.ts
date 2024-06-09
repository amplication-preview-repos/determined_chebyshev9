import { Request } from "../request/Request";

export type Student = {
  classField: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  requests?: Array<Request>;
  rollNumber: string | null;
  updatedAt: Date;
};
