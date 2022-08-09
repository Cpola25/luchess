import { Button, Container, Row } from "react-bootstrap";

export const Bottom = () => {
  return (
    <Container className="black">
      <Row className="black">
        <div className=" black center-contents">
          <Button
            href="https://www.instagram.com/lu_chess_a/"
            target="_blank"
            className="insta social-icons"
          />
          <Button
            href="https://m.facebook.com/LUChessAssoc/photos/?ref=page_internal&_se_imp=0Va664qYbN03EkU5s"
            target="_blank"
            className="facebook social-icons"
          />
           <Button
            href="https://github.com/Cpola25/luchess"
            target="_blank"
            className="gitHub social-icons"
          />
        </div>
      </Row>
    </Container>
  );
};
