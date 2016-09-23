import React from 'react';
import { Link } from 'react-router';
import $ from "jquery";

export default class Contact extends React.Component {
  
  render() {
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><a className="grey underline" href="/">Home</a></li>
              <li className="active">Contact Us</li>
            </ol>
          </div>
          <div className="col-xs-12 text-body">
            <h4>Email</h4>
            <p>
              <a className="grey underline" href="mailto:info@firstglory.com">info@firstglory.com</a>
            </p>
            <h4>Hong Kong</h4>
            <p>
              11B&D, Ka To Factory Building
              2 Cheung Yue Street, Lai Chi Kok,
              Kowloon, Hong Kong
            </p>
            <p>
              (852) 23073020/ (852) 23073091
            </p>
            <h4>Zhongshan, China</h4>
            <p>
              1 Jiankang Road, Shapingcun, 
              Shaxi, Zhongshan,
              Guangdong, China
            </p>
            <p>
              (86) 0760-87326630 / 0760-87330330
            </p>
            <h4>Cebu, Philippines</h4>
            <p>
              3rd Floor, Sudecor Building, MEPZ 1, 
              Gate 2, Lapu-lapu City, Cebu, 
              Philippines
            </p>
            <p>
              (63) 32-495-5177
            </p>
          </div>
        </div>
      </div>
    )
  }
  
}