import { FC } from 'react';

export type FormStep = {
  title: string;
  description: string;
  FormComponent: FC;
};

export type PlanType = 'arcade' | 'advanced' | 'pro';

export type Plan = { name: string; cost: { monthly: number; yearly: number } };

export type AddonType =
  | 'onlineService'
  | 'largerStorage'
  | 'customizableProfile';

export type PaymentPeriodType = 'monthly' | 'yearly';

export type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  selectedPlan: PlanType;
  selectedAddons: AddonType[];
  paymentPeriod: PaymentPeriodType;
};
