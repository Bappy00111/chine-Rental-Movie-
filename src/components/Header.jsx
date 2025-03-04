import React, { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import moon from "../assets/icons/moon.svg";
import light from "../assets/icons/sun.svg";
import shopingCart from "../assets/shopping-cart.svg";
import CardDetels from "../cine/CardDetels";
import { MovieContext, ThemContext } from "../Context";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);
  const { drakMode, setDarkMode } = useContext(ThemContext);
  return (
    <header>
      {showCart && (
        <CardDetels
          handleCloseCartDetels={() => setShowCart(false)}
        ></CardDetels>
      )}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>

          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={()=>setDarkMode( !drakMode)}
            >
              <img
                src={drakMode ? light : moon}
                width="24"
                height="24"
                alt=""
              />
            </a>
          </li>

          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                onClick={() => setShowCart(true)}
                src={shopingCart}
                width="24"
                height="24"
                alt=""
              />
              {cartData.length > 0 && (
                <span className="rounded-full absolute  top-[-12px] left-[28px] bg-primary text-white text-center p-[2px] w-8 h-8">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
