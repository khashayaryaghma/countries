import styled from "styled-components";

const StyledMain = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* background-color: ${(props) =>
    props.bgColor === "gray" ? "rgb(250, 250, 250)" : ""}; */
    padding-left: 6rem;
    padding-right: 6rem;
`;
export default StyledMain;