import React, {Component} from "react";

export default class Aboutme extends Component {
             render() {
        return (
          < section id = "aboutUs" >
            <div className="inner_wrapper about-us aboutUs-container fadeInLeft animated wow">
              <div className="container">
                <h2>About Me</h2>
                <p>My name is Bryant Conti. I became deaf since born in San Franciso, Calfironia. I grew up Bay Area, California.</p>

                <div className="inner_section">
                  <div className="row">
                    <div className="col-md-6">
                      <h3>Passion</h3>
                      <p>I always learn many things about technology by researching and
                      discovering software, hardware, and programming langauge. Normally,
                      I always fail in many attempts until scceed to gain knowledge and
                      improve skill to become fast hands-on project and fast problem solver.</p>
                      <p>Cloud computing became my passion when I learn to how manage Amazon EC2 and EBS first time for 
                        how to backup storage and database from CIT System Management class in 
                        California State University, Northridge. 
                        I love to learning a lot about cloud computing. 
                        I continue study more about AWS and work on hands-on experience.
                      </p>
                      <p>I have volunteer work as Web Coordinator for Bay Area Association Deaf Asian (BAADA).
                      I have responsible for developing, designing, and implementing website
                      by testing and deploying it thorugh Wix as web designer framework.
                      I attend meeting with president, vice president, and board members
                      to discuss more about website improvement and add creative ideas 
                      to keep website updated and meet the requirement 
                      ultizing aglie development as planning, strategy, and communication.</p>
                    </div>
                    <div className="col-md-6"> <img className="img-responsive" src="img/aboutpic.jpg" align="" alt="Bryant-Aboutme" /> </div>

                  </div>
                </div>
              </div>
            </div>
          </section >
        );
    }
}
