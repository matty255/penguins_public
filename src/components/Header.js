import React from "react";

import { NonGrid, Button, Text, Image, Title } from "../elements";
import NotiBadge from "./NotiBadge";
import Permit from "../shared/Permit";

import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { apiKey } from "../shared/firebase";

import LoyaltyIcon from '@mui/icons-material/Loyalty';
import CancelIcon from '@mui/icons-material/Cancel';



const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.user);
  const user_info = useSelector((state) => state.user.user);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  if (is_login && is_session) {
    return (
      <NonGrid>

        <Title _onClick={() => {
              window.location.replace("/");
            }}>
                Penguins
        </Title>
      
          <div className="hidden lg:contents">
            <div className="flex items-end p-1 px-10">
              <Image shape="circle" src={props.src} />
              <Text>
                <span className="mb-2 mx-1 inline-flex font-bold">{user_info.user_name}</span>
              </Text>
              </div>

          </div>

          <Permit>
            <Button 
            _onClick={() => {
              history.push("/noti");
            }}> 
              <Permit>
                <NotiBadge />
              </Permit> <span className="hidden sm:contents"> 알림</span>
            </Button>
          </Permit>

          <Button
            _onClick={() => {
              dispatch(userActions.logoutFB());
              window.location.reload();
            }}
          >
            <CancelIcon /><span className="hidden sm:contents"> 로그아웃</span>
          </Button>


          <div className="fixed bottom-10 right-10 md:top-10 animate-bounce sm:animate-pulse">
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
        <Title _onClick={() => {
              window.location.replace("/");
            }}>
                Penguins
        </Title>


    <div className="flex space-x-3 p-4 text-xs sm:text-sm md:text-lg">
        <Button
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
