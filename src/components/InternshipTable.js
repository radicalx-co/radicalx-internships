import React from 'react'
import "../styles/InternshipTable.css"

import downArrow from "../assets/down_arrow_icon.png";


function InternshipTable() {
  return (

    <div className="grid-container">
      <div className="grid-item top-left title">
        Internship Title{" "}
        <span className="down_arrow">
          <img src={downArrow} alt="down arrow" />{" "}
        </span>
      </div>
      <div className="grid-item title">
        {" "}
        Completion Period{" "}
        <span className="down_arrow">
          <img src={downArrow} alt="down arrow" />{" "}
        </span>
      </div>
      <div className="grid-item title">
        {" "}
        Total Entrolled{" "}
        <span className="down_arrow">
          <img src={downArrow} alt="down arrow" />{" "}
        </span>
      </div>
      <div className="grid-item title">
        Qualified Candidates{" "}
        <span className="down_arrow">
          <img src={downArrow} alt="down arrow" />{" "}
        </span>
      </div>
      <div className="grid-item top-right title"></div>
      {/* row 2 */}
      <div className="grid-item product">
        Product Design GVI{" "}
        <p>
          Amet minim mollit non deserunt est sit aliqua dolor do amet sint.{" "}
        </p>
      </div>
      <div className="grid-item created">
        120 days <p>(created on 10/12/2021)</p>
      </div>
      <div className="grid-item">
        <span className="purple_btn">20,000</span>
      </div>
      <div className="grid-item">9</div>
      <div className="grid-item">10</div>
      {/* row 3 */}
      <div className="grid-item product">
        Product Design GVI{" "}
        <p>
          Amet minim mollit non deserunt est sit aliqua dolor do amet sint.{" "}
        </p>
      </div>
      <div className="grid-item created">
        120 days <p>(created on 10/12/2021)</p>
      </div>
      <div className="grid-item">
        <span className="purple_btn">20,000</span>
      </div>
      <div className="grid-item">14</div>
      <div className="grid-item">15</div>
      {/* row 4 */}
      <div className="grid-item product">
        Product Design GVI{" "}
        <p>
          Amet minim mollit non deserunt est sit aliqua dolor do amet sint.{" "}
        </p>
      </div>
      <div className="grid-item created">
        120 days <p>(created on 10/12/2021)</p>
      </div>
      <div className="grid-item">
        <span className="purple_btn">20,000</span>
      </div>
      <div className="grid-item">19</div>
      <div className="grid-item">20</div>
      {/* row 5 */}
      <div className="grid-item product">
        Product Design GVI{" "}
        <p>
          Amet minim mollit non deserunt est sit aliqua dolor do amet sint.{" "}
        </p>
      </div>
      <div className="grid-item created">
        120 days <p>(created on 10/12/2021)</p>
      </div>
      <div className="grid-item">
        <span className="purple_btn">20,000</span>
      </div>
      <div className="grid-item">24</div>
      <div className="grid-item">25</div>
      {/* row 6 */}
      <div className="grid-item bottom-left product">
        Product Design GVI{" "}
        <p>
          Amet minim mollit non deserunt est sit aliqua dolor do amet sint.{" "}
        </p>
      </div>
      <div className="grid-item created">
        120 days <p>(created on 10/12/2021)</p>
      </div>
      <div className="grid-item">
        <span className="purple_btn">20,000</span>
      </div>
      <div className="grid-item">29</div>
      <div className="grid-item bottom-right">30</div>
    </div>
  );
}

export default InternshipTable