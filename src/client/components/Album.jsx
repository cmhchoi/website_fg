import React from 'react';
import { Link } from 'react-router';
import Lightbox from 'react-images';

// export default class Album extends React.Component {
//   constructor () {
//     super();

//     this.state = {
//       lightboxIsOpen: false,
//       currentImage: 0,
//     };

//     this.closeLightbox = this.closeLightbox.bind(this);
//     this.gotoNext = this.gotoNext.bind(this);
//     this.gotoPrevious = this.gotoPrevious.bind(this);
//     this.gotoImage = this.gotoImage.bind(this);
//     this.handleClickImage = this.handleClickImage.bind(this);
//     this.openLightbox = this.openLightbox.bind(this);
//   }
//   openLightbox (index, event) {
//     event.preventDefault();
//     this.setState({
//       currentImage: index,
//       lightboxIsOpen: true,
//     });
//   }
//   closeLightbox () {
//     this.setState({
//       currentImage: 0,
//       lightboxIsOpen: false,
//     });
//   }
//   gotoPrevious () {
//     this.setState({
//       currentImage: this.state.currentImage - 1,
//     });
//   }
//   gotoNext () {
//     this.setState({
//       currentImage: this.state.currentImage + 1,
//     });
//   }
//   gotoImage (index) {
//     this.setState({
//       currentImage: index,
//     });
//   }
//   handleClickImage () {
//     if (this.state.currentImage === this.props.images.length - 1) return;

//     this.gotoNext();
//   }
//   renderGallery () {
//     const { images } = this.props;

//     if (!images) return;

//     const gallery = images.filter(i => i.useForDemo).map((obj, i) => {
//       return (
//         <a
//           href={obj.src}
//           className={css(classes.thumbnail, classes[obj.orientation])}
//           key={i}
//           onClick={(e) => this.openLightbox(i, e)}
//         >
//           <img src={obj.thumbnail} className={css(classes.source)} />
//         </a>
//       );
//     });

//     return (
//       <div className={css(classes.gallery)}>
//         {gallery}
//       </div>
//     );
//   }

//   render() {

//     return (
//       <div>
//       <p>im here</p>
//       {this.renderGallery()}
//         <Lightbox
//           currentImage={this.state.currentImage}
//           images={this.props.images}
//           isOpen={this.state.lightboxIsOpen}
//           onClickImage={this.handleClickImage}
//           onClickNext={this.gotoNext}
//           onClickPrev={this.gotoPrevious}
//           onClickThumbnail={this.gotoImage}
//           onClose={this.closeLightbox}
//           showThumbnails={this.props.showThumbnails}
//           theme={this.props.theme}
//         />
//       </div>
//     );
//   }
// }

export default class Album extends React.Component {
  render() {
    console.log(Lightbox)
    return(
      <div>
      {this.props.images}
      <Lightbox images={[{ src: 'http://example.com/img1.jpg' }, { src: 'http://example.com/img2.jpg' }]} />
      </div>
    )
  }
}


