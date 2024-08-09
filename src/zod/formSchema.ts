import { z } from 'zod';
import { PLANS } from '../constants/plans';

export const personalInfoSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phoneNumber: z.string().min(9),
});

export const planSchema = z.object({
  plan: z.string().refine((val) => PLANS.find((plan) => plan.name === val)),
  yearly: z.boolean(),
});

export const addonsSchema = z.object({
  onlineService: z.boolean(),
  largerStorage: z.boolean(),
  customizableProfile: z.boolean(),
});

export const formSchema = z.object({
  personalInfo: personalInfoSchema,
  plan: planSchema,
  addons: addonsSchema,
});
