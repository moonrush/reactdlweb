import React, { Component } from 'react';
import { Divider } from 'antd';

class Tetris extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h3>Hello, Tetris!</h3>
                <Divider></Divider>
                <Row type="flex">
                    <Col>
                        
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Tetris;