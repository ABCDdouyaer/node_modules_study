import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom';




import Index from '../view/index';
import About from '../view/about';
import News from '../view/news';
import MyForm from '../view/form';
class Routes extends Component{
    render(){
       return  <Router>
                  <div>
                    <ul>
                        <li><Link to='/'>首页</Link></li>
                        <li><Link to='/about'>关于</Link></li>
                        <li><Link to='/news'>新闻</Link></li>
                        <li><Link to='/form'>form包</Link></li>
                    </ul>
                    <Route exact path='/' component={Index} />
                    <Route path="/about" component={About}  />
                    <Route path="/news" component={News} />
                    <Route path="/form" component={MyForm} />
                  </div>
               </Router>
             
    }
}
export default Routes;