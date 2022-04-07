import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import { MobileData } from '../domain/MobileData';

export type State = MobileData[];

export const defaultState: State = [];

export type CaseReducer = {
  set: (_state: State, action: PayloadAction<MobileData[]>) => State;
  reset: (state: State, action: Action) => State;
};

export const { reducer, actions } = createSlice<State, CaseReducer>({
  name: 'mobile_data',
  initialState: defaultState,
  reducers: {
    set: (_state, action) => action.payload,
    reset: () => defaultState,
  },
});
