import React from "react";
import styled from "styled-components";
import SmallHeading from "./SmallHeading";

function MainTitle({ title, subtitle, paragraph }) {
  return (
    <MainTitleStyle>
      <SmallHeading title={subtitle} />
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </MainTitleStyle>
  );
}

const MainTitleStyle = styled.div`
  h2 {
    padding-top: 1rem;
    font-weight: 400;
  }
  p {
    padding: 0.1rem 0;
    font-weight: 300;
    font-style: italic;
    opacity: 0.8;
  }
`;

export default MainTitle;
