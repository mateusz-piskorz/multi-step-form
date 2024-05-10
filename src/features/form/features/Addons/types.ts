export type AddonType =
  | "onlineService"
  | "largerStorage"
  | "customizableProfile";

export type Addon = {
  name: AddonType;
  cost: { monthly: number; yearly: number };
  title: string;
  description: string;
};
