import React from 'react'
import { Form, Input, Button } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { CATEGORIES_PRODUCT,ADD_CATEGORY} from '../query';


function AddCategory(props){
    const formItemLayout ={
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      }
    const buttonItemLayout ={
        wrapperCol: { span: 14, offset: 4 },
      }
    const { getFieldDecorator } = props.form;
    const [addcategory]=useMutation(ADD_CATEGORY)
    function categorySubmit(e){
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            addcategory({variables:values,refetchQueries:[{query:CATEGORIES_PRODUCT}]})
          }
        });
    }
    return (
        <Form layout="horizontal" onSubmit={categorySubmit}>
          <Form.Item label="ADD Category" {...formItemLayout}>
          </Form.Item>

        <Form.Item label="CATEGORY" {...formItemLayout}>
            {getFieldDecorator('name', {
                rules: [{ required: true, message: 'input category' }],
            })(
                <Input placeholder="input category"/>,
            )}
        </Form.Item>

        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit" className="login-form-button">submit</Button>
        </Form.Item>
        </Form>
    )
}
const WrappedForm = Form.create({})(AddCategory);
export default WrappedForm