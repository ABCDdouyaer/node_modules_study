import React, { Component } from 'react';
import { Modal, Button, message } from 'antd';

class MyAntd extends Component {
    state = {visible: false}

    showModal = ()=>{
        // this.setState({visible: true})
        message.warning('This is a normal message',20);
    }
    
    handleOk = (e)=>{
       console.log(e);
       this.setState({visible: false})
    }

    handleCancel = (e)=>{
        console.log(e);
        this.setState({visible: false})
    }

    render(){
        return <div>
                <Button type="primary" onClick={this.showModal}>Button</Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
               </div>
    }
}

export default MyAntd;