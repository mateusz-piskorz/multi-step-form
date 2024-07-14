import { FormStep } from '../types/form';
import { PersonalInfo } from '../components/organisms/PersonalInfo';
import { SelectPlan } from '../components/organisms/SelectPlan';

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
];

export const FORM_STEPER_STEPS = [
  'Your Info',
  'Select Plan',
  'Add-ons',
  'Summary',
];
