import React, { useEffect, useState } from "react";
import { Grid, NonGrid, NonFlexBox, Image, Text, Button } from "../elements";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as likeActions } from "../redux/modules/like";
import HeartButton from "./HeartButton";


const Post = (props) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.like.list);
  const {
    user_info,
    image_url,
    contents,
    like_cnt,
    insert_dt,
    id,
    layout,
    comment_cnt,
  } = props;

  useEffect(() => {
    dispatch(likeActions.getLikeFB(id));
  }, []);
  return (
    <NonFlexBox>
          <div>
          <hr className="border-4 border-double border-white" />
          <NonGrid>
            <Image shape="circle" size="40" src={props.src} />
            <Text bold>By {user_info.user_name}</Text>
            <Text>{insert_dt}</Text>
            {props.is_me && (
              <Button
                width="45%"
                font_size="12px"
                padding="0"
                _onClick={() => {
                  history.push(`/write/${id}`);
                }}
              ><span className="text-xs sm:text-lg">수정</span></Button>
            )}
          </NonGrid>
          </div>

      {layout === "right" && (
        <div>
          <NonGrid
            
          >
            <Text margin="10px" width="40%" center>
              {contents}
            </Text>
            <Image half shape="big_square" src={image_url} />

          </NonGrid>
          <NonGrid>

            <Text>좋아요 <span className="text-xl">{like_cnt}</span>개</Text>
            <HeartButton post_id={id}></HeartButton>
            <div className="cursor-pointer hover:scale-110 font-bold"><Text
          _onClick={() => {
            history.push(`/post/${id}`);
          }}>댓글 <span className="text-xl">{comment_cnt}</span>개</Text></div>

            </NonGrid>
            
          </div>
      )}
      {layout === "left" && (
        <div>
          <NonGrid
            
          >
            <Image half shape="big_square" src={image_url} />
            <Text margin="10px" width="40%" center>
              {contents}
            </Text>
          </NonGrid>
          <NonGrid>
            
            <Text>좋아요 <span className="text-xl">{like_cnt}</span>개</Text>
            <HeartButton post_id={id}></HeartButton>
            <div className="cursor-pointer hover:scale-110 font-bold"><Text
          _onClick={() => {
            history.push(`/post/${id}`);
          }}>댓글 <span className="text-xl">{comment_cnt}</span>개</Text></div>
            </NonGrid>
          </div>
      )}
      {layout === "bottom" && (
        <div>
          <NonGrid
            
          >
            <div className="flex flex-col">
            <Text margin="10px">{contents}</Text>
            <Image shape="big_square" src={image_url} />
            </div>
          </NonGrid>
          <NonGrid>
            <Text>좋아요 <span className="text-xl">{like_cnt}</span>개</Text>
            <HeartButton post_id={id}></HeartButton>
            <div className="cursor-pointer hover:scale-110 font-bold"><Text
          _onClick={() => {
            history.push(`/post/${id}`);
          }}>댓글 <span className="text-xl">{comment_cnt}</span>개</Text></div>
            </NonGrid>
        </div>
      )}
    </NonFlexBox>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "minju",
    user_profile:
      "https://user-images.githubusercontent.com/75834421/124404954-0be05f80-dd78-11eb-8048-0a5517211d3e.jpg",
  },
  image_url:
    "https://user-images.githubusercontent.com/75834421/124404954-0be05f80-dd78-11eb-8048-0a5517211d3e.jpg",
  contents: "안녕! 무민!",
  like_cnt: 0,
  comment_cnt: 0,
  insert_dt: "2021-06-30 10:00:00",
};

export default Post;
