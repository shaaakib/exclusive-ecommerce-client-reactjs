import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaRegHeart,
  FaRegStar,
  FaRegUser,
  FaRegWindowClose,
  FaSearch,
  FaShoppingBag,
  FaShoppingCart,
  FaSignOutAlt,
} from 'react-icons/fa';

export default function Header() {
  return (
    <div>
      <div className=" py-3 bg-black text-neutral-content c">
        <div className="md:flex  items-center justify-center gap-32">
          <div className="md:flex  justify-center items-center ">
            <div className="">
              <p className="text-center px-10">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </p>
            </div>
            <div className="ms-3 text-center mt-2 md:mt-0">
              <Link to="/" className="underline ">
                ShopNow
              </Link>
            </div>
          </div>
          <div className="text-center mt-2 ms-5 md:mt-0 md:mr-4">
            <select id="countries" className="bg-black">
              <option>English</option>
              <option value="US">Bangla</option>
              <option value="CA">Chinese</option>
              <option value="FR">Spanish</option>
              <option value="DE">Arabic</option>
            </select>
          </div>
        </div>
      </div>
      <div className="navbar bg-base-100 container mx-auto mt-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Shop
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Sign Up</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Exclusive</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li tabIndex={0}>
              <a>
                Shop
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Sign Up</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="flex gap-2 mt-5">
            <div className="form-control">
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                placeholder="Search...?"
                required
              ></input>
              <FaSearch className="relative bottom-7 ms-32 md:ms-36" />
            </div>
            <Link to="/wishlist">
              <FaRegHeart className="mt-4 ms-3 w-6" />
            </Link>
            <Link to="/cart">
              <FaShoppingCart className="mt-4 ms-3 w-6" />
            </Link>

            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://randomuser.me/api/portraits/men/73.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    <FaRegUser />
                    manage My Account
                  </a>
                </li>
                <li>
                  <a>
                    <FaShoppingBag />
                    My Order
                  </a>
                </li>
                <li>
                  <a>
                    <FaRegWindowClose />
                    My Cancellations
                  </a>
                </li>
                <li>
                  <a>
                    <FaRegStar />
                    My Reviews
                  </a>
                </li>
                <li>
                  <a>
                    <FaSignOutAlt />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
