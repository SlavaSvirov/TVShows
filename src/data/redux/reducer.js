const reducer = (state = {}, action) => {
  switch (action.type) {
    case "ACTION_1":
      return { value: action.payload };

    default:
      return state;
  }
};

export default reducer;
