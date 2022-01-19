import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./citySlice";
import { weather } from "./weather";
const store = configureStore({
  reducer: {
    city: cityReducer,
    [weather.reducerPath]: weather.reducer,
  },
});

export default store;
