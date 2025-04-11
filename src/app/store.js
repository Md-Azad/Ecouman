import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/user/userSlice";
import { eventSlice } from "../features/event/eventSlice";

export const store = configureStore({
  reducer: {
    [userSlice.reducerPath]: userSlice.reducer,
    [eventSlice.reducerPath]: eventSlice.reducer,
  },
  middleware: (getDiffultMiddlewares) => {
    return getDiffultMiddlewares().concat(
      userSlice.middleware,
      eventSlice.middleware
    );
  },
});
