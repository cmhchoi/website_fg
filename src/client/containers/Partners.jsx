import React from 'react';
import { Link } from 'react-router';
import $ from "jquery";
import Bulletin from '../components/Bulletin.jsx';

export default class Partners extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
      items: [
        {
          text: "Anthropologie",
          link: "https://anthropologie.com"
        },
        {
          text: "Anthropologie",
          link: "https://anthropologie.com"
        },
        {
          text: "Anthropologie",
          link: "https://anthropologie.com"
        },
        {
          text: "Anthropologie",
          link: "https://anthropologie.com"
        },
        {
          text: "Anthropologie",
          link: "https://anthropologie.com"
        },
        {
          text: "Anthropologie",
          link: "https://anthropologie.com"
        },
        {
          text: "Anthropologie",
          link: "https://anthropologie.com"
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