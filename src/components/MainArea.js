import React from "react";
import styled from "styled-components";
import business from "../images/marketing.mp4";
import circles from "../images/circles.svg";
import { InnerLayout } from "../Layouts";
import MainContent from "./MainContent";

function MainArea() {
  return (
    <MainAreaStyle>
      <video src={business} muted playsInline autoPlay loop></video>
      <img className="overlay" src={circles} alt="" />

      <InnerLayout>
        <MainContent />
      </InnerLayout>
    </MainAreaStyle>
  );
}

const MainAreaStyle = styled.div`
  width: 100%;
  height: 85vh;
  position: relative;
  overflow: hidden;

  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    right: -400px;
    top: -300px;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`;

export default MainArea;
