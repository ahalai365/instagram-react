import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "../form/form.components";
import "./../field/field.styles.css";

export const Field = ({ children, name, defaultValue }) => {
  const [value, setValue] = useState(defaultValue ? defaultValue : '');
  const { onChangeInput, formErrors } = useContext(FormContext);
  
  useEffect(() => {
    onChangeInput(name, value);
  }, [value, name, onChangeInput]);
  return <>
    {children({
      type: "text",
      name,
      value,
      onChange: setValue,
      errors: formErrors[name]
    })}
  </>
}