import React, { Component } from 'react';
import { Row, Col, Carousel, Divider, Card, Timeline, Tag } from 'antd';
import Axios  from 'axios';

class Intro extends Component {
    constructor(props) {
        super(props);        
        this.state = { 
            year: new Date().getFullYear(),
            selfinfo:{
                name:{
                }
            },
            projexp:[],
            carouselimgs:[
                'http://localhost:8000/images/2018-10-25 061837.jpg',
                'http://localhost:8000/images/2018-10-25 062646.jpg',
                'http://localhost:8000/images/2018-10-25 064330.jpg',
            ],
        };
    }
    componentDidMount(){
        Axios.get(`/api/selfinfo?${Math.random()}`).then(res=>{
            this.setState({
                selfinfo:res.data.selfinfo
            })            
        }).catch(err=>{
            console.log(err);
        });

        Axios.get(`/api/projexp?${Math.random()}`).then(res=>{
            this.setState({
                projexp:res.data.projexp
            })
        }).catch(err=>{
            console.log(err);
        });        
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <Carousel effect="fade" autoplay>
                        {
                            this.state.carouselimgs.map((val,index)=>{
                                // return <img key={index} src={val} alt=''/>
                                return <h1 key={index}>{index}</h1>
                            })
                        }
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={12}>
                        <h3>{this.state.selfinfo.name.chinese}-{this.state.selfinfo.name.english}-{this.state.selfinfo.name.japanese}</h3>
                        <p>男 {this.state.year - this.state.selfinfo.birthYear}岁 {this.state.year - this.state.selfinfo.jobYear}年工作经验</p>
                    </Col>
                </Row>
                <Divider></Divider>
                <Row>
                    <Card title="Project Experience">
                        <Timeline mode="alternate">                            
                            {
                                this.state.projexp.map((item,index)=>{
                                    return (
                                    <Timeline.Item key={index} color={(item.color)?item.color:'blue'}>
                                        <Divider orientation="left">
                                            {item.expTitle} <Tag color="geekblue">{item.expTime}</Tag>
                                        </Divider>
                                        <p>{item.expContent}</p>
                                    </Timeline.Item>
                                    )
                                })
                            }                        
                        </Timeline>
                    </Card>
                </Row>
            </div>
        );
    }
}

export default Intro;