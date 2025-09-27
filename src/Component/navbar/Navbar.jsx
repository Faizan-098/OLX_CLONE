import olx from "../../assets/olxLogo.png";
import { GoSearch } from "react-icons/go";
import { FaPlus, FaUserGraduate, FaAngleDown } from "react-icons/fa6";
import style from "./Navbar.module.css";
import { useContext, useRef, useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import DropDown from "../DropDown/DropDown";
import { Link } from "react-router"; // ✅ Removed trailing comma
import { PostContext } from "../../Context/PostProvider";

const Navbar = () => {
  const { user, openFormHandler, dropDown, setDropDown, isloggedIn } = useContext(AuthContext);
  const { searchFunc } = useContext(PostContext);

  const wrapperRef = useRef(null); // 👈 Wrap both icon and dropdown

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setDropDown]);

  return (
    <header className={style.navbar}>
      {/* Logo */}
      <div className={style.logoBrand}>
        <Link to='/'>
          <img src={olx} alt="olx_logo" />
        </Link>
      </div>

      {/* SearchBox */}
      <div className={style.searchBox}>
        <input
          onInput={searchFunc}
          type="text"
          placeholder="Find Cars , Mobiles and More..."
        />
        <div className={style.searchIcon}>
          <GoSearch />
          <p>Search</p>
        </div>
      </div>

      {/* Login & Sell */}
      <div className={style.loginSellContainer}>
        {user ? (
          <div ref={wrapperRef}>
            <div
              className={style.userprofile}
              onClick={() => setDropDown((prev) => !prev)}
            >
              <FaUserGraduate size={30} />
              <FaAngleDown size={25} />
            </div>
            {dropDown && <DropDown />}
          </div>
        ) : (
          <div className={style.login} onClick={() => openFormHandler("login")}>
            Login
          </div>
        )}

        <div className={style.sell} onClick={isloggedIn}>
          <FaPlus size={20} />
          SELL
        </div>
      </div>
    </header>
  );
};

export default Navbar;
