import img2 from "../../assets/img/About .png";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <div className="about">
      <div className="aboutOne">
        <h1>نبذة عامة</h1>
        <p>
          تقع سوريا في منطقة الشرق الأوسط، وتتمتع بموقع جغرافي متميز، حيث تربط
          بين آسيا وأفريقيا وأوروبا. هذا الموقع جعلها مركزاً تجارياً وثقافياً
          مهماً من آلاف السنين تمتلك سوريا تاريخًا عريقًا يعود إلى آلاف السنين،
          حيث كانت موطنًا للعديد من الحضارات القديمة، مثل الحضارة الآشورية
          والحضارة البابلية والحضارة الفينيقية ...
        </p>
        <button>
          اقرأ المزيد
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
      <div className="aboutImg">
        <img src={img2} alt="Syria" />
      </div>
    </div>
  );
};

export default About;
