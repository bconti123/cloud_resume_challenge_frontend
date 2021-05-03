import React, {Component} from "react";

export default class Aboutme extends Component {
             render() {
        return (
          < section id = "aboutUs" >
            <div className="inner_wrapper about-us aboutUs-container fadeInLeft animated wow">
              <div className="container">
                <h2>About Me</h2>
                <p>My name is Bryant Conti. I became deaf since born in San Franciso, California. I grew up in Bay Area, California.</p>

                <div className="inner_section">
                  <div className="row">
                    <div className="col-md-6">
                      <h3>Passion</h3>
                      <p>I always learn many things about technology by researching and discovering software, hardware, and programming languages. Usually, I always fail in many attempts until I succeed to gain knowledge and improve skills to become a fast hands-on project and quick problem solver.</p>
                      <p>Cloud computing became my passion when I learned how to manage Amazon EC2 and EBS first time to backup storage and database from the CIT System Management class at California State University, Northridge. I love learning a lot about cloud computing. I continue to study more about AWS and work on hands-on experience.
                      </p>
                      <p>I have volunteer work as Web Coordinator for Bay Area Association Deaf Asian (BAADA). I have responsibility for developing, designing, and implementing a website by testing and deploying it through Wix as a web designer framework. I attend meetings with the president, vice president, and board members to discuss more website improvement and add creative ideas to keep the website updated and meet the requirement utilizing agile development as planning, strategy, and communication.</p>
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
