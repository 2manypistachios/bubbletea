import React from "react";
import {Hero, HeroHeader, HeroBody, HeroFooter, Nav, NavCenter, NavRight, NavLeft, NavItem, Container, Title, Tabs, Tab, TabList, TabLink, Icon, Button, Image, Form, Input} from "bloomer";
import BubbleBackground from "../BubbleBackground/BubbleBackground.jsx";
import "./Front.css";
import { Subtitle } from "bloomer";

export default class Front extends React.Component {
  render() {
    return (
      <Hero isColor='white' isSize='medium' id='front' className="bubbleparent">
        
        <HeroBody id="order">
          <Container hasTextAlign='centered'>
            <Image src={"/logos/logoandtext.png"}/>
            <br/><br/>
            <a href="/order"><Button isSize="large" isColor="black" isOutlined>Order Here!</Button></a>
            <br/>
            <Subtitle>WE ARE OPEN ON WEDNESDAYS 12-5!</Subtitle>
          </Container>
        </HeroBody>

        <HeroFooter>
          <Tabs isBoxed isFullWidth>
            <Container>
              <TabList>
                <Tab isActive><TabLink href="#order">Order</TabLink></Tab>
                <Tab><TabLink href="#menu">Menu</TabLink></Tab>
                <Tab><TabLink href="#about">About</TabLink></Tab>
                <Tab><TabLink href="#contact">Contact</TabLink></Tab>
              </TabList>
            </Container>
          </Tabs>
        </HeroFooter>
      </Hero>
    );
  }
};
