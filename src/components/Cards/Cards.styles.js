import styled from "styled-components";

const StyledCards = styled.div`
    box-shadow: ${(props)=>props.variant === "boxShadow" ? "rgb(0 0 0 / 15%) 0px 0px 10px 0px" : ""};
    transition: all linear 0.1s;
    &:hover{
        transform: scale(1.04);
    }
`
export default StyledCards;