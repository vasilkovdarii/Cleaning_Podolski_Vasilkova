import React from "react";
import "../../componentStyles/MainPage.css";
import styled from 'styled-components';
import Woman from "..//..//img/Group_239.png";


function MainPage() {
  return (
    <div className="main-page">
      <h2 style={{color:"#FFD836"}}>always clean</h2>
      <h1 style={{color:"#6882EF"}}>HOME & OFFICE</h1>
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
  );
}

export default MainPage;

const Background = styled.div`    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-position: top -120px right 0px;
    background-repeat: no-repeat;
    background-image: url('/img/background.png');
`

const Woman = styled.div`
    width: 55%;
    height: calc(100vh - 120px);
    background-position: top 50px right 100px;;
    background-repeat: no-repeat;
    background-image: url('../img/Group 239.svg');
    `