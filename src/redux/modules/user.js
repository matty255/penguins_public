import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { auth } from "../../shared/firebase";
import firebase from "firebase/app";

import { setCookie, deleteCookie } from "../../shared/cookie";

//actions
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

//aciton creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

//intialState
const initialState = {
  user: null,
  is_login: false,
};

//middleware actions
const signUpFB = (id, pwd, user_name) => {
  return function (dispatch, getState, { history }) {
    auth
      .createUserWithEmailAndPassword(id, pwd)
      .then((user) => {
        auth.currentUser
          .updateProfile({
            displayName: user_name,
          })
          .then(() => {
            dispatch(
              setUser({
                user_name,
                id,
                user_profile: "",
                uid: user.user.uid,
              })
            );
            window.alert(`환영해요! ${user_name}님 :)! 로그인도 부탁드려요!`);
            history.replace("/login");
          })
          .catch((error) => {
            // console.log(error);
            alert("아이디, 비밀번호 형식을 확인해주세요!")
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage)
        alert("이메일 형식으로 작성해주세요! (비밀번호 6자 이상)");
      });
  };
};

const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    auth
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        auth
          .signInWithEmailAndPassword(id, pwd)
          .then((user) => {
            console.log(user);
            dispatch(
              setUser({
                user_name: user.user.displayName,
                id,
                user_profile: "",
                uid: user.user.uid,
              })
            );
            history.push("/");
          })
          .catch((error) => {
            window.alert("비밀번호는 6자 이상으로 해주세요!");
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };
};

const loginCheckFB = () => {
  return function (dispatch, getState, { history }) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        dispatch(
          setUser({
            user_name: user.displayName,
            id: user.email,
            user_profile: "",
            uid: user.uid,
          })
        );
      }
    });
  };
};

const logoutFB = () => {
  return function (dispatch, getState, { history }) {
    auth
      .signOut()
      .then(() => {
        dispatch(logOut());
        history.replace("/");
      })
      .catch((error) => {
        // console.log(error);
      });
  };
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {
  signUpFB,
  loginFB,
  loginCheckFB,
  logoutFB,
};

export { actionCreators };
