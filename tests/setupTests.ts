import '@testing-library/jest-dom';
import { useContextFormMockedValues } from './constants';

jest.mock('../src/context/form', () => ({
  useContextForm: jest.fn(() => useContextFormMockedValues),
}));
