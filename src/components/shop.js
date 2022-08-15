import React, { useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Shirt from "../LUCA_Images/Merch/Shirt.png";
import Hoodie from "../LUCA_Images/Merch/Hoodie.png";
import Jacket from "../LUCA_Images/Merch/Jacket.png";
import Ralagan from "../LUCA_Images/Merch/Ralagan.png";
import Membership from "../LUCA_Images/Event_Posters/Membership.jpeg";
import Logo3 from "../LUCA_Images/Graphics/Logo3.png";
import Banner3 from "../LUCA_Images/Banners/Banner3.png";
export const Shop = () => {
  const [key, setKey] = useState("profile");

  return (
    <Container>
      <div>
        {" "}
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 tab-style"
        >
          <Tab eventKey="profile" title="Membership">
            <div className="top-margin membership-div">
              <div className="">
                <Image className="member-ship" src={Logo3} />
              </div>

              <div className="member-shipText">
                <h2 className="">LUCA Membership</h2>
                <li>$15 Annually</li>
                <li>Discounted LUCA shirts</li>
                <li>Official Ranking with LUCA</li>
                <li>Compete in tournaments as a LUCA respresentative</li>
                <Button disabled className="buy-button top-margin">
                  ADD TO CART
                </Button>
              </div>
              
            </div>
          </Tab>
          <Tab eventKey="home" title="Shirts">
            <div>
              <p className="font-small shop-warning">
                Items are not yet available
              </p>
            </div>

            <Image className="merch-pic" src={Shirt} />
            <Image className="merch-pic" src={Ralagan} />
          </Tab>

          <Tab eventKey="contact" title="Sweaters">
          <p className="font-small shop-warning">
                Items are not yet available
              </p>
            <Image className="merch-pic" src={Hoodie} />
            <Image className="merch-pic" src={Jacket} />
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};
export default Shop;
