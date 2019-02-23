import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Blog.css';
import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';

class BlogListItem extends Component {
    
    render(){
         const MAX_LENGTH = 100;
         const {portfolios} = this.props
    
        return(

            // <portfolios>
              <div className="col-lg-4">
                <div className="blog-inner-cnt">
                <div className="blg-img-cnt">
                     <a href="#">
                      <img src={portfolios.fields.blogImage.fields.file.url}  alt="blogimage"/> 
                     </a>
                  
                </div>
                <div className="blg-text-cnt">
                    <h5>{portfolios.fields.blogTitle}</h5>
                    {
                        portfolios.fields.blogShortDesc > MAX_LENGTH ? (<Markdown source={portfolios.fields.blogShortDesc} escapeHtml={false} />):  <Markdown source={`${portfolios.fields.blogShortDesc.substring(0,MAX_LENGTH)}...`} escapeHtml={false} />
                    }                   
                    <p  className="text-right">
                        <Link key={portfolios.fields.slug} to={`blogsingle/${portfolios.sys.id}/`} >Read More</Link>

                    </p>                  
                </div>
            </div>
   </div>

            // </portfolios>
        )
    }

}
BlogListItem.propTypes ={
    portfolios: PropTypes.object
}
export default BlogListItem