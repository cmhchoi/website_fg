import React from 'react';

export default class Frame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: [
        {
          img: "http://healthyandstylish.com/wp-content/uploads/2016/07/simple-steps-on-how-to-dress-according-to-your-body-type.jpg",
          des: "TEXT"
        },
        {
          img: "http://healthyandstylish.com/wp-content/uploads/2016/07/simple-steps-on-how-to-dress-according-to-your-body-type.jpg",
          des: "TEXT"
        },
        {
          img: "http://healthyandstylish.com/wp-content/uploads/2016/07/simple-steps-on-how-to-dress-according-to-your-body-type.jpg",
          des: "TEXT"
        },
        {
          img: "http://healthyandstylish.com/wp-content/uploads/2016/07/simple-steps-on-how-to-dress-according-to-your-body-type.jpg",
          des: "TEXT"
        },
      ],
    }
  }

  render() {
    return(
      <div className="frame col-xs-12">
        {this.state.pictures.map(picture => {
          return <div className="picture-container col-xs-12 col-md-5">
            <img className="picture" src={picture.img}/>
            <p className="picture-des">{picture.des}</p>
          </div>
        })}
      </div>
    )
  }

}