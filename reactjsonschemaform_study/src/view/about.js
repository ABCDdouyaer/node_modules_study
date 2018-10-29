import React, { Component } from 'react';
import Modal from '../common/modal/index.js';
import './about.scss';
class About extends Component {
    render(){
        return <div>
            <Modal>
                <h3>我是主标题</h3>
            </Modal>
        </div>
    }
}

export default About;