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
} from "./Card";

function Login() {
  return (
    <div className="App">
      <CardWrapper>
        <CardHeader>
          <CardHeading>Sign in</CardHeading>
        </CardHeader>

        <CardBody>
          <CardFieldset>
            <CardInput placeholder="Username" type="text" required />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="Password" type="password" required />
            <CardIcon className="fa fa-eye" eye small />
          </CardFieldset>

          <CardFieldset>
            <CardOptionsNote>Or login with</CardOptionsNote>

            <CardOptions>
              <CardOptionsItem>
                <CardIcon className="fab fa-google" big />
              </CardOptionsItem>

              <CardOptionsItem>
                <CardIcon className="fab fa-twitter" big />
              </CardOptionsItem>

              <CardOptionsItem>
                <CardIcon className="fab fa-facebook" big />
              </CardOptionsItem>
            </CardOptions>
          </CardFieldset>

          <CardFieldset>
            <CardButton type="button">Sign In</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </div>
  );
}

export default Login;
