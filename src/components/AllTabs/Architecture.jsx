import React from "react";
import secondImg from "../../assets/Photos/avi-werde-hHz4yrvxwlA-unsplash.jpg";
import fourthImg from "../../assets/Photos/jason-briscoe-AQl-J19ocWE-unsplash.jpg";
import fifthImg from "../../assets/Photos/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash.jpg";
import seventhImg from "../../assets/Photos/pixasquare-4ojhpgKpS68-unsplash.jpg";
import eigthImg from "../../assets/Photos/lefteris-kallergis-ewSBvLSp3Tc-unsplash.jpg";
import fourteenthImg from "../../assets/Photos/robin-wersich-Q0IrpWQIMR4-unsplash.jpg";
import "./Architecture.css";

const Architecture = () => {
  return (
    <div className="architecture">
      <div className="architecture row">
        <div className="architecture date">
          <div className="architecture filter">Today</div>
          <div className="architecture day">Friday, 26 August 2022</div>
        </div>
        <div className="pics">
          <div className="image-content">
            <img src={secondImg} alt="" width={159} height={111} />
            New_house_... .jpg
          </div>
          <div className="image-content">
            <img src={fourthImg} alt="" width={108} height={199} />
            Kitchen_sansudan.jpg
          </div>
          <div className="image-content">
            <img src={fifthImg} alt="" width={159} height={95} />
            Bridge.jpg
          </div>
        </div>
      </div>
      <div className="architecture row">
        <div className="architecture date">
          <div className="architecture filter">This week</div>
          <div className="architecture day">21 to 25 August 2022</div>
        </div>
        <div className="pics">
          <div className="image-content">
            <img src={seventhImg} alt="" width={159} height={199} />
            seg_12399.jpg
          </div>
          <div className="image-content">
            <img src={eigthImg} alt="" width={108} height={199} />
            New_house_... .jpg
          </div>
          <div className="image-content">
            <img src={fourteenthImg} alt="" width={159} height={150} />
            New_house_... .jpg
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;
