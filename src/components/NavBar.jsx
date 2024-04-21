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
            offset={-150}
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
                  strokeWidth={1.5} 
                  stroke="currentColor"
                  className="menu-toggle"
                  onClick={toggleMenu}
                >
                  <path
                    strokeLinecap="round" 
                    strokeLinejoin="round"
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
                  className="menu-toggle"
                  onClick={toggleMenu}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}    
            </div>
          </div>
    
          <ul 
              className={`side-nav-bar ${isToggle? "top-[100px]": "top-[-100%]"}`}>{displayMenuItems}
          </ul>
    
        </div>
      );
}

export default NavBar