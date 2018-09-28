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

          <HeroBody style={{"background-image": "url(/logos/bubbletea.png)", "background-position": "center center", "background-repeat":"no-repeat"}}>
              <Container hasTextAlign='centered'>
                  <Title>Bentley Bubble Tea</Title>
                  <br/>
                  <Button isSize="large">Order from 1-5PM Thu-Sun!</Button>
              </Container>
          </HeroBody>

          <HeroFooter>
              <Tabs isBoxed isFullWidth>
                  <Container>
                      <TabList>
                          <Tab isActive><TabLink>Order</TabLink></Tab>
                          <Tab><TabLink>Menu</TabLink></Tab>
                          <Tab><TabLink>Updates</TabLink></Tab>
                          <Tab><TabLink>Contact us</TabLink></Tab>
                      </TabList>
                  </Container>
              </Tabs>
          </HeroFooter>
        </Hero>
        <Section isMarginless>
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
                   A warm and pleasent mix of milk tea, and with chewy tapioca pearls steeped in sweet syrup.
                </CardContent>
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
                  Crisply chilled milk tea with chewy tapioca pearls steeped in sweet syrup.
                </CardContent>
              </Card>
            </Column>
          </Columns>
        </Section>
        <Section isMarginless>
          <Box>
            <Title>Recent News!</Title>
            <PostListing postEdges={postEdges} />
          </Box>
        </Section>
        <Section>
          <Box>
            <Subtitle isSize={3}>Contact us anytime!</Subtitle>
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
