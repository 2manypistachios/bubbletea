import React from "react";
import PostListing from "../components/PostListing/PostListing";
import {Section, Title, Box} from "bloomer";

export default class Index extends React.Component {
    render() {
      const postEdges = this.props.data.allMarkdownRemark.edges;
      return (
        <Section isMarginless id="updates">
            <Box>
            <Title>Updates!</Title>
            <PostListing postEdges={postEdges} />
            </Box>
        </Section>
      )
    }
}