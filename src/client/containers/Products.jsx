import React from 'react';
import { Link } from 'react-router';
import $ from "jquery";
import Frame from '../components/Frame.jsx';

export default class Home extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      pictures: [
        {
          img: "http://iris.backcountry.com/image/view/c311028/900/900",
          des: "MEN",
          link: '/products/men'
        },
        {
          img: "http://www.toadandco.com/images/product/610/T1241603-669-16.jpg",
          des: "WOMEN",
          link: '/products/women'
        },
        {
          img: "https://s-media-cache-ak0.pinimg.com/736x/62/ec/92/62ec926e8a63ae7a60a68a97d70540a0.jpg",
          des: "CHILDREN",
          link: '/products/children'
        },
      ],
    }
  }
  
  render() {
    return(
      <div>
        <Frame pictures={this.state.pictures}/>
      </div>
    )
  }
  
}