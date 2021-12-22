import React from "react";
import styled from "styled-components";
import { SectionStyled } from "../Layouts";
import GradientCard from "./GradientCard";
import MainTitle from "./MainTitle";

import person from "../images/person.jpg";
import avatar from "../images/person.jpg";
import person2 from "../images/bitcoin3.jpg";
import person3 from "../images/person3.jpg";
import bitcoin2 from "../images/bitcoin2.jpg";
import bitcoin from "../images/bitcoin.jpg";
import computer from "../images/computer.jpg";
import CtaButton from "./CtaButton";

function GradientCardsSection() {
  return (
    <GradientCardsSectionStyle>
      <SectionStyled>
        <div className="title-container">
          <MainTitle
            title={"Currently Popular Bids"}
            subtitle={"Buy NFTs"}
            paragraph={"Obtain your own Non-Fungible Token right now!!"}
          />
        </div>

        <div className="gradient-cards-con">
          <GradientCard
            image={person}
            avatar={avatar}
            name={"Joel Clock"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
          <GradientCard
            image={person2}
            avatar={avatar}
            name={"Joel Clock"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
          <GradientCard
            image={person3}
            avatar={avatar}
            name={"Joel Clock"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
          <GradientCard
            image={computer}
            avatar={avatar}
            name={"Joel Clock"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
          <GradientCard
            image={bitcoin2}
            avatar={avatar}
            name={"Joel Clock"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
          <GradientCard
            image={bitcoin}
            avatar={avatar}
            name={"Joel Clock"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
          <GradientCard
            image={person}
            avatar={avatar}
            name={"Joel Clock"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
          <GradientCard
            image={bitcoin2}
            avatar={avatar}
            name={"Joel Clock"}
            price={"0.067 ETH"}
            title={"Just a dummy title"}
          />
        </div>
        <div className="cta-btn">
          <CtaButton name={"View More"} />
        </div>
      </SectionStyled>
    </GradientCardsSectionStyle>
  );
}

const GradientCardsSectionStyle = styled.div`
  .cta-btn {
    padding-top: 3rem;
    text-align: center;
  }

  .gradient-cards-con {
    padding-top: 1.8rem;
  }
`;

export default GradientCardsSection;
