import React, { useContext } from "react";
import { FormContext } from "../form/form.components";
import "./../submit/submit.styles.css";

export const Submit = ({ children }) => {
  const { isInvalid } = useContext(FormContext);
  return children(isInvalid);
}