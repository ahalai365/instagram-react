import React, { useContext, useEffect, useState } from "react";
import trashBasket from "./../../images/trash-basket.png";
import dislike from "./../../images/dislike.png";
import "./element.styles.css";
import { TCardData } from "./../../types";
import { Modal } from "./../modal/modal.component";
import { api } from "../../javascript/api";
import { CardArrContext } from "./../../context";

type TElementProps = {
  card: TCardData;
};

type TPreviewCardProps = {
  url?: string;
};

function PreviewCard(props: TPreviewCardProps) {
  return (
    <>
      <img className="popup__img" src={props.url} />
    </>
  );
}

export function Element(props: TElementProps) {
  const [previewIsOpen, setPreviewIsOpen] = useState(false);
  const [likes, setLikes] = useState(props.card.likes);

  const cardArr = useContext(CardArrContext);

  function deleteCard() {
    const cardId = props.card.id;

    api.deleteCard(cardId);
    api.getAllcards().then((response) => {
      if (response) {
        cardArr.setCardsArr(response);
      }
    });
  }

  function handleLike() {
    api.likeCard(props.card.id).then((responseBody) => {
      if (responseBody.success) {
        setLikes(responseBody.card.likes);
      }
    });
  }

  return (
    <>
      <Modal
        contentClassName="popup__content_view"
        isOpen={previewIsOpen}
        onRequestClose={() => setPreviewIsOpen(false)}
      >
        <PreviewCard url={props.card.url} />
      </Modal>

      <div className="element">
        <img
          className="element__img"
          src={props.card.url}
          onClick={() => setPreviewIsOpen(true)}
        />
        <img
          className="element__delete"
          src={trashBasket}
          onClick={deleteCard}
        />
        <div className="element__footer">
          <h3 className="element__title">{props.card.title}</h3>
          <span className="element__count">{likes.length}</span>
          <img
            onClick={handleLike}
            className={`element__like opacity ${
              likes.length > 0 ? "element__like_active" : ""
            }`}
            src={dislike}
          />
        </div>
      </div>
    </>
  );
}
