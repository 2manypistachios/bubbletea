import React from "react";
import {Section, Title , Columns, Column, Card, CardHeader, CardHeaderTitle, CardImage, Image, CardContent, CardFooter, Button } from "bloomer";

export default class Menu extends React.Component {
  render() {
    return (
      <Section isMarginless id="menu">
          <Columns isCentered>
            <Column isSize='1/2'>
              <Card>
                <CardHeader>
                  <CardHeaderTitle>
                    <Title isSize={4}>Original Bubble Tea (M)</Title>
                  </CardHeaderTitle>
                </CardHeader>
                <CardImage>
                  <Image isRatio='4:3' src='https://via.placeholder.com/1280x960' />
                </CardImage>
                <CardContent>
                   Warm cup milk tea with chewy tapioca pearls steeped in sweet syrup.
                </CardContent>
                <CardFooter>
                  <Button isColor="info" isSize="medium" isFullWidth>Order Now!</Button>
                </CardFooter>
              </Card>
            </Column>
          <Column isSize='1/2'>
            <Card>
              <CardHeader>
                <CardHeaderTitle>
                  <Title isSize={4}>Original Bubble Tea (C)</Title>
                </CardHeaderTitle>
              </CardHeader>
              <CardImage>
                <Image isRatio='4:3' src='https://via.placeholder.com/1280x960' />
              </CardImage>
              <CardContent>
                Nicely chilled milk tea with chewy tapioca pearls steeped in sweet syrup.
              </CardContent>
              <CardFooter>
                <Button isColor="info" isSize="medium" isFullWidth>Order Now!</Button>
              </CardFooter>
            </Card>
          </Column>
        </Columns>
      </Section>
    );
  }
};