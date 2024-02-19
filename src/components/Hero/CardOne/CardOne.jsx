import "./CardOne.css";

const CardOne = ({ backgroundImage, par, isActive, onClick, id }) => {
  const cardStyle = {
    width: isActive ? "262.587px" : "238.716px",
    height: isActive ? "391px" : "325.833px",
    borderRadius: isActive ? "38.195px" : "32.195px",
    border: isActive
      ? "8.355px solid rgba(141, 211, 187, 0.53)"
      : "8.355px solid rgba(255, 255, 255, 0.35)",
  };

  const imgStyle = {
    width: isActive ? "246.587px" : "222.716px",
    height: isActive ? "374px" : "310.833px",
    borderRadius: isActive ? "36.195px" : "32.195px",
  };

  return (
    <div
      className={`CardOne ${isActive ? "active" : ""}`}
      style={{ ...cardStyle }}
      onClick={() => onClick(id)}
    >
      <img src={backgroundImage} alt="" style={imgStyle} />
      <p>{par}</p>
    </div>
  );
};

export default CardOne;
