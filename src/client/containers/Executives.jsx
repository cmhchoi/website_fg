import React from 'react';
import { Link } from 'react-router';

export default class Executives extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      executives: [
        {
          img: "https://line.do/uploads/1647708565507255_1446330354630.jpg",
          name: "Mark Zuckerberg",
          title: "Chairman", 
          bio: 'Frank Conforti joined URBN in March 2007 as Director of Finance and SEC Reporting and was subsequently promoted to Controller, Chief Accounting Officer and then Chief Financial Officer, his current role. Frank oversees Finance, Accounting, Tax, Investor Relations, Business Development & Strategy and Loss Prevention. Prior to joining the company, Frank worked with AlliedBarton Security Services, LLC, for five years, serving as Controller for three years. He began his career at KPMG in 1998 where he held various audit roles. Frank was named as one of the top CFOs in Retail in 2014 by Institutional Investor. Frank holds a B.S. in Accounting from Moravian College and is a Certified Public Accountant.',
          order: 1,
        },
        {
          img: "https://line.do/uploads/1647708565507255_1446330354630.jpg",
          name: "Dark Zuckerberg",
          title: "CEO", 
          bio: 'Frank Conforti joined URBN in March 2007 as Director of Finance and SEC Reporting and was subsequently promoted to Controller, Chief Accounting Officer and then Chief Financial Officer, his current role. Frank oversees Finance, Accounting, Tax, Investor Relations, Business Development & Strategy and Loss Prevention. Prior to joining the company, Frank worked with AlliedBarton Security Services, LLC, for five years, serving as Controller for three years. He began his career at KPMG in 1998 where he held various audit roles. Frank was named as one of the top CFOs in Retail in 2014 by Institutional Investor. Frank holds a B.S. in Accounting from Moravian College and is a Certified Public Accountant.',
          order: 2,
        },
        {
          img: "https://line.do/uploads/1647708565507255_1446330354630.jpg",
          name: "Bark Zuckerberg",
          title: "CFO", 
          bio: 'Frank Conforti joined URBN in March 2007 as Director of Finance and SEC Reporting and was subsequently promoted to Controller, Chief Accounting Officer and then Chief Financial Officer, his current role. Frank oversees Finance, Accounting, Tax, Investor Relations, Business Development & Strategy and Loss Prevention. Prior to joining the company, Frank worked with AlliedBarton Security Services, LLC, for five years, serving as Controller for three years. He began his career at KPMG in 1998 where he held various audit roles. Frank was named as one of the top CFOs in Retail in 2014 by Institutional Investor. Frank holds a B.S. in Accounting from Moravian College and is a Certified Public Accountant.',
          order: 3,
        },
        {
          img: "https://line.do/uploads/1647708565507255_1446330354630.jpg",
          name: "Park Zuckerberg",
          title: "CTO", 
          bio: 'Frank Conforti joined URBN in March 2007 as Director of Finance and SEC Reporting and was subsequently promoted to Controller, Chief Accounting Officer and then Chief Financial Officer, his current role. Frank oversees Finance, Accounting, Tax, Investor Relations, Business Development & Strategy and Loss Prevention. Prior to joining the company, Frank worked with AlliedBarton Security Services, LLC, for five years, serving as Controller for three years. He began his career at KPMG in 1998 where he held various audit roles. Frank was named as one of the top CFOs in Retail in 2014 by Institutional Investor. Frank holds a B.S. in Accounting from Moravian College and is a Certified Public Accountant.',
          order: 4,
        },
      ],
      current: null,
    }
  }

  render() {
    const executives = this.state.executives;
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb grey underline">
              <li><Link className="grey underline" to={{pathname: "/"}}>Home</Link></li>
              <li><Link className="grey underline" to={{pathname: "/who-we-are"}}>Who Are We</Link></li>
              <li className="active">Executive Officers</li>
            </ol>
          </div>
        </div>
        <div className="row">
  		    <div className="col-xs-12 executives">
            <ul>
              {(executives.map((executive) => {
                return(
                  <li>
                    <div className="exec">
                      <div className="col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-4 exec-img-container">
                        <img className="exec-img" src={executive.img}/>
                      </div>
                      <div className="col-xs-12 col-sm-8 exec-bio">
                        <h4>{executive.name}</h4>
                        <h4>{executive.title}</h4>
                        <p>{executive.bio}</p>
                      </div>
                    </div>
                  </li>
                )
              }))}
            </ul>
  		    </div>
        </div>     
      </div>
    )
  }
  
}
