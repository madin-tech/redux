import { Button, Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";
const { TextArea } = Input;
const ProductAdd = () => {
  const onChange = (e) => {
    console.log(e);
  };
    const onFinish = (values) => {
      console.log("Received values of form: ", values);

    };
  return (
    <div
      style={{
        border: `1px solid lightBlue`,
        padding: `40px`,
        borderRadius: `8px`,
      }}
    >
      <Form
        onFinish={onFinish}
        style={{
          maxWidth: 360,
          display: `flex`,
          flexDirection: `column`,
          gap: `20px`,
        }}
      >
        <Form.Item>
          <Input type="url" placeholder="Enter image url" />
        </Form.Item>
        <Input placeholder="Add title" allowClear onChange={onChange} />
        <TextArea
          placeholder="Add description"
          allowClear
          onChange={onChange}
        />
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
      </Form>
    </div>
  );
};

export default ProductAdd;
