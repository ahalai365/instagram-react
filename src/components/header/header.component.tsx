import React, { useContext, useState } from "react";
import logo from "./../../images/logo.png";
import "./header.styles.css";
import { Modal } from "./../modal/modal.component";
import { UserDataContext, LoginDataContext } from "./../../context";

type TSignInForm = {
  onRequestClose: () => void;
};

type TRegisterForm = {
  onRequestClose: () => void;
};

function SignInForm(props: TSignInForm) {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setSignInData((prevValue) => {
      return {
        ...prevValue,
        [inputName]: inputValue,
      };
    });
  }

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    console.log(signInData);
    props.onRequestClose();
  }

  return (
    <>
      <div className="popup__title">Вход</div>

      <form className="form__sign-in" onSubmit={handleSubmit}>
        <input
          name="email"
          className="popup__input"
          placeholder="Введите e-mail"
          onChange={handleChange}
          value={signInData.email}
        />
        <input
          type="password"
          name="password"
          className="popup__input"
          placeholder="Введите пароль"
          onChange={handleChange}
          value={signInData.password}
        />
        <button
          name="submitPlace"
          type="submit"
          className="popup__sign-in opacity popup__submit"
        >
          Войти
        </button>
      </form>
    </>
  );
}

function RegisterForm(props: TRegisterForm) {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    passwordRepit: "",
    name: "",
    description: "",
    avatar: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setRegisterData((prevValue) => {
      return {
        ...prevValue,
        [inputName]: inputValue,
      };
    });
  }

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    console.log(registerData);
    props.onRequestClose();
  }

  return (
    <>
      <div className="popup__title">Регистрация</div>

      <form className="form__registration" onSubmit={handleSubmit}>
        <input
          name="email"
          className="popup__input"
          placeholder="Введите e-mail"
          onChange={handleChange}
          value={registerData.email}
        />
        <input
          type="password"
          name="password"
          className="popup__input"
          placeholder="Введите пароль"
          onChange={handleChange}
          value={registerData.password}
        />
        <input
          type="password"
          name="passwordRepit"
          className="popup__input"
          placeholder="Повторите пароль"
          onChange={handleChange}
          value={registerData.passwordRepit}
        />
        <input
          type="text"
          name="name"
          className="popup__input"
          placeholder="Введите имя"
          onChange={handleChange}
          value={registerData.name}
        />
        <input
          type="text"
          name="description"
          className="popup__input"
          placeholder="Введите профессию"
          onChange={handleChange}
          value={registerData.description}
        />
        <input
          name="avatar"
          className="popup__input"
          placeholder="Укажите путь к аватару"
          onChange={handleChange}
          value={registerData.avatar}
        />
        <button
          name="submitPlace"
          type="submit"
          className="popup__registration opacity popup__submit"
        >
          Зарегистрироваться
        </button>
      </form>
    </>
  );
}

export function Header() {
  const userData = useContext(UserDataContext);
  const loginData = useContext(LoginDataContext);

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
        <RegisterForm onRequestClose={() => setSignInIsOpen(false)} />
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
