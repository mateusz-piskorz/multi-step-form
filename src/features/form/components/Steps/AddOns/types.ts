export type AddOnType =
  | "onlineService"
  | "largerStorage"
  | "customizableProfile";

export type AddOn = {
  name: AddOnType;
  cost: { monthly: number; yearly: number };
  title: string;
  description: string;
};
