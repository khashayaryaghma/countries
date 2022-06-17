
import { Card } from "react-bootstrap";



export default function Cards({data}) {

  return (
      <>
          {data?.map((country) => {
              return(
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={country.flags.svg}/>
                    <Card.Body>
                        <Card.Title>{country.name}</Card.Title>
                    </Card.Body>
                </Card>
              )
          })}
      </>
  );
}
