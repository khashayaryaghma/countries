
import { Card } from "react-bootstrap";
import StyledCards from "./Cards.styles";
import { v4 as uuidv4 } from "uuid"; 
import { Link } from "react-router-dom";
export default function Cards({data}) {

  return (
      <>
          {data?.map((country) => {
              return (
                  <Link
                      to={`/country/${country.name}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                      state={country}
                      key={uuidv4()}
                  >
                      <StyledCards
                          variant="boxShadow"
                          className="mb-5"
                          role="button"
                      >
                          <Card style={{ width: "18rem" }} className="lowdark">
                              <Card.Img
                                  variant="top"
                                  src={country.flags.svg}
                                  height="180"
                              />
                              <Card.Body>
                                  <Card.Title>{country.name}</Card.Title>
                                  <Card.Text>
                                      Population: {country.population}
                                  </Card.Text>
                                  <Card.Text>
                                      Region: {country.region}
                                  </Card.Text>
                                  <Card.Text>
                                      Capital: {country.capital}
                                  </Card.Text>
                              </Card.Body>
                          </Card>
                      </StyledCards>
                  </Link>
              );
          })}
      </>
  );
}
