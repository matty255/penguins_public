import React, { useEffect } from "react";
import { Image, Text } from "../elements";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

interface CommentListProps {
  state: any;
  post_id : string;
}

interface CommentItemProps { 
  post_id: string;
  user_name: string; 
  comment: string; 
  user_profile: string; 
  insert_dt: Date; }

const CommentList: React.FC<CommentListProps> = (props:CommentListProps) => {
  const dispatch = useDispatch();
  const comment_list = useSelector(((state: any) => state.comment.list));

  const { post_id } = props;

  useEffect(() => {
    if (!comment_list[post_id]) {
      dispatch(commentActions.getCommentFB(post_id));
    }
  }, []);

  //post_id를 props로 받아오고 그 post_id도 database에서 가져오므로
  //post_id가 없는 순간이 생기면서 comment_list[post_id]에 아무 것도 없게 된다
  //또는 달린 댓글이 없을때도 map함수를 돌리면 오류가 나므로 이 조건 추가해야함!
  if (!comment_list[post_id] || !post_id) {
    return null;
  }

  return (
    <>
      {comment_list[post_id].map((comment) => {
        return <CommentItem key={comment.id} {...comment} />;
      })}
    </>
    );
  };

const CommentItem = (props: CommentItemProps) => {
  const { user_name, comment, user_profile, insert_dt } = props;
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-row px-10 justify-between">
      <hr className="border-4 border-white" />
      <Image shape="circle" src={user_profile} />
      <Text>{user_name}</Text>
      <span className="flex-shrink-0 flex-grow p-2 mb-3 py-2 font-bold bg-yellow-500 bg-opacity-50 rounded-full"><Text>{comment}</Text></span>
      <div className="hidden md:contents"><Text>{insert_dt}</Text></div>
      
      </div>
      
    </div>
  );
};

export default CommentList;
