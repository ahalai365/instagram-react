import React, { useState, useCallback, useContext, useEffect } from "react";
import "./form.styles.css";

export const FormContext = React.createContext({});

export const Form = ({ children, validators, onSubmit }) => {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isInvalid, setIsInvalid] = useState(true);

  const onChangeInput = useCallback((name, value) => {
    setFormValues(prevValues =>({
      ...prevValues,
      [name]: value,
    }));
  }, []);

// Вызвать onChange на каждый ввод в форму
  // useEffect(() => {
  // }, [formValues]);

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

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  const formContextValue = { 
    onChangeInput,
    isInvalid,
    formErrors,
  };

  return <form onSubmit={handleSubmit}>
    <FormContext.Provider value={ formContextValue }>
      {children}
    </FormContext.Provider>
  </form>;
}