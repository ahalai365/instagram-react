import React from "react";
import "./sign-in.styles.css";
import { SignInForm } from "../header/header.component";

export function SignIn() {


  return (
    <div className="sign-in">
      <div className="sign-in__content">
      <SignInForm/>
      </div>
    </div>
  );
}