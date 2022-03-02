import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const [hide, setHide] = useState(false);
  const [nav, setNav] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setHide(true);
    } else {
      setHide(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div>
      <header className="header">
        {/* left */}

        <Link
          to={user && user.isAdmin ? "/admin" : "/"}
          className="flex items-center"
        >
          <img className="h-[80px] object-cover" src="/logo.png" alt="" />
          <span className=" text-gray-400 text-2xl font-bold pl-2">Gotodo</span>
        </Link>
        {/* hamburger */}
        <div className="md:hidden mt-1" onClick={() => setNav(!nav)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mt-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        {/* middle */}
        {user && user.isAdmin ? (
          <nav
            className={
              nav
                ? "absolute rounded-md top-[6.1rem] py-10 right-4 left-4 text-center bg-gray-100 shadow-2xl md:relative"
                : "hidden md:flex"
            }
          >
            <li className="list-none py-4 text-gray-600 hover:text-portfolio-light transition duration-200 md:px-4">
              <Link to="/admin/users">Users</Link>
            </li>
            <li className="list-none py-4 text-gray-600 hover:text-portfolio-light transition duration-200 md:px-4">
              <Link to="/admin/task">Tasks</Link>
            </li>
          </nav>
        ) : (
          <nav
            className={
              nav
                ? "absolute rounded-md top-[6.1rem] py-10 right-4 left-4 text-center bg-gray-100 shadow-2xl md:relative"
                : "hidden md:flex"
            }
          ></nav>
        )}

        {/* right */}
        <div className="text-gray-500 hidden items-center lg:flex">
          <div className="w-14 h-full flex items-center justify-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
          {user && (
            <img
              onClick={() => {
                dispatch(logoutUser());
              }}
              className="rounded-full h-10 w-10 object-cover"
              src={user.image}
              alt={user.name}
            />
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
