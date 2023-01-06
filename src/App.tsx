import React, { useEffect, useState } from "react";
import "./App.css";

import { api } from "./javascript/utils/api";

import { TCardData, TProfileData } from "./types";
import { Page } from "./components/page/page.component";
import { Header } from "./components/header/header.component";
import { Content } from "./components/content/content.components";
import { Elements } from "./components/elements/elements.components";
import { Footer } from "./components/footer/footer.components";
import { Profile } from "./components/profile/profile.components";
import { Modal } from "./components/modal/modal.component"
import { SignInForm } from "./components/header/header.component";
import { ProfileDataContext, CardArrContext, NewCardContext } from "./context";

function App() {
  const [cardsArr, setCardsArr] = useState<Array<TCardData>>([]);
  const [profileData, setProfileData] = useState<TProfileData>({
    name: "Заглушка",
    description: "Заглушка",
  });
  const [newCardData, setNewCardData] = useState<TCardData>({
    id: `${Math.floor(Math.random() * 1000)}`,
    likes: [],
    title: "",
    url: "",
    userId: "currentUser",
  });

  useEffect(() => {
    api.getAllcards().then((response) => {
      if (response) {
        setCardsArr(response);
      }
    });
  }, []);

  // function onLikeCard(cardId: TCardData["id"]) {
  //   const newCards = cardsArr.map((card: TCardData) => {
  //     if (card.id !== cardId) {
  //       return card;
  //     }
  //     return {
  //       ...card,
  //       isLiked: !card.likes,
  //     };
  //   });

  //   setCardsArr(newCards);
  // }

  return (
    <ProfileDataContext.Provider
      value={{
        data: profileData,
        setData: (data) => {
          setProfileData(data);
        },
      }}
    >
      <CardArrContext.Provider
        value={{
          data: cardsArr,
          setCardsArr: (data) => {
            setCardsArr(data);
          },
        }}
      >
        <NewCardContext.Provider
          value={{
            data: newCardData,
            setData: (data) => {
              setNewCardData(data);
            },
          }}
        >
          <Page>
            <Header />
            <Content>
              <Modal isOpen={true} notAutorized={true}>
                <SignInForm/>
              </Modal>
              {/* <Profile />
              <Elements /> */}
            </Content>
            <Footer />
          </Page>
        </NewCardContext.Provider>
      </CardArrContext.Provider>
    </ProfileDataContext.Provider>
  );
}

export default App;
