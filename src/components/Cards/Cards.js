
import { Card } from "react-bootstrap";
import StyledCards from "./Cards.styles";
import { v4 as uuidv4 } from "uuid";

export default function Cards({data}) {

  return (
      <>
          {data?.map((country) => {
              return (
                  <StyledCards
                      variant="boxShadow"
                      className="mb-5"
                      role="button"
                      key={uuidv4()}
                  >
                      <Card style={{ width: "18rem" }}>
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
                              <Card.Text>Region: {country.region}</Card.Text>
                              <Card.Text>Capital: {country.capital}</Card.Text>
                          </Card.Body>
                      </Card>
                  </StyledCards>
              );
          })}
      </>
  );
}
