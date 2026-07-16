import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet-async";

import {
  Grid,
  Heading,
  Logotype,
  Masthead,
  Rule,
  Space,
  Toc,
} from "../../../@monospaced/modern";

const Blog = ({
  content: {
    blog: { heading, posts },
    masthead: { links },
    meta: { description, title },
  },
}) => {
  return (
    <>
      <Helmet>
        <title>{`${title} Blog`}</title>
        <meta content={description} name="description" />
      </Helmet>
      <Masthead
        activePath="/blog/"
        links={links}
        logo={<Logotype height="1.5em" />}
      />
      <Space size="l" />
      <Grid>
        <Grid.Item colSpan="8" colStart="3">
          <Heading level="1" size="xxxl">
            {heading}
          </Heading>
          <Space size="s" />
          <Rule />
          <Space size="s" />
          <Toc>
            {posts.map(({ meta: { date, slug, title: postTitle } }) => {
              return (
                <Toc.Item
                  date={date}
                  key={slug}
                  slug={slug}
                  title={postTitle}
                />
              );
            })}
          </Toc>
        </Grid.Item>
      </Grid>
      <Space size="xl" />
    </>
  );
};

Blog.propTypes = { content: PropTypes.object };

export default Blog;
