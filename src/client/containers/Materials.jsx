import React from 'react';
import { Link } from 'react-router';
import $ from "jquery";
import Bulletin from '../components/Bulletin.jsx';

export default class Materials extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
      items: [
        {
          text: "Cotton",
        },
        {
          text: "Cotton",
        },
        {
          text: "Cotton",
        },
        {
          text: "Cotton",
        },
        {
          text: "Cotton",
        },
        {
          text: "Cotton",
        },
        {
          text: "Cotton",
        },
      ]
  	}
  }


  render() {
    return(
      <div>
        <Bulletin items={this.state.items}/>
      </div>
    )
  }
  
}