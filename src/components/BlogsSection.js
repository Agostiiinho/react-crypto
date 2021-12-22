import React from "react";
import styled from "styled-components";
import { SectionStyled } from "../Layouts";
import MainTitle from "./MainTitle";
import blogs from "../blogs";

function BlogsSection() {
  return (
    <BlogsSectionStyle>
      <SectionStyled>
        <div className="title-container">
          <MainTitle
            title={"Most Followed Blogs of 2021"}
            subtitle={"Popular Blogs"}
            paragraph={"Blogs all over the world, all about crypto"}
          />
        </div>
        <div className="blogs">
          {blogs.map((blog) => {
            return (
              <div className="blog" key={blog.id}>
                <div className="image">
                  <img src={blog.image} alt="" />
                </div>
                <h6>{blog.title}</h6>
                <div className="username">
                  <p>{blog.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionStyled>
    </BlogsSectionStyle>
  );
}

const BlogsSectionStyle = styled.div`
  .blogs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    padding-top: 2rem;

    .blog {
      background: rgba(255, 255, 255, 0.03);
      border-radius: 20px;

      .image {
        height: 300px;
        width: 100%;
        overflow: hidden;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        transition: all ease 0.3s;

        img {
          height: 100%;
          width: 100%;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          transition: all ease 0.3s;
          object-fit: cover;
          filter: grayscale(50%);

          &:hover {
            filter: grayscale(0);
            transform: scale(1.1) rotate(3deg);
          }
        }
      }

      h6 {
        font-weight: 600;
        font-size: 1.3rem;
        padding: 1rem 1rem 0 1rem;
      }

      .username {
        padding: 0.2rem 0 1.5rem 1rem;
        display: flex;
        font-weight: 300;
        font-style: italic;
      }
    }
  }
`;

export default BlogsSection;
