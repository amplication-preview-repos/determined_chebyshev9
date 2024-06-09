import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  classField?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  rollNumber?: SortOrder;
  updatedAt?: SortOrder;
};
