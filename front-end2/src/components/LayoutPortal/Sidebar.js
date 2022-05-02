import styled from "@emotion/styled";
import { CloseButton } from "react-bootstrap";

export function Sidebar (){
    return(
        <SideBarStyled>
            <CloseButton />
            <p className="h1">Portal Eventos</p>
        </SideBarStyled>
    )
}

const SideBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100vh;
    margin-left: -100%;
    transition: all .2s linear;
`