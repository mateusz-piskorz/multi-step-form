import React, { useContext, ReactNode, FC } from "react";
import { FormData } from "../types";
import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  useForm as useFormHook,
} from "react-hook-form";

type ContextType = {
  register: UseFormRegister<FormData>;
  handleSubmit: UseFormHandleSubmit<FormData, undefined>;
  watch: UseFormWatch<FormData>;
  setValue: UseFormSetValue<FormData>;
};

const Context = React.createContext<ContextType | null>(null);

export const useForm = (folderId?: string) => {
  const context = useContext(Context);
  if (context === null) {
    throw new Error("useForm context is undefined");
  } else {
    return context;
  }
};

export const FormProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { register, handleSubmit, watch, setValue } = useFormHook<FormData>({
    defaultValues: {
      paymentPeriod: "monthly",
      selectedPlan: "arcade",
      selectedAddons: ["onlineService", "largerStorage"],
    },
  });

  return (
    <Context.Provider value={{ register, handleSubmit, watch, setValue }}>
      {children}
    </Context.Provider>
  );
};
