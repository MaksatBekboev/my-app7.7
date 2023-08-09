import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PostList from './PostList';
import PostDetails from './PostDetails';

function App() {
  return (
    <Provider store={store}>
      <div>
        <PostList />
        <PostDetails />
      </div>
    </Provider>
  );
}

export default App;