import { Button, Container, Row } from "react-bootstrap";

export const Bottom = () => {
  return (
    <Container className="black">
      <Row className="black">
        <div className=" footer-div extra-padding">
       
          <a
            href="https://www.instagram.com/lu_chess_a/"
            target="_blank"
            className=" social-icons insta"
          ></a>
          <a
            href="https://m.facebook.com/LUChessAssoc/photos/?ref=page_internal&_se_imp=0Va664qYbN03EkU5s"
            target="_blank"
            className=" social-icons facebook"
          ></a>
           <a
            href="https://github.com/Cpola25/luchess"
            target="_blank"
            className=" social-icons gitHub"
          ></a>
       
        </div>
        
      </Row>
    </Container>
  );
};
