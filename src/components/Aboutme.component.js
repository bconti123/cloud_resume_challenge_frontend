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
                      <p>I have always been interested in technology and enjoy researching and discovering new software, hardware, and programming languages. Though I have faced challenges and failed in many attempts, I have persisted and gained knowledge and improved my skills to become a fast hands-on problem solver.</p>
                      <p>Cloud computing, in particular, has become my passion. I first learned how to manage Amazon EC2 and EBS in a CIT System Management class at California State University, Northridge. I continue to study more about AWS and gain hands-on experience.
                      </p>
                      <p>I also volunteer as the Web Coordinator for the Bay Area Association Deaf Asian (BAADA). I am responsible for developing, designing, and implementing a website using the Wix framework. I attend meetings with the president, vice president, and board members to discuss website improvements and bring new ideas to keep the website updated, utilizing agile development for planning, strategy, and communication.
                        </p>
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
