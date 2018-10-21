import React from "react";
import {Hero, HeroHeader, HeroBody, HeroFooter, Nav, NavCenter, NavRight, NavLeft, NavItem, Container, Title, Tabs, Tab, TabList, TabLink, Icon, Button, Image, Form, Input} from "bloomer";
import BubbleBackground from "../BubbleBackground/BubbleBackground.jsx";
import "./Front.css";

export default class Front extends React.Component {
  render() {
    return (
      <Hero isColor='info' isSize='medium' id='front' class="bubbleparent">
        <BubbleBackground/>
        <HeroBody id="order">
          <Container hasTextAlign='centered'>
            <Image src={"/logos/logo2.png"}/>
            <br/>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScPl4GvswUnGlJpHH_xZfDAXnjC6lX6r397GGGmMGmVpC4LYw/viewform"><Button isSize="large" isColor="white" isOutlined>Order from 1-5 PM Thu-Sun!</Button></a>
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
