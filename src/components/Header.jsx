

import profile from "../assets/profile.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ProfileDrawer from "./ProfileDrawer";
import { openDrawer } from "../store/userSlice";
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
        <Link to="/">Todo</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/profile">Profile</Link>
        {
          !(isAuth && user) ? <button onClick={openLogin}>Login</button> : <img onClick={openDraw} style={{height:25, width:25}} src={profile} alt="" /> 
        }
      </nav>
    </header>
  );
}

export default Header