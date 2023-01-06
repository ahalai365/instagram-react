import React, { useState } from "react";
import logo from "./../../images/logo.png";
import "./header.styles.css";
import { Modal } from "./../modal/modal.component";
import {
  signInValidator,
  signUpValidator,
} from "../../javascript/utils/validators";
import { Form } from "./../form/form.components";
import { Submit } from "./../submit/submit.components";
import { Field } from "./../field/field.component";

type TSignInForm = {
  onRequestClose?: () => void;
};

type TSignUPForm = {
  onRequestClose?: () => void;
};

export function SignInForm(props: TSignInForm) {
  const validators = signInValidator;

  function handleSubmit(signInData: Record<string, string>): void {
    console.log(signInData);
    props.onRequestClose();
  }

  return (
    <>
      <div className="popup__title">Вход</div>

      <Form validators={validators} onSubmit={handleSubmit}>
        <Field name="email">
          {({ errors, ...inputProps }) => {
            return (
              <div>
                <input
                  {...inputProps}
                  type="text"
                  className="popup__input"
                  placeholder="Введите e-mail"
                />
                {errors?.required && (
                  <div className="popup__error">Укажите почту</div>
                )}
                {errors?.validateEmail && (
                  <div className="popup__error">Это не почта</div>
                )}
              </div>
            );
          }}
        </Field>

        <Field name="password">
          {({ errors, ...inputProps }) => {
            return (
              <div>
                <input
                  {...inputProps}
                  type="password"
                  className="popup__input"
                  placeholder="Введите пароль"
                />
                {errors?.required && (
                  <div className="popup__error">Введите пароль</div>
                )}
              </div>
            );
          }}
        </Field>

        <Submit>
          {(isFormInvalid: boolean) => (
            <button
              disabled={isFormInvalid}
              type="submit"
              className={
                isFormInvalid
                  ? "popup__submit_disable popup__submit opacity"
                  : "popup__submit opacity"
              }
            >
              Войти
            </button>
          )}
        </Submit>
      </Form>
    </>
  );
}

export function SignUpForm(props: TSignUPForm) {
  const validators = signUpValidator;

  function handleSubmit(registerData: Record<string, string>): void {
    console.log(registerData);
    props.onRequestClose();
  }

  return (
    <>
      <div className="popup__title">Регистрация</div>

      <Form validators={validators} onSubmit={handleSubmit} >
        <Field name="email">
          {({ errors, ...inputProps }) => {
            return (
              <div>
                <input
                  {...inputProps}
                  type="text"
                  className="popup__input"
                  placeholder="Введите e-mail"
                />
                {errors?.required && (
                  <div className="popup__error">Укажите почту</div>
                )}
                {errors?.validateEmail && (
                  <div className="popup__error">Это не почта</div>
                )}
              </div>
            );
          }}
        </Field>

        <Field name="password" id="password">
          {({ errors, ...inputProps }) => {
            return (
              <div>
                <input
                  {...inputProps}
                  type="password"
                  className="popup__input"
                  placeholder="Введите пароль"
                />
                {errors?.required && (
                  <div className="popup__error">Введите пароль</div>
                )}
              </div>
            );
          }}
        </Field>

        <Field name="passwordRepit">
          {({ errors, ...inputProps }) => {
            return (
              <div>
                <input
                  {...inputProps}
                  type="password"
                  className="popup__input"
                  placeholder="Повторите пароль"
                />
                {errors?.required && (
                  <div className="popup__error">Повторите пароль</div>
                )}
                {errors?.passwordRepit && (
                  <div className="popup__error">Пароль не совпадает</div>
                )}
              </div>
            );
          }}
        </Field>

        <Field name="name">
          {({ errors, ...inputProps }) => {
            return (
              <div>
                <input
                  {...inputProps}
                  type="text"
                  className="popup__input"
                  placeholder="Введите имя"
                />
                {errors?.required && (
                  <div className="popup__error">Укажите имя</div>
                )}
                {errors?.minLength && (
                  <div className="popup__error">Имя слишком короткое</div>
                )}
                {errors?.maxLength && (
                  <div className="popup__error">Имя слишком длинное</div>
                )}
              </div>
            );
          }}
        </Field>

        <Field name="description">
          {({ errors, ...inputProps }) => {
            return (
              <div>
                <input
                  {...inputProps}
                  type="text"
                  className="popup__input"
                  placeholder="Введите профессию"
                />
                {errors?.required && (
                  <div className="popup__error">Укажите деятельность</div>
                )}
                {errors?.maxLength && (
                  <div className="popup__error">Название слишком длинное</div>
                )}
              </div>
            );
          }}
        </Field>

        <Field name="avatar">
          {({ errors, ...inputProps }) => {
            return (
              <div>
                <input
                  {...inputProps}
                  type="text"
                  className="popup__input"
                  placeholder="Укажите путь к аватару"
                />
                {errors?.required && (
                  <div className="popup__error">Укажите адрес</div>
                )}
                {errors?.validateRegExp && (
                  <div className="popup__error">Это не URL</div>
                )}
              </div>
            );
          }}
        </Field>

        <Submit>
          {(isFormInvalid: boolean) => (
            <button
              disabled={isFormInvalid}
              type="submit"
              className={
                isFormInvalid
                  ? "popup__submit_disable popup__submit opacity"
                  : "popup__submit opacity"
              }
            >
              Сохранить
            </button>
          )}
        </Submit>
      </Form>
    </>
  );
}

export function Header() {
  const [signInIsOpen, setSignInIsOpen] = useState(false);
  const [registerIsOpen, setRegisterIsOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={signInIsOpen}
        onRequestClose={() => setSignInIsOpen(false)}
      >
        <SignInForm onRequestClose={() => setSignInIsOpen(false)} />
      </Modal>
      <Modal
        isOpen={registerIsOpen}
        onRequestClose={() => setRegisterIsOpen(false)}
      >
        <SignUpForm onRequestClose={() => setSignInIsOpen(false)} />
      </Modal>
      <header className="header">
        <img className="logo" src={logo} />
        <div className="account">
          <a
            className="account__sign-in opacity account_active"
            onClick={() => {
              setSignInIsOpen(true);
            }}
          >
            Вход
          </a>
          <a className="account__auth"></a>
          <span>&nbsp;/&nbsp;</span>
          <a
            className="account__registration opacity account_active"
            onClick={() => {
              setRegisterIsOpen(true);
            }}
          >
            Зарегистрироваться
          </a>
          <a className="account__exit opacity">Выход</a>
        </div>
      </header>
    </>
  );
}
