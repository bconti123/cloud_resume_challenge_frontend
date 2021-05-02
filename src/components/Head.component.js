import React, { Component } from "react";
import axios from 'axios';

export default class Head extends Component {
    // DynamoDB ----> Lambda ---- > API Gateway ----> JS
    constructor() {
        super();
        //Set default message
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        //delete axios.defaults.headers.common['X-Requested-With'];
        axios({
            method: 'get',
            mode: 'no-cors',
            url: 'https://z9usi25dba.execute-api.us-west-1.amazonaws.com/PROD/count'
            })
            .then(response => {
                this.setState({ item: response.data })
                console.table(response.data)
            })
            .catch(err => console.log(err))
        };
    render() {
        return (
            <header id="header">
                <div id="head" className="parallax" parallax-speed="2" style={{ backgroundPosition: '50% 0px' }}>
                    <div className="top_left_cont zoomIn wow animated" id="logo">
                        <p>views: {this.state.item}</p>
                        <img className="img-circle" src="img/head-2.jpg" alt="" />
                        <h2>Bryant Conti <br /><strong>Cloud Computing Enthusiast</strong></h2>
                        {/* <a href="/assets/Bryant-Conti-Resume.pdf" class="read_more2" download>Download resume</a> */}     
                    </div>
                </div>
            </header>
        )
    }
}
