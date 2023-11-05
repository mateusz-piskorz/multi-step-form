export const addons = {
  onlineService: {
    name: "onlineService",
    cost: { monthly: 1, yearly: 10 },
    description: {
      h2: "Online service",
      p: "Access to multiplayer games",
    },
  },
  largerStorage: {
    name: "largerStorage",
    cost: { monthly: 2, yearly: 20 },
    description: {
      h2: "Larger storage",
      p: "Extra 1TB of cloud save",
    },
  },
  customizableProfile: {
    name: "customizableProfile",
    cost: { monthly: 2, yearly: 20 },
    description: {
      h2: "Customizable Profile",
      p: "Custom theme on your profile",
    },
  },
} as const;

export const addonsArr = Object.keys(addons) as Array<keyof typeof addons>;
