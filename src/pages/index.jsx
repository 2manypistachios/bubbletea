import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import {Section, Hero, HeroHeader, HeroBody, HeroFooter, Nav, NavCenter, NavRight, NavLeft, NavItem, Container, Title, Subtitle, Tabs, Tab, TabList, TabLink, Icon, Box} from "bloomer";
import {Columns, Column, Notification, Card, CardHeader, CardHeaderTitle, CardImage, Image, CardContent, CardFooter, Button } from "bloomer";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout location={this.props.location}>
        <Helmet title={config.siteTitle} />
        <SEO />
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

          <HeroBody style={{"background-image": "url(/logos/bubbletea.png)", "background-position": "center center", "background-repeat":"no-repeat"}} id="order">
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
        <Section isMarginless id="updates">
          <Box>
            <Title>Updates!</Title>
            <PostListing postEdges={postEdges} />
          </Box>
        </Section>
        <Section isMarginless>
          <Box>
            <Title>About Us</Title>
            <p>Bubble tea is a dessert drink invented in Taiwan in the 1980s. It's simply a freshly brewed tea with milk and sugar, made both hot and cold.</p>
          </Box>
        </Section>
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
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
