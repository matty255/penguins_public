import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import React, { useEffect, Suspense, lazy } from "react";
import tw from "tailwind-styled-components";

import { history } from "../redux/configureStore.js";
import { apiKey } from "./firebase";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { Intro } from "../elements";

const PostList = lazy(() => import("../pages/PostList"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const Header = lazy(() => import("../components/Header"));
const WritePost = lazy(() => import("../pages/WritePost"));
const PostDetail = lazy(() => import("../pages/PostDetail"));
const Caution = lazy(() => import("../pages/Caution"));
const NotiDetail = lazy(() => import("../pages/NotiDetail"));
const NotFound = lazy(() => import("../components/NotFound"));



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
          <Suspense fallback={<Intro />}>
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
            </Suspense>
          </ConnectedRouter>
          </div>
      </Container>

    </div>
  );
}



export default App;
