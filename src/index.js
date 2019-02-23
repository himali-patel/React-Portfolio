import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assest/css/bootstrap.css';
import Navigation from './Navigation';
import { Route,  BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import About from './About';
import Portfolio from './Portfolio';
import * as serviceWorker from './serviceWorker';
import PortfolioSingle from './PortfolioSingle';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import BlogSingle from './Pages/BlogSingle';

const routing = (
    <Router>
        
      <div>
        <Navigation logoTitle="React Portfolio"></Navigation>
        <Route exact path="/" component={App}>
         
          
        </Route>

        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />  
        <Route  exact path="/blog" component={Blog} />         
        <Route path="/contact" component={Contact} />       
        <Route path="/portfolioSingle" render={()=><PortfolioSingle />}/>
      <Route path="/sidebar" render={(props) => <BlogSingle {...props} />}/>
        <Route exact path="/blogsingle/:id" render={(props) => <BlogSingle {...props} />} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
