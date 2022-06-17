import styled from "styled-components";

const StyledHeader = styled.header`
    box-shadow: ${(props) =>
        props.variant === "boxShadow"
            ? "rgb(0 0 0 / 15%) 0px 0px 10px 0px"
            : ""};
    padding: 1.5rem;
    padding-left: 4rem;
    padding-right: 4rem;
`;
export default StyledHeader;
