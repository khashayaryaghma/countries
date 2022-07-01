import { useLocation, Link } from "react-router-dom";
import { StyledCountry, StyledContainer } from "./Country.styles";

export default function Country() {
    const { state } = useLocation();
    console.log(state);
    return (
        <StyledCountry>
            <div>
                <Link
                    to={"/"}
                    className="btn m-5"
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                        boxShadow: "rgb(0 0 0 / 15%) 0px 0px 10px 0px",
                        paddingLeft: "1.5rem",
                        paddingRight: "1.5rem",
                    }}
                >
                    Back
                </Link>
            </div>

            <StyledContainer>
                <div>
                    <img
                        src={state.flags.svg}
                        alt="flag"
                        style={{ width: "30rem" }}
                    />
                </div>
                <div>
                    <h4>{state.name}</h4>
                </div>
            </StyledContainer>
        </StyledCountry>
    );
}
