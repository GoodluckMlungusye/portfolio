import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Totop = () => {

 const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    })
},[])
 
  return (
    <Link to="home" smooth={true} duration={1000} offset={-145} className="cursor-pointer">
    <button className={`to-top ${isVisible? "top-visible": ""}`}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="top-svg"
        >
            <path
            fillRule="evenodd"
            d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
            clipRule="evenodd"
            />
        </svg>
        </button>
    </Link>
  );
};

export default Totop;


