import React from "react";
import { FirstPartNav, NavContainer, NavItem } from "./nav.style";

export default function Nav() {
  return (
    <NavContainer>
      <FirstPartNav>
        <NavItem onClick={() => alert("s")}>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Settings</NavItem>
        <NavItem>Profile</NavItem>
      </FirstPartNav>
      <NavItem>Logo</NavItem>
    </NavContainer>
  );
}
