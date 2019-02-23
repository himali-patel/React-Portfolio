import React, { Component } from 'react';
import './portfolio.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import Portfolioex from './Portfolioex'

const images = [
    './img/p1.jpg',
    './img/p2.jpg',
    './img/p3.jpg',
    './img/p4.jpg',
    './img/p5.jpg',
    './img/p6.jpg',
    './img/p7.jpg',
    './img/p8.jpg',
    './img/p9.jpg',
    './img/p10.jpg',
    './img/p11.jpg',
    './img/p12.jpg',
    './img/p13.jpg',
    './img/p14.jpg',
    './img/p15.jpg',
    './img/p16.jpg',
  ];
   

class Portfolio extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          photoIndex: 0,
          isOpen: false,
        };
      }
     

    render(){
        const { photoIndex, isOpen } = this.state;
   
        return(
            <ScrollableAnchor>
            <div className="portfolio-blk section-gap" id="portfolio">
                <div className="container text-center">
                    <h1>My Recent Photos</h1>
                   
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br/>labore et dolore magna aliqua.</p>
                    <Portfolioex></Portfolioex>
                    <div className="gal">
                        {/* {images.map((project, index) => (
                        // <Link to={`/PortfolioSingle`} className="portfolio-item" key={index} >           
                         <Link to="#" className="portfolio-item" key={index} onClick={() => this.setState({ isOpen: true })}>                          
                              <img src={project} alt="" /> 
                                
                        </Link>
                        ))}
                     */}
                         {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                            }
                            onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                            }
                        />
                        )}

                   

                      </div>
                      <div>
                          <Link to={`/PortfolioSingle`} className="portfolio-item"  className="primary-btn m-5">View More</Link>
                      </div>
                  
                      
                </div>
                   
            </div>
            </ScrollableAnchor>
        );
    }
}

export default Portfolio;