import { FormEvent } from "react";
import { Path, RegisterOptions, UseFormRegisterReturn } from "react-hook-form";
import { PledgeType } from "./PledgeType";

export type BackModalProps = {
  modalHandler?: () => void;
  submitHandler: (event: FormEvent<HTMLInputElement>) => void;
  register: <TFieldValues = Record<string, any>>(
    name: Path<TFieldValues>,
    options?: RegisterOptions
  ) => UseFormRegisterReturn;
  data: PledgeType;
};
