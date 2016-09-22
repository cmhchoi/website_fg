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
          return(
            <li className="bulletin-list col-xs-12 col-sm-6 col-lg-4">
              <a href={item.link}>{item.text}</a>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}
