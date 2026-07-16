const fontStackEmoji = `
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol"
`;
const fontStackBodyText = `
  DollyPro,
  Charter,
  "Bitstream Charter",
  Georgia,
  serif,
  ${fontStackEmoji}
`;
const fontStackMonospaced = `
  FFLetterGothicMono,
  SFMono-Light,
  SFMono-Standard,
  Consolas,
  "Liberation Mono",
  "Courier New",
  monospace,
  ${fontStackEmoji}
`;
const leading = 1.5;

const typography = {
  "font-body-text": fontStackBodyText,
  "font-display": `FFLetterGothicText, ${fontStackMonospaced}`,
  "font-functional": `
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    "Helvetica Neue",
    sans-serif,
    ${fontStackEmoji}
  `,
  "font-monospaced": fontStackMonospaced,
  "font-small-caps": `DollyPro-SmallCaps, ${fontStackBodyText}`,
  leading: `${leading}`,
  "leading-scale-m": `${leading}`,
  "leading-scale-l": `${leading * 1.25}`,
  "leading-scale-xl": `${leading * 1.5}`,
  "leading-scale-xxl": `${leading * 2}`,
  "leading-scale-xxxl": `${leading * 3}`,
  measure: "27.75em",
  "type-scale-s": "0.871",
  "type-scale-m": "1",
  "type-scale-l": "1.149",
  "type-scale-xl": "1.741",
  "type-scale-xxl": "2.639",
  "type-scale-xxxl": "4",
};

export default typography;
