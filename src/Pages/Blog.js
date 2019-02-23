import React, { Component} from 'react';
// import blogimage from '../assest/images/collared-aracari-san-ignacio-belize_2.jpg';
import './Blog.css';
import client from '../service/client';
import BlogListItem from './BlogListItem';
import CategoryBird from './CategoryBird';
import CategoryWildLife from './CategoryWildLife';
import Button from './Button';
import ButtonWildLife from './ButtonWildLife';
import ButtonNature from './Buttonnature';

class Blog extends Component {
    constructor(){
        super()
        this.state = {
            portfolio: [],
            allbloglisting:true,
            birdsClicked: false,
            WildlifeClicked:false,
            NatureClicked:false,
            isactivebird: false ,
            isactivewildlife: false,
            isactivenature:false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClickWildLife = this.handleClickWildLife.bind(this);
        this.allbloglisting = this.allbloglisting.bind(this);
        this.handleClickNature = this.handleClickNature.bind(this);
    
    }
    handleClick() {
        this.setState({
            birdsClicked: true,    
            isactivebird: !this.state.isactivebird,
            isactivewildlife:false,
            isactivenature:false,       
            allbloglisting:false 
          
        });

     
      }
      handleClickWildLife(){
        this.setState({
            WildlifeClicked: true,    
            isactivewildlife: !this.state.isactivewildlife,
            isactivebird:false,
            isactivenature:false,   
            allbloglisting:false  
          
        });
    
      }
      handleClickNature(){
        this.setState({
            NatureClicked: true,                
            isactivenature: !this.state.isactivewildlife,
            isactivebird:false,
            isactivewildlife:false,   
            allbloglisting:false  
          
        });
    
      }
      allbloglisting(){
        this.setState({
            allbloglisting: true,    
            isactivewildlife: false,
            isactivebird:false,
            isactivenature:false,     
          
        });
      }
    componentDidMount(){      
          client.getEntries({
              content_type:'portfolio'
           
            }).then((response => {
              this.setState({
                  portfolio: response.items                  
                })                   
          }))      
         
    }
    
    render(){        
        const portfolio =  this.state.portfolio.map((portfolios, index ) => <BlogListItem id={index} key={index} portfolios={portfolios}></BlogListItem>  
    )
    
        return(
            <div>
                 <div className="blog-section section-gap blog-tab-listing">
                    <div className="container">                        
                        <h1 className="text-center">My Recent Blogs</h1>  

                        <nav className="blog-tabs">
                                    <div className="selector"> </div>
                                    <button onClick={this.allbloglisting} className={this.state.allbloglisting ? 'active' : undefined} >All</button>
                                    <Button onClick={this.handleClick} className={this.state.isactivebird ? 'active' : undefined}  />
                                    <ButtonWildLife onClick={this.handleClickWildLife} className={this.state.isactivewildlife ? 'active' : undefined}/>
                                    <ButtonNature onClick={this.handleClickNature}  className={this.state.isactivenature ? 'active' : undefined} />
                            
                        </nav> 
                         
                          
                        <div className= {this.state.allbloglisting ===true ? "row d-flex align-items-top blog-tab-cnt active" : "row d-flex align-items-top blog-tab-cnt"}> 
                              { portfolio }     
                        </div>
                    
                        <div className= {this.state.isactivebird ===true ? "row d-flex align-items-top blog-tab-cnt active" : "row d-flex align-items-top blog-tab-cnt"}>                            
                            <div className="birds-photo hidden">
                                 {this.state.birdsClicked ? <CategoryBird /> : null}
                            </div>                        
                        </div>

                        <div className= {this.state.isactivewildlife ===true ? "row d-flex align-items-top blog-tab-cnt active" : "row d-flex align-items-top blog-tab-cnt"}>                            
                            <div className="birds-photo hidden">
                                 {this.state.WildlifeClicked ? <CategoryWildLife /> : null}
                            </div>                        
                        </div>
                     
                                                  
                       
                    </div>
                 </div>
            </div>
        );
    }

  }

export default Blog; 