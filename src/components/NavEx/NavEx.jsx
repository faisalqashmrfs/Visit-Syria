import "./NavEx.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const NavEx = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className="navEx">
      <ul>
        <li>
          <Link
            className={`link ${
              selectedItem === "معالم سياحية" ? "active" : ""
            }`}
            to="/Explore/معالم-سياحية"
            onClick={() => handleItemClick("معالم سياحية")}
          >
            المعالم السياحية
          </Link>

          <Link
            className={`link ${selectedItem === "مطاعم" ? "active" : ""}`}
            to="/Explore/مطاعم"
            onClick={() => handleItemClick("مطاعم")}
          >
            المطاعم
          </Link>

          <Link
            className={`link ${selectedItem === "فنادق" ? "active" : ""}`}
            to="/Explore/فنادق"
            onClick={() => handleItemClick("فنادق")}
          >
            الفنادق
          </Link>
        </li>
      </ul>
      <div className="selectAll">
        <div className="SelectLabO SelectLabT">
          <label for="selectElementO">ترتيب حسب</label>
          <select id="selectElementO" name="selectElementO">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div className="SelectLabO">
          <label for="selectElement">المحافظة</label>
          <select id="selectElement" name="selectElement">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NavEx;
