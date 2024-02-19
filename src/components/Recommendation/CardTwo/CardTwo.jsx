import img3 from "../../../assets/img/Rectangle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faStar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./CardTwo.css";
const CardTwo = () => {
  return (
    <div className="CardTwo">
      <img src={img3} alt="" />
      <div className="CardDiv">
        <div className="CardDivOne">
          <h3>نواعير حماة</h3>
          <div className="CardDivFont">
            <p>4.7</p>
            <FontAwesomeIcon icon={faStar} className="star" />
          </div>
        </div>
        <p className="CardDivPar">
          تقع في مدينة حماة على نهر العاصي وهي آلات مائية خشبية تدور بالقوة
          المائية وتتواجد على شواطئ نهر العاصي في مدينة حماة. وتنقل الماء منه
          بواسطة صناديق إلى حوض علوي ومنه يجري في قنوات محمولة على قناطر ...
        </p>
        <div className="CardDivTwo">
          <div className="CardDivFont">
            <p>حماة </p>
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <button>
            اقرأ المزيد
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
