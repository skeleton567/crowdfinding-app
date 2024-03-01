import { MouseEvent } from "react";
import { Path, RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

export type CardProps = {
  title: string;
  pledge?: string;
  desc: string;
  amount?: number;
  radio?: string;
  radioValue?: string;
  showInputHandler?: (event: MouseEvent<HTMLInputElement>) => void;
  register?: <TFieldValues = Record<string, any>>(
    name: Path<TFieldValues>,
    options?: RegisterOptions
  ) => UseFormRegisterReturn;
};
