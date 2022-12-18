import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import counterReducer from '../components/Counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
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
