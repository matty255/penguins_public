import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

import { history } from "../redux/configureStore";
import { apiKey } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from "../components/Header";
import WritePost from "../pages/WritePost";
import { Intro } from "../elements";
import PostDetail from "../pages/PostDetail";
import Caution from "../pages/Caution";
import NotiDetail from "../pages/NotiDetail";

const Container = tw.div`
  w-full bg-yellow-300 -m-3 mx-auto h-full border-b-8
  border-yellow-300 shadow-md
`;

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  let [ is_loaded, setIsLoaded ] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{ setIsLoaded(false) }, 2000);
  });

  useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <div className="App">
      <Container>
        <div className="md:w-3/5 m-auto bg-yellow-200 shadow-md">
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
          </ConnectedRouter>
          </div>
      </Container>
      {is_loaded && <Intro />}
    </div>
  );
}



export default App;
