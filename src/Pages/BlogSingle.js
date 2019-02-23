import React, { Component } from 'react';
import './Blog.css';
import client from '../service/client';
import Markdown from 'react-markdown';
import Sidebar from './Sidebar';

class BlogSingle extends Component {
    constructor(props){
        super(props)
     
        this.state = {
            data: null
        }
       
    
    }
    componentDidMount(){
          
                // client.getEntries({content_type:'portfolio' ,'fields.id' : this.props.match.params.id }).then((response => {
                //     this.setState({
                //         dat: response.items[0]                 
                //         })    
                //     console.log(response.items);          
                // }))
                
                  client.getEntry(this.props.match.params.id)
                    .then(response => {
                    this.setState({
                        data: response.fields
                    });
                    })
                   .catch(console.error);
       
            // client.getEntry(this.props.match.params.id)
            // .then(response => {
            //   this.setState({
            //     data: response.fields
            //   });
            // })
            // .catch(console.error);
        

      
       
  }
  componentWillReceiveProps(nextProps) {
    const currentBlogId = nextProps.match.params.id ;
    console.log(currentBlogId);
    client.getEntry(currentBlogId)
    .then(response => {
    this.setState({
        data: response.fields
    });
    })
   .catch(console.error);
}
    render(){
        console.log(this.state.data);
       if(!this.state.data){
          return <h1></h1>
       }
       else{
        return(        
            <div>                  
                    <div className="blog-detail section-gap">
                    <div className="container">                        
                        <h1 className="text-center">Blog</h1>                       
                        <div className="row d-flex align-items-top">
                        
                                <div className="col-lg-8">
                                    <div className="blog-detail-inner-cnt">
                                     <h5>{this.state.data.blogTitle}</h5>
                                        <ul>
                                                <li>{this.state.data.blogPublishDate}</li>
                                                <li><span></span><a aria-label="comments-num" href="#ab">No Comments</a></li>
                                                <li><span></span>Posted by : <span><a href="#ab">test</a></span></li>
		                                </ul>
                                        <div className="blg-img-cnt">                                            
                                                   <img src={this.state.data.blogImage.fields.file.url}  alt="blogimage"/>
                                                                                    
                                        </div>
                                        <div className="blg-text-cnt">                                          
                                             <Markdown source={this.state.data.blogDescription} escapeHtml={false} />
                                        </div>
                                    </div>
                                </div>
                                
                                <Sidebar></Sidebar>
                          
                        </div>
                    </div>
                 </div>
               
            </div>
       
        );
       }     
   
   
         
        
          }
       
    }

export default BlogSingle;