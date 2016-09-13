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


  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar2">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <IndexLink className="navbar-brand" to={{ pathname: '/' }}>
                <img src="assets/images/logo.png" alt="Dispute Bills" />
              </IndexLink>
            </div>
            <div id="navbar2" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to={{ pathname: '/about' }}>Who We Are</Link></li>
                <li><Link to={{ pathname: '/products' }}>Products</Link></li>
                <li><Link to={{ pathname: '/news' }}>What's New</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}



