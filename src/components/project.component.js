import React, { Component } from "react";


export default class Project extends Component {
    render() {
        return (
            <section id="Projects">
                <div class="container">
                    <div class="row">
                        <br />
                        <h2>Projects</h2>
                        <div class="col-sm-6 col-md-6">
                            <h3>Cloud Resume Challenge</h3>
                            <span>April 5, 2021 - May 5, 2021 | <a href="https://blog.bryantconti.com/Cloud-Resume-Challenge/" target="_blank">blog post link</a></span>
                            <br />
                            <p>Deployed a react app on resume website as AWS S3 static website, 
                                configure AWS CloudFront and origin access identity 
                                (OAI) to redirect website from HTTP to HTTPS.
                            </p>
                            <br />
                            <p>Managed custom domain name and configured Route 53 
                                for adding CNAME record in pointing to CloudFront Distribution.
                            </p>
                            <br />
                            <p>Researched how to writing infrastructure as code to find better scripts for automatic upload AWS resources: DynamoDB, Lambda, and API Gateway, to find testing scripts for making sure the unit testing is done in the development to verify codes that pass or fail.
                            </p>
                            <br />
                            <p>Developed a Python code to call API Gateway with AWS Lambda as the backend, which is to retrieve and update the view count in the DynamoDB, a NoSQL Database, to count how many users access the website.
                            </p>
                            <br />
                            <p>Set up CI/CD utilizing GitHub actions for backend and frontend to automate applying AWS resources, Python testing, YAML scripting, and updating website if any configuration change is necessary.
                            </p>
                        </div>
                        <div class="col-sm-6 col-md-6">
                            <h3>CalStatePays</h3>
                            <span>October 2019 - May 2020</span>
                            <br />
                            <p>Estimated AWS resource costs and used spreadsheets and AWS Pricing Calculator tool to compare pricing model (On-Demand, Reserved, and Spot instances) to compare with each EC2 instance type including EBS for CalStatePays.org as part of efforts to reduce operating costs using AWS.</p>
                            <br />   
                            <p>Designed, built, and operated AWS environment by uploading a script with CloudFormation to automation setting up VPC, Application Load Balancer, CloudWatch monitoring, Lambda function, and launching an EC2 Spot Fleet to meet client’s requirement.</p>
                            <br />
                            <p>Assisted team of 6 in problem solving and navigating the AWS environment configuration by working through Zoom and Slack to create step-by-step instructions and vocabulary definition to help mitigate future issues.</p>
                        </div>
                    </div>
                    <br />
                    <div class="row">
                    <div class="col-sm-6 col-md-6">
                        <h3>CEPH</h3>
                        <span>January 2020 - May 2020</span>
                        <br />
                            <p>Resolved TCP/IP network access problems on 10+ HP servers utilized Putty and HP iLO remote console to correct IP address and hostname by editing etc/hosts in the command line made SSH successfully.</p>
                        <br />
                            <p>Analyzed, documented, and provided recommendations for the servers with Ubuntu 20.04 LTS by following instructions on the command line and CEPH command from online resources to set up 2+ object storage daemon 2+ monitor daemon then help mitigate future issues to make successful result. </p>
                        <br />
                            <p>Presented the technical project and suggested the “Cephadm” command that is best easy-to-use for deploying and managing a CEPH cluster and explain how to add, remove, or update CEPH daemon containers.</p>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}