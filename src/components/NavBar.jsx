import { useState} from "react";
import { Link } from "react-scroll";
import links from "../Data/NavigationLinks"

const NavBar = () => {

  const [navigationBarBackground, setNavigationBarBackground] = useState(false);
  const [isToggle, setIsToggle] = useState(false);


    const changeNavigationBarBackground = () => {
        if (window.scrollY > 0) {
        setNavigationBarBackground(true);
        } else {
        setNavigationBarBackground(false);
        }
    };
    window.addEventListener("scroll", changeNavigationBarBackground);


    const toggleMenu = () => {
        setIsToggle(!isToggle);
    };

    const displayMenuItems = links.map((link) => (
        <li className="ml-7 cursor-pointer mt-6 md:mt-0 capitalize" key={link.id}>
          <Link
            to={link.name}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="link"
            onClick={toggleMenu}
          >
            {link.name}
          </Link>
        </li>
      ));

      return (
        <div className="flex flex-col">
          <div className={navigationBarBackground ? "header sticky" : "header"} id="header">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <img
                className="lg:w-16 w-12"
                src="assets/banner-icon.png"
                alt="logo"
              />
            </Link>
    
            <div className="flex ">
              <ul className="navigation">{displayMenuItems}</ul>
    
              {isToggle ?
               (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="menuToggle"
                  onClick={toggleMenu}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
               )
               : 
               ( 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="menuToggle"
                  onClick={toggleMenu}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
    
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                className="themeIcon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </div>
          </div>
    
          <ul 

          className={`sideNavBar ${isToggle? "top-[100px]": "top-[-100%]"}`}>{displayMenuItems}
          </ul>
    
        </div>
      );
}

export default NavBar