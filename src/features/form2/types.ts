export type PlanType = "arcade" | "advanced" | "pro";
export type AddonType =
  | "onlineService"
  | "largerStorage"
  | "customizableProfile";
export type PaymentPeriodType = "monthly" | "yearly";

export type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  selectedPlan: PlanType;
  selectedAddons: AddonType[];
  paymentPeriod: PaymentPeriodType;
};
