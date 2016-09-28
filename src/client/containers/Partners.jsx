import React from 'react';
import { Link } from 'react-router';
import Bulletin from '../components/Bulletin.jsx';

export default class Partners extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
      items: [
        {
          text: "Anthropologie",
          link: "https://www.anthropologie.com"
        },
        {
          text: "Anthropologie",
          link: "https://www.anthropologie.com"
        },
        {
          text: "Anthropologie",
          link: "https://www.anthropologie.com"
        },
        {
          text: "Anthropologie",
          link: "https://www.anthropologie.com"
        },
        {
          text: "Anthropologie",
          link: "https://www.anthropologie.com"
        },
        {
          text: "Anthropologie",
          link: "https://www.anthropologie.com"
        },
        {
          text: "Anthropologie",
          link: "https://www.anthropologie.com"
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
              <li><Link className="grey underline" to={{pathname: "/"}}>Home</Link></li>
              <li><Link className="grey underline" to={{pathname: "/who-we-are"}}>Who We Are</Link></li>
              <li className="active">Our Partners</li>
            </ol>
          </div>
        </div>
        <Bulletin items={this.state.items}/>
      </div>
    )
  }
  
}