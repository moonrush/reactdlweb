import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
const { Meta } = Card;

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240, height:320 }}
                            cover={<img alt="sudoku" src="" />}
                        >
                            <Meta
                                title="Sudoku"
                                description="9 × 9 Number Game"
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta
                                title="Sudoku"
                                description="9 × 9 Number Game"
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta
                                title="Sudoku"
                                description="9 × 9 Number Game"
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta
                                title="Sudoku"
                                description="9 × 9 Number Game"
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta
                                title="Sudoku"
                                description="9 × 9 Number Game"
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta
                                title="Sudoku"
                                description="9 × 9 Number Game"
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta
                                title="Sudoku"
                                description="9 × 9 Number Game"
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta
                                title="Sudoku"
                                description="9 × 9 Number Game"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Game;