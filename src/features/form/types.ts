import { plansArr } from "./components/Steps/SelectPlan/data";
export type { AddOnType } from "./components/Steps/AddOns/types";

export type SelectedPlan = (typeof plansArr)[number];
export type PaymentPeriod = "monthly" | "yearly";

export type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  plan: "arcade" | "advanced" | "pro";
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
  paymentPeriod: PaymentPeriod;
};
