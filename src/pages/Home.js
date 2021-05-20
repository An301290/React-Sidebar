import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Home() {
  return (
    <HomeStyled>
      <div className="typography">
        <h1>
          Hi I'm <span>Angel</span>
        </h1>
        <br></br>
        <p>
          I'm baby whatever kogi ugh pickled, twee blog iceland tilde chillwave
          echo park crucifix occupy hashtag. Adaptogen af man bun chicharrones
        </p>
        <br></br>
        <div classname="icons">
          <a
            href="https://github.com/An301290"
            target="_blank"
            className="i-github"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://github.com/An301290"
            target="_blank"
            className="i-behance"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://github.com/An301290"
            target="_blank"
            className="i-linkedin "
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </HomeStyled>
  );
}

const HomeStyled = styled.header`
  width: 100%;
  height: 100vh;
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: black;      
    }
    .icons{
      
    }
  }
`;
export default Home;
