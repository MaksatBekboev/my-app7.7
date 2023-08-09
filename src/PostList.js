import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, setCurrentPost } from './postSlice';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.list);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleMoreInfoClick = (post) => {
    dispatch(setCurrentPost(post));
  };

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => handleMoreInfoClick(post)}>INFO</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;