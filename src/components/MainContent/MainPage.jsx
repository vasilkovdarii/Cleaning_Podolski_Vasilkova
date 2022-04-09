import React from "react";
import "../../componentStyles/MainPage.css";
import Woman from "..//..//img/Group_239.png";

function MainPage() {
  return (
    <div className="main-page">
      <div className="text">
      <h2 style={{color:"#FFD836"}}>always clean</h2>
      <h1 style={{color:"#324975"}}>HOME & OFFICE</h1>
      <span style={{margin_top: "40px"}}>
        It’s hard to find someone who enjoys cleaning. It takes a lot of energy,
        time, and you always have to do it when there are so many other things
        to do around you.
        <br />
        <br />
          Is it possible to make it so that your surroundings are clean, but not
          to create a constant torture of cleaning? Of course it is!
      </span>
      <br />
      <button type="button" className="btn-book">Book now</button>
      </div>
      <div className="woman"> 
      <img src={Woman} alt="background"/>
      </div>
    </div>
  );
}

export default MainPage;

