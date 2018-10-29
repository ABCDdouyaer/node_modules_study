import './index.scss';
import React, { Component } from 'react';
class Modal extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className='component_modal'>
                 <div className='modal_box'>
                    <div className='modal_head'>
                       <h2>我是题目</h2>
                    </div>
                    <div className='modal_body'>
                      {this.props.children}
                    </div>
                    <div className='modal_foot'>
                       <button>确定</button>
                       <button>取消</button>
                    </div>
                 </div>
        </div>
    }
}

export default Modal;