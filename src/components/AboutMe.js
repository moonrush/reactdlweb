import React, { Component } from 'react';
import { Card, Icon, Row, Col } from 'antd';
import Axios from 'axios';

const { Meta } = Card;

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frdLinks: []
        };
    }
    componentDidMount() {
        Axios.get(`/api/aboutme?${Math.random()}`).then(res => {
            this.setState({
                frdLinks: res.data.aboutme
            })
        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <div>
                <h3>About Me</h3>
                <h3>All Belong Me</h3>
                <Row>
                    {
                        this.state.frdLinks.map((item, index) => {
                            return (
                                <Col key={index} span={6} className="col-card">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <Card hoverable
                                            cover={<img alt={item.imgAlt} src={item.imgSrc} />}
                                        >
                                            <Meta
                                                avatar={<Icon type={item.icon} ></Icon>}
                                                title={item.title} description={item.description}>
                                            </Meta>
                                        </Card>
                                    </a>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        );
    }
}

export default AboutMe;