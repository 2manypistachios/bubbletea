import React from "react";
import {Section, Title , Columns, Column, Card, CardHeader, CardHeaderTitle, CardImage, Image, CardContent, CardFooter, Button } from "bloomer";
//import Form from "../Form/Form";
import "./Menu.css";

export default class Menu extends React.Component {
  render() {
    return (
      <Section isMarginless id="menu">
          <Columns isCentered isMobile>
            <Column isSize={{mobile: 6, desktop: 4, widescreen: 2}} className="menu">
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
                  {/*<Button href="/order" isColor="info" isSize="medium" isFullWidth>Order Now!</Button>*/}
                </CardFooter>
              </Card>
            </Column>
          <Column isSize={{mobile: 6, desktop: 4, widescreen: 2}} className="menu">
            <Card>
              <CardHeader>
                <CardHeaderTitle>
                  <Title isSize={4}>Bubble Taro Tea</Title>
                </CardHeaderTitle>
              </CardHeader>
              <CardImage>
                <Image src='/logos/tarotea.jpg' />
              </CardImage>
              <CardContent>
              Rich taro flavoured milk tea with chewy tapioca pearls at the bottom, a classic Asian flavour.
              </CardContent>
              <CardFooter className="menubutton">
                {/*<Button href="/order" isColor="info" isSize="medium" isFullWidth className="menubutton">Order Now!</Button>*/}
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