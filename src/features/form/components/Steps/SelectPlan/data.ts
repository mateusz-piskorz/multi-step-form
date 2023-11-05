export const plans = {
  arcade: { name: "arcade", cost: { monthly: 9, yearly: 90 } },
  advanced: { name: "advanced", cost: { monthly: 12, yearly: 120 } },
  pro: { name: "pro", cost: { monthly: 15, yearly: 150 } },
} as const;

export const plansArr = Object.keys(plans) as Array<keyof typeof plans>;
