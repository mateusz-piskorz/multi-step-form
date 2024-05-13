import "@testing-library/jest-dom";

jest.mock("../src/features/Form/context", () => ({
  useForm: jest.fn(() => ({
    register: jest.fn(),
    handleSubmit: jest.fn(),
    watch: jest.fn((props) => {
      const obj = {
        paymentPeriod: "monthly",
        selectedAddons: ["onlineService"],
      } as any;
      console.log(obj[props]);
      return obj[props];
    }),
    setValue: jest.fn(),
  })),
}));
