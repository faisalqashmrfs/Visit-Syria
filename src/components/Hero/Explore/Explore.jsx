import "./Explore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const Explore = () => {
  return (
    <div className="Explore">
      <h1>استكشف</h1>
      <h2>افضل الوجهات المثالية </h2>
      <button>
        استكشف المزيد <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    </div>
  );
};

export default Explore;
