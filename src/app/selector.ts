import { RootState } from './store';

export const selectCount = (state: RootState) => state.counter.value;

export const mobileDataSelector = (state: RootState) => state.mobileData;
