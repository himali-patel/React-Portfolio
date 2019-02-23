import React, { Component } from 'react';
import './Navigation.css';
import {  NavLink } from 'react-router-dom'

class Navigation extends Component {
  render() {
    // const sections = ['Home' , 'About' , 'Portfolio' ,'Contact Us'];
    // const navLinks = sections.map((section , index) =>  {
    //         return(
    //             <li key={index}><a href={'#' + section}>{section}</a></li>
    //         )
    // })
    return (
        <div>
              <nav>
                  <h2 className="logo">{this.props.logoTitle}</h2>
                
                    <ul>
                        <li>
                             <NavLink exact activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li>
                             <NavLink activeClassName="active" to="/about">About</NavLink>
                        </li>
                        <li>
                             <NavLink  activeClassName="active" to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li>
                             <NavLink  activeClassName="active" to="/blog">Blog</NavLink>
                        </li>
                        <li>
                             <NavLink  activeClassName="active" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                  </nav>
          
           
        </div>
    
    );
  }
}

export default Navigation;
