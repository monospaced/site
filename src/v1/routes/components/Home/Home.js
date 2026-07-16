import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet-async";

import {
  Heading,
  Grid,
  Group,
  Logotype,
  Masthead,
  Poster,
  Space,
  Tile,
} from "../../../@monospaced/modern";

const Home = ({
  content: {
    clients: { heading: clientsHeading, list: clientsList },
    masthead: { links },
    meta: { description, title },
    services: { heading: servicesHeading, list: servicesList },
  },
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta content={description} name="description" />
      </Helmet>
      <Poster padding="0 0 4.5em">
        <Masthead
          headingLevel="1"
          links={links}
          logo={<Logotype height="1.5em" />}
        />
        <Space size="l" />
        <Grid>
          <Grid.Item colSpan="10">
            <Heading size="xxxl">{description}</Heading>
          </Grid.Item>
        </Grid>
      </Poster>
      <Space size="l" />
      <Grid>
        <Grid.Item colSpan="4">
          <Heading color="color-brand-primary-dark" level="2" size="xl">
            {servicesHeading}
          </Heading>
        </Grid.Item>
        <Grid.Item colSpan="8" colStart="5">
          {servicesList.map((service, index) => (
            <React.Fragment key={service}>
              <Heading level="3" size="xl">
                {service}
              </Heading>
              {servicesList[index + 1] && <Space size="l" />}
            </React.Fragment>
          ))}
        </Grid.Item>
      </Grid>
      <Space size="xl" />
      <Grid>
        <Grid.Item colSpan="4">
          <Heading color="color-brand-primary-dark" level="2" size="xl">
            {clientsHeading}
          </Heading>
        </Grid.Item>
        <Grid.Item colSpan="8" colStart="5">
          <Group tessellate>
            {clientsList.map(({ href, label, Logo }) => (
              <Group.Item key={label}>
                <Tile href={href} label={label}>
                  <Logo width="100%" />
                </Tile>
              </Group.Item>
            ))}
          </Group>
        </Grid.Item>
      </Grid>
      <Space size="xl" />
    </>
  );
};

Home.propTypes = { content: PropTypes.object };

export default Home;
