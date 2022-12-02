import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonBiking,
  faGolfBallTee,
  faStar,
  faHouse,
  faAlignCenter,
  faAddressCard,
  faAnchorLock,
} from "@fortawesome/free-solid-svg-icons";
import { faAccusoft, faAmazonPay } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 20px;
  background: teal;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 2px solid grey;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  div {
    font-size: 45px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <FontAwesomeIcon icon={faStar} color="#4d4d4e" />
      </div>
      <div>
        <FontAwesomeIcon icon={faPersonBiking} color="#4d4d4e" />
      </div>
      <div>
        <FontAwesomeIcon icon={faGolfBallTee} color="#4d4d4e" />
      </div>
      <div>
        <FontAwesomeIcon icon={faHouse} color="#4d4d4e" />
      </div>
      <div>
        <FontAwesomeIcon icon={faAlignCenter} color="#4d4d4e" />
      </div>
      <div>
        <FontAwesomeIcon icon={faAccusoft} color="#4d4d4e" />
      </div>
      <div>
        <FontAwesomeIcon icon={faAmazonPay} color="#4d4d4e" />
      </div>
      <div>
        <FontAwesomeIcon icon={faAddressCard} color="#4d4d4e" />
      </div>
      <div>
        <FontAwesomeIcon icon={faAnchorLock} color="#4d4d4e" />
      </div>
    </Nav>
  );
};

export default Navbar;
