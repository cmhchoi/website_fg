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
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><a className="grey underline" href="/">Home</a></li>
              <li><a className="grey underline" href="/who-we-are">Who We Are</a></li>
              <li className="active">Our Partners</li>
            </ol>
          </div>
        </div>
        <Bulletin items={this.state.items}/>
      </div>
    )
  }
  
}