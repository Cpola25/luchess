import React from "react";
import emailjs from "emailjs-com";
import { Col, Container, Row } from "react-bootstrap";

export const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_lgk9iwi",
        "template_5g34j4u",
        e.target,
        "IviVEfnhwJ4W4Bcku"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <Container>
      <Row className="extra-padding ">
        <Col className="tab-text">
          <h1 className="contact-heading">Contact Us</h1>
        </Col>
        <hr />
        <Col className="contact-container ">
          <form onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <div className="contact-form">
              <div className="">
                <input
                  className="contact-name"
                  placeholder="NAME"
                  type="text"
                  name="from_name"
                  required
                />
              </div>
              <div className="">
                <input
                  required
                  placeholder="EMAIL "
                  className="contact-email"
                  type="email"
                  name="from_email"
               
                />
              </div>

              <div className=" ">
                <input
                  placeholder="SUBJECT"
                  className="contact-subject"
                  type="text"
                  name="subject"
                  required
                />
              </div>
              <div className="">
                <textarea
                  placeholder="MESSAGE"
                  className="contact-message contact-input"
                  name="html_message"
                  required
                />
              </div>
            </div>
            <input className="contact-sendButton" type="submit" value="SEND" />
          </form>
         
        </Col>
      </Row>
    </Container>
  );
};
