import React from "react";
import {Section, Title, Box} from "bloomer";

export default class About extends React.Component {
  render() {
    return (
      <Section isMarginless>
        <Box>
          <Title>About Us</Title>
          <p>We created Black Pearl to provide you with the authentic taste of bubble tea without leaving campus. We love bubble just as much as you do and we want you to love our product as much as we do.</p>
          <br/>
          <p>Bubble tea is a dessert drink invented in Taiwan in the 1980s. It's simply a freshly brewed tea with milk and sugar, made both hot and cold.</p>
          </Box>
      </Section>
    );
  }
};
