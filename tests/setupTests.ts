import '@testing-library/jest-dom';

jest.mock('../src/features/Form/context', () => ({
  useForm: jest.fn(() => ({
    register: jest.fn(),
    handleSubmit: jest.fn(),
    watch: jest.fn((props) => {
      const obj = {
        paymentPeriod: 'monthly',
        selectedAddons: ['onlineService'],
        selectedPlan: 'arcade',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;

      return obj[props];
    }),
    setValue: jest.fn(),
  })),
}));
