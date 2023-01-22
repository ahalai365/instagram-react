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
  const [isLiked, setIsLiked] = useState(false);
  const [previewIsOpen, setPreviewIsOpen] = useState(false);
  
  const cardArr = useContext(CardArrContext);

  function deleteCard() {
    const cardId = props.card.id;

    api.deleteCard(cardId)
    api.getAllcards().then((response) => {
      if (response) {
        cardArr.setCardsArr(response);
      }
    });
  }

  //   useEffect(() => {
  //     if (!isLiked) {
  //       return;
  //     }
  //   }, [isLiked]);

  //   function handleLike() {
  //     props.onLike(props.card.id);
  //   }

//   function onPreview(card: TCardData): void {
//     setPreviewCard(card);
//     previewSetIsOpen(true);
//   }

//   function handlePreview(): void {
//     props.onPreview(props.card);
//   }

  return (
    <>
      <Modal
        contentClassName="popup__content_view"
        isOpen={previewIsOpen}
        onRequestClose={() => setPreviewIsOpen(false)}
      >
        <PreviewCard url={props.card.url}/>
      </Modal>

      <div className="element">
        <img
          className="element__img"
          src={props.card.url}
          onClick={() => setPreviewIsOpen(true)}
        />
        <img className="element__delete" src={trashBasket} onClick={deleteCard}/>
        <div className="element__footer">
          <h3 className="element__title">{props.card.title}</h3>
          <span className="element__count">0</span>
          <img
            className={`element__like opacity ${
              props.card.likes ? "element__like_active" : ""
            }`}
            // onClick={handleLike}
            src={dislike}
          />
        </div>
      </div>
    </>
  );
}
