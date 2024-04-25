import explorations from "../Data/ExploreInformation"
import Education from "../sub-components/Education";
import Explore from "../sub-components/Explore";

const About = () => {

  return (
    <div id="about">

        <div className="title">
            <h3><span>A</span>bout <span>M</span>e</h3>
        </div>
        <Education/>
        <Explore explorations = {explorations}/>
      
    </div>
  )
}

export default About