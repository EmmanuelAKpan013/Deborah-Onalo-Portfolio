import "./Pagination.css";
import rightArrowIcon from "../assets/icons/rightArrowIcon.svg";
import leftArrowIcon from "../assets/icons/leftArrowIcon.svg";
import DarkLeftArrow from "../assets/icons/DarkLeftArrow.png";
import DarkRightArrow from "../assets/icons/DarkRightArrow.png";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Pagination() {
  const [paginationColor, setPaginationColor] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const changePaginationColor = () => {
      if (location.pathname === "/project/saudipix") {
        setPaginationColor(true);
      } else {
        setPaginationColor(false);
      }
    };
    changePaginationColor();
  });

  return (
    <>
      {paginationColor ? (
        <div className="pagination-container">
          <div className="pag dark">
            <div>
              <img src={DarkLeftArrow} alt="" />
              <p>Previous Project </p>
            </div>

            <div>
              <p>Next Project</p>
              <img src={DarkRightArrow} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="pagination-container">
          <div className="pag light">
            <div>
              <img src={leftArrowIcon} alt="" />
              <p>Previous Project </p>
            </div>

            <div>
              <p>Next Project</p>
              <img src={rightArrowIcon} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Pagination;
