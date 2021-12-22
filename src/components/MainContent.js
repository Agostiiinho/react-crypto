import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import SmallHeading from "./SmallHeading";
import blockchain from "../images/bchain.png";
import CtaButton from "./CtaButton";

function MainContent() {
  return (
    <MainContentStyle>
      <Navigation />
      <div className="content">
        <div className="left">
          <SmallHeading
            title={"The #1 best rated / most used NFT platform"}
            identifier={"before after"}
          />
          <h1>
            The best place to collect, buy and sell{" "}
            <span className="GradientText">Awesome NFTs</span>
          </h1>

          <p>
            <div className="description-top">
              All the NFTs you need in one place, located completety behind our
              security walls inside the only platform you will ever need
            </div>

            <div className="description-bottom">
              NFTs use a digital ledger to provide a public certificate of
              authenticity or proof of ownership, but do not restrict the
              sharing or copying of the underlying digital files. The lack of
              interchangeability (fungibility) distinguishes NFTs from
              blockchain cryptocurrencies, such as Bitcoin.
            </div>
          </p>
          <div className="btn-container">
            <CtaButton name={"Explore"} />
            <CtaButton name={"Create"} />
          </div>
        </div>
        <div className="right">
          <img src={blockchain} alt="" />
        </div>
      </div>
    </MainContentStyle>
  );
}

const MainContentStyle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 80%;
  height: 100%;
  transform: translateX(-50%);

  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    width: 100%;

    .left {
      display: flex;
      justify-content: center;
      flex-direction: column;

      h1 {
        padding-top: 0.8rem;
        padding-bottom: 2rem;
      }

      .description-top {
        padding-bottom: 1rem;
      }

      .description-bottom {
        padding-bottom: 2rem;
      }

      .btn-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        max-width: 60px;
      }
    }

    .right {
      img {
        position: absolute;
        right: -11%;
        bottom: -1%;
        width: 60%;
      }
    }
  }
`;

export default MainContent;
