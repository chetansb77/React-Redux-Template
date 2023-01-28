import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

const store = configureStore({
  reducer: {},
  middleware: [thunkMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;

export default store;
