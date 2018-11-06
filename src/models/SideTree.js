import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Icon, Tree } from 'antd';
import Maps from '../models/Maps';

const TreeNode = Tree.TreeNode;
const { Sider } = Layout;

class SideTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            treeNodes: <TreeNode></TreeNode>,
            sideStyle:{
                position:'absolute',
                borderRight:'1px solid #f0f2f5',
                zIndex:1000,
                height:'100%',
            },
            bp:false
        };
        this.couldExpandNodes = [];
    }
    onSelect = (e) => {
        this.props.history.push(e[0]);
    }
    componentDidMount = () => {
        this.setState({
            treeNodes: this.createTreeNode(Maps.SiderMap),
        });
    }
    createTreeNode = (item) => {
        let reactHtml = item.map((item, index) => {
            if (!item.routes) {
                return (
                    <TreeNode title={item.name} key={item.route}
                        icon={<Icon type="tag" />}
                    />
                )
            }
            else {
                this.couldExpandNodes.push(item.route);
                return (
                    <TreeNode title={item.name} key={item.route}>
                        {this.createTreeNode(item.routes)}
                    </TreeNode>
                )
            }
        });
        return reactHtml;
    }
    onBreakpoint= (bp)=>
    {
        this.props.collapsedFun(bp);
        this.setState({
            bp
        })       
    }
    render() {
        return (
            <Sider breakpoint="md" collapsedWidth="0" theme="light"
                style={this.state.bp?this.state.sideStyle:{}}
                collapsed={this.props.collapsed}
                onBreakpoint={this.onBreakpoint}
                trigger={null}
                >
                <div style={{padding: '20px 20px'}}>   
                    <Tree
                        defaultExpandAll={true}
                        onSelect={this.onSelect}
                    >
                        {this.createTreeNode(Maps.SiderMap)}
                    </Tree>
                </div>
            </Sider>                      
        );
    }
}

export default withRouter(SideTree);