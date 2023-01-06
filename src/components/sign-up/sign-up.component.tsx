import React from "react";
import "./sign-up.styles.css";
import { SignUpForm } from "../header/header.component";

export function SignUp() {


  return (
    <div className="sign-up">
      <div className="sign-up__content">
      <SignUpForm/>
      </div>
    </div>
  );
}