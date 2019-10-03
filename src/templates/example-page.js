import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/Layout";
import { HTMLContent } from '../components/Content'

export const ExamplePageTemplate = props => {
  const { title, heading, description } = props;
  return (
    <Layout>
      <h3>
        {title}
      </h3>
      <p>{heading}</p>
      <p>{description}</p>
    </Layout>
  );
};

export default function ExamplePage({ data }) {
  const { title, heading, description } = data.markdownRemark.frontmatter;
  return (
    <ExamplePageTemplate
      contentComponent={HTMLContent}
      title={title}
      heading={heading}
      description={description}
    />
  )
}

ExamplePage.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  contentComponent: PropTypes.func,
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const ExamplePageQuery = graphql`
  query ExamplePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        description
      }
    }
  }
`;
