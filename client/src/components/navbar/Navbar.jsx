import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import { useNotificationStore } from "@/lib/notificationStore";

function Navbar() {
  //#region contexts
  const { currentUser } = useContext(AuthContext);
  //#endregion

  //#region states
  const [open, setOpen] = useState(false);
  //#endregion

  //#region zustand actions
  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  if (currentUser) {
    fetch();
  }
  //#endregion

  //#region functions
  const handleClickMobileMenu = () => {
    setOpen((prev) => !prev);
  };
  //#endregion

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>UET Team1 VCL</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
        <Link to="/about">About</Link>
        <Link to="/">Contact</Link>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link to="/register" className="register">
              Sign up
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/" onClick={handleClickMobileMenu}>
            Home
          </Link>
          <Link to="/list" onClick={handleClickMobileMenu}>
            List
          </Link>
          <Link to="/about" onClick={handleClickMobileMenu}>
            About
          </Link>
          <Link to="/" onClick={handleClickMobileMenu}>
            Contact
          </Link>
          {!currentUser && (
            <Link to="/login" onClick={handleClickMobileMenu}>
              Sign in
            </Link>
          )}
          {!currentUser && (
            <Link to="/register" onClick={handleClickMobileMenu}>
              Sign up
            </Link>
          )}
          {currentUser && (
            <Link to="/profile" onClick={handleClickMobileMenu}>
              Profile
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
