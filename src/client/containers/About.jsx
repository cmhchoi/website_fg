import React from 'react';
import Frame from '../components/Frame.jsx';

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: [
        {
          img: "https://static.cotecine.fr/tb/Photos/1240x610/crop/MON+ROI+PHOTO3.JPG",
          des: "HISTORY",
          link: '/who-we-are/history',
          size: 'rectangle'
        },
        {
          img: "https://static.cotecine.fr/tb/Photos/1240x610/crop/MON+ROI+PHOTO3.JPG",
          des: "CULTURE & CORE VALUES",
          link: '/who-we-are/culture-core-values',
          size: 'rectangle'
        },
        {
          img: "http://www.kbslp.com/images/kbs_image_feed_image5.jpg",
          des: "EXECUTIVE OFFICERS",
          link: '/who-we-are/executive-officers',
          size: 'square'
        },
        {
          img: "http://www.kbslp.com/images/kbs_image_feed_image5.jpg",
          des: "OUR PARTNERS",
          link: '/who-we-are/our-partners',
          size: 'square'
        },
      ],
    }
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb grey underline">
              <li><a className="grey underline" href="/">Home</a></li>
              <li className="active">Who We Are</li>
            </ol>
          </div>
          <div className="col-xs-12 text-body">
          	<h3>Title</h3>
          	<p>First Glory first glory First Glory first glory First Glory first glory First Glory first glory First Glory first glory </p>
          </div>
        </div>
        <Frame pictures={this.state.pictures}/>
      </div>
    )
  }
  
}