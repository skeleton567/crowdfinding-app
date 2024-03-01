import { FormEvent, ReactNode } from "react";
import { Path, RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

export type ModalWrapperProps = {
  children: ReactNode;
  isOpen: boolean;
  isChoiceVisible: boolean;
  isThankYouVisible: boolean;
  modalHandler: () => void;
  submitHandler: (event: FormEvent<HTMLInputElement>) => void;
  closeModalHandler: () => void;
  register: <TFieldValues = Record<string, any>>(
    name: Path<TFieldValues>,
    options?: RegisterOptions
  ) => UseFormRegisterReturn;
};
