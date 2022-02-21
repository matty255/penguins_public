import React from "react";
import { NonGrid, Grid, NonFlexBox, Button, Text, Image } from "../elements";
import NotiBadge from "./NotiBadge";
import Permit from "../shared/Permit";
import BalanceIcon from '@mui/icons-material/Balance';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

import { realtime } from "../shared/firebase";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { apiKey } from "../shared/firebase";
import tw from "tailwind-styled-components"

const Title = tw.a`
  inline-flex font-sanss 
`

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.user);
  const user_info = useSelector((state) => state.user.user);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  if (is_login && is_session) {
    return (
      <NonGrid>

        <Title>
          <Text
          _onClick={() => {
            window.location.replace("/");
          }}
          is_click>
        <span className={"ml-2 text-5xl font-bold tracking-wide text-gray-100"}>
        Penguins
        </span>
        </Text>
      </Title>
          <div className="hidden lg:contents">
            <div className="flex items-end p-1 px-10">
            <Image shape="circle" src={props.src} />
            <Text bold margin="5px">
              {user_info.user_name}
            </Text>
            </div>

          </div>

          <Permit>
            <Button margin="0 10px 0 0"> 
              <Permit>
                <NotiBadge
                  _onClick={() => {
                    history.push("/noti");
                  }}
                />
              </Permit> <span className="hidden sm:contents"> 알림</span>
            </Button>
          </Permit>

          <Button
            _onClick={() => {
              dispatch(userActions.logoutFB());
              window.location.reload();
            }}
          >
            <BeachAccessIcon /><span className="hidden sm:contents"> 로그아웃</span>
          </Button>


          <div className="fixed bottom-10 right-10 md:top-10">
          <Permit>
        <Button _onClick={() => history.push("/write")}>
          <LoyaltyIcon /> <span className="hidden lg:contents"> 포스트쓰러가기</span>
        </Button>
      </Permit>
      </div>
      </NonGrid>
    );
  }
  return (
    <NonGrid>
            <Title>
          <Text
          _onClick={() => {
            window.location.replace("/");
          }}
          is_click>
        <span className={"ml-2 text-4xl sm:text-5xl font-bold tracking-wide text-gray-100"}>
        Penguins
        </span>
        </Text>
      </Title>


    <div className="flex space-x-3 p-4 text-xs sm:text-sm md:text-lg">
      <Button
          margin="0 10px 0 0"
          _onClick={() => {
            history.push("/signup");
          }}
        >
          회원가입
        </Button>
      <Button
          _onClick={() => {
            history.push("/login");
          }}
        >
          로그인
        </Button>
        </div>
    </NonGrid>
  );
};

export default Header;
