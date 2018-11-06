import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Row, Col, Button } from 'antd';
const { Header } = Layout;

class DlHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    collapsed = ()=>{
        this.props.collapsedFun(!this.props.collapsed);
    }
    render() {
        return (
            <Header className="header">
                <Row>
                    <Col xs={8} md={2}>
                        <Button ghost icon="bars" onClick={this.collapsed}></Button>
                    </Col>
                    <Col xs={0} md={4} >                        
                        <h3 className="logo"><Link to="/">Daniel's React</Link></h3>
                    </Col>
                    <Col span={12}>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            style={{ lineHeight: '64px' }}
                            >
                                <Menu.Item key="1"><a href="http://baidu.com" target="_blank" rel="noopener noreferrer">Wechat</a></Menu.Item>
                                <Menu.Item key="2">Vue</Menu.Item>
                                <Menu.Item key="3">Wechat</Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Header>
        );
    }
}

export default DlHeader;