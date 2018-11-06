import React, { Component } from 'react';
import { Divider, Input, Avatar, Row, Col, Button } from 'antd';

class Chatroom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            ws: {},
            chats: []
        };
    }
    componentDidMount = () => {
        let ws = new WebSocket('ws://localhost:8001');
        ws.onopen = () => {
            console.log(`WEBSOCKET CONNECTED`);
        }
        ws.onclose = () => {
            console.log(`WEBSOCKET DISCONNECTED`);
        }
        ws.onmessage = (e) => {
            let obj = JSON.parse(e.data);
            if (obj.type === 'setname') {
                this.setState({
                    user: obj.user
                })
            }
            else
            {
                let chats = [...this.state.chats];
                chats.push(obj);
                this.setState({
                    chats
                });
            }
        }
        ws.onerror = (e) => {
            console.log(e);
        }
        this.setState({
            ws
        })
    }
    sendMsg = () => {
        if (this.refs.msgarea.textAreaRef.value) {
            this.state.ws.send(JSON.stringify({
                type:'text',
                data:this.refs.msgarea.textAreaRef.value
            }));
            this.refs.msgarea.textAreaRef.value=null;
        }
    }
    msgChange = (e)=>{        
        if (e.charCode === 13){
            this.sendMsg();
            e.preventDefault();
        }            
    }
    confirmName=(e)=>{
        if(this.refs.nickname.input.value){
            this.state.ws.send(JSON.stringify({
                    type:'name',
                    data:this.refs.nickname.input.value
                })
            );
        }
    }
    componentWillUnmount= (e)=>{
        this.state.ws.close();
    }
    render() {
        return (
            <div>
                <h3>Chat Room</h3>
                <h3>Your Nickname: <Input placeholder="Nickname" ref="nickname"></Input> <Button onClick={this.confirmName}>Confirm</Button></h3>
                <div className="chatbox">
                    {
                        this.state.chats.map((item, index) => {
                            if (item.type === 'smsg') {
                                return <Divider key={index}>{item.data}</Divider>
                            }
                            else {
                                let flag = (this.state.user === item.user)
                                return (
                                    <Row type="flex" key={index} className={`row ${(flag)?'row-mine':'row-other'}`} align="top">      
                                        <Col order={(flag)?1:2} offset={(flag)?8:0} span={14}>
                                            <span className="say">
                                                {item.data}
                                            </span>
                                        </Col>
                                        <Col order={(flag)?2:1} span={2}>
                                            <Avatar shape="square" size="large">{item.user}</Avatar>
                                        </Col>
                                    </Row>
                                )
                            }
                        })
                    }
                </div>
                <div>
                    <Input.TextArea rows={4} ref="msgarea" onKeyPress={this.msgChange}/>
                </div>
                <Button onClick={this.sendMsg}>Send</Button>
            </div>
        );
    }
}

export default Chatroom;