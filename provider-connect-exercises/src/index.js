import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import Counter from './Counter';
import counterReducer from './Counter.reducer';
import Gallery from './Gallery';
import galleryReducer from './Gallery.reducer';

const INITIAL_STATE = {};
function reducer(state = INITIAL_STATE, action) {
  return {
    theCount: counterReducer(state.theCount, action),
    galleryInfo: galleryReducer(state.galleryInfo, action)
  };
}

// short hand
// const reducer = Redux.combineReducers({
//   theCount: counterReducer,
//   galleryInfo: galleryReducer
// });

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const CounterContainer = ReactRedux.connect(
  state => ({
    count: state.theCount
  }),
  dispatch => ({
    add: () => dispatch({type: 'add'}),
    subtract: () => dispatch({type: 'subtract'})
  })
)(Counter);

/*
images
currentIndex
next
prev
selectImage
*/

const GalleryContainer = ReactRedux.connect(
  state => ({
    images: state.galleryInfo.images,
    currentIndex: state.galleryInfo.currentIndex
  }),
  dispatch => ({
    next: () => dispatch({ type: 'next' }),
    prev: () => dispatch({ type: 'previous' }),
    selectImage: (idx) => dispatch({ type: 'select', index: idx }),
    fetchImages: () => {
      const IMAGES = [
        'images/comfy.jpg',
        'images/farted.jpg',
        'images/hate.jpg',
        'images/lolcat_airplane.jpg',
        'images/mocked.jpg',
        'images/monorail.jpg',
      ];
      setTimeout(() => dispatch({
        type: 'receive_images',
        images: IMAGES
      }), 1000);
    }
  })
)(Gallery);


ReactDOM.render(
  <ReactRedux.Provider store={store}>
    {/*
      <Counter
      count={state.theCount}
      add={() => dispatch({type: 'add'})}
      subtract={() => dispatch({type: 'subtract'})}/>
      */}
    <div>
      <CounterContainer/>
      <GalleryContainer/>
    </div>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
