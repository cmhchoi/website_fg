import React from 'react';
import { Link } from 'react-router';

export default class Factories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      factories: [
        {
          type: "factory",
          name: "First Glory (Zhongshan, China) Ltd.",
          img: "http://liferebooted.net/wordpress/wp-content/uploads/2014/03/20140307-IMG_0759-e1394324399891-1240x610.jpg",
          link: "/people/factories/zhongshan",
          des: "Zhongshan",
          year: 2003,
          products: "Men and Women's Cut & Sewn Tops, Bottoms, Dress, Skirt, Jacket",
          services: "Sampling, Computer Grading/Marking, Cutting, Sewing, Finishing, Pressing, Logistics",
          address: "1 Jiankang Road, Shapingcun, Shaxi, Zhongshan, Guangdong, China",
          factsheet: "http://www.firstglory.com/images/pdf/en-zhongshan-manufacturing-plant.pdf"
        },
        {
          type: "factory",
          name: "First Glory Philippines, Inc.",
          img: "http://liferebooted.net/wordpress/wp-content/uploads/2014/03/20140307-IMG_0759-e1394324399891-1240x610.jpg",
          link: "/people/factories/cebu",
          des: "Cebu",
          year: 2005,
          products: "Men and Women's Cut & Sewn Tops, Bottoms, Dress, Skirt, Jacket",
          services: "Designing/Conceptualization, Sample Room, Computer, Grading/Marking, Cutting, Sewing, Wet Processing (through alliance with local laundry), Finishing, Pressing, Logistics",
          address: "3rd Floor, Sudecor Building, MEPZ 1, Gate 2, Lapu-lapu City, Cebu, Philippines",
          factsheet: "http://www.firstglory.com/images/pdf/en-cebu-the-philippines-manufacturing-plant.pdf"
        },
      ]
    }
  }

  render() {
    const factories = this.state.factories;
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: "/"}}>Home</Link></li>
              <li><Link className="grey underline" to={{pathname: "/people"}}>People</Link></li>
              <li className="active">Our Factories</li>
            </ol>
          </div>
        </div>
        <div className="frame row">
          <ul>
            {factories.map((factory) => {
              return( 
                <li className="picture-link factory col-xs-12 col-sm-6">
                  <Link to={{ pathname: factory.link }}>
                    <div className="text">
                      <p className="picture-des">{factory.des}</p>
                    </div>
                    <div className="picture-container rectangle mid-no-rectangle">
                      <img className="picture" src={factory.img}/>
                    </div>
                  </Link>
                  <h4>{factory.name}</h4>
                  <h5 className="factory-title">Year Founded</h5>
                  <p className="factory-detail">{factory.year}</p>
                  <h5 className="factory-title">Products</h5>
                  <p className="factory-detail">{factory.products}<br/><Link to={{pathname: "/products/category"}}>See Category</Link></p>
                  <h5 className="factory-title">Facilities/Services</h5>
                  <p className="factory-detail">{factory.services}</p>
                  <h5 className="factory-title">Address</h5>
                  <p className="factory-detail">{factory.address}<br/><Link to={{pathname: "/contact-us"}}>Contact Us</Link></p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
  
}