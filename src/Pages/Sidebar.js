import React, { Component } from 'react';
import './Blog.css';
import client from '../service/client';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    constructor(){
        super()
        this.state = {
            portfolio: []
        }
    
    }
    componentDidMount(){
      
          client.getEntries({content_type:'portfolio'}).then((response => {
              this.setState({
                  portfolio: response.items                  
                })                   
          }))      
         
    }
    render(){
       
         const portfolio =  this.state.portfolio.map((portfolios, index ) => <li>
         <a href="#ab">
            <img src={portfolios.fields.blogImage.fields.file.url}  alt="blogimage" className="img-rounded"/>
           
         </a>
         <Link key={portfolios.fields.slug}  to={`/blogsingle/${portfolios.sys.id}`} ><span>{portfolios.fields.blogTitle}</span></Link>
       
         
        
         <span className="meta">{portfolios.fields.blogPublishDate}</span>
     </li>
         )
            return( <div className="col-lg-4">
                                            <div className="sidebar-blk">
                                                <ul>
                                                    {
                                                        portfolio
                                                    }
                                                    
                                                
                                                </ul>
                                            </div>
                                    </div>
            
            )
    }
}
export default Sidebar