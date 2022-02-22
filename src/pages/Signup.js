import React, { useState, useEffect } from "react";
import { Grid, NonFlexBox, Title, Input, Button } from "../elements";
import { emailCheck } from "../shared/check";
import { apiKey } from "../shared/firebase";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import tw from "tailwind-styled-components"

const Margins = tw.div` 
  mt-24 mx-4 pb-10
`
const Signup = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [user_name, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd_check, setPwdCheck] = useState("");

  const signup = () => {
    if (pwd !== pwd_check) {
      window.alert("비밀번호가 일치하지 않습니다!");

    }

    else if (!emailCheck) {
      window.alert("이메일 형식이 맞지 않습니다!");

    }
    else {
      dispatch(userActions.signUpFB(id, pwd, user_name));
    }
    
  };

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  useEffect(() => {
    if (is_session) {
      alert("이미 로그인한 사용자입니다")
      history.push("/");
    }
  }, []);
  

  return (
    <Margins>
      <NonFlexBox>
      <Title>Sing-up</Title>
      <div className="mt-5"></div>
      <Input
        value={id}
        label="아이디"
        placeholder="아이디를 입력해주세요!"
        _onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <Input
        value={user_name}
        label="닉네임"
        placeholder="닉네임을 입력해주세요!"
        _onChange={(e) => {
          setUserName(e.target.value);
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
      />
      <Input
        value={pwd_check}
        type="password"
        label="비밀번호 확인"
        placeholder="비밀번호를 다시 입력해주세요!"
        _onChange={(e) => {
          setPwdCheck(e.target.value);
        }}
        _onSubmit={signup}
        is_submit
      />
      <div className="mt-7">
      <Button
        margin="30px 0"
        _disabled={
          id === "" || user_name === "" || pwd === "" || pwd_check === ""
            ? true
            : false
        }
        _onClick={signup}
      >
        회원가입하기
      </Button>
      </div>
      </NonFlexBox>
    </Margins>
  );
};

export default Signup;
