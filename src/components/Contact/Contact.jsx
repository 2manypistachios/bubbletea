import React from "react";
import {Section, Title, Subtitle, Box, Columns, Column} from "bloomer";

export default class Contact extends React.Component {
  render() {
    return (
      <Section id="contact">
        <Box>
          <Title isSize={3}>Contact us anytime!</Title>
          <br/>
          <Columns hasTextAlign="centered">
            <Column isSize='1/4'>
            <Title isSize={4}>Nathaniel Duanshi</Title>
            <Subtitle isSize={5}>(917)-599-7250</Subtitle>
            <Subtitle isSize={5}> duanshi_nath@bentley.edu</Subtitle>
            <figure className="image">
              <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
            </figure>
            </Column>
            <Column isSize='1/4'>
            <Title isSize={4}>Nathaniel Duanshi</Title>
            <Subtitle isSize={5}>(917)-599-7250</Subtitle>
            <Subtitle isSize={5}> duanshi_nath@bentley.edu</Subtitle>
            <figure className="image">
              <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
            </figure>
            </Column>
            <Column isSize='1/4'>
            <Title isSize={4}>Nathaniel Duanshi</Title>
            <Subtitle isSize={5}>(917)-599-7250</Subtitle>
            <Subtitle isSize={5}> duanshi_nath@bentley.edu</Subtitle>
            <figure className="image">
              <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
            </figure>
            </Column>
            <Column isSize='1/4'>
            <Title isSize={4}>Nathaniel Duanshi</Title>
            <Subtitle isSize={5}>(917)-599-7250</Subtitle>
            <Subtitle isSize={5}> duanshi_nath@bentley.edu</Subtitle>
            <figure className="image">
              <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
            </figure>
            </Column>
          </Columns>
        </Box>
      </Section>
    )
  }
}