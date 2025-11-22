import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loginPass, loginName } from "../store/userSlice";
import ProfileDrawer from "./ProfileDrawer";
import xmark from "../assets/xmark.svg";
import { useNavigate } from "react-router-dom";

const User = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
const { isAuth, user } = useSelector((state) => state.userReducer);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
     dispatch(loginName(values.username));
      dispatch(loginPass(values.password));
      navigate(-1);
  };
function closeLogin(){
navigate(-1);
}
  return (
    <div
      style={{
        display: `flex`,
        marginTop: `180px`,
        alignContent: `center`,
        justifyContent: `center`,
      }}
    >
      <div style={{display:`flex`, flexDirection:`row`, gap:`40px`, alignItems:`start`}}>
        <img src={xmark} style={{height:20, width:20, cursor:`pointer`}} onClick={closeLogin} alt="" />
        <Form
          name="login"
          initialValues={{ remember: true }}
          style={{ maxWidth: 360 }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="">Forgot password</a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            or <a href="">Register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default User;
