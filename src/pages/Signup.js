import React, { useState } from "react";
import { Grid, NonFlexBox, Title, Input, Button } from "../elements";
import { emailCheck } from "../shared/check";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import tw from "tailwind-styled-components"

const Margins = tw.div` 
  mt-24 mx-4 pb-10
`
const Signup = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [user_name, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd_check, setPwdCheck] = useState("");
  const [final_check, setFinalCheck] = useState(false);

  const signup = () => {
    if (pwd !== pwd_check) {
      window.alert("비밀번호가 일치하지 않습니다!");
      setFinalCheck(false)
    }

    if (!emailCheck) {
      window.alert("이메일 형식이 맞지 않습니다!");
      setFinalCheck(false)
    }

    setFinalCheck(true)
  };

    // if (final_check === true) => {
    //   dispatch(userActions.signUpFB(id, pwd, user_name));
    // }
  

  return (
    <Margins>
      <NonFlexBox>
      <Title>회원가입</Title>
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
