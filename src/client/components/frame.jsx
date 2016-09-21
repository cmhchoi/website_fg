import React from 'react';
import { Link } from 'react-router';

export default class Frame extends React.Component {

  normalFrame(pictures, special) {
    let listClass = "col-xs-12 col-sm-6 picture-link";
    special === "special" ? listClass += " col-lg-6" : listClass += " col-lg-4"
    return pictures.map(picture => {
      return( 
        <div>
          <li className={listClass}>
            <Link to={{ pathname: picture.link }}>
              <div className="text">
                <p className="picture-des">{picture.des}</p>
              </div>
              <div className="picture-container">
                <img className="picture" src={picture.img}/>
              </div>
            </Link>
          </li>
        </div>
      )
    })
  }

  medOneRow(rectangles) {
    return (
      <div>
        <li className="col-xs-12 col-sm-12 col-lg-4 picture-link">
          <Link to={{ pathname: rectangles[0].link }}>
            <div className="text">
              <p className="picture-des">{rectangles[0].des}</p>
            </div>
            <div className="picture-container rectangle large-no-rectangle">
              <img className="picture" src={rectangles[0].img}/>
            </div>
          </Link>
        </li>
      </div>
    )
  }
  
  largeOneRow(rectangles, squares) {
    return (
      <div>
        <li className="col-xs-12 col-sm-6 col-lg-8 picture-link">
          <Link to={{ pathname: rectangles[0].link }}>
            <div className="text">
              <p className="picture-des">{rectangles[0].des}</p>
            </div>
            <div className="picture-container rectangle mid-no-rectangle">
              <img className="picture" src={rectangles[0].img}/>
            </div>
          </Link>
        </li>
        <li className="col-xs-12 col-sm-6 col-lg-4 picture-link">
          <Link to={{ pathname: squares[0].link }}>
            <div className="text">
              <p className="picture-des">{squares[0].des}</p>
            </div>
            <div className="picture-container">
              <img className="picture" src={squares[0].img}/>
            </div>
          </Link>
        </li>
      </div>
    )
  }

  largeTwoRows(rectangles, squares) {
    return (
      <div>
        <li className="col-xs-12 col-sm-6 col-lg-8 picture-link">
          <Link to={{ pathname: rectangles[0].link }}>
            <div className="text">
              <p className="picture-des">{rectangles[0].des}</p>
            </div>
            <div className="picture-container rectangle mid-no-rectangle">
              <img className="picture" src={rectangles[0].img}/>
            </div>
          </Link>
        </li>
        <li className="col-xs-12 col-sm-6 col-lg-4 picture-link">
          <Link to={{ pathname: squares[0].link }}>
            <div className="text">
              <p className="picture-des">{squares[0].des}</p>
            </div>
            <div className="picture-container">
              <img className="picture" src={squares[0].img}/>
            </div>
          </Link>
        </li>
        <li className="col-xs-12 col-sm-6 col-lg-4 picture-link">
          <Link to={{ pathname: squares[1].link }}>
            <div className="text">
              <p className="picture-des">{squares[1].des}</p>
            </div>
            <div className="picture-container">
              <img className="picture" src={squares[1].img}/>
            </div>
          </Link>
        </li>
        <li className="col-xs-12 col-sm-6 col-lg-8 picture-link">
          <Link to={{ pathname: rectangles[1].link }}>
            <div className="text">
              <p className="picture-des">{rectangles[1].des}</p>
            </div>
            <div className="picture-container rectangle mid-no-rectangle">
              <img className="picture" src={rectangles[1].img}/>
            </div>
          </Link>
        </li>
      </div>
    )
  }

