import React from 'react';
import { useSelector } from 'react-redux';

const PostDetails = () => {
  const currentPost = useSelector((state) => state.posts.currentPost);

  return (
    <div>
      <h2>Post Details</h2>
      {currentPost ? (
        <div>
          <h3>{currentPost.title}</h3>
          <p>{currentPost.body}</p>
        </div>
      ) : (
        <p>Select a post to view details.</p>
      )}
    </div>
  );
};

export default PostDetails;