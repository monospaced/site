import { MDXProvider } from "@mdx-js/react";
import PropTypes from "prop-types";
import React from "react";
import { IndexRoute, Route } from "react-router";

import Modern, { Footer, mdxComponents } from "../@monospaced/modern";

import Blog, { Post } from "./components/Blog";
import Home from "./components/Home";
import Legal from "./components/Legal";
import NotFound from "./components/NotFound";
import content from "./content";
import { ARCHIVE_BASE_PATH } from "../sitePaths";

const App = ({
  children,
  route: {
    content: {
      footer: { links },
      meta: { title },
    },
  },
  routes,
}) => {
  return (
    <MDXProvider components={mdxComponents}>
      <Modern>
        {React.cloneElement(children, { content }, routes)}
        <Footer copyright={title} links={links} routes={routes} />
      </Modern>
    </MDXProvider>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
  route: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
};

const forceTrailingSlash = (nextState, replace) => {
  const path = nextState.location.pathname;
  if (path.slice(-1) !== "/") {
    replace({ ...nextState.location, pathname: `${path}/` });
  }
};

const forceTrailingSlashOnChange = (prevState, nextState, replace) => {
  forceTrailingSlash(nextState, replace);
};

const Routes = (
  <Route onChange={forceTrailingSlashOnChange} onEnter={forceTrailingSlash}>
    <Route component={App} content={content} path={ARCHIVE_BASE_PATH}>
      <IndexRoute component={Home} />
      {content.blog.posts.length && <Route component={Blog} path="blog" />}
      {content.blog.posts.map(({ meta: { slug } }) => (
        <Route component={Post} key={slug} path={slug} />
      ))}
      <Route component={Legal} path="legal" />
      <Route component={NotFound} path="404" />
      <Route component={NotFound} path="*" />
    </Route>
  </Route>
);

export { App };
export default Routes;
