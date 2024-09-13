const middleware = (store) => (next) => async (action) => {
  next(action);
};

export default middleware;
