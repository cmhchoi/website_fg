import React from 'react';
import { Link } from 'react-router';
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
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: "/"}}>Home</Link></li>
              <li><Link className="grey underline" to={{pathname: "/products"}}>Products</Link></li>
              <li className="active">Materials Used</li>
            </ol>
          </div>
        </div>
        <Bulletin items={this.state.items}/>
      </div>
    )
  }
  
}