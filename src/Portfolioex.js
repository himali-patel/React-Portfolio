import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: './img/p1.jpg' , width:2 , height: 1},
  { src: './img/p2.jpg' , width: 3 , height: 2},
  { src: './img/p3.jpg' , width: 3 , height: 4},
  { src: './img/p4.jpg' , width:2 , height: 2},
  { src: './img/p5.jpg'  , width: 2 , height: 3},
  { src: './img/p6.jpg'  , width: 3 , height:2},
  { src: './img/p7.jpg' , width: 2 , height: 2},
  { src: './img/p8.jpg' , width: 4 , height: 3},
  { src: './img/p9.jpg' , width: 4 , height: 3},
  { src: './img/p10.jpg' , width: 3 , height: 2 },
  { src: './img/p11.jpg' , width: 3 , height: 2},
  { src: './img/p12.jpg' , width: 2 , height: 3},
  { src: './img/p13.jpg' , width: 4 , height: 2},
  { src: './img/p14.jpg' , width: 2 , height: 2},
  { src: './img/p15.jpg' , width: 4 , height: 2}

];

       

class Portfolioex extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}

export default Portfolioex