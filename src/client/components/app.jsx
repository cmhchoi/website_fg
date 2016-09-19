import React from 'react';
import { IndexLink, Link } from 'react-router';
import $ from "jquery";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // gallery
      // portfolio
      // factories
      // directors
      // news
    };
  }

  componentWillMount() {
    //API call for data
    // this.serverRequest = $.get("https://demo2697834.mockable.io/movies", data => {
    //   this.setState({
    //     videos: data.entries,
    //   });
    // });
  }


              // <IndexLink className="navbar-brand" to={{ pathname: '/' }}>
              //   <img src="assets/images/logo.png" alt="Dispute Bills" />
              // </IndexLink>

  render() {
    return (
      <div>
        <div className="container">
          <div className="logo col-lg-1 col-sm-2 hidden-xs">
            <IndexLink to={{ pathname: '/' }}>
              <img className="logo-img" src="assets/images/logo1.png" alt="Dispute Bills" />
            </IndexLink>
          </div>
          <div className="content col-lg-11 col-xs-12 col-sm-10">
            <nav className="navbar navbar-default">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar2">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <IndexLink className="navbar-brand collapsed" to={{ pathname: '/' }}>
                  <img className="nav-logo-img visible-xs" src="assets/images/logo.png" alt="First Glory" />
                </IndexLink>
              </div>
              <div id="navbar2" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to={{ pathname: '/who-we-are' }}>Who We Are</Link></li>
                  <li><Link to={{ pathname: '/products' }}>Products</Link></li>
                  <li><Link to={{ pathname: '/people' }}>People</Link></li>
                  <li><Link to={{ pathname: '/global-community-initiatives' }}>Global Community Initiative</Link></li>
                  <li><Link to={{ pathname: '/whats-new' }}>What's New</Link></li>
                </ul>
              </div>
            </nav>
            <div className="content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}



