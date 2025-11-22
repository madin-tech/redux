import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
const { isAuth, user } = useSelector((state) => state.userReducer);
    
  return (
    <div>
  { (isAuth && user)? <Outlet/> : <Navigate to="/"/>}
    </div>
  )
}

export default Private