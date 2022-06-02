import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./static/FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Case N' Parts: Get Your Case on
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Case N' Parts</Heading>
            <FooterLink href="/">home</FooterLink>
            <FooterLink href="mybuilds">My Builds</FooterLink>
            <FooterLink href="create">Create Builds</FooterLink>
            <FooterLink href="view">View Builds</FooterLink>
            <FooterLink href="#">About Us</FooterLink>
          </Column>       
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;