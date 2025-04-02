import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    [userSlice.reducerPath]: userSlice.reducer,
  },
  middleware: (getDiffultMiddlewares) => {
    return getDiffultMiddlewares().concat(userSlice.middleware);
  },
});
