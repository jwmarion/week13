import * as actions from './MovieWidget.actions';
import * as ReactRedux from 'react-redux';
import MovieWidget from './MovieWidget';

export const MWContainer =
ReactRedux.connect(
  state=>state,
  {
    typeText: actions.typeText,
    search: actions.search   
  }
)(MovieWidget)

export default MWContainer;

// const AppContainer = connect(
//   state => state,
//
//   actions
//   // using map:
//   // {
//   //   changeName: actions.changeName,
//   //   getWeather2: actions.getWeather2,
//   //   getWeather: actions.getWeather
//   // }
//   // using mapDispatchToProps
//   // dispatch => ({
//   //   changeName: (name) =>
//   //     dispatch(actions.changeName(name)),
//   //   getWeather: (query) =>
//   //     dispatch(actions.getWeather(query))
//   // })
// )(App);
//
