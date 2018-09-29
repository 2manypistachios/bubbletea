import React from "react";
import {Hero, HeroHeader, HeroBody, HeroFooter, Nav, NavCenter, NavRight, NavLeft, NavItem, Container, Title, Tabs, Tab, TabList, TabLink, Icon, Button} from "bloomer";
import BubbleBackground from "../BubbleBackground/BubbleBackground";

export default class Front extends React.Component {
  render() {
    return (
      <Hero isColor='info' isSize='medium' isBold>
        <HeroHeader>
          <Nav>
            <NavLeft>
              <NavItem isBrand>Bentley BubbleTea</NavItem>
            </NavLeft>
            <NavCenter>
              <NavItem>
                <Icon className="fa-github" />
              </NavItem>
              <NavItem>
                <Icon className="fa-twitter" />
              </NavItem>
            </NavCenter>
          </Nav>
        </HeroHeader>

        <HeroBody id="order">
          <BubbleBackground/>
          <Container hasTextAlign='centered'>
            <Title>Bentley Bubble Tea</Title>
            <br/>
            <Button isSize="large" isColor="white" isOutlined>Order from 1-5 PM Thu-Sun!</Button>
          </Container>
        </HeroBody>

        <HeroFooter>
          <Tabs isBoxed isFullWidth>
            <Container>
              <TabList>
                <Tab isActive><TabLink href="#order">Order</TabLink></Tab>
                <Tab><TabLink href="#menu">Menu</TabLink></Tab>
                <Tab><TabLink href="#updates">Updates</TabLink></Tab>
                <Tab><TabLink href="#contact">Contact us</TabLink></Tab>
              </TabList>
            </Container>
          </Tabs>
        </HeroFooter>
      </Hero>
    );
  }
};
