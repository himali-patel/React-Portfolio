import React, { Component } from 'react';
import './About.css';
import aboutImage from './assest/images/about-img.jpg';
import {withRouter} from 'react-router';
import ScrollableAnchor from 'react-scrollable-anchor'
class About extends Component {

    render(){
        return(
            <ScrollableAnchor id="about">
            <div className="about-us-blk section-gap">
                <div className = "container" >
                    <div className = "row d-flex align-items-center">
                        <div className = "col-lg-6 about-left" >
                            <img className = "img-fluid" src = {aboutImage}  alt = "" />
                        </div> 
                        <div className = "col-lg-6 about-right" >
                            <h1 >We Believe that  Interior beautifies the </h1> 
                            <p>inappropriate behavior is often laughed off as“ boys will be boys, ”women face higher conduct standards especially in the workplace.That’ s why it’ s crucial that, as women, our behavior on the job is beyond reproach.inappropriate behavior is often laughed off as“ boys will be boys, ”women face higher conduct standards especially in the workplace.That’ s why it’ s crucial that. </p>
                            <button className = "submit-btn primary-btn mt-20 text-uppercase "> Hire me now</button >
                        </div> 
                    </div> 
                </div>
            </div>
            </ScrollableAnchor>
        );
    }

}
export default withRouter(About);