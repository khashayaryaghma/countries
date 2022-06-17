import styled from "styled-components";

const StyledMain = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: ${(props) =>
    props.bgColor === "gray" ? "rgb(250, 250, 250)" : ""};
    margin-top: 3rem;
`;
export default StyledMain;