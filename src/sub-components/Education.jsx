import { useState } from "react";
import educations from "../Data/Education"

const Education = () => {

    
  const [isParagraphShown,setIsParagraphShown] = useState(false)
  const [currentIndex,setCurrentIndex] = useState(0)

  const expandEducationCard = (index) => {
    setIsParagraphShown(!isParagraphShown);
    setCurrentIndex(index);
  }

    const displayEducationCard = educations.map((education) => (
        <div className="box" key={education.id}> 
          <div className="image">
            <img src={education.image} alt={education.institute} />
          </div>
          <div className="content">
             <div className="duration">
                  <span>{education.duration}</span>
             </div>
             <h3>{education.institute}</h3>
             <div>
              <strong>{education.programme}</strong>
              <p className={(isParagraphShown && currentIndex === education.id )? "inline-block" : "hidden"}>{education.description}</p>
             </div>
             <button className="btn" onClick={() => expandEducationCard(education.id)}>
                {isParagraphShown ? "less" : "more"}
             </button>
          </div>
        </div>
    ));


  return (
    <div>  
        <div className="sub-title">
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="icon"
            >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
        </svg>
        <p>Education</p>
        </div>

        <div className="box-container">
            <div className="inbox-container">
            {displayEducationCard}
            </div>
        </div>
    </div>
  )
}


export default Education