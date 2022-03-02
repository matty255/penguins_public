
import React, { useEffect, Suspense, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import { Intro } from "../elements";
const Post = lazy(() => import("../components/Post"));
const InfinityScroll = lazy(() => import("../shared/InfinityScroll"));

const PostList = (props) => {
  const dispatch = useDispatch();
  const { list, is_loading, paging } = useSelector((state) => state.post);
  const user = useSelector((state) => state.user?.user);

  useEffect(() => {
    if (list.length < 2) {
      dispatch(postActions.loadPostFB());
    }
  }, []);


  
  return (

<div className="p-2 flex flex-row flex-wrap justify-center items-center
xl:w-10/12 2xl:w-8/12 mx-auto">
    <Suspense fallback={<Intro />}>
      <InfinityScroll
        callNext={() => {
          dispatch(postActions.loadPostFB(paging.next));
        }}
        is_next={paging.next ? true : false}
        loading={is_loading}
      >
        {list.map((post, idx) => {
          //로그인 했을 때만 체크하기 위해 optional chaining
          // 이런식으로도 쓰는구나
          if (post.user_info.user_id === user?.uid) {
            return <Post key={post.id} {...post} is_me={true} />;
          } else {
            return <Post key={post.id} {...post} />;
          }
        })}
      </InfinityScroll>
      </Suspense>
      </div>
  );
};

export default PostList;
