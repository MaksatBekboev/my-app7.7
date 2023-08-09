import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    currentPost: null,
  },
  reducers: {
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { setCurrentPost } = postSlice.actions;

export default postSlice.reducer;
