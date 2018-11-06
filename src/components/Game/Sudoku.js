import React, { Component } from 'react';
import { Button, Row, Col, Input, Divider, Switch, message } from 'antd';
import Axios from 'axios';

class Sudoku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sudoku: { quesArr: [] },
            loading: false,
            hasGenerated: false,
            realSwitch: false
        };
    }
    newPlay = () => {
        this.setState({
            loading: true,
            sudoku: { quesArr: [] },
        });
        Axios.get(`/api/sudoku?${Math.random()}`)
            .then(res => {
                this.setState({
                    sudoku: res.data.sudoku,
                    loading: false,
                    hasGenerated: true,
                });
            })
            .catch(err => {
                console.log(err.state);
            });
    }
    onChange = (e) => {
        let v = parseInt(e.target.value);
        let keys = e.target.getAttribute('dl-key').split('_');

        if (!Number.isInteger(v)) {
            e.target.value = '';
            if (this.state.realSwitch)
                e.target.className = 'ant-input';
        } else {
            if (v > 9) {
                v = Math.floor(v / 10);
            }
            e.target.value = v;

            if (this.state.realSwitch) {
                if (v === this.state.sudoku.ansArr[keys[0]][keys[1]]) {
                    e.target.className = 'ant-input correct';
                } else {
                    e.target.className = 'ant-input uncorrect';
                }
            }
        }
    }
    check = () => {
        // console.log(this.state.sudoku.ansArr);
        let oInputs = document.querySelectorAll('li input');
        for (let oInput of oInputs) {
            let keys = oInput.getAttribute('dl-key').split('_');
            if (oInput.value === '') {
                oInput.className = 'ant-input';
            }
            else if (parseInt(oInput.value) === this.state.sudoku.ansArr[keys[0]][keys[1]]) {
                oInput.className = 'ant-input correct';
            }
            else {
                oInput.className = 'ant-input uncorrect';
            }
        }
    }
    checkall = () => {
        this.setState({
            checked: true
        })
        let oInputs = document.querySelectorAll('li input');
        for (let oInput of oInputs) {
            let keys = oInput.getAttribute('dl-key').split('_');
            if (parseInt(oInput.value) !== this.state.sudoku.ansArr[keys[0]][keys[1]]) {
                message.error('This is uncorrect answer !');
                return false;
            }
        }
        message.success('Congratuations !');
        for (let oInput of oInputs) {
            oInput.setAttribute('disabled', 'disabled');
        }
    }
    switch = () => {
        this.setState({
            realSwitch: !this.state.realSwitch,
            sudoku: this.state.sudoku
        })
        if (!this.state.realSwitch) {
            this.check();
        } else {
            this.recolor();
        }
    }
    recolor = () => {
        let oInputs = document.querySelectorAll('li input');
        oInputs.forEach((item, index) => {
            item.className = 'ant-input';
        })
    }
    render() {
        return (
            <div>
                <h3>Hello, Sudoku!</h3>
                <Row type="flex">
                    <Col>
                        <Button type="primary" loading={this.state.loading} onClick={this.newPlay}>
                            {(this.state.hasGenerated) ? 'Click to Replay !' : 'Click to Play !'}
                        </Button>
                        <Divider type="vertical" />
                        <span>
                            {
                                (this.state.realSwitch) ? 'Tip On' : 'Tip Off'
                            }
                        </span>
                        <Switch checked={this.state.realSwitch} onChange={this.switch} />
                        <Divider type="vertical" />
                        {
                            (this.state.hasGenerated) ? <Button type="primary" onClick={this.checkall}>Check</Button> : ''
                        }
                    </Col>
                </Row>
                <Divider />
                <Row type="flex" justify="start">
                    {
                        this.state.sudoku.quesArr.map((item, index) => {
                            return (
                                <ul className="tr-gutter" key={index}>
                                    {item.map((val, key) => {
                                        if (val === 0) {
                                            return (
                                                <li key={`${index}_${key}`}><Input onChange={this.onChange} dl-key={`${index}_${key}`}></Input></li>
                                            )
                                        } else {
                                            return (
                                                <li key={`${index}_${key}`}>{val}</li>
                                            )
                                        }
                                    })}
                                </ul>
                            )
                        })
                    }
                </Row>
            </div>
        );
    }
}

export default Sudoku;