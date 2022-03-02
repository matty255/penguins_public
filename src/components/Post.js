import React, { useEffect } from "react";
import { NonGrid, Image, Text, Button, PostText } from "../elements";

import { history } from "../redux/configureStore.js";
import { useDispatch } from "react-redux";
import { actionCreators as likeActions } from "../redux/modules/like";
import tw from "tailwind-styled-components";

import HeartButton from "./HeartButton";

const A = tw.div`
overflow-hidden justify-center items-center bg-transparent
${(props) => (props.layout === "left" ? `w-full flex flex-row justify-between` : "")};
${(props) => (props.layout === "right" ? `w-full flex flex-row-reverse justify-between` : "")};
${(props) => (props.layout === "bottom" ? `flex flex-row` : "")};
${(props) => (props.is_detail ? "w-full" : "")};
`

const Post = (props) => {
  const dispatch = useDispatch();

  const {
    user_info,
    image_url,
    contents,
    like_cnt,
    insert_dt,
    id,
    layout,
    comment_cnt,
    show,
  } = props;

  useEffect(() => {
    dispatch(likeActions.getLikeFB(id));
  }, []);
  return (

    <div className="sm:flex-wrap box-border sm:w-1/2 md:w-1/3">
          <div>
            <hr className="border-4 border-double border-white" />
            <NonGrid>
              <Image shape="circle" src={props.src} />
              <Text>By {user_info.user_name}</Text>
              <Text>{insert_dt}</Text>
              {props.is_me && (
                <Button
                  _onClick={() => {
                    history.push(`/write/${id}`);
                  }}
                ><span className="text-xs sm:text-lg">Edit
                </span></Button>
              )}
          </NonGrid>
          </div>
        <div>

            <div className="p-1 rounded-lg flex flex-row
          text-yellow-800 font-sanss2 justify-evenly items-center
            my-3 mx-2 flex-wrap bg-gradient-to-b from-yellow-400 bg-opacity-80">
            {!show && <PostText layout={layout} _onClick={() => {
              history.push(`/post/${id}`);
            }}
            
            >{contents}</PostText> }
              <A layout={layout}><Image shape="big_square" src={image_url} /></A>
              </div>

          <NonGrid>

            <Text>좋아요 <span className="text-xl">{like_cnt}</span>개</Text>
            <HeartButton post_id={id}></HeartButton>
            <div className="cursor-pointer hover:scale-110 font-bold"><Text
          _onClick={() => {
            history.push(`/post/${id}`);
          }}>댓글 <span className="text-xl">
            {comment_cnt}
            </span>개</Text></div>

        </NonGrid>
      </div>

    </div>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "pika",
    user_profile:
      "https://user-images.githubusercontent.com/89088205/155067524-151af583-2272-4b2d-b83a-c44158c16309.jpg",
  },
  image_url:
    "https://user-images.githubusercontent.com/89088205/155067792-882e3507-e664-4b31-ad9a-4b7abf4af948.jpg",
  contents: "안녕! 피카!",
  like_cnt: 0,
  comment_cnt: 0,
  insert_dt: "2021-06-30 10:00:00",
  show: false,
};

export default Post;
