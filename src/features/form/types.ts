import { plansArr } from "./components/Steps/SelectPlan/data";
import { addonsArr } from "./components/Steps/AddOns/data";

export type SelectedPlan = (typeof plansArr)[number];
export type AvailableAddons = (typeof addonsArr)[number];
export type PaymentPeriod = "monthly" | "yearly";
