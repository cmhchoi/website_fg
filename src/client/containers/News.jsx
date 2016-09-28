import React from 'react';
import { Link } from 'react-router';

export default class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [
        {
          title: "Glossy Features Urban Outfitters' Revival of '90s Fashion",
          date: "August 16, 2016",
          img: "http://images.contentful.com/fa2v6i6dvqhy/7JcIXfDJEAeqM4Yq6EwUGu/28c5cbec562863a03b2e3f0c47b78780/adidas_throwback.jpg",
          snippet: "Glossy features Urban Outfitters' revival of popular ‘90s fashion",
        },
        {
          title: "Glossy Features Urban Outfitters' Revival of '90s Fashion",
          date: "August 16, 2016",
          img: "http://images.contentful.com/fa2v6i6dvqhy/7JcIXfDJEAeqM4Yq6EwUGu/28c5cbec562863a03b2e3f0c47b78780/adidas_throwback.jpg",
          snippet: "Glossy features Urban Outfitters' revival of popular ‘90s fashion",
        },
      ],
    }
  }

  render() {
    const articles = this.state.articles;
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: "/"}}>Home</Link></li>
              <li className="active">What's New</li>
            </ol>
          </div>
          <div className="col-xs-12 text-body news">
            
          </div>
        </div>
      </div>
    )
  }
  
}