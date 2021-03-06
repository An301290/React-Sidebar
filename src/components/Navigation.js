import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../images/IMG_5415.JPG";

function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="My-Avatar" />
      </div>

      <ul className="nav-items">
        <ul className="nav-item">
          <NavLink to="/home" activeClassName="active-class" exact>
            Home
          </NavLink>
        </ul>
        <ul className="nav-item">
          <NavLink to="/about" activeClassName="active-class" exact>
            About
          </NavLink>
        </ul>
        <ul className="nav-item">
          <NavLink to="/resume" activeClassName="active-class" exact>
            Resume
          </NavLink>
        </ul>
        <ul className="nav-item">
          <NavLink to="/portfolio" activeClassName="active-class" exact>
            Portfolio
          </NavLink>
        </ul>
        <ul className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            Contact
          </NavLink>
        </ul>
      </ul>
      <footer className="footer">
        <p>
          @2021 My Website <br></br>Angel Samano Hamud
        </p>
      </footer>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    border-right: 1px solid var(--border-color);
    img {
      width: 50%;
      border-radius: 10%;
      border: 8px solid var(--border-color);
    }
  }
  .nav-items {
    width: 100%;
    text-align: center;
    .active-class{
        background-color: var( --secondary-color)
    }
      display: block;
      a {
        display: block;
        padding: 0.2rem 0;
        position: relative;
        z-index: 4;
        text-decoration: none;
        &:hover {
          cursor: pointer;
          
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--background-color);
          transition: All 0.4s cubic-bezier(1, -0.24, 0.33, 0.92);
          z-index: 3;
          opacity: 0.21;
          
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
`;

export default Navigation;
