import React from "react";
import styled from "styled-components";

function CtaButton({ name }) {
  return <CtaButtonStyle>{name}</CtaButtonStyle>;
}

const CtaButtonStyle = styled.a`
  text-transform: uppercase;
  display: inline-block;
  padding: 0.9rem 1.5rem;
  text-align: center;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all ease 0.3s;
  background: linear-gradient(120deg, #624bbd, #e346bc);

  &:hover {
    transition: all ease 0.3s;
    background: linear-gradient(120deg, #e346bc, #624bbd);
  }
`;

export default CtaButton;
