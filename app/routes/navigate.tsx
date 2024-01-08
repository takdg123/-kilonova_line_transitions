import React, { ChangeEvent, useState } from 'react';
import { NavLink } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { Navbar } from "flowbite-react";

function NavBar(props) {

  const [page, setPage] = useState(props); 

  const handleLinkClick = (props) => {
    setPage(props); 
  };

  return (
    <div>
      <Navbar
        fluid={true}
        rounded={true}
        >
        <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Line Transitions in Kilonova
            </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link href="/"
            active={page.value=="1"}
            onClick={() => handleLinkClick('1')}>
            Home
            </Navbar.Link>
            <Navbar.Link href="/info"
            active={page.value=="2"}
            onClick={() => handleLinkClick('2')}>
            Simulation Setup
            </Navbar.Link>
            <Navbar.Link href="/resonance"
            active={page.value=="3"}
            onClick={() => handleLinkClick('3')}>
            Species Resonance
            </Navbar.Link>
            <Navbar.Link href="/line"
            active={page.value=="4"}
            onClick={() => handleLinkClick('4')}>
            Species Lines
            </Navbar.Link>
            <Navbar.Link href="/map"
            active={page.value=="5"}
            onClick={() => handleLinkClick('5')}>
            Resonance Map
            </Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default NavBar;