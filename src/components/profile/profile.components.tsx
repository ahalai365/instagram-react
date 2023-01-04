import React, { useContext, useState } from "react";
import "./profile.styles.css";
import "./../modal/modal.styles.css";
import "./../opacity/opacity.styles.css";
import jepa from "./../../images/jepa.jpg";
import { Modal } from "./../modal/modal.component";
import { ProfileDataContext } from "../../context";
import { profileEditValidator, addCardValidator } from "./../../javascript/utils/validators";
import { Form } from "./../form/form.components";
import { Submit } from "./../submit/submit.components";
import { Field } from "./../field/field.component";
import { TProfileData } from "./../../types";

type TProfileEditFormProps = {
  onRequestClose: () => void;
  setNewProfileData: (data: TProfileData) => void;
};

type AddCardForm = {
  onRequestClose: () => void;
};

function ProfileEditForm(props: TProfileEditFormProps): JSX.Element {
  const validators = profileEditValidator;

  const profileData = useContext(ProfileDataContext);
  const [newProfileData, setNewProfileData] = useState({
    name: profileData.data.name,
    description: profileData.data.description,
  });

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   const inputName = e.target.name;
  //   const inputValue = e.target.value;

  //   setNewProfileData((prevValue) => {
  //     return {
  //       ...prevValue,
  //       [inputName]: inputValue,
  //     };
  //   });
  // }

  function handleSubmit(newProfileData: Record<string, string>): void {
    setNewProfileData(newProfileData);
    props.onRequestClose();
  }

  return (
    <>
      <div className="popup__title">Редактировать профиль</div>

      <Form validators={validators} onSubmit={handleSubmit}>
        <Field name="name" defaultValue={profileData.data}>
          {({ errors, value, ...inputProps }) => {
            return (
              <div>
                <input
                  // onChange={(e) => {
                  //   handleChange(e);
                  //   onChange(setNewProfileData(e.target.value));
                  // }}
                  {...inputProps}
                  type="text"
                  className="popup__input"
                  placeholder="Укажате имя"
                  value={value}
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

        <Field name="description" defaultValue={profileData.data}>
          {({ errors, value, ...inputProps }) => {
            return (
              <div>
                <input
                  // onChange={(e) => {
                  //   handleChange(e);
                  //   onChange(e.target.value);
                  // }}
                  {...inputProps}
                  type="text"
                  className="popup__input"
                  placeholder="Укажите деятельность"
                  value={value}
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

function AddCardForm(props: AddCardForm): JSX.Element {
  const validators = addCardValidator;

  const [newCard, setNewCard] = useState({
    id: `${Math.floor(Math.random() * 1000)}`,
    likes: [],
    title: "",
    url: "",
    userId: "currentUser",
  });
  
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setNewCard((prevValue) => {
      return {
        ...prevValue,
        [inputName]: inputValue,
      };
    });
  }

  function handleSubmit(): void {
    console.log(newCard);
    props.onRequestClose();
  }

  return (
    <>
      <div className="popup__title">Добавить место</div>

      <Form validators={validators} onSubmit={handleSubmit}>
        <Field name="title">
          {({ onChange, errors, ...inputProps }) => {
            return (
              <div>
                <input
                  onChange={(e) => {
                    handleChange(e);
                    onChange(e.target.value);
                  }}
                  {...inputProps}
                  type="text"
                  className="popup__input"
                  placeholder="Укажате название"
                />
                {errors?.required && (
                  <div className="popup__error">Укажите название</div>
                )}
                {errors?.maxLength && (
                  <div className="popup__error">Название слишком длинное</div>
                )}
              </div>
            );
          }}
        </Field>

        <Field name="url">
          {({ onChange, errors, ...inputProps }) => {
            return (
              <div>
                <input
                  onChange={(e) => {
                    handleChange(e);
                    onChange(e.target.value);
                  }}
                  {...inputProps}
                  type="text"
                  className="popup__input"
                  placeholder="Укажите адрес"
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

export function Profile() {
  const profileData = useContext(ProfileDataContext);
  // const [newProfileData, setNewProfileData] = useState({
  //   name: profileData.data.name,
  //   description: profileData.data.description,
  // });

  const [editIsOpen, setEditIsOpen] = useState(false);
  const [addCardisOpen, setAddCardisOpen] = useState(false);

  return (
    <>
      <Modal isOpen={editIsOpen} onRequestClose={() => setEditIsOpen(false)}>
        <ProfileEditForm onRequestClose={() => setEditIsOpen(false)}
        //  setNewProfileData={setNewProfileData}
         />
      </Modal>

      <Modal
        isOpen={addCardisOpen}
        onRequestClose={() => setAddCardisOpen(false)}
      >
        <AddCardForm onRequestClose={() => setEditIsOpen(false)} />
      </Modal>

      <section className="profile profile_active">
        <img className="profile__avatar" src={jepa} />
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{profileData.data.name}</h1>
            <button
              className="profile__edit opacity"
              onClick={() => {
                setEditIsOpen(true);
              }}
            ></button>
          </div>
          <h2 className="profile__subtitle">{profileData.data.description}</h2>
        </div>
        <button
          className="profile__add opacity"
          onClick={() => {
            setAddCardisOpen(true);
          }}
        ></button>
      </section>
    </>
  );
}
