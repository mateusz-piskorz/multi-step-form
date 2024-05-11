import { PaymentPeriodType } from "./features/SelectPlan";
import { AddonType } from "./features/Addons";

export type PlanType = "arcade" | "advanced" | "pro";

export type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  plan: PlanType;
  addons: AddonType[];
  paymentPeriod: PaymentPeriodType;
};
