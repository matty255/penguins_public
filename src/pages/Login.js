import React, { useState, useEffect } from "react";

import { NonFlexBox, Title, Input, Button } from "../elements";
import { emailCheck } from "../shared/check";
import { apiKey } from "../shared/firebase";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { useHistory } from "react-router-dom";

import tw from "tailwind-styled-components";

const Margins = tw.div` 
  mt-24 mx-4 pb-10
`

const Login = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  useEffect(() => {
    if (is_session) {
      alert("이미 로그인한 사용자입니다")
      history.push("/");
    }
  }, []);

  const login = () => {
    if (!emailCheck(id)) {
      window.alert("이메일 형식이 올바르지 않습니다!");
    }

    dispatch(userActions.loginFB(id, pwd));
  };

  return (
    <Margins>
    <NonFlexBox>
      <Title>Log-in</Title>
      <div className="mt-5" />
      <Input
        value={id}
        label="아이디"
        placeholder="아이디를 입력해주세요!"
        _onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <Input
        value={pwd}
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요!"
        _onChange={(e) => {
          setPwd(e.target.value);
        }}
        is_submit={true}
        _onSubmit={login}
      />
      <div className="mt-7">
      <Button
        _onClick={login}
        _disabled={id === "" || pwd === "" ? true : false}
      >
        로그인하기
      </Button>
      </div>
    </NonFlexBox>
    </Margins>
  );
};

export default Login;
