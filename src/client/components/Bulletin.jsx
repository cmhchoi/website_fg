import React from 'react';
import { Link } from 'react-router';

export default class Bulletin extends React.Component {

  render() {
  	const items = this.props.items;
    return(
      <div className="frame row">
        <div className="banner">
          <img/>
        </div>
        <ul>
        {items.map((item) => {
          if(item.link) {
            return(
              <li className="bulletin-list col-xs-12 col-sm-6 col-lg-4">
                <p><a href={item.link}>{item.text}</a></p>
              </li>
            )
          } else {
            return(
              <li className="bulletin-list col-xs-12 col-sm-6 col-lg-4">
                <p>{item.text}</p>
              </li>
            )
          }
        })}
        </ul>
      </div>
    )
  }
}
