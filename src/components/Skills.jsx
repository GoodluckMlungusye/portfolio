import { useState, useRef, useEffect } from "react";
import skills from "../Data/Skills";

const Skills = () => {

  const [isElementReached, setIsElementReached] = useState(false);
  const elementRef = useRef(null);


  const handleScroll = () => {
    const element = elementRef.current;
    const { top, bottom } = element.getBoundingClientRect();
    const isElementVisible = top >= 0 && bottom <= window.innerHeight;

    if (isElementVisible && !isElementReached) {
      setIsElementReached(true);
    } else if (!isElementVisible && isElementReached) {
      setIsElementReached(false);
    }
  };


  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });


  const displaySkillCard = skills.map((skill) => (
    <div className="skill" key={skill.id}>
      <div className="skill-title">
        <h2>{skill.id}</h2>
      </div>
      <div className="skill-rate">
        <div className="skill-bar">
          {skill["sub-skills"].map((subSkill) => (
            <div className="bar" key={subSkill.class}>
              <div className="sub-skill">
                <span>
                  <span>{subSkill.name}</span>
                  <span>{subSkill.percentage}%</span>
                </span>
              </div>
              <div className={`${isElementReached? "progress-line": " "}`}>
                <span
                  style={{
                    width: `${subSkill.percentage}%`,
                  }}
                >
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ));

  return (
    <div id="skills">
      <div className="title">
        <h3>
          <span>S</span>kills
        </h3>
      </div>
      <div className="skill-container" ref={elementRef}>{displaySkillCard}</div>
    </div>
  );
};

export default Skills;
