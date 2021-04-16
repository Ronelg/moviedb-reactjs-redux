const initState = {
  movies: [],
};
const rootReducer = (state = initState, action) => {
  console.log(state);
  return state;
};

export default rootReducer;
