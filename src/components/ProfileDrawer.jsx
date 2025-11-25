import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { useDispatch } from "react-redux";
import { openDrawer } from "../store/userSlice";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import {logout} from  "../store/userSlice";

const ProfileDrawer = () => {

    const { user, isAuth} = useSelector((state) => state.userReducer);
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
    function log(){
      dispatch(logout());
      dispatch(openDrawer(false));
    }  
  return (
    <>
      <Drawer
        title="Profile Information"
        placement={"right"}
        width={400}
        onClose={onClose}
        open={open}
      >
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            gap: 10,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          <Avatar shape="square" size={64} icon={<UserOutlined />} />
          <p><b>UserName:</b> {user}</p>
          <p><b>Password: </b> {isAuth}</p>
          <Button type="dashed" htmlType="submit" style={{marginTop:`20px`}} onClick={log}>
            Log Out
          </Button>
        </div>
      </Drawer>
    </>
  );
  
};

export default ProfileDrawer;
