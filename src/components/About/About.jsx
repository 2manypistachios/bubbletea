import React from "react";
import {Section, Title, Box} from "bloomer";

export default class About extends React.Component {
  render() {
    return (
      <Section isMarginless>
        <Box>
          <Title>About Us</Title>
          <p>Bubble tea is a dessert drink invented in Taiwan in the 1980s. It's simply a freshly brewed tea with milk and sugar, made both hot and cold.</p>
        </Box>
      </Section>
    );
  }
};
