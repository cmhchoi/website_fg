import React from 'react';
import { Link } from 'react-router';
import List from '../components/List.jsx'

export default class Culture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          img: "http://images.contentful.com/fa2v6i6dvqhy/320cJyvj7WWIieOy0AcwuI/bdeb31002f41c13f0948c6f74d4dc2c7/pizzeria-vetri-image.jpg",
          title: "Fostering Creativity",
          des: 'Creativity is in the fabric of all we do. It’s tangible in our store windows, our clothes and our incredible employee talent. It’s obvious when you realize no two store windows are the same and we wouldn’t want it any other way. At URBN, we welcome all ideas no matter how big or small. Check out the photos below to see our creativity at work.'
        },
        {
          img: "http://images.contentful.com/fa2v6i6dvqhy/320cJyvj7WWIieOy0AcwuI/bdeb31002f41c13f0948c6f74d4dc2c7/pizzeria-vetri-image.jpg",
          title: "Fostering Creativity",
          des: 'Creativity is in the fabric of all we do. It’s tangible in our store windows, our clothes and our incredible employee talent. It’s obvious when you realize no two store windows are the same and we wouldn’t want it any other way. At URBN, we welcome all ideas no matter how big or small. Check out the photos below to see our creativity at work.'
        },
        {
          img: "http://images.contentful.com/fa2v6i6dvqhy/320cJyvj7WWIieOy0AcwuI/bdeb31002f41c13f0948c6f74d4dc2c7/pizzeria-vetri-image.jpg",
          title: "Fostering Creativity",
          des: 'Creativity is in the fabric of all we do. It’s tangible in our store windows, our clothes and our incredible employee talent. It’s obvious when you realize no two store windows are the same and we wouldn’t want it any other way. At URBN, we welcome all ideas no matter how big or small. Check out the photos below to see our creativity at work.'
        }
      ]
    }
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: "/"}}>Home</Link></li>
              <li><Link className="grey underline" to={{pathname: "/who-we-are"}}>Who We Are</Link></li>
              <li className="active">Culture & Core Values</li>
            </ol>
          </div>
        </div>
        <List items={this.state.items}/>
      </div>
    )
  }
  
}