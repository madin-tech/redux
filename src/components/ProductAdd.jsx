import { Button, Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
const { TextArea } = Input;
import { addProduct } from "../store/ProductSlice";
import { useRef } from "react";

const ProductAdd = () => {
  const dispatch =  useDispatch();
  const ref = useRef();
  const [form] = Form.useForm();
  const onChange = (e) => {

  };
    const onFinish = (values) => {
  dispatch(addProduct({ ...values, id:Date.now()}));
    form.resetFields();
   
    };
   
    
  return (
    <div
      style={{
        border: `1px solid lightBlue`,
        padding: `40px`,
        borderRadius: `8px`,
        display: `flex`,
        flexDirection: `column`,
        gap: `20px`,
      }}
    >
      <h3>Add Product</h3>
      <Form
      form={form}
        onFinish={onFinish}
        style={{
          maxWidth: 360,
          display: `flex`,
          flexDirection: `column`,
          gap: `20px`,
        }}
      >
        <Form.Item name={"imgUrl"}>
          <Input ref={ref} type="url" placeholder="Enter image url" />
        </Form.Item>
        <Form.Item name={"title"}>
          <Input
            ref={ref}
            placeholder="Add title"
            allowClear
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item name={"des"}>
          <TextArea
            placeholder="Add description"
            allowClear
            onChange={onChange}
            ref={ref}
          />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductAdd;
