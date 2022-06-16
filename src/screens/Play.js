import { Container, Row, Table } from "react-bootstrap";

export const Play = () => {
  return (
    <Container>
      <Row className="extra-padding yo">
        <Table striped bordered hover variant="dark ">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Liz</td>
              <td>Trujillo</td>
              <td>@Tech</td>
            </tr>
            <tr>
              <td>2</td>
              <td>P1</td>
              <td>P1-A</td>
              <td>@Player1</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>YOOOO</td>
              <td>@Player3</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};
