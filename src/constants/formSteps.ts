import { FormStep } from '../types/form';
import { PersonalInfo } from '@/components/form/organisms/PersonalInfo';
import { SelectPlan } from '@/components/form/organisms/SelectPlan';
import { Addons } from '@/components/form/organisms/Addons';
import { Summary } from '@/components/form/organisms/Summary';

export const FORM_STEPS: FormStep[] = [
  {
    title: 'Personal Info',
    description: 'Please provide your name, email address, and phone number.',
    FormComponent: PersonalInfo,
  },
  {
    title: 'Select your plan',
    description: 'You have the option of monthly or yearly billing.',
    FormComponent: SelectPlan,
  },
  {
    title: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming experience.',
    FormComponent: Addons,
  },
  {
    title: 'Finishing up',
    description: 'Double-check everything looks OK before confirming.',
    FormComponent: Summary,
  },
];

export const FORM_STEPER_STEPS = [
  'Your Info',
  'Select Plan',
  'Add-ons',
  'Summary',
];
