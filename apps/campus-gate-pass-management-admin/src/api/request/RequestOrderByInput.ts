import { SortOrder } from "../../util/SortOrder";

export type RequestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  requestLetter?: SortOrder;
  status?: SortOrder;
  studentId?: SortOrder;
  submissionDate?: SortOrder;
  updatedAt?: SortOrder;
};
