
import { Card } from "react-bootstrap";



export default function Cards({data}) {

  return (
      <>
          {data?.map((country) => {
              return (
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
              );
          })}
      </>
  );
}