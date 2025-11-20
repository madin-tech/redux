

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container" style={{padding:`20px 0 `, display:`flex`, justifyContent:`space-between`}}>
      <h1>LOGO</h1>
<nav style={{display:`flex`, flexDirection:`row`, gap:`40px`, alignItems:`center`}}>
  <Link to="/">Todo</Link>
  <Link to="/cards">Cards</Link>
</nav>
    </header>
  );
}

export default Header