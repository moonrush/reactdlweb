import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import Maps from '../models/Maps';

const { SubMenu } = Menu;
const { Sider } = Layout;

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Sider breakpoint="md" collapsedWidth="0">                
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['sub1']}
                    defaultOpenKeys={['sub2']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    {
                        Maps.SiderMap.map((item,index)=>{
                            if(item.submenu){
                                return(
                                    <SubMenu key={`Sub${index}`} title={<span><Icon type={item.icon} />{item.name}</span>}>
                                        {
                                            item.routes.map((val,key)=>{
                                                return (
                                                    <Menu.Item key={key}>
                                                        <Link to={val.route}>{val.name}</Link>
                                                    </Menu.Item>
                                                )
                                            })
                                        }
                                    </SubMenu>
                                )
                            }else{
                                return (                                            
                                    <Menu.Item key={`Sub${index}`}> 
                                        <Link to={item.route}><Icon type={item.icon} /> {item.name}</Link>
                                    </Menu.Item>
                                )
                            }
                        })
                    }
                </Menu>                
            </Sider>
        );
    }
}

export default Sidebar;