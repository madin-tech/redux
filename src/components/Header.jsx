

import profile from "../assets/profile.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ProfileDrawer from "./ProfileDrawer";
import { openDrawer } from "../store/userSlice";
import { Button } from "antd";
const Header = () => {
  const {isAuth, user} = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
function openLogin(){
  navigate("/login");
}
function openDraw(){
 dispatch(openDrawer(true));
}
  return (
    <header
      className="container"
      style={{
        padding: `20px 0 `,
        display: `flex`,
        justifyContent: `space-between`,
      }}
    >
      <h1>LOGO</h1>
      <nav
        style={{
          display: `flex`,
          flexDirection: `row`,
          gap: `40px`,
          alignItems: `center`,
        }}
      >
        <NavLink to="/">Todos</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        {!(isAuth && user) ? (
          <Button type="default" onClick={openLogin} htmlType="submit">
            Log in
          </Button>
        ) : (
          <img
            onClick={openDraw}
            style={{ height: 25, width: 25 }}
            src={profile}
            alt=""
          />
        )}
      </nav>
    </header>
  );
}

export default Header