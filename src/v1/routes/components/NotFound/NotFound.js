import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet-async";

import {
  Grid,
  Heading,
  Logotype,
  Masthead,
  Paragraph,
  Space,
} from "../../../@monospaced/modern";

const NotFound = ({
  content: {
    masthead: { links },
    meta: { description, title },
  },
}) => {
  return (
    <>
      <Helmet>
        <title>{`Page not found | ${title}`}</title>
        <meta content={description} name="description" />
      </Helmet>
      <Masthead links={links} logo={<Logotype height="1.5em" />} />
      <Space size="l" />
      <Grid>
        <Grid.Item colSpan="8" colStart="3">
          <Heading size="xxxl">
            <span className="u-monospaced">404</span>
          </Heading>
          <Heading level="1" size="xl">
            Page not found
          </Heading>
          <Space size="s" />
          <Paragraph>
            <small>The requested URL was not found on this server.</small>
          </Paragraph>
        </Grid.Item>
      </Grid>
      <Space size="xl" />
    </>
  );
};

NotFound.propTypes = { content: PropTypes.object };

export default NotFound;
