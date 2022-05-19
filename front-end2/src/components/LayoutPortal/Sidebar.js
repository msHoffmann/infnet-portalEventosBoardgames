import styled from "styled-components";
import { CloseButton } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { SidebarItem } from "./SidebarItem.js";

const menuItems = [
  {
    to: "/portal",
    text: "Painel",
  },
  {
    to: "/portal/eventos",
    text: "Eventos",
  },
];

export function Sidebar({ isOpen, onClose }) {
  return (
    <SidebarStyled
      className="bg-dark text-white d-flex flex-column p-3"
      isOpen={isOpen}
    >
      <CloseButton
        variant="white"
        className="ms-auto d-lg-none"
        onClick={onClose}
      />
      <p className="h1">Portal de Eventos de Boardgames</p>
      <hr />
      <Nav variant="pills flex-column">
        {menuItems.map((item, index) => (
            <SidebarItem key={index} item={item} />
        ))}
      </Nav>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.header`
  width: 280px;
  @media (max-width: 991px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100vh;
    margin-left: -100%;
    transition: all 0.2s linear;
    ${(props) =>
      props.isOpen &&
      `
    margin-left: 0;
    `}
  }
`;
