import {IMAGE_URL} from "../data/Constants"

const Explore = (props) => {
  const { explorations } = props;

  const displayExploreItems = explorations.map((explore) => (
    <div className="e-box" key={explore.id}>
        <div className="e-content">
          <div><h1>{explore.counts}</h1><span className="plus">+</span></div>
          <p>{explore.description}</p>
        </div>
        <div className="e-image">
          <img src={`${IMAGE_URL}/${explore.image}`} alt={explore.id} />
        </div>
    </div>
  ));

  return (
    <div>
      <div className="sub-title mt-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
        <p>Explore More</p>
      </div>

      <div className="explore">
        {displayExploreItems}
      </div>
    </div>
  );
};

export default Explore;
