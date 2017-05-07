
const INITIAL_STATE = {
};

function reducer(state=INITIAL_STATE, action) {
  if (action.type === 'typeText') {
    return Object.assign({}, state, {
      searchValue: action.searchValue
    });
    else if(action.type === 'movie-search-results'){
      return Object.assign({}, state, {})
    }
  }
  return state;
}

export default reducer;
