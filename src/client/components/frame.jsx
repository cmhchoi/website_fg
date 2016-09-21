import React from 'react';
import { Link } from 'react-router';

export default class Frame extends React.Component {

  render() {
    const pictures = this.props.pictures;
    // let largeLogic = "col-xs-12 col-sm-6 col-lg-4 picture-link";
    // if(pictures.length === 4) {
    //   largeLogic = "col-xs-12 col-sm-6 col-lg-6 picture-link";
    // }


    // if(pictures.length % 3 === 1 || pictures.length % 3 === 2 || 
    //   pictures.length % 2 === 1 )










    //if length > 3

      //return first type
      // if length % 3 === 0, all lines large = 4 column
      // if length % 3 === 1, first line large = 8 col + 4 col, second line 4 col + 8 col
      // if length % 3 === 2, first line large = 8 col + 4 col, second line all large
      // if length % 2 === 0, all lines medium = 6 col
      // if length % 2 === 1, first line medium = 12 col, second line 6 col

    //if length === 3 

      //return large 1 line, medium 2 lines
      //large = 4 column
      //medium = first line medium = 12 col, second line 6 col

    //if length === 2

      // return 1 line
      // large = 6 col
      // medium = 6 col

    //if length === 1

      // return 1 line all 12 column
      // large = 12 col
      // medium = 12 col


          //<li className="picture-link col-lg-8">
            //  <Link to={{ pathname: '/who-we-are' }}>
              //  <div className="text">
                //  <p className="picture-des">WHO WE ARE</p>
                //</div>
                //<div className="picture-container">
                  //<img className="picture" src="http://www.coupofy.com/m/Store/content/Skt79E_5.jpg"/>
                //</div>
              //</Link>
            //</li>

    return(
      <div className="frame row">
        <ul>
        <li className="col-xs-12 col-sm-6 col-lg-8 picture-link">
                <div className="text">
                  <p className="picture-des">WHO WE ARE</p>
                </div>
                <div className="picture-container rectangle">
                  <img className="picture" src="http://www.coupofy.com/m/Store/content/Skt79E_5.jpg"/>
                </div>
            </li>
            <li className="col-xs-12 col-sm-6 col-lg-4 picture-link">
                <div className="text">
                  <p className="picture-des">PRODUCTS</p>
                </div>
                <div className="picture-container">
                  <img className="picture" src="http://s12.favim.com/610/160527/adidas-beautiful-fashion-girl-Favim.com-4351007.jpeg"/>
                </div>
            </li>
            </ul>
            <ul>
          {pictures.map(picture => {
            return <li className="col-xs-12 col-sm-6 col-lg-4 picture-link">
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
