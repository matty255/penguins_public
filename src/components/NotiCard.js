import React from "react";
import { Grid, NonGrid, Image, Text } from "../elements";

import { history } from "../redux/configureStore";
import tw from "tailwind-styled-components"

const NotiCard = (props) => {
  // console.log(props);
  const { image_url, user_name, post_id, is_like, is_comment } = props;
  return (
    <NonGrid
      _onClick={() => {
        history.push(`/post/${post_id}`);
      }}
    >
      <Grid width="auto" margin="0 8px 0 0">
        <Image size="90" shape="small_square" src={image_url} />
      </Grid>
      <Grid>
        <Text>
          {is_comment && <span><strong>{user_name}</strong> 님이 게시글에 댓글을 남겼습니다</span> }
          
          {is_like && <span><strong>{user_name}</strong> 님이 게시글에 좋아요를 남겼습니다</span> }
        </Text>
      </Grid>
    </NonGrid>
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
