import React from 'react';
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
              <li><a className="grey underline" href="/">Home</a></li>
              <li><a className="grey underline" href="/products">Products</a></li>
              <li className="active">Materials Used</li>
            </ol>
          </div>
        </div>
        <Bulletin items={this.state.items}/>
      </div>
    )
  }
  
}