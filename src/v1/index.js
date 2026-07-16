import "core-js/es/array/includes";
import "core-js/es/object/assign";
import "core-js/es/string/includes";
import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { browserHistory, createMemoryHistory, Router } from "react-router";

import { version } from "../../package.json";

import tokens from "./@monospaced/modern/tokens";
import "./assets/android-chrome-192x192.png";
import "./assets/android-chrome-512x512.png";
import "./assets/apple-touch-icon.png";
import "./assets/browserconfig.xml";
import "./assets/favicon.ico";
import "./assets/favicon-16x16.png";
import "./assets/favicon-32x32.png";
import "./assets/manifest.webmanifest";
import "./assets/mstile-150x150.png";
import "./assets/safari-pinned-tab.svg";
import routes from "./routes";
import { archiveAssetPath } from "./sitePaths";

const Document = ({ meta, router, title }) => {
  const themeColor = tokens["color-brand-primary"];

  return (
    <html lang="en-gb">
      <head>
        <meta charSet="utf-8" />
        {title.toComponent()}
        {meta && meta.toComponent()}
        <meta content="noindex, nofollow" name="robots" />
        <meta content={themeColor} name="msapplication-TileColor" />
        <meta content={themeColor} name="theme-color" />
        <meta content="width=device-width" name="viewport" />
        <link
          href={archiveAssetPath("/apple-touch-icon.png")}
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href={archiveAssetPath("/favicon-32x32.png")}
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href={archiveAssetPath("/favicon-16x16.png")}
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href={archiveAssetPath("/manifest.webmanifest")} rel="manifest" />
        <link
          color={themeColor}
          href={archiveAssetPath("/safari-pinned-tab.svg")}
          rel="mask-icon"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href={archiveAssetPath("/assets/37BCE3_2_0.woff2")}
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href={archiveAssetPath("/assets/37BCE3_3_0.woff2")}
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href={archiveAssetPath("/assets/37BCE3_5_0.woff2")}
          rel="preload"
          type="font/woff2"
        />
        <link
          href={`${archiveAssetPath("/styles.css")}?v=${version}`}
          rel="stylesheet"
        />
      </head>
      <body className="no-js" style={{ margin: "0" }}>
        <script
          dangerouslySetInnerHTML={{ __html: `document.body.className = ""` }}
        />
        <div dangerouslySetInnerHTML={router} id="router" />
        <script src={`${archiveAssetPath("/bundle.js")}?v=${version}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `var c = document.createElement("link");c.rel = "stylesheet";c.href = "//hello.myfonts.net/count/37bce3";var h = document.head;n = h.childNodes;h.insertBefore(c, n[n.length - 1 ].nextSibling);`,
          }}
        />
      </body>
    </html>
  );
};

Document.propTypes = {
  meta: PropTypes.object,
  router: PropTypes.array.isRequired,
  title: PropTypes.object.isRequired,
};

if (typeof document !== "undefined") {
  const router = document.getElementById("router");

  ReactDOM.hydrate(
    <HelmetProvider>
      <Router
        history={browserHistory}
        onUpdate={() => {
          window.scrollTo(0, 0);
        }}
        routes={routes}
      />
    </HelmetProvider>,
    router,
  );
}

export default ({ path }, callback) => {
  const helmetContext = {};
  const history = createMemoryHistory(path);
  const router = {
    __html: ReactDOMServer.renderToString(
      <HelmetProvider context={helmetContext}>
        <Router history={history} routes={routes} />
      </HelmetProvider>,
    ),
  };
  const {
    helmet: { meta, title },
  } = helmetContext;
  const html = ReactDOMServer.renderToStaticMarkup(
    <Document meta={meta} router={router} title={title} />,
  );

  callback(null, `<!DOCTYPE html>${html}`);
};
