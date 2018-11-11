import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import Form from "../components/Form/Form";
import config from "../../data/SiteConfig";

import { Hero, HeroBody} from "bloomer";

export default class Index extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet title="Order Form" />
        <SEO />
        <Hero isColor="light" isFullHeight>
          <HeroBody>
            <Form/>
          </HeroBody>
        </Hero>
      </Layout>
    );
  }
};
