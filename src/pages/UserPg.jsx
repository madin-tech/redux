import ProductAdd from "../components/ProductAdd";
import ProfileDrawer from "../components/ProfileDrawer"
import TodoAdd from "../components/TodoAdd";
import User from "../components/User"

const UserPg = () => {
  return (
    <div>
      <div className="container" style={{display:`flex`, flexDirection:`row`, alignItems:`center`, justifyContent:`center`, marginTop:70, gap:`300px`,marginBottom:100}}>
        <TodoAdd />
        <ProductAdd/>
      </div>
      <ProfileDrawer />
    </div>
  );
}

export default UserPg