import "@testing-library/jest-dom";

jest.mock("../src/features/Form/context", () => ({
  useForm: jest.fn(() => ({
    register: jest.fn(),
    handleSubmit: jest.fn(),
    watch: jest.fn((props) => {
      const obj = {
        paymentPeriod: "monthly",
        selectedAddons: ["onlineService"],
        selectedPlan: "arcade",
      } as any;

      return obj[props];
    }),
    setValue: jest.fn(),
  })),
}));
