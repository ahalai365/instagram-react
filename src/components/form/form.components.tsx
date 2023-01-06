import React, { useState, useCallback, useEffect } from "react";
import "./form.styles.css";
import { TValidators } from "./../../javascript/utils/validators"
import { TProfileData } from "../../types";

type TFormProps = {
  children: JSX.Element | Array<JSX.Element>;
  validators: TValidators;
  defaultValue?: TProfileData;
  onSubmit: (values: Record<string, string>) => void;
}

export const FormContext = React.createContext({});

export const Form = ({ children, validators, onSubmit, defaultValue }: TFormProps) => {
  const [formValues, setFormValues] = useState(defaultValue ? defaultValue : {});
  const [formErrors, setFormErrors] = useState<Record<string, Record<string, boolean>>>({});
  const [isInvalid, setIsInvalid] = useState(true);

  const onChangeInput = useCallback((name: string, value: string): void => {
    setFormValues(prevValues =>({
      ...prevValues,
      [name]: value,
    }));
  }, []);

// Вызвать валидации на каждый ввод в форму
  useEffect(() => {
    const formKeys = Object.keys(formValues);

    const allErrors = formKeys.map((key) => {
      const valueByKey = formValues[key];
      if (!validators[key]) {
        return {};
      }

      const errors = Object.entries(validators[key]).map(([errorKey, validatorFn]) => {
       return { [errorKey]: validatorFn(valueByKey) }; 
      }).reduce((acc, item) => ({...acc, ...item}), {});

      return { [key]: errors };
    }).reduce((acc, item) => ({ ...acc, ...item }), {});
   
    setFormErrors(allErrors);
  }, [formValues]);

  useEffect(() => {
    for (const fieldKey in formErrors) {
      const keyErrors = formErrors[fieldKey];
      for (const errorKey in keyErrors) {
        if (keyErrors[errorKey] === true) {
          return setIsInvalid(true);
        }  
      }
    }

    setIsInvalid(false);
  }, [formErrors, setIsInvalid]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(formValues);
  }

  const formContextValue = { 
    onChangeInput,
    isInvalid,
    formErrors,
  };

  return <form onSubmit={handleSubmit} >
    <FormContext.Provider value={ formContextValue }>
      {children}
    </FormContext.Provider>
  </form>;
}