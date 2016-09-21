import React from 'react';
import { Link } from 'react-router';
import Lightbox from 'react-images';

export default class Album extends React.Component {

  render() {
    const items = this.props.items;
    return(
      <div className="frame row">
        <ul className="mobile-padding-right-20">
          {items.map(item => {
            return <li className='list-list'>
              <div className="list-image col-xs-12 col-sm-6">
                <img className="list-picture" src={item.img}/>
              </div>
              <div className="list-text col-xs-12 col-sm-6">
                <h5 className="list-title">{item.title}</h5>
                <p className="list-des">{item.des}</p>
              </div>
            </li>
          })}
        </ul>
      </div>
    )
  }
}





