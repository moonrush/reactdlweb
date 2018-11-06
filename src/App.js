import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './assets/css/Custom.css';
import { Layout } from 'antd';
import Maps from './models/Maps';
import DlHeader from './models/DlHeader';
// import Sidebar from './models/Sidebar';
import SideTree from './models/SideTree';

const { Content, Footer } = Layout;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed:false
        };
    }
    collapsed = (val)=>{
        this.setState({
            collapsed: val
        })
    }
    render() {
        return (            
            <Router>
                <Layout>
                    <DlHeader collapsed={this.state.collapsed} collapsedFun={this.collapsed.bind(this)}></DlHeader>
                    <Layout>
                        {/* <Sidebar></Sidebar */}
                        <SideTree collapsed={this.state.collapsed} collapsedFun={this.collapsed.bind(this)}></SideTree>
                        <Layout>
                            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                                {
                                    Maps.SiteMap.map((item,index)=>{
                                        return(
                                            <Route exact path={item.route} key={index} component={item.component}></Route>
                                        )  
                                    })
                                }
                            </Content>
                        </Layout>
                    </Layout>
                    <Footer style={{ width:'100%', textAlign: 'center',position:'fixed',bottom:'0px' }}>
                        Daniel React ©2018 Created by Daniel
                    </Footer>           
                </Layout>
            </Router>
        );
    }
}

export default App;
