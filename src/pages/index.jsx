import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import About from "../components/About/About";
import Front from "../components/Front/Front";
import Menu from "../components/Menu/Menu";
import Contact from "../components/Contact/Contact";
//import BubbleBackground from "../components/BubbleBackground/BubbleBackground";
//import PostListing from "../components/PostListing/PostListing";

export default class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout location={this.props.location}>
        <Helmet title={config.siteTitle} />
        <SEO />
        <Front/>
        <About/>
        <Menu/>
        <Contact/>
      </Layout>
    );
  }
};

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
