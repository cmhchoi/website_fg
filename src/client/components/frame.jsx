import React from 'react';
import { Link } from 'react-router';

export default class Frame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: [
        {
          img: "http://www.firstglory.com/images/stories/whatwedo/daretodream01.jpg",
          des: "WHO WE ARE",
          link: '/who-we-are'
        },
        {
          img: "http://www.firstglory.com/images/stories/whatwedo/daretodream02.jpg",
          des: "PRODUCTS",
          link: '/products'
        },
        {
          img: "http://www.firstglory.com/images/stories/whatwedo/daretodream03.jpg",
          des: "PEOPLE",
          link: '/people'
        },
        {
          img: "http://www.firstglory.com/images/stories/whatwedo/daretodream04.jpg",
          des: "GLOBAL COMMUNITY INITIATIVE",
          link: '/global-community-initiatives'
        },
        {
          img: "http://www.firstglory.com/images/stories/whatwedo/daretodream05.jpg",
          des: "WHAT'S NEW",
          link: '/whats-new'
        },
      ],
    }
  }

  render() {
    return(
      <div className="frame row">
        <ul>
          {this.state.pictures.map(picture => {
            return <li className="col-xs-12 col-md-6 col-lg-4 picture-link">
              <Link to={{ pathname: picture.link }}>
                <div className="text">
                  <p className="picture-des">{picture.des}</p>
                </div>
                <div className="picture-container">
                  <img className="picture" src={picture.img}/>
                </div>
              </Link>
            </li>
          })}
        </ul>
      </div>
    )
  }
}
