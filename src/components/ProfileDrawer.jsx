import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { useDispatch } from "react-redux";
import { openDrawer } from "../store/userSlice";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
const ProfileDrawer = () => {
     const dispatch = useDispatch();
      const { open } = useSelector((state) => state.userReducer);
      
      const [placement, setPlacement] = useState("right");
      const showDrawer = () => {
       
      };
      const onChange = (e) => {
        setPlacement(e.target.value);
      };
      const onClose = () => {
        dispatch(openDrawer(false));
      };
      
  return (
    <>
      <Drawer
        title="Profile Information"
        placement={"right"}
        width={400}
        onClose={onClose}
        open={open}
      >
        <Avatar shape="square" size={64} icon={<UserOutlined />} />
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
  
};

export default ProfileDrawer;
