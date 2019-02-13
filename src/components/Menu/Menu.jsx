import React from "react";
import {Section, Title , Columns, Column, Card, CardHeader, CardHeaderTitle, CardImage, Image, CardContent, CardFooter, Button } from "bloomer";
//import Form from "../Form/Form";
import "./Menu.css";

export default class Menu extends React.Component {
  render() {
    return (
      <Section isMarginless id="menu">
          <Columns isCentered isMobile>
            <Column isSize={{mobile: 8, desktop: 5, widescreen: 5}} className="menu">
              <Card>
                <CardHeader>
                  <CardHeaderTitle>
                    <Title isSize={4}>Bubble Milk Tea</Title>
                  </CardHeaderTitle>
                </CardHeader>
                <CardImage>
                  <img src='/logos/originaltea.jpg'/>
                </CardImage>
                <CardContent>
                Authentic freshly made milk tea with chewy tapioca pearls at the bottom, perfect substitute for coffee!
                </CardContent>
                <CardFooter className="menubutton">
                  <Button href="/order" isColor="info" isSize="medium" isFullWidth>Order Now!</Button>
                </CardFooter>
              </Card>
            </Column>
        </Columns>
      </Section>
    );
  }
};

/*
              

              
*/