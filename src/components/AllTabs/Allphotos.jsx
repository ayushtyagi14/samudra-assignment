import React from "react";
import "./Allphotos.css";
import firstImg from "../../assets/Photos/lieve-ransijn-w2mewP9uqbQ-unsplash.jpg";
import secondImg from "../../assets/Photos/avi-werde-hHz4yrvxwlA-unsplash.jpg";
import thirdImg from "../../assets/Photos/prayer-flags-0ICxgY6vdCA-unsplash.jpg";
import fourthImg from "../../assets/Photos/jason-briscoe-AQl-J19ocWE-unsplash.jpg";
import fifthImg from "../../assets/Photos/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash.jpg";
import sixthImg from "../../assets/Photos/deepmind-2EpKCoEgKZo-unsplash.jpg";
import seventhImg from "../../assets/Photos/pixasquare-4ojhpgKpS68-unsplash.jpg";
import eigthImg from "../../assets/Photos/lefteris-kallergis-ewSBvLSp3Tc-unsplash.jpg";
import ninthImg from "../../assets/Photos/kristine-tanne-EZT6qusWOBQ-unsplash.jpg";
import tenthImg from "../../assets/Photos/jubeo-hernandez-ZmWLGkPe1Sg-unsplash.jpg";
import eleventhImg from "../../assets/Photos/reiseuhu-58MWgP3SsmY-unsplash.jpg";
import twelvethImg from "../../assets/Photos/adam-bixby-1W1VSHDCZiQ-unsplash.jpg";
import thirteenthImg from "../../assets/Photos/nate-johnston-6ajf6BAyYt4-unsplash.jpg";
import fourteenthImg from "../../assets/Photos/robin-wersich-Q0IrpWQIMR4-unsplash.jpg";

const Allphotos = () => {
  return (
    <div className="allphotos">
      <div className="allphotos row">
        <div className="allphotos date">
          <div className="allphotos filter">Today</div>
          <div className="allphotos day">Friday, 26 August 2022</div>
        </div>
        <div className="pics">
          <div className="image-content">
            <img src={firstImg} alt="" width={139} height={199} />
            seg_12399.jpg
          </div>
          <div className="image-content">
            <img src={secondImg} alt="" width={139} height={111} />
            New_house_... .jpg
          </div>
          <div className="image-content">
            <img src={thirdImg} alt="" width={139} height={168} />
            Barakpore valley.jpg
          </div>
          <div className="image-content">
            <img src={fourthImg} alt="" width={108} height={199} />
            Kitchen_sansudan.jpg
          </div>
          <div className="image-content">
            <img src={fifthImg} alt="" width={139} height={95} />
            Bridge.jpg
          </div>
          <div className="image-content">
            <img src={sixthImg} alt="" width={139} height={160} />
            Abstract_44533.jpg
          </div>
        </div>
      </div>
      <div className="allphotos row">
        <div className="allphotos date">
          <div className="allphotos filter">This week</div>
          <div className="allphotos day">21 to 25 August 2022</div>
        </div>
        <div className="pics">
          <div className="image-content">
            <img src={seventhImg} alt="" width={139} height={199} />
            seg_12399.jpg
          </div>
          <div className="image-content">
            <img src={eigthImg} alt="" width={108} height={199} />
            New_house_... .jpg
          </div>
          <div className="image-content">
            <img src={ninthImg} alt="" width={139} height={95} />
            Barakpore valley.jpg
          </div>
          <div className="image-content">
            <img src={tenthImg} alt="" width={139} height={168} />
            Kitchen_sansudan.jpg
          </div>
          <div className="image-content">
            <img src={eleventhImg} alt="" width={139} height={168} />
            Bridge.jpg
          </div>
          <div className="image-content">
            <img src={twelvethImg} alt="" width={139} height={199} />
            Abstract_44533.jpg
          </div>
          <div className="image-content">
            <img src={thirteenthImg} alt="" width={139} height={199} />
            seg_12399.jpg
          </div>
          <div className="image-content">
            <img src={fourteenthImg} alt="" width={139} height={150} />
            New_house_... .jpg
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allphotos;
