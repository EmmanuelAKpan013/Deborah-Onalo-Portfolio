import "./Pagination.css";
import rightArrowIcon from "../assets/icons/rightArrowIcon.svg";
import leftArrowIcon from "../assets/icons/leftArrowIcon.svg";
import DarkLeftArrow from "../assets/icons/DarkLeftArrow.png";
import DarkRightArrow from "../assets/icons/DarkRightArrow.png";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Pagination() {
  const [paginationColor, setPaginationColor] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const changePageNext = () => {
    if (location.pathname === "/project/nomadbank") {
      navigate("/project/blomblom");
    } else if (location.pathname === "/project/blomblom") {
      navigate("/project/saudipix");
    } else if (location.pathname === "/project/saudipix") {
      navigate("/project/investnow");
    } else if (location.pathname === "/project/investnow") {
      navigate("/project/watertalk");
    } else if (location.pathname === "/project/watertalk") {
      navigate("/project/nomadbank");
    }
  };

  const changePagePrevious = () => {
    if (location.pathname === "/project/watertalk") {
      navigate("/project/investnow");
    } else if (location.pathname === "/project/investnow") {
      navigate("/project/saudipix");
    } else if (location.pathname === "/project/saudipix") {
      navigate("/project/blomblom");
    } else if (location.pathname === "/project/blomblom") {
      navigate("/project/nomadbank");
    } else if (location.pathname === "/project/nomadbank") {
      navigate("/project/watertalk");
    }
  };

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
            <div onClick={changePagePrevious}>
              <img src={DarkLeftArrow} alt="" />
              <p>Previous Project </p>
            </div>

            <div onClick={changePageNext}>
              <p>Next Project</p>
              <img src={DarkRightArrow} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="pagination-container">
          <div className="pag light">
            <div onClick={changePagePrevious}>
              <img src={leftArrowIcon} alt="" onClick={changePagePrevious} />
              <p onClick={changePagePrevious}>Previous Project </p>
            </div>

            <div onClick={changePageNext}>
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
