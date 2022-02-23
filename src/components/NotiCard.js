import React from "react";
import { Grid, NonGrid, Image, Text, NonFlexBox } from "../elements";

import { history } from "../redux/configureStore";
import tw from "tailwind-styled-components"

const NotiCard = (props) => {
  // console.log(props);
  const { image_url, user_name, post_id, is_like, is_comment } = props;
  return (
    <NonFlexBox
      _onClick={() => {
        history.push(`/post/${post_id}`);
      }}
    >

        <div className="flex flex-row justify-between items-center cursor-pointer flex-wrap">
        <Image shape="small_square" src={image_url} />
     
        <Text>
          {is_comment && <span className="p-2 bg-yellow-400 rounded-2xl bg-opacity-60"><strong>{user_name}</strong> 님이 댓글을 남겼어요!</span> }
          
          {is_like && <span className="p-2 bg-yellow-400 rounded-2xl bg-opacity-60"><strong>{user_name}</strong> 님이 좋아요를 눌렀어요!</span> }
        </Text>
        </div>

    </NonFlexBox>
  );
};

NotiCard.defaultProps = {
  image_url: "",
  user_name: "",
  post_id: null,
  is_like: false,
  is_comment: false,
};

export default NotiCard;
