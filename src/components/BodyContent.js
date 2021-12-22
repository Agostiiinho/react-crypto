import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../Layouts";
import BlogsSection from "./BlogsSection";
import ContactSection from "./ContactSection";
import GradientCardsSection from "./GradientCardsSection";
import MainTitle from "./MainTitle";
import SellerCard from "./SellerCard";

function BodyContent() {
  return (
    <BodyContentStyle>
      <InnerLayout>
        <MainTitle
          title={"Top Sellers This Month"}
          subtitle={"Raising Entrepeneurs"}
          paragraph={
            "These entrepeneurs are making more money a month than you can make in 5 years"
          }
        />

        <div className="seller-cards">
          <SellerCard />
          <SellerCard />
          <SellerCard />
        </div>
        <BlogsSection />
        <GradientCardsSection />
      </InnerLayout>
      <ContactSection />
      <footer>
        <p>Copyright © returnVoid. All rights reserved</p>
      </footer>
    </BodyContentStyle>
  );
}

const BodyContentStyle = styled.main`
  .seller-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin: 2rem 0;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.4rem 0;
    background-color: #020a27;
    //border-top: 1px solid rgba(255, 255, 255, 0.08);

    p {
      opacity: 0.8;
      text-align: center;
    }
  }
`;

export default BodyContent;
