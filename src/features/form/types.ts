import { PaymentPeriodType } from "./features/SelectPlan";
export type { AddOnType } from "./components/Steps/AddOns/types";

export type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  plan: "arcade" | "advanced" | "pro";
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
  paymentPeriod: PaymentPeriodType;
};
