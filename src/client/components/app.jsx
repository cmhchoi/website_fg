import React from 'react';
import { IndexLink, Link } from 'react-router';
import $ from "jquery";

export default class App extends React.Component {

  componentWillMount() {
    $(window).scroll(() => {
      if ($(document).scrollTop() > 30) {
        $('.navbar-brand').removeClass('large-logo');
        $('#navbar2').removeClass('large-nav')
      } else {
        $('.navbar-brand').addClass('large-logo');
        $('#navbar2').addClass('large-nav')
      }
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="content col-lg-offset-1 col-lg-10 col-xs-12 col-sm-12">
            <nav className="top-nav navbar navbar-default fixed">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar2">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <IndexLink className="navbar-brand large-logo" to={{ pathname: '/' }}>
                  <img className="nav-logo-img" src="assets/images/logo2.jpg" alt="First Glory" />
                </IndexLink>
              </div>
              <div id="navbar2" className="navbar-collapse collapse large-nav">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to={{ pathname: '/who-we-are' }}>Who We Are</Link></li>
                  <li><Link to={{ pathname: '/products' }}>Products</Link></li>
                  <li><Link to={{ pathname: '/people' }}>People</Link></li>
                  <li><Link to={{ pathname: '/global-community-initiatives' }}>Global Community Initiative</Link></li>
                  <li><Link to={{ pathname: '/whats-new' }}>What's New</Link></li>
                </ul>
              </div>
            </nav>
            <div className="bumper"></div>
            <div className="content">
              {this.props.children}
            </div>
            <footer className="footer">
              <nav className="navbar navbar-default">
                <div className="" id="footer-body">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="foot-list"><Link href="#">繁</Link></li>
                        <li className="foot-list"><Link href="#">簡</Link></li>
                        <li className="foot-list"><Link href="/contact-us">Contact Us</Link></li>
                        <li className="foot-list"><Link href="#">Site Map</Link></li>
                        <li className="foot-list"><Link href="/terms-of-use">Terms of Use</Link></li>
                        <li className="foot-list"><Link href="#">Privacy Policy</Link></li>
                        <li className="foot-list"><Link href="https://www.facebook.com/firstgloryltd/">Facebook</Link></li>
                    </ul>
                </div>
              </nav>
              <p>2016 First Glory Ltd. All Rights Reserved</p>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}



