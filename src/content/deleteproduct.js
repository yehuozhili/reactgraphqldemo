import React  from 'react'
import { Form, Input, Button } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import {DEL_PRODUCT,CATEGORIES_PRODUCT} from '../query';


function DeleteProduct(props) {
    const formItemLayout ={
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      }
    const buttonItemLayout ={
        wrapperCol: { span: 14, offset: 4 },
      }
    const { getFieldDecorator } = props.form;
    const [delProduct]=useMutation(DEL_PRODUCT)
    function handleSubmit(e){
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            delProduct({variables:values,refetchQueries:[{query:CATEGORIES_PRODUCT}]})
          }
        });
    }
    return (
        <div style={{flex:'1'}} >
        <Form layout="horizontal" onSubmit={handleSubmit}>
          <Form.Item label="DEL PRODUCT" {...formItemLayout}>
          </Form.Item>

        <Form.Item label="CATEGORY" {...formItemLayout}>
            {getFieldDecorator('categoryId', {
                rules: [{ required: true, message: 'input category' }],
            })(
                <Input placeholder="input category"/>,
            )}
        </Form.Item>

        <Form.Item label="NAME" {...formItemLayout}>
            {getFieldDecorator('name', {
                rules: [{ required: true, message: 'input product name' }],
            })(
                <Input placeholder="input product name"/>,
            )}
        </Form.Item>

        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit" className="login-form-button">submit</Button>
        </Form.Item>
        </Form>
        </div>
    )
}

const WrappedForm = Form.create({})(DeleteProduct);

export default WrappedForm