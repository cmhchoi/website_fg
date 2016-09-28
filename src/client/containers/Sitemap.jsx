import React from 'react';
import { Link } from 'react-router';

export default class Sitemap extends React.Component {
  
  render() {
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: "/"}}>Home</Link></li>
              <li className="active">Site Map</li>
            </ol>
          </div>
          <div className="col-xs-12 text-body sitemap">
            <ul>
              <li className="col-xs-12 col-sm-3">
                <Link to={{pathname: "/who-we-are"}}><h5>Who We Are</h5></Link>
                <ul>
                  <li><Link to={{pathname: "/who-we-are/history"}}>History</Link></li>
                  <li><Link to={{pathname: "/who-we-are/executive-officers"}}>Executive Officers</Link></li>
                  <li><Link to={{pathname: "/who-we-are/our-partners"}}>Our Partners</Link></li>
                  <li><Link to={{pathname: "/who-we-are/culture-core-values"}}>Culture & Core Values</Link></li>
                </ul>
              </li>
              <li className="col-xs-12 col-sm-3">
                <Link to={{pathname: "/products"}}><h5>Products</h5></Link>
                <ul>
                  <li>
                    <Link to={{pathname: "/products/category"}}>Category</Link>
                    <ul>
                      <li><Link to={{pathname: "/products/category/men"}}>Men</Link></li>
                      <li><Link to={{pathname: "/products/category/women"}}>Women</Link></li>
                      <li><Link to={{pathname: "/products/category/children"}}>Children</Link></li>
                    </ul>
                  </li>
                  <li><Link to={{pathname: "/products/materials"}}>Materials Used</Link></li>
                  <li><Link to={{pathname: "/products/techniques"}}>Techinques</Link></li>
                </ul>
              </li>
              <li className="col-xs-12 col-sm-3">
                <Link to={{pathname: "/people"}}><h5>People</h5></Link>
                <ul>
                  <li>
                    <Link to={{pathname: "/people/factories"}}>Our Factories</Link>
                    <ul>
                      <li><Link to={{pathname: "/people/factories/zhongshan"}}>Zhongshan</Link></li>
                      <li><Link to={{pathname: "/people/factories/cebu"}}>Cebu</Link></li>
                    </ul>
                  </li>
                  <li><Link to={{pathname: "/people/story"}}>Our People</Link></li>
                  <li><Link to={{pathname: "/people/jobs"}}>Jobs</Link></li>
                </ul>
              </li>
              <li className="col-xs-12 col-sm-3">
                <Link to={{pathname: "/global-community-initiatives"}}><h5>Global Community Initiatives</h5></Link>
                <ul>
                  <li><Link to={{pathname: "/global-community-initiatives/sustainability"}}>Sustainability</Link></li>
                  <li><Link to={{pathname: "/global-community-initiatives/charitable-programmes"}}>Charitable Programmes</Link></li>
                  <li><Link to={{pathname: "/global-community-initiatives/practices"}}>Practices</Link></li>
                  <li><Link to={{pathname: "/global-community-initiatives/responsibility"}}>Responsibility</Link></li>
                  <li><Link to={{pathname: "/global-community-initiatives/collaboration"}}>Collaboration</Link></li>
                </ul>
              </li>
              <div className="hidden-xs"></div>
              <li className="col-xs-12 col-sm-3"><Link to={{pathname: "/whats-new"}}><h5>What's New</h5></Link></li>
              <li className="col-xs-12 col-sm-3"><Link to={{pathname: "/terms-of-use"}}><h5>Terms of Use</h5></Link></li>
              <li className="col-xs-12 col-sm-3"><Link to={{pathname: "/privacy"}}><h5>Privacy Policy</h5></Link></li>
              <li className="col-xs-12 col-sm-3"><Link to={{pathname: "/contact-us"}}><h5>Contact Us</h5></Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
}