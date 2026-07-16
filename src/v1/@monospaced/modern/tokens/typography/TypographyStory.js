import React from "react";

import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Space from "../../components/Space";

import typography from "./";

const TypographyStory = () => {
  /* const font = select(
    "font",
    Object.keys(typography)
      .filter(item => item.includes("font-"))
      .sort(),
    "font-body-text",
  );
  const getFontSize = scale => `${typography[`type-scale-${scale}`]}em`;
  const getLineHeight = scale =>
    typography[
      `leading-scale-${scale === "s" || scale === "l" ? "m" : scale}`
    ] / typography[`type-scale-${scale}`];
  const fontFamily = typography[font];
  const scale = select("scale", ["s", "m", "l", "xl", "xxl", "xxxl"], "xl");
  const fontSize = getFontSize(scale);
  const fontStyle = select("style", ["italic", "normal"], "normal");
  const fontWeight = select("weight", ["300", "400"], "400");
  const lineHeight = getLineHeight(scale);
  const maxWidth = boolean("measure", true) && typography.measure;
  const textTransform = font === "font-small-caps" && "lowercase";

  window.setTimeout(() => {
    document.getElementById("editable").focus();
    document.execCommand("selectAll", false, null);
    document.getSelection().collapseToEnd();
  }); */

  return (
    <>
      <Heading size="xxxl">Typography</Heading>
      <Space size="l" />
      {/* <div
            contentEditable
            id="editable"
            style={{
              outline: "none",
              fontFamily,
              fontSize,
              fontStyle,
              fontSynthesis: "none",
              fontVariant:
                (font === "font-display" && "diagonal-fractions lining-nums") ||
                (font === "font-monospaced" && "slashed-zero"),
              fontWeight,
              lineHeight,
              maxWidth,
              textTransform,
            }}
            suppressContentEditableWarning
          >
            Type here…
          </div>
          <Space size="xl" /> */}
      <Heading size="xxxl">Display</Heading>
      <Space />
      <Heading size="xxl">Heading</Heading>
      <Space />
      <Heading size="xl">Heading</Heading>
      <Space />
      <Heading size="l">Heading</Heading>
      <Space />
      <Heading size="m">Heading</Heading>
      <Space />
      <Heading size="s">Heading</Heading>
      <Space />
      <Paragraph>
        Body text, <i>italic</i>,{" "}
        <span className="u-smallCaps">small caps</span>
      </Paragraph>
      <Space />
      <div className="u-monospaced" style={{ fontWeight: "300" }}>
        Code <i>italic</i> <strong>emphasis</strong>
      </div>
      <Space />
      <div style={{ fontFamily: typography["font-functional"] }}>
        Functional
      </div>
    </>
  );
};

export default TypographyStory;
