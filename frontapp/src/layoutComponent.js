import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import { createContext, useContext } from "react";
import route from "./route/index";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

export default function App(args) {
  const routes = useRoutes(route);

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/board">Board</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/customer">Customer</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/book">Book</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/event">Event</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/effect">Effect</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      {routes}
    </div>
  );
}
