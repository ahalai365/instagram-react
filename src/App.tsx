import React, { useEffect, useState } from "react";
import "./App.css";

import { api } from "./javascript/api";

import { TCardData, TUserData } from "./types";
import { Page } from "./components/page/page.component";
import { Header } from "./components/header/header.component";
import { Content } from "./components/content/content.components";
import { Footer } from "./components/footer/footer.components";
import { Profile } from "./components/profile/profile.components";
import { Elements } from "./components/elements/elements.components";
import { SignIn } from "./components/sign-in/sign-in.component";
import { SignUp } from "./components/sign-up/sign-up.component";
import { CardArrContext, NewCardContext, UserDataContext } from "./context";
import { Routes, Route } from "react-router-dom";
import { sessionManager } from "./javascript/session-manager";

function App() {
  const [cardsArr, setCardsArr] = useState<Array<TCardData> | null>(null);
  const [userData, setUserData] = useState<TUserData | null>(null);
  const [newCardData, setNewCardData] = useState<TCardData | null>(null);

  useEffect(() => {
    api.getAllcards().then((response) => {
      if (response) {
        setCardsArr(response);
      }
    });
  }, []);

  useEffect(() => {
    api.getAllcards().then((response) => {
      if (response) {
        setCardsArr(response);
      }
    });
  }, [newCardData]);

  useEffect(() => {
    sessionManager.start().then((responseBody) => {
      if (responseBody !== undefined) {
        setUserData(responseBody.user);
      }
    });
  }, []);

  return (
    <UserDataContext.Provider
      value={{
        data: userData,
        setData: (data) => {
          setUserData(data);
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
              <Routes>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route
                  path="/"
                  element={
                    <>
                      {userData && <Profile />}
                      <Elements />
                    </>
                  }
                />
              </Routes>
            </Content>
            <Footer />
          </Page>
        </NewCardContext.Provider>
      </CardArrContext.Provider>
    </UserDataContext.Provider>
  );
}

export default App;

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
