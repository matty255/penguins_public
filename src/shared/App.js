import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";

import { history } from "../redux/configureStore.js";
import { apiKey } from "./firebase";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from "../components/Header.tsx";
import WritePost from "../pages/WritePost";

import PostDetail from "../pages/PostDetail";
import Caution from "../pages/Caution";
import NotiDetail from "../pages/NotiDetail";
import NotFound from "../components/NotFound.tsx";

const Container = tw.div`
  w-full bg-yellow-300 mx-auto flex
   justify-center items-center px-2
  overflow-x-hidden
`;

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;


  useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <div className="App">
      <Container>
        <div className=" bg-yellow-200 shadow-md">
          <ConnectedRouter history={history}>
            <Header />
            <Route exact path="/" component={PostList} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/write" component={WritePost} />
            <Route exact path="/write/:id" component={WritePost} />
            <Route exact path="/post/:id" component={PostDetail} />
            <Route exact path="/noti" component={NotiDetail} />
            <Route exact path="/caution" component={Caution} />
            <Route component={NotFound} />
          </ConnectedRouter>
          </div>
      </Container>

    </div>
  );
}



export default App;
