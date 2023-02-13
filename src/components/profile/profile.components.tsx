import React, { createContext, useContext, useEffect, useState } from "react";
import "./profile.styles.css";
import "./../modal/modal.styles.css";
import "./../opacity/opacity.styles.css";
import jepa from "./../../images/jepa.jpg";
import { Modal } from "./../modal/modal.component";
import { UserDataContext, NewCardContext, CardArrContext } from "./../../context";
import {
  profileEditValidator,
  addCardValidator,
} from "../../javascript/validators";
import { Form } from "./../form/form.components";
import { Submit } from "./../submit/submit.components";
import { Field } from "./../field/field.component";
import { TCardData, TUserData } from "./../../types";
import { api } from "../../javascript/api";

type TProfileEditFormProps = {
  onRequestClose: () => void;
};

type AddCardForm = {
  onRequestClose: () => void;
};

function ProfileEditForm(props: TProfileEditFormProps): JSX.Element {
  const validators = profileEditValidator;
  const profileData = useContext(UserDataContext);

  function handleSubmit(newProfileData: TUserData): void {
    profileData.setData(newProfileData);
    if (newProfileData) {
      api.updateUser(newProfileData);
    }
    props.onRequestClose();
    
  }

  return (
    <>
      <div className="popup__title">Редактировать профиль</div>
      <Form
        validators={validators}
        // @ts-ignore
        onSubmit={handleSubmit}
        defaultValue={profileData ? profileData.data : null}
      >
        <Field name="name" defaultValue={profileData.data?.name}>
          {({ errors, value, ...inputProps }) => {
            return (
              <div>
                <input
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

        <Field name="description" defaultValue={profileData.data?.description}>
          {({ errors, value, ...inputProps }) => {
            return (
              <div>
                <input
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
  const newCardData = useContext(NewCardContext);

  function handleSubmit(newCard: TCardData): void {
    newCardData.setData(newCard);
    if (newCardData) {
      api.createCard(newCard);
    }
    props.onRequestClose();
  }

  

  return (
    <>
      <div className="popup__title">Добавить место</div>

      {/* @ts-ignore */}
      <Form validators={validators} onSubmit={handleSubmit}>
        <Field name="title">
          {({ errors, ...inputProps }) => {
            return (
              <div>
                <input
                  {...inputProps}
                  type="text"
                  className="popup__input"
                  placeholder="Укажате название"
                />
                {errors?.required && (
                  <div className="popup__error">Укажите название</div>
                )}
                {errors?.minLength && (
                  <div className="popup__error">Название слишком короткое</div>
                )}
                {errors?.maxLength && (
                  <div className="popup__error">Название слишком длинное</div>
                )}
              </div>
            );
          }}
        </Field>

        <Field name="url">
          {({ errors, ...inputProps }) => {
            return (
              <div>
                <input
                  {...inputProps}
                  type="text"
                  className="popup__input"
                  placeholder="Укажите адрес"
                />
                {errors?.required && (
                  <div className="popup__error">Укажите адрес</div>
                )}
                {errors?.validateUrl && (
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
                  ? "popup__submit popup__submit_disable opacity"
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
  const profileData = useContext(UserDataContext);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [addCardisOpen, setAddCardisOpen] = useState(false);

  return (
    <>
      <Modal isOpen={editIsOpen} onRequestClose={() => setEditIsOpen(false)}>
        <ProfileEditForm onRequestClose={() => setEditIsOpen(false)} />
      </Modal>

      <Modal
        isOpen={addCardisOpen}
        onRequestClose={() => setAddCardisOpen(false)}
      >
        <AddCardForm onRequestClose={() => setAddCardisOpen(false)} />
      </Modal>

      <section className="profile profile_active">
        <img className="profile__avatar" src={jepa} />
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{profileData.data?.name}</h1>
            <button
              className="profile__edit opacity"
              onClick={() => {
                setEditIsOpen(true);
              }}
            ></button>
          </div>
          <h2 className="profile__subtitle">{profileData.data?.description}</h2>
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
