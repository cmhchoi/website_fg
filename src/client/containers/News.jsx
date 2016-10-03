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
          title: "Vetri Community Partnership's Mobile Teaching Kitchen",
          date: "August 11, 2016",
          img: "http://img.whitezine.com/Martin-Schoeller-George-Clooney-Portrait.jpeg",
          snippet: "There's a new element to the Vetri Community Partnership program: mobile cooking lessons. Starting this fall, a mobile teaching kitchen will visit schools, community events and farmer’s markets in Philadelphia neighborhoods to give free lessons in healthy cooking.",
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
            {articles.map((article) => {
              return(
                <div className="col-xs-12">
                  <div className="col-xs-4 col-sm-3 news-img-container">
                    <a href="#" className="thumbnail">
                      <img src={article.img}/>
                    </a>
                  </div>
                  <div className="col-xs-12 col-sm-9 news-text-container">
                    <h4>{article.title}</h4>
                    <p>{article.date}</p>
                    <p>{article.snippet}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
  
}