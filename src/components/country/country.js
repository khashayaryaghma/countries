import { useLocation, Link } from "react-router-dom";
import { StyledCountry, StyledContainer } from "./Country.styles";
import { v4 as uuidv4 } from "uuid";

export default function Country() {
    const { state } = useLocation();

    return (
        <StyledCountry>
            <div>
                <Link
                    to={"/"}
                    className="btn m-5 lowdark"
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

            <StyledContainer className="highdark">
                {state.flags.svg &&
                <div>
                    <img
                        src={state.flags.svg}
                        alt="flag"
                        style={{
                            width: "40vmax",
                            marginBottom: "2rem",
                            textAlign: "center",
                        }}
                    />
                </div>}
                <div style={{ marginLeft: "3rem" }}>
                    <div className="d-flex flex-wrap align-items-center">
                        <div>
                            <h4>{state.name}</h4>
                            <ul
                                style={{
                                    listStyle: "none",
                                    lineHeight: "2.2rem",
                                    fontSize: ".9rem",
                                }}
                            >
                                {state.nativeName && (
                                    <li>Native Name: {state.nativeName}</li>
                                )}
                                {state.population && (
                                    <li>Population: {state.population}</li>
                                )}
                                {state.region && (
                                    <li>Region: {state.region}</li>
                                )}
                                {state.subregion && (
                                    <li>Sub Region: {state.subregion}</li>
                                )}
                                {state.capital && (
                                    <li>Capital: {state.capital}</li>
                                )}
                            </ul>
                        </div>

                        <div>
                            <ul
                                style={{
                                    listStyle: "none",
                                    lineHeight: "2.2rem",
                                    fontSize: ".9rem",
                                }}
                            >
                                {state.topLevelDomain && (
                                    <li>
                                        Top Level Domain: {state.topLevelDomain}
                                    </li>
                                )}
                                {state.currencies && (
                                    <li>
                                        Currencies:{" "}
                                        {state.currencies?.map(
                                            (ele) => ele.name + " "
                                        )}
                                    </li>
                                )}
                                {state.languages && (
                                    <li>
                                        Languages:{" "}
                                        {state.languages?.map(
                                            (ele) => ele.name + " "
                                        )}
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    {state.borders && (
                        <div
                            style={{ fontSize: ".9rem" }}
                            className="d-flex align-items-baseline flex-wrap align-content-start"
                        >
                            Border Countries:
                            {state.borders?.map((ele) => (
                                <span
                                    className="btn m-1 lowdark"
                                    style={{
                                        boxShadow:
                                            "rgb(0 0 0 / 15%) 0px 0px 10px 0px",
                                        fontSize: ".7rem",
                                    }}
                                    key={uuidv4()}
                                >
                                    {ele}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </StyledContainer>
        </StyledCountry>
    );
}
