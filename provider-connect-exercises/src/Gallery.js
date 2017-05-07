import React from 'react';

/*
images
currentIndex
next
prev
selectImage
*/

export default class Gallery extends React.Component {
  componentDidMount() {
    this.props.fetchImages();
  }
  select(idx) {
    this.props.selectImage(idx);
  }
  render() {
    let currentImage = this.props.images[this.props.currentIndex];
    let next = this.props.next;
    let prev = this.props.prev;
    return (
      <div>
        <button onClick={prev}>
          Previous
        </button>
        <button onClick={next}>
          Next
        </button>
        <br/>
          <img src={currentImage} key={currentImage}/>
        <div>
          {this.props.images.map((imageUrl, idx) =>
            <img key={idx}
              src={imageUrl} height="60"
              onClick={() => this.select(idx)}/>
          )}
        </div>
      </div>
    );
  }
}
