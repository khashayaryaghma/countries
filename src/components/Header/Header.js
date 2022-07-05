import StyledHeader from "./Header.styles";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ mode, changeMode }) {
    return (
        <StyledHeader
            variant="boxShadow"
            className="d-flex justify-content-between align-items-center lowdark"
        >
            <h1 style={{ fontSize: "23px" }}>Where in the world?</h1>
            <div
                onClick={changeMode}
                role="button"
                style={{ userSelect: "none" }}
            >
                {/* {mode === "Light Mode" ? (
                    <FontAwesomeIcon icon="fa-solid fa-sun" />
                ) : (
                    <FontAwesomeIcon icon="fa-solid fa-moon" />
                )} */}

                {mode === "Light Mode" ? "☀️ " : "🌙 "}

                <span>{mode}</span>
            </div>
        </StyledHeader>
    );
}

export default Header;
