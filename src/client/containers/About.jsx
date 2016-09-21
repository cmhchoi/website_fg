import React from 'react';
import { Link } from 'react-router';
import $ from "jquery";
import Frame from '../components/Frame.jsx';

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: [
        {
          img: "https://static.cotecine.fr/tb/Photos/1240x610/crop/MON+ROI+PHOTO3.JPG",
          des: "HISTORY",
          link: '/who-we-are/history'
        },
        {
          img: "https://static.cotecine.fr/tb/Photos/1240x610/crop/MON+ROI+PHOTO3.JPG",
          des: "CULTURE & CORE VALUES",
          link: '/who-we-are/culture-core-values'
        },
        {
          img: "https://static.cotecine.fr/tb/Photos/1240x610/crop/MON+ROI+PHOTO3.JPG",
          des: "EXECUTIVE OFFICERS",
          link: '/who-we-are/executive-officers'
        },
        {
          img: "https://static.cotecine.fr/tb/Photos/1240x610/crop/MON+ROI+PHOTO3.JPG",
          des: "OUR PARTNERS",
          link: '/who-we-are/our-partners'
        },
      ],
    }
  }

  render() {
    return(
      <div>
      	<h3>Title</h3>
      	<p>First Glory first glory First Glory first glory First Glory first glory First Glory first glory First Glory first glory </p>
        <Frame pictures={this.state.pictures}/>
      </div>
    )
  }
  
}