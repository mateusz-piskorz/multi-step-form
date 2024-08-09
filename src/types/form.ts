import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

export type FormStep = {
  title: string;
  description: string;
  FormComponent: () => JSX.Element;
};

export type Plan = {
  name: PlanType;
  cost: Cost;
};

export type Addon = {
  name: AddonType;
  cost: Cost;
  description: string;
  title: string;
};

export type PaymentPeriod = 'monthly' | 'yearly';

export interface FieldProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errorMessage?: string;
}

type Cost = { monthly: number; yearly: number };
type PlanType = 'arcade' | 'advanced' | 'pro';
type AddonType = 'onlineService' | 'largerStorage' | 'customizableProfile';
