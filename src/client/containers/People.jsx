import React from 'react';
import Frame from '../components/Frame.jsx';

export default class People extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: [
        {
          img: "http://kaki.sini.com.my/en/wp-content/uploads/2016/08/happy1.jpg",
          des: "WHERE WE WORK",
          link: '/people/where-we-work',
          size: 'rectangle'
        },
        {
          img: "http://cdn.elezea.com/images/1_group-work.jpg",
          des: "OUR STORY",
          link: '/people/story',
          size: 'square'
        },
        {
          img: "http://cdn.elezea.com/images/1_group-work.jpg",
          des: "JOBS",
          link: '/people/jobs',
          size: 'square'
        },
      ],
    }
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><a className="grey underline" href="/">Home</a></li>
              <li className="active">People</li>
            </ol>
          </div>
        </div>
        <Frame pictures={this.state.pictures}/>
      </div>
    )
  }
  
}