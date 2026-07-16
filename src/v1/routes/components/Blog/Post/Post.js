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
} from "../../../../@monospaced/modern";

const Post = ({
  content: {
    blog: { posts },
    masthead: { links },
    meta: { description, title },
  },
  route: { path },
}) => {
  const {
    default: PostContent,
    meta: { date, title: postTitle },
  } = posts.find(post => post.meta.slug === path);

  return (
    <>
      <Helmet>
        <title>{`${postTitle} | ${title} Blog`}</title>
        <meta content={description} name="description" />
      </Helmet>
      <Masthead
        activePath="/blog/"
        links={links}
        logo={<Logotype height="1.5em" />}
      />
      <Space size="l" />
      <Grid>
        <Grid.Item align="center" colSpan="2">
          <Heading size="m">{date}</Heading>
        </Grid.Item>
        <Grid.Item colSpan="8">
          <Heading level="1" size="xxxl">
            {postTitle}
          </Heading>
        </Grid.Item>
      </Grid>
      <Space />
      <Grid>
        <Grid.Item colSpan="8" colStart="3">
          <Markdown>
            <PostContent />
          </Markdown>
        </Grid.Item>
      </Grid>
      <Space size="xl" />
    </>
  );
};

Post.propTypes = { content: PropTypes.object, route: PropTypes.object };

export default Post;
