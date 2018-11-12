import React from "react";
import {Section, Title , Columns, Column, Card, CardHeader, CardHeaderTitle, CardImage, Image, CardContent, CardFooter, Button } from "bloomer";
import Form from "../Form/Form";
export default class Menu extends React.Component {
  render() {
    return (
      <Section isMarginless id="menu">
          <Columns isCentered isVCentered isMobile>
            <Column isSize={{mobile: 6, desktop: 4, widescreen: 2}} isDisplay="flex-mobile">
              <Card>
                <CardHeader>
                  <CardHeaderTitle>
                    <Title isSize={4}>Original Bubble Tea</Title>
                  </CardHeaderTitle>
                </CardHeader>
                <CardImage>
                  <Image src='/logos/firstproduct.jpg' />
                </CardImage>
                <CardContent>
                   Warm cup milk tea with chewy tapioca pearls steeped in sweet syrup.
                </CardContent>
                <CardFooter>
                  <Button href="/order" isColor="info" isSize="medium" isFullWidth>Order Now!</Button>
                </CardFooter>
              </Card>
            </Column>
          <Column isSize={{mobile: 6, desktop: 4, widescreen: 2}} isDisplay="flex-mobile">
            <Card>
              <CardHeader>
                <CardHeaderTitle>
                  <Title isSize={4}>Taro Tea</Title>
                </CardHeaderTitle>
              </CardHeader>
              <CardImage>
                <Image src='/logos/firstproduct.jpg' />
              </CardImage>
              <CardContent>
                Nicely chilled milk tea with chewy tapioca pearls steeped in sweet syrup.
              </CardContent>
              <CardFooter>
                <Button href="/order" isColor="info" isSize="medium" isFullWidth>Order Now!</Button>
              </CardFooter>
            </Card>
          </Column>
        </Columns>
      </Section>
    );
  }
};
