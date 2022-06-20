import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  // CardOptionsItem,
  // CardOptions,
  // CardOptionsNote,
  CardButton,
} from "./Card";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, token } = props;
  console.log("props", props);

  if (token) {
    return <Navigate to='/builds/mybuilds' />;
  }

  return (
    <div className='App'>
      <CardWrapper>
        <CardHeader>
          <CardHeading>Sign in</CardHeading>
        </CardHeader>

        <CardBody>
          <CardFieldset>
            <CardInput
              onChange={e => setUsername(e.target.value)}
              value={username}
              placeholder='Username'
              type='text'
              required
            />
          </CardFieldset>

          <CardFieldset>
            <CardInput
              onChange={e => setPassword(e.target.value)}
              value={password}
              placeholder='Password'
              type='password'
              required
            />
            <CardIcon className='fa fa-eye' eye small />
          </CardFieldset>
          {/*
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
        </CardFieldset> */}

          <CardFieldset>
            <CardButton onClick={() => login(username, password)} type='button'>
              Sign In
            </CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </div>
  );
}

export default Login;
