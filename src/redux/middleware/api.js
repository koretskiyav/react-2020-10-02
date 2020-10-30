import { FAILURE, REQUEST, SUCCESS } from '../constants';

export default (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, type, options, ...rest } = action;

  next({ ...rest, type: type + REQUEST });

  try {
    const res = await fetch(CallAPI, options);

    const response = await res.json();
    if (res.status !== 200) {
      throw new Error(response);
    }

    next({ ...rest, type: type + SUCCESS, response });
  } catch (error) {
    next({ ...rest, type: type + FAILURE, error });
  }
};
