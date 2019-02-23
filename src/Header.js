import React, { Component } from 'react';
import Background from './assest/images/banner.jpg';
import './Header.css';

class Header extends Component {
    
    
    render() {
        const heromystyles = {
            backgroundImage : `url(${Background})`,
            height : 'calc(100vh - 90px)',
            backgroundSize: 'cover',
            position: 'relative'
    
        }
        return(
            <header style= {heromystyles}>
                <div className="hero-cnt">
                    <h1 className="herotitle">{this.props.title}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#button" className="primary-btn">{this.props.button}</a>
                </div>               
            </header>
        );
    }

}

export default Header;