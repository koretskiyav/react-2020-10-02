import { NEW_USER, NEW_REVIEW } from '../constants';

export default ({ dispatch }) => (next) => (action) => {
  function uuid() {
    const url = URL.createObjectURL(new Blob());
    const [id] = url.toString().split('/').reverse();
    URL.revokeObjectURL(url);
    return id;
  }

  //console.log('action :', action);
  if (action.type === 'SENDREVIEW') {
    //console.log('NEWREVIEW MIDDLEWARE: ', store.getState());
    const id = uuid();
    const userId = uuid();
    console.log(action);
    dispatch({
      type: NEW_REVIEW,
      payload: {
        id: id,
        userId: userId,
        text: action.payload.text,
        rating: action.payload.rating,
      },
    });
    dispatch({
      type: NEW_USER,
      payload: {
        id: userId,
        name: action.payload.userName,
      },
    });
  }
  next(action);
  //console.log('after: ', store.getState());
};
