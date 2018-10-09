import React, { Component } from 'react';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom';




import Index from '../view/index';
import About from '../view/about';
import News from '../view/news';
import MyForm from '../view/form';
import MyAntd from '../view/antd'
class Routes extends Component{
    render(){
       return  <Router>
                  <div>
                    <ul className='myul'>
                        <li><Link to='/'> <span>首页</span></Link></li>
                        <li><Link to='/about'><span>关于</span></Link></li>
                        <li><Link to='/news'><span>新闻</span></Link></li>
                        <li><Link to='/form'><span>form包</span></Link></li>
                        <li><Link to='/antd'><span>antd包</span></Link></li>
                    </ul>
                    <Route exact path='/' component={Index} />
                    <Route path="/about" component={About}  />
                    <Route path="/news" component={News} />
                    <Route path="/form" component={MyForm} />
                    <Route path="/antd" component={MyAntd} />
                  </div>
               </Router>
             
    }
}
export default Routes;