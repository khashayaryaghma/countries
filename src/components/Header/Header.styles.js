import styled from "styled-components";

const StyledHeader = styled.header`
    box-shadow: ${(props) =>
        props.variant === "boxShadow"
            ? "rgb(0 0 0 / 15%) 0px 0px 10px 0px"
            : ""};
    padding: 1.5rem;
    padding-left: 4rem;
    padding-right: 4rem;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: white;
`;
export default StyledHeader;
