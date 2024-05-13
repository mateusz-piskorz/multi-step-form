import { AddonType } from "../../types";

export type Addon = {
  name: AddonType;
  cost: { monthly: number; yearly: number };
  title: string;
  description: string;
};
