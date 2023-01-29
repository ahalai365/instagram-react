import React, { useContext } from "react";
import { FormContext } from "../form/form.components";
import "./../submit/submit.styles.css";

type TSubmitProps = {
  children: (isInvalid: boolean) => JSX.Element
}

export const Submit = ({ children }: TSubmitProps) => {
  //@ts-ignore
  const { isInvalid } = useContext(FormContext);
  return children(isInvalid);
}