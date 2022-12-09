import React, { useContext, useState } from "react";
import "./profile.styles.css";
import "./../opacity/opacity.styles.css";
import jepa from "./../../images/jepa.jpg";
import { Modal } from "./../modal/modal.component";
import { ProfileDataContext } from "../../context";

type TProfileEditFormProps = {
  onRequestClose: () => void;
};

type AddCardForm = {
  onRequestClose: () => void;
};

function ProfileEditForm(props: TProfileEditFormProps): JSX.Element {
  const profileData = useContext(ProfileDataContext);
  const [newProfileData, setNewProfileData] = useState({
    name: profileData.data.name,
    description: profileData.data.description,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    
    setNewProfileData((prevValue) => {
      return {
        ...prevValue,
        [inputName]: inputValue,
      };
    });
  }

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    profileData.setData(newProfileData);
    props.onRequestClose();
  }

  return (
    <>
      <div className="popup__title">Редактировать профиль</div>

      <form className="form__edit" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="popup__input"
          placeholder="Укажате имя"
          value={newProfileData.name}
          onChange={handleChange}
        />
        {/* {!nameValid && <div className="popup__error" >ERROR</div>} */}
        <input
          type="text"
          name="description"
          className="popup__input"
          placeholder="Укажите деятильность"
          value={newProfileData.description}
          onChange={handleChange}
        />

        <button 
          name="submitProfile" 
          className="popup__submit opacity"
        >  
          Сохранить
        </button>
      </form>
    </>
  );
}

function AddCardForm(props: AddCardForm): JSX.Element {
  const [newCard, setNewCard] = useState({
    id: `${Math.floor(Math.random() * 1000)}`,
    likes: [],
    title: '',
    url: '',
    userId: 'currentUser',
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

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    console.log(newCard);
    props.onRequestClose();
  }
  
  return (
    <>
      <div className="popup__title">Добавить место</div>

      <form className="form__add" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="popup__input"
          placeholder="Укажате название"
          onChange={handleChange}
        />
        <input
          name="url"
          className="popup__input"
          placeholder="Укажите путь"
          onChange={handleChange}
        />
        <button
          name="submitPlace"
          type="submit"
          className="popup__submit opacity"
        >
          Сохранить
        </button>
      </form>
    </>
  );
}

export function Profile() {
  const profileData = useContext(ProfileDataContext);

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