  largeTwoRowsMedOneRow(rectangles, squares) {
    return (
      <div>
        <li className="col-xs-12 col-sm-12 col-lg-8 picture-link">
          <Link to={{ pathname: rectangles[0].link }}>
            <div className="text">
              <p className="picture-des">{rectangles[0].des}</p>
            </div>
            <div className="picture-container rectangle">
              <img className="picture" src={rectangles[0].img}/>
            </div>
          </Link>
        </li>
        <li className="col-xs-12 col-sm-6 col-lg-4 picture-link">
          <Link to={{ pathname: squares[0].link }}>
            <div className="text">
              <p className="picture-des">{squares[0].des}</p>
            </div>
            <div className="picture-container">
              <img className="picture" src={squares[0].img}/>
            </div>
          </Link>
        </li>
        <li className="col-xs-12 col-sm-6 col-lg-4 picture-link">
          <Link to={{ pathname: squares[1].link }}>
            <div className="text">
              <p className="picture-des">{squares[1].des}</p>
            </div>
            <div className="picture-container rectangle">
              <img className="picture" src={squares[1].img}/>
            </div>
          </Link>
        </li>
        <li className="col-xs-12 col-sm-6 col-lg-8 picture-link">
          <Link to={{ pathname: rectangles[1].link }}>
            <div className="text">
              <p className="picture-des">{rectangles[1].des}</p>
            </div>
            <div className="picture-container rectangle">
              <img className="picture" src={rectangles[1].img}/>
            </div>
          </Link>
        </li>
      </div>
    )
  }

  largeOneRowMedOneRow(rectangles, squares) {
    return (
      <div>
        <li className="col-xs-12 col-sm-12 col-lg-8 picture-link">
          <Link to={{ pathname: rectangles[0].link }}>
            <div className="text">
              <p className="picture-des">{rectangles[0].des}</p>
            </div>
            <div className="picture-container rectangle">
              <img className="picture" src={rectangles[0].img}/>
            </div>
          </Link>
        </li>
        <li className="col-xs-12 col-sm-6 col-lg-4 picture-link">
          <Link to={{ pathname: squares[0].link }}>
            <div className="text">
              <p className="picture-des">{squares[0].des}</p>
            </div>
            <div className="picture-container">
              <img className="picture" src={squares[0].img}/>
            </div>
          </Link>
        </li>
      </div>
    )
  }

  render() {
    const pictures = this.props.pictures;

    if(pictures.length % 3 === 1 && pictures.length !== 1) {

      const topRects = [];
      const topSquares = [];
      const normals = [];

      pictures.forEach((picture) => {
        if(picture.size === 'rectangle' && topRects.length < 2) {
          topRects.push(picture);
        } else if(picture.size === 'square' && topSquares.length < 2) {
          topSquares.push(picture);
        } else {
          normals.push(picture);
        }
      })
      
      if(pictures.length % 2 === 1) {
        return(
          <div className="frame row">
            <ul>
              {this.largeTwoRowsMedOneRow(topRects, topSquares)}
              {this.normalFrame(normals)}
            </ul>
          </div>
        )
      } else {
        return(
          <div className="frame row">
            <ul>
              {this.largeTwoRows(topRects, topSquares)}
              {this.normalFrame(normals)}
            </ul>
          </div>
        )
      }

    } else if(pictures.length % 3 === 2 && pictures.length !== 2) {

      const topRects = [];
      const topSquares = [];
      const normals = [];

      pictures.forEach((picture) => {
        if(picture.size === 'rectangle' && topRects.length < 1) {
          topRects.push(picture);
        } else if(picture.size === 'square' && topSquares.length < 1) {
          topSquares.push(picture);
        } else {
          normals.push(picture);
        }
      })

      if(pictures.length % 2 === 1) {
        return(
          <div className="frame row">
            <ul>
              {this.largeOneRowMedOneRow(topRects, topSquares)}
              {this.normalFrame(normals)}
            </ul>
          </div>
        )
      } else {
        return(
          <div className="frame row">
            <ul>
              {this.largeOneRow(topRects, topSquares)}
              {this.normalFrame(normals)}
            </ul>
          </div>
        )
      }

    } else if(pictures.length % 2 === 1) {

      const topRects = [];
      const normals = [];

      pictures.forEach((picture) => {
        if(picture.size === 'rectangle' && topRects.length < 2) {
          topRects.push(picture);
        } else {
          normals.push(picture);
        }
      })

      return(
        <div className="frame row">
          <ul>
            {this.medOneRow(topRects)}
            {this.normalFrame(normals)}
          </ul>
        </div>
      )

    } else {

      return(
        <div className="frame row">
          <ul>
            {this.normalFrame(pictures, "special")}
          </ul>
        </div>
      )

    }
  }
}
