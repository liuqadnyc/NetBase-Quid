import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { reducer as counterReducer } from '../features/counter/slice/counterSlice';
import { reducer as mobileDataReducer } from '../features/counter/slice/mobileDataSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mobileData: mobileDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
