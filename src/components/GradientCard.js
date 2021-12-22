import React from "react";
import styled from "styled-components";
import time from "../images/time.svg";
import heart from "../images/heart.svg";
import CtaButton from "./CtaButton";

function GradientCard({ image, avatar, name, price, title, ctaButton }) {
  return (
    <GradientCardStyle>
      <div className="g-card">
        <div className="inner-content">
          <div className="image">
            <img src={image} alt="" />
            <div className="name">
              <img src={avatar} alt="" />
              <p>{name}</p>
            </div>
          </div>
          <div className="card-content">
            <h6 className="card-name">{title}</h6>
            <p>
              Price: <span className="price">{price}</span>
            </p>
            <p>
              Highest Bid: <span className="price">{price}</span>
            </p>
            <div className="duration">
              <p>
                <img src={time} alt="" /> 7 Hours Ago
              </p>
              <p>
                <img src={heart} alt="" /> 15.6k Likes
              </p>
            </div>
            <div className="bid-btn">
              <CtaButton name={"Place Bid"} />
            </div>
          </div>
        </div>
      </div>
    </GradientCardStyle>
  );
}

const GradientCardStyle = styled.div`
  border-radius: 20px;
  font-size: 1rem;
  transition: all ease 0.3s;

  background: linear-gradient(90deg, #7f41db 0%, #022894 100%);

  &:hover {
    transform: scale(1.05);
  }

  .bid-btn {
    display: grid;
    width: 100%;
    padding-top: 0.9rem;
  }

  .g-card {
    margin: 0.2rem;

    .inner-content {
      background-color: #091026;
      padding: 0.8rem;
      border-radius: 20px;

      .image {
        width: 100%;
        position: relative;

        img:first-child {
          width: 100%;
          object-fit: cover;
          height: 300px;
          border-radius: 20px;
        }

        .name {
          position: absolute;
          left: 50%;
          bottom: -26px;
          background-color: #03091f;
          display: flex;
          align-items: center;
          transform: translateX(-50%);
          width: 75%;
          padding: 0.5rem 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 50px;

          img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 2rem;
          }
        }
      }

      .card-content {
        padding-top: 3rem;

        .card-name {
          font-size: 1.3rem;
          font-weight: 600;
          padding-bottom: 0.6rem;
        }

        .price {
          color: #6bbe92;
        }

        .r-text {
          opacity: 0.5;
        }

        .duration {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.2);
          display: flex;
          justify-content: space-between;

          p {
            display: flex;
            align-items: center;

            img {
              object-fit: cover;
              width: 18px;
              margin-right: 0.6rem;
              align-items: center;
              display: flex;
              justify-content: center;
            }
          }
        }
      }
    }
  }
`;

export default GradientCard;
