import React, { useState } from "react";
import { default as Allphotos } from "../AllTabs/Allphotos";
import { default as Architecture } from "../AllTabs/Architecture";
import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <div className="Tabs">
      <div className="nav">
        <ul className="lists">
          <li
            className={activeTab === "tab1" ? "active" : ""}
            onClick={handleTab1}
          >
            All photos
          </li>
          <li
            className={activeTab === "tab2" ? "active" : ""}
            onClick={handleTab2}
          >
            <img src="https://img.icons8.com/emoji/20/000000/money-bag-emoji.png" />
            Architecture
          </li>
          <li>
            <img src="https://img.icons8.com/emoji/20/000000/snow-capped-mountain.png" />{" "}
            Kashmir
          </li>
          <li>
            <img src="https://img.icons8.com/emoji/20/000000/sailboat.png" />{" "}
            Seaside
          </li>
          <li>
            <img src="https://img.icons8.com/emoji/20/000000/fish-emoji.png" />{" "}
            Lake view
          </li>
          <li>
            <img src="https://img.icons8.com/emoji/20/000000/italy-emoji.png" />{" "}
            Italy
          </li>
          <li>
            <img src="https://img.icons8.com/emoji/20/000000/china-emoji.png" />{" "}
            China
          </li>
          <li>
            <img src="https://img.icons8.com/emoji/20/000000/argentina-emoji.png" />{" "}
            Argentina
          </li>
        </ul>
        <div className="new">
          <img
            className="plus"
            src="https://img.icons8.com/android/15/B7BEC7/plus.png"
          />
          New Category
        </div>
      </div>
      {activeTab === "tab1" ? <Allphotos /> : <Architecture />}
    </div>
  );
};

export default Tabs;
