import React, { Component } from "react";


export default class Nav extends Component {
    render() {
        return (
            <header id="header_wrapper">
                <div className="container">
                    <div className="header_box">

                        <nav className="navbar navbar-inverse" role="navigation">
                            <div className="navbar-header">
                                <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                            </div>
                            <div id="main-nav" className="collapse navbar-collapse navStyle">
                                <ul className="nav navbar-nav" id="mainNav">
                                    <li className="active"><a href="#header" className="scroll-link">Home</a></li>
                                    <li><a href="#aboutUs" className="scroll-link">About Me</a></li>
                                    <li><a href="#techSkills" className="scroll-link">Tecnnical Skills</a></li> 
                                    <li><a href="#Projects" className="scroll-link">Projects</a></li>
                                    {/* <li><a href="#Portfolio" class="scroll-link">Portfolio</a></li> */}
                                    <li><a href="#experience" className="scroll-link">Experience</a></li>
                                    <li><a href="#contact" className="scroll-link">Contact</a></li>
                                    <li><a href="https://bconti123.github.io/">Blog</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}