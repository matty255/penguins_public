import React from "react";
import { useHistory } from "react-router-dom";
import {Button, Text} from "../elements"

const NotFound = (props) => {
  let history = useHistory();
  return (
    <div className="flex flex-col p-3 justify-center items-center">
      <Text>주소가 올바르지 않아요!</Text>
      <Button
        _onClick={() => {
          history.goBack();
        }}
      >
        뒤로가기
      </Button>
    </div>
  );
};

export default NotFound;