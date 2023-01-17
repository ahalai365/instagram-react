import React, { useContext, useState } from "react";
import { FormContext } from "../form/form.components";
import "./../field/field.styles.css";

type TFieldChildProps = {
  type: string;
  name: string;
  value: string;
  errors: Record<string, boolean>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
}

type TFieldProps = {
  name: string;
  defaultValue?: string;
  children: (args: TFieldChildProps) => JSX.Element;
  id?: string;
}

export const Field = ({ children, name, defaultValue, id }: TFieldProps) => {
  const [value, setValue] = useState(defaultValue ? defaultValue : "");
  //@ts-ignore
  const { onChangeInput, formErrors } = useContext(FormContext);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChangeInput(name, e.target.value);
    setValue(e.target.value);
  }
  return (
    <>
      {children({
        type: "text",
        name,
        value,
        onChange,
        id,
        errors: formErrors[name],
      })}
    </>
  );
};
