import ProductAdd from "../components/ProductAdd";
import ProfileDrawer from "../components/ProfileDrawer"
import TodoAdd from "../components/TodoAdd";
import User from "../components/User"

const UserPg = () => {
  return (
    <div>
      <div style={{display:`flex`, flexDirection:`row`, gap:100}}>
        <TodoAdd />
        <ProductAdd/>
      </div>
      <ProfileDrawer />
    </div>
  );
}

export default UserPg