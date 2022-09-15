import rightArrowIcon from "../assets/icons/rightArrowIcon.svg";
import leftArrowIcon from "../assets/icons/leftArrowIcon.svg";
import "./Pagination.css";

function Pagination() {
  return (
    <div className="pagination-container">
      <div className="pag">
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
  );
}

export default Pagination;
