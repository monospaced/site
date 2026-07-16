import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet-async";

import {
  Grid,
  Heading,
  Logotype,
  Markdown,
  Masthead,
  Space,
} from "../../../@monospaced/modern";

const Legal = ({
  content: {
    legal: {
      company: { content: CompanyContent, heading: companyHeading },
      heading,
      privacy: { content: PrivacyContent, heading: privacyHeading },
    },
    masthead: { links },
    meta: { description, title },
  },
}) => {
  return (
    <>
      <Helmet>
        <title>{`Legal | ${title}`}</title>
        <meta content={description} name="description" />
      </Helmet>
      <Masthead links={links} logo={<Logotype height="1.5em" />} />
      <Space size="l" />
      <Grid>
        <Grid.Item colSpan="10">
          <Heading level="1" size="xxxl">
            {heading}
          </Heading>
        </Grid.Item>
      </Grid>
      <Space size="xl" />
      <Grid>
        <Grid.Item colSpan="4">
          <Heading color="color-brand-primary-dark" level="2" size="xl">
            {companyHeading}
          </Heading>
        </Grid.Item>
        <Grid.Item colSpan="8" colStart="5">
          <Markdown>
            <CompanyContent />
          </Markdown>
        </Grid.Item>
      </Grid>
      <Space size="l" />
      <Grid>
        <Grid.Item colSpan="4">
          <Heading color="color-brand-primary-dark" level="2" size="xl">
            {privacyHeading}
          </Heading>
        </Grid.Item>
        <Grid.Item colSpan="8" colStart="5">
          <Markdown>
            <PrivacyContent />
          </Markdown>
        </Grid.Item>
      </Grid>
      <Space size="xl" />
    </>
  );
};

Legal.propTypes = { content: PropTypes.object };

export default Legal;
