import React from 'react';
import { Link } from 'react-router';
import Frame from '../components/Frame.jsx';
import $ from "jquery";

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

  componentWillMount() {
    if(!this.props.state.users) {
      $.get('/api/users', users => {
        this.props.updateAppState({users: users});
      })
    }
  }

  render() {
    console.log('about', this.props)
    // console.log('ABOUT!', this.props.setting)
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb grey underline">
              <li><Link className="grey underline" to={{pathname: "/"}}>Home</Link></li>
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