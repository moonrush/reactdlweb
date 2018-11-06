import React, { Component } from 'react';
import { Form, Input, Button, Select, Alert } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const TextArea = Input.TextArea;

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 12 },
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            checkNick: false,
        };
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.form.validateFields((err,val)=>{
            if(!err){
                console.log(val);
            }
            else{
                console.log(err);
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (            
            <Form onSubmit={this.handleSubmit}>
                <Alert
                    message="Contact Me"
                    description="Please enter infos below as possible as you can."
                    type="info"
                    showIcon
                />
                <br/>
                <FormItem {...formItemLayout} label="Nickname">
                    {getFieldDecorator('nickname', {
                        rules: [{
                            required: true,
                            whitespace: true,
                            message: 'Please input your nickname',
                        }],
                    })(
                        <Input placeholder="Please input your nickname" />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="Contact Type">
                    {getFieldDecorator('contacttype',{
                        //initialValue:'E-mail',
                        rules:[{
                            required:true,
                            message: 'Please select ContactType'
                        }]
                    })(
                        <Select placeholder="Please select ContactType" >
                            <Option value="E-mail">E-mail</Option>
                            <Option value="QQ">QQ</Option>
                            <Option value="Wechat">Wechat</Option>
                            <Option value="Others">Others</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="Contact Info">
                    {
                        getFieldDecorator('contactinfo',{
                            rules:[{
                                required:true,
                                message:'Please input your ContactInfo'
                            }]
                        })(
                            <Input placeholder="Please input your ContactInfo" />
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label="Tell Me">
                    {
                        getFieldDecorator('tellme',{
                        })(
                            <TextArea placeholder="You wanna tell me..." rows={6} />
                        )
                    }
                </FormItem>
                <FormItem {...formTailLayout}>
                    <Button type="primary" htmlType="submit">
                        Contact Me
                    </Button>
                </FormItem>
            </Form>          
        );
    }
}
const WrappedHomeForm = Form.create()(Home);
export default WrappedHomeForm;