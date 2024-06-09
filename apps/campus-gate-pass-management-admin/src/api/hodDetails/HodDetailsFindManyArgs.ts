import { HodDetailsWhereInput } from "./HodDetailsWhereInput";
import { HodDetailsOrderByInput } from "./HodDetailsOrderByInput";

export type HodDetailsFindManyArgs = {
  where?: HodDetailsWhereInput;
  orderBy?: Array<HodDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
