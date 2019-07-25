const initstate: any = {
  name: "",
  movieid: "",
  randomid: ""
};

const RootReducer = (state = initstate, action: any) => {
  if (action.type === "set") {
    return {
      name: action.name
    };
  }
  if (action.type === "get") {
    return {
      name: state.name
    };
  }
  if (action.type === "addmovieid") {
    return {
      movieid: action.movieid
    };
  }
  if (action.type === "randomid") {
    return {
      randomid: action.randid
    };
  }
  return state;
};
export default RootReducer;
