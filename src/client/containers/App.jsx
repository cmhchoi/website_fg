import React from 'react';
import { IndexLink, Link } from 'react-router';
import $ from "jquery";
import labels from '../assets/labels.js' 

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = null;
  }

  componentWillMount() {
    $(window).scroll(() => {
      if ($(document).scrollTop() > 20) {
        $('.navbar-brand').removeClass('large-logo');
        $('#navbar2').removeClass('large-nav')
      } else {
        $('.navbar-brand').addClass('large-logo');
        $('#navbar2').addClass('large-nav')
      }
    });

    this.setState({ labels: labels })
  }

  updateAppState(object) {
    this.setState(object)
  }

  footer(language, path) {
    if(language === 'zh-t') {
      return(
        <footer className="footer">
          <nav className="navbar navbar-default">
            <div className="" id="footer-body">
                <ul className="nav navbar-nav navbar-right">
                    <li className="foot-list"><Link to={{pathname: "/zh-s"}}>简</Link></li>
                    <li className="foot-list"><Link to={{pathname: "/"}}>English</Link></li>
                    <li className="foot-list"><Link to={{pathname: "/contact-us"}}>聯絡我們</Link></li>
                    <li className="foot-list"><Link to={{pathname: "/sitemap"}}>網站地圖</Link></li>
                    <li className="foot-list"><Link to={{pathname: "/terms-of-use"}}>使用條款</Link></li>
                    <li className="foot-list"><Link to={{pathname: "/privacy"}}>隱私政策</Link></li>
                    <li className="foot-list"><a href="https://www.facebook.com/firstgloryltd/">Facebook</a></li>
                </ul>
            </div>
          </nav>
          <p>2016 錦濤國貿有限公司。版權所有</p>
        </footer>
      )
    } else if (language === 'zh-s') {
      return(
        <footer className="footer">
          <nav className="navbar navbar-default">
            <div className="" id="footer-body">
                <ul className="nav navbar-nav navbar-right">
                    <li className="foot-list"><Link to={{pathname: "/zh-t"}}>繁</Link></li>
                    <li className="foot-list"><Link to={{pathname: "/"}}>English</Link></li>
                    <li className="foot-list"><Link to={{pathname: "/contact-us"}}>联络我们</Link></li>
                    <li className="foot-list"><Link to={{pathname: "/sitemap"}}>网站地图</Link></li>
                    <li className="foot-list"><Link to={{pathname: "/terms-of-use"}}>使用条款</Link></li>
                    <li className="foot-list"><Link to={{pathname: "/privacy"}}>隐私政策</Link></li>
                    <li className="foot-list"><a href="https://www.facebook.com/firstgloryltd/">Facebook</a></li>
                </ul>
            </div>
          </nav>
          <p>2016 锦涛国贸有限公司。版权所有</p>
        </footer>
      )
    } else {
      return(
        <footer className="footer">
          <nav className="navbar navbar-default">
            <div className="" id="footer-body">
                <ul className="nav navbar-nav navbar-right">
                    <li className="foot-list"><Link to={{pathname: "/zh-t"}}>繁</Link></li>
                    <li className="foot-list"><Link to={{pathname: "/zh-s"}}>简</Link></li>
                    <li className="foot-list"><Link to={{pathname: "/contact-us"}}>Contact Us</Link></li>
                    <li className="foot-list"><Link to={{pathname: "/sitemap"}}>Site Map</Link></li>
                    <li className="foot-list"><Link to={{pathname: "/terms-of-use"}}>Terms of Use</Link></li>
                    <li className="foot-list"><Link to={{pathname: "/privacy"}}>Privacy Policy</Link></li>
                    <li className="foot-list"><a href="https://www.facebook.com/firstgloryltd/">Facebook</a></li>
                </ul>
            </div>
          </nav>
          <p>2016 First Glory Ltd. All Rights Reserved</p>
        </footer>
      )
    }
  }

  render() {
    console.log(labels)
    console.log('appy', this.state)
    const language = this.props.params.language || '';
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
                  <img className="nav-logo-img" src="/assets/images/logo2.jpg" alt="First Glory" />
                </IndexLink>
              </div>
              <div id="navbar2" className="navbar-collapse collapse large-nav">
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown" data-toggle="dropdown">
                    <Link to={{ pathname: '/who-we-are' }}>Who We Are</Link>
                    <ul className="dropdown-menu">
                      <li><Link to={{ pathname: '/who-we-are/history' }}>History</Link></li>
                      <li><Link to={{ pathname: '/who-we-are/executive-officers' }}>Executive Officers</Link></li>
                      <li><Link to={{ pathname: '/who-we-are/our-partners' }}>Our Partners</Link></li>
                      <li><Link to={{ pathname: '/who-we-are/culture-core-values' }}>Culture & Core Values</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link to={{ pathname: '/products' }}>Products</Link>
                    <ul className="dropdown-menu">
                      <li><Link to={{ pathname: '/products/category' }}>Category</Link></li>
                      <li><Link to={{ pathname: '/products/materials' }}>Materials Used</Link></li>
                      <li><Link to={{ pathname: '/products/techniques' }}>Techniques</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link to={{ pathname: '/people' }}>People</Link>
                    <ul className="dropdown-menu">
                      <li><Link to={{ pathname: '/people/factories' }}>Our Factories</Link></li>
                      <li><Link to={{ pathname: '/people/story' }}>Our People</Link></li>
                      <li><Link to={{ pathname: '/people/jobs' }}>Work With Us</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link to={{ pathname: '/global-community-initiatives' }}>Global Community Initiative</Link>
                    <ul className="dropdown-menu">
                      <li><Link to={{ pathname: '/global-community-initiatives/sustainability' }}>Sustainability</Link></li>
                      <li><Link to={{ pathname: '/global-community-initiatives/charitable-programmes' }}>Charitable Programmes</Link></li>
                      <li><Link to={{ pathname: '/global-community-initiatives/practices' }}>Practices</Link></li>
                      <li><Link to={{ pathname: '/global-community-initiatives/responsibility' }}>Responsibility</Link></li>
                      <li><Link to={{ pathname: '/global-community-initiatives/collaboration' }}>Collaboration</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown"><Link to={{ pathname: '/whats-new' }}>What's New</Link></li>
                </ul>
              </div>
            </nav>
            <div className="bumper"></div>
            <div className="content">
              {React.cloneElement(this.props.children, { state: this.state, updateAppState: this.updateAppState.bind(this), language: this.props.params.language})}
            </div>
              {this.footer(this.props.params.language, this.props.location.pathname)}
          </div>
        </div>
      </div>
    )
  }
}



