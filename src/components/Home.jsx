import { useEffect } from "react";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";

const Home = () => {

    const bannerBackground = "assets/banner.jpg";
    const myProfession = "Software Developer";
    let wordCounter = 0;

    const typeMyProfession = () => {
        if(wordCounter < myProfession.length){
          const typeArea = document.getElementById("myProfession");
          typeArea.innerHTML += myProfession.charAt(wordCounter);
          wordCounter++;
        }
        setTimeout(typeMyProfession, 300);
      };

      useEffect(() => {
        typeMyProfession();
      });

      return (
        <div
          className="banner"
          style={{ backgroundImage: `url(${bannerBackground})` }}
          id="home"
        >
          <div className="content">
            <Fade direction="left"  triggerOnce>
            <h2 className="name">Hi, I'm Goodluck</h2>
            </Fade>
            <h3 className="profession" id="myProfession">
            </h3>
            <Fade direction="right" triggerOnce>
            <p className="description">
              Skilled in web applications, mobile applications and enthusiastic in
              UI/UX designing.
            </p>
            </Fade>
            <Fade direction="up" triggerOnce>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            <button className="btn">
              Get Started
            </button>
           </Link>
            </Fade>
          </div>
        </div>
      );
}

export default Home