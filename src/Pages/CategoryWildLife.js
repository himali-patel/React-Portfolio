import React, { Component} from 'react';
import './Blog.css';
import client from '../service/client';
import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';

class CategoryWildLife extends Component {
    constructor(){
        super()
        this.state = {
            portfolio: []
        }
    
    }
    componentDidMount(){      
        client.getEntries({
            content_type:'portfolio',
           'fields.blogCategoryId[in]': 'Wildlife Photgraphy'
          }).then((response => {
            console.log(response.items);   
            this.setState({
                 portfolio: response.items   
                                 
              })      
                  
        }))      
       
     }
     render(){
        const portfolio =  this.state.portfolio.map((portfolios, index ) =>  <div className="col-lg-4"  key={index}>
        <div className="blog-inner-cnt">
        <div className="blg-img-cnt">
            { <img src={portfolios.fields.blogImage.fields.file.url}  alt="blogimage"/> }
        </div>
        <div className="blg-text-cnt">
            <h5>{portfolios.fields.blogTitle}</h5>
                
            <Markdown source={portfolios.fields.blogShortDesc} escapeHtml={false} />
            <p  className="text-right">
                <Link key={portfolios.fields.slug} to={`blogsingle/${portfolios.sys.id}/`} >Read More</Link>

            </p>                  
        </div>
    </div>
</div>

        )
         return(
            <div>          
                 {portfolio}
          </div>
         );
     }


}

export default CategoryWildLife