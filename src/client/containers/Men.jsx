import React from 'react';
import { Link } from 'react-router';
import $ from "jquery";
import Frame from '../components/Frame.jsx';

export default class Men extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      pictures: [
        {
          img: "http://www.ganzomag.com/wp-content/uploads/2013/07/perfect-persuasion-tshirts.jpg",
          des: "T-SHIRT",
          link: '/products/men',
          size: 'square'
        },
        {
          img: "http://image.dhgate.com/0x0/f2/albu/g3/M01/65/E3/rBVaHFaSFc2AB4WMAACEMPKwEx8946.jpg",
          des: "TROUSERS",
          link: '/products/men',
          size: 'square'
        },
        {
          img: "http://www.ganzomag.com/wp-content/uploads/2013/07/perfect-persuasion-tshirts.jpg",
          des: "T-SHIRT",
          link: '/products/men',
          size: 'square'
        },
        {
          img: "http://www.ganzomag.com/wp-content/uploads/2013/07/perfect-persuasion-tshirts.jpg",
          des: "T-SHIRT",
          link: '/products/men',
          size: 'square'
        },
        {
          img: "http://www.ganzomag.com/wp-content/uploads/2013/07/perfect-persuasion-tshirts.jpg",
          des: "T-SHIRT",
          link: '/products/men',
          size: 'square'
        },
        {
          img: "http://www.ganzomag.com/wp-content/uploads/2013/07/perfect-persuasion-tshirts.jpg",
          des: "T-SHIRT",
          link: '/products/men',
          size: 'square'
        },
      ],
      images: [
        {
          "T-SHIRT": [
            "http://www.ganzomag.com/wp-content/uploads/2013/07/perfect-persuasion-tshirts.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg",
            "https://www.lamnia.com/images/sg-150-Shirts_and_T-Shirts.jpg",
            "http://market24.co/wp-content/uploads/2016/04/t473gold.jpg",      
          ],
          "TROUSERS": [
            "http://image.dhgate.com/0x0/f2/albu/g3/M01/65/E3/rBVaHFaSFc2AB4WMAACEMPKwEx8946.jpg",
            "https://media.frenchconnection.com/ms/fcuk/54EEZ.jpg?height=768&width=526&lc=en-GB&lv=9",
            "http://www.charleswall.co.uk/images/XL/GurteenTrouser1400011_202.jpg",
            "http://www.blitzsport.com/images/large/Adult-Classic-Polycotton-Full-Contact-Trousers-Black-Red.jpg",
          ]
        }
      ]
    }
  }
  
  render() {
    return(
      <div>
        <Frame pictures={this.state.pictures} images={this.state.images}/>
      </div>
    )
  }
  
}