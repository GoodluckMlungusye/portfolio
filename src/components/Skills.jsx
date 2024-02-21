import skills from "../Data/Skills";



const Skills = () => {

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
                    <span>{subSkill.name}</span>
                    </div>
                    <div className="progress-line"><span className={`w-[${subSkill.percentage}%] after:content-['${subSkill.percentage}%']`}></span></div>
                    {/* <div className="progress-line"><span className="w-[45%] after:content-['45%']"></span></div> */}
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
      <div className="skill-container">
         {displaySkillCard}
      </div>
    </div>
  );
};

export default Skills;
