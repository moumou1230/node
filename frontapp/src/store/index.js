import { createSlice, configureStore } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: { username: "홍길동", email: "a@a.a" },
  reducers: {
    setUserName: (state, action) => {
      //state.username = action.payload;
      state.username = action.username;
    },
    setEmail: (state, action) => {
      state.email = action.email;
    },
  },
});

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { count: 0 },
  reducers: {
    up: (state, action) => {
      //state.count += action.inc;
      state.count += action.payload;
    },
    down: (state, action) => {
      //state.count -= action.inc;
      state.count -= action.payload;
    },
  },
});
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    login: loginSlice.reducer,
  },
});
export { counterSlice, store, loginSlice };
