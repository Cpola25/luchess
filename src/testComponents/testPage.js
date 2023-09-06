import { Container, Spinner } from "react-bootstrap";
import React from "react";
import StoreComponentLizbeth from "./storeComponentLizbeth";
import product1 from "./testPageImages/product1.png"; 
import product2 from "./testPageImages/product2.png"; 
import product3 from "./testPageImages/product3.png"; 
import product4 from "./testPageImages/product4.png"; 

//You can access the TestPage at root: /superSecretWebPage
export const TestPage = () => {
return(
    <Container>
        {/* create reusuable store item card */}
        <div style={{fontColor: "black",padding: "50px",  marginTop:"5%"}}>Add your components here! </div>
        <Spinner animation="grow" />
        <StoreComponentLizbeth productPicture={product1} productDescription="SuperCoolThing" productPrice="$ Free.99"></StoreComponentLizbeth>
    </Container>

); 

}