import { NavLink } from "react-router-dom";
import React from "react";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardButton,
  CardLink,
} from "./Card";

function SignUp() {
  return (
    <CardWrapper>
      <CardHeader>
        <CardHeading>Sign up</CardHeading>
      </CardHeader>
      <CardBody>
        <CardFieldset>
          <CardInput placeholder="Username" type="text" required />
        </CardFieldset>

        <CardFieldset>
          <CardInput placeholder="E-mail" type="text" required />
        </CardFieldset>

        <CardFieldset>
          <CardInput placeholder="Password" type="password" required />
          <CardIcon className="fa fa-eye" eye small />
        </CardFieldset>

        <CardFieldset>
          <CardOptionsNote>Or sign up with</CardOptionsNote>
          <CardOptions>
            <CardOptionsItem>
              <CardIcon className="fab fa-google" big />
            </CardOptionsItem>
          </CardOptions>
        </CardFieldset>
        <CardFieldset>
          <CardButton type="button">Create account</CardButton>
        </CardFieldset>
        <CardFieldset>
          <NavLink to="login">
            <CardLink>I already have an account</CardLink>
          </NavLink>
        </CardFieldset>
      </CardBody>
    </CardWrapper>
  );
}

export default SignUp;
