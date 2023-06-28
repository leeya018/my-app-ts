import styled from "styled-components";

export const NavContainer = styled.div`
  /* Add your styles here */
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
  position: fixed;
  top: 0;
`;

export const FirstPartNav = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const NavItem = styled.div`
  padding: 1rem 0.5rem;
  font-size: 20px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;

  /* Add a hover state */
  &:hover {
    background-color: blue;
  }
`;

// export const Logo = styled.div`
//   padding: 1rem 0.5rem;
//   font-size: 20px;
//   font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;

// `;
