import React from "react";
import {Section, Title, Subtitle, Card, CardImage, CardContent, Columns, Column} from "bloomer";

export default class Contact extends React.Component {
  render() {
    return (
      <Section id="contact">
          <Columns hasTextAlign="centered" isMultiline isCentered>
            <Column isSize='1/3' isDisplay="flex">
              <Card>
                <CardImage>
                  <img className="is-rounded" src="/logos/nathaniel.png"/>
                </CardImage>
                <CardContent>
                  <Title isSize={4}>Nathaniel Duanshi</Title>
                  <Subtitle isSize={5}>(917)-599-7250</Subtitle>
                  <Subtitle isSize={5}> duanshi_nath@bentley.edu</Subtitle>
                </CardContent>
              </Card>
            </Column>

            <Column isSize='1/3' isDisplay="flex">
              <Card>
                <CardImage>
                  <img className="is-rounded" src="/logos/kai.png"/>
                </CardImage>
                <CardContent>
                  <Title isSize={4}>Kai Peng</Title>
                  <Subtitle isSize={5}>(781)-918-3924</Subtitle>
                  <Subtitle isSize={5}>peng_kai@bentley.edu</Subtitle>
                </CardContent>
              </Card>
            </Column>

            <Column isSize='1/3' isDisplay="flex">
              <Card>
                <CardImage>
                  <img className="is-rounded" src="/logos/tiger.jpg"/>
                </CardImage>
                <CardContent>
                  <Title isSize={4}>Tiger Shen</Title>
                  <Subtitle isSize={5}>(781)-975-3687</Subtitle>
                  <Subtitle isSize={5}>shen_wang@bentley.edu</Subtitle>
                </CardContent>
              </Card>
            </Column>

            <Column isSize='1/3' isDisplay="flex">
              <Card>
                <CardImage>
                  <img className="is-rounded" src="/logos/john.png"/>
                </CardImage>
                <CardContent>
                  <Title isSize={4}>Lynthpher Jiang</Title>
                  <Subtitle isSize={5}>(917)-617-6978</Subtitle>
                  <Subtitle isSize={5}>jiang_lynt@bentley.edu</Subtitle>
                </CardContent>
              </Card>
            </Column>
            
            <Column isSize='1/3' isDisplay="flex">
              <Card>
                <CardImage>
                  <img className="is-rounded" src="/logos/Max.png"/>
                </CardImage>
                <CardContent>
                  <Title isSize={4}>Maxim Podolski</Title>
                  <Subtitle isSize={5}>(224)-225-9629</Subtitle>
                  <Subtitle isSize={5}>podolsk_maxi@bentley.edu</Subtitle>
                </CardContent>
              </Card>
            </Column>
          </Columns>
      </Section>
    )
  }
}