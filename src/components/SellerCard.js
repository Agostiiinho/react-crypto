import React from "react";
import styled from "styled-components";
import data from "../data";

function SellerCard() {
  return (
    <SellerCardStyle>
      {data.map((item) => {
        return (
          <div className="SellerCard" key={item.id}>
            <div className="number">
              <p>{item.id}</p>
            </div>
            <div className="profile">
              <img src={item.image} alt="" />
            </div>
            <div className="text">
              <h4>{item.name}</h4>
              <p>{item.currency}</p>
            </div>
          </div>
        );
      })}
    </SellerCardStyle>
  );
}

const SellerCardStyle = styled.div`
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.03);
  transition: all ease 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

  .SellerCard {
    display: flex;
    align-items: center;
    padding: 1.5rem 1rem;

    .number {
      padding-right: 1rem;
      font-size: 1.6rem;
      opacity: 0.5;

      p {
        font-weight: 800;
      }
    }

    .profile {
      display: flex;
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-right: 1rem;
        object-fit: cover;
      }
    }
  }
`;

export default SellerCard;
