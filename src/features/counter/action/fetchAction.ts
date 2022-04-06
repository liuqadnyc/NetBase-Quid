import { AppThunk } from '../../../app/store';
import { fetchCount } from '../domain/usecase/counterAPI';
import { actions as counterAction } from '../slice/counterSlice';

export const incrementAsync =
  (amount: number): AppThunk =>
  async dispatch => {
    const response = await fetchCount(amount);
    dispatch(counterAction.incrementByAmount(response.data));
  };
