/*
 *
 *  M D R N 𝗖 𝗢 𝗟 𝗢 𝗥
 *  v 0.0.0
 *
 *  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const mdrnColor = {
  /*  General
   *  ─────────────────────────────────── */
  "color-white": "#ffffff",
  "color-white-rgb": "255, 255, 255",
  "color-black": "#000000",
  "color-black-rgb": "0, 0, 0",

  /*  Grey
   *  ─────────────────────────────────── */
  "color-grey-1": "#f5f5f5",
  "color-grey-1-rgb": "245, 245, 245",
  "color-grey-2": "#e9e9e9",
  "color-grey-2-rgb": "233, 233, 233",
  "color-grey-3": "#cccccc" /* 0.22 */,
  "color-grey-3-rgb": "204, 204, 204",
  "color-grey-4": "#b3b3b3" /* 0.325 */,
  "color-grey-4-rgb": "179, 179, 179",
  "color-grey-5": "#818181" /* 0.54 */,
  "color-grey-5-rgb": "129, 129, 129",
  "color-grey-6": "#676767" /* 0.65 */,
  "color-grey-6-rgb": "103, 103, 103",
  "color-grey-7": "#474747" /* 0.79 */,
  "color-grey-7-rgb": "71, 71, 71",
  "color-grey-8": "#333333",
  "color-grey-8-rgb": "51, 51, 51",
  "color-grey-9": "#161616",
  "color-grey-9-rgb": "22, 22, 22",

  /*  Red
   *  ─────────────────────────────────── */
  "color-red-1": "#fff1e8",
  "color-red-1-rgb": "255, 241, 232",
  "color-red-2": "#ffdbca",
  "color-red-2-rgb": "255, 219, 202",
  "color-red-3": "#ffab90",
  "color-red-3-rgb": "255, 171, 144",
  "color-red-4": "#ff7458",
  "color-red-4-rgb": "255, 116, 88",
  "color-red-5": "#ed4635",
  "color-red-5-rgb": "237, 70, 53",
  "color-red-6": "#ce0000",
  "color-red-6-rgb": "206, 0, 0",
  "color-red-7": "#a10000",
  "color-red-7-rgb": "161, 0, 0",
  "color-red-8": "#830000",
  "color-red-8-rgb": "131, 0, 0",
  "color-red-9": "#5a0000",
  "color-red-9-rgb": "90, 0, 0",

  /*  Pink
   *  ─────────────────────────────────── */
  "color-pink-1": "#ffeeff",
  "color-pink-1-rgb": "255, 238, 255",
  "color-pink-2": "#ffd6ff",
  "color-pink-2-rgb": "255, 214, 255",
  "color-pink-3": "#ff9ff6",
  "color-pink-3-rgb": "255, 159, 246",
  "color-pink-4": "#fe64d7",
  "color-pink-4-rgb": "254, 100, 215",
  "color-pink-5": "#e638b6",
  "color-pink-5-rgb": "230, 56, 182",
  "color-pink-6": "#c8008c",
  "color-pink-6-rgb": "200, 0, 140",
  "color-pink-7": "#9d0068",
  "color-pink-7-rgb": "157, 0, 104",
  "color-pink-8": "#7f0050",
  "color-pink-8-rgb": "127, 0, 80",
  "color-pink-9": "#54002e",
  "color-pink-9-rgb": "84, 0, 46",

  /*  Blue
   *  ─────────────────────────────────── */
  "color-blue-1": "#dff8fe",
  "color-blue-1-rgb": "223, 248, 254",
  "color-blue-2": "#c2e9ff",
  "color-blue-2-rgb": "194, 233, 255",
  "color-blue-3": "#91c6ff",
  "color-blue-3-rgb": "145, 198, 255",
  "color-blue-4": "#64a4ff",
  "color-blue-4-rgb": "100, 164, 255",
  "color-blue-5": "#2a84fd",
  "color-blue-5-rgb": "42, 132, 253",
  "color-blue-6": "#0060d8",
  "color-blue-6-rgb": "0, 96, 216",
  "color-blue-7": "#0040b1",
  "color-blue-7-rgb": "0, 64, 177",
  "color-blue-8": "#002b95",
  "color-blue-8-rgb": "0, 43, 149",
  "color-blue-9": "#000a6e",
  "color-blue-9-rgb": "0, 10, 110",

  /*  Azure
   *  ─────────────────────────────────── */
  "color-azure-1": "#d7f8ff",
  "color-azure-1-rgb": "215, 248, 255",
  "color-azure-2": "#9defff",
  "color-azure-2-rgb": "157, 239, 255",
  "color-azure-3": "#47d0ff",
  "color-azure-3-rgb": "71, 208, 255",
  "color-azure-4": "#00aeef",
  "color-azure-4-rgb": "0, 174, 239",
  "color-azure-5": "#0090cf",
  "color-azure-5-rgb": "0, 144, 207",
  "color-azure-6": "#006ca8",
  "color-azure-6-rgb": "0, 108, 168",
  "color-azure-7": "#004b83",
  "color-azure-7-rgb": "0, 75, 131",
  "color-azure-8": "#00346a",
  "color-azure-8-rgb": "0, 52, 106",
  "color-azure-9": "#001745",
  "color-azure-9-rgb": "0, 23, 69",

  /*  Cyan
   *  ─────────────────────────────────── */
  "color-cyan-1": "#c3ffff",
  "color-cyan-1-rgb": "195, 255, 255",
  "color-cyan-2": "#8bf4f6",
  "color-cyan-2-rgb": "139, 244, 246",
  "color-cyan-3": "#00d8dc",
  "color-cyan-3-rgb": "0, 216, 220",
  "color-cyan-4": "#00b7bc",
  "color-cyan-4-rgb": "0, 183, 188",
  "color-cyan-5": "#00999f",
  "color-cyan-5-rgb": "0, 153, 159",
  "color-cyan-6": "#00737a",
  "color-cyan-6-rgb": "0, 115, 122",
  "color-cyan-7": "#005058",
  "color-cyan-7-rgb": "0, 80, 88",
  "color-cyan-8": "#003841",
  "color-cyan-8-rgb": "0, 56, 65",
  "color-cyan-9": "#001f20",
  "color-cyan-9-rgb": "0, 31, 32",

  /*  Green
   *  ─────────────────────────────────── */
  "color-green-1": "#e1ff96",
  "color-green-1-rgb": "255, 255, 150",
  "color-green-2": "#c2f255",
  "color-green-2-rgb": "194, 242, 85",
  "color-green-3": "#92d400",
  "color-green-3-rgb": "146, 212, 0",
  "color-green-4": "#70b200",
  "color-green-4-rgb": "112, 178, 0",
  "color-green-5": "#4f9400",
  "color-green-5-rgb": "79, 148, 0",
  "color-green-6": "#277000",
  "color-green-6-rgb": "39, 112, 0",
  "color-green-7": "#024d00",
  "color-green-7-rgb": "2, 77, 0",
  "color-green-8": "#073500",
  "color-green-8-rgb": "7, 53, 0",
  "color-green-9": "#001a00",
  "color-green-9-rgb": "0, 26, 0",

  /*  Yellow
   *  ─────────────────────────────────── */
  "color-yellow-1": "#fff5ab",
  "color-yellow-1-rgb": "255, 245, 171",
  "color-yellow-2": "#ffe05e",
  "color-yellow-2-rgb": "255, 224, 94",
  "color-yellow-3": "#eeb700",
  "color-yellow-3-rgb": "238, 183, 0",
  "color-yellow-4": "#ca9800",
  "color-yellow-4-rgb": "202, 152, 0",
  "color-yellow-5": "#a97b00",
  "color-yellow-5-rgb": "169, 123, 0",
  "color-yellow-6": "#815900",
  "color-yellow-6-rgb": "129, 89, 0",
  "color-yellow-7": "#5d3800",
  "color-yellow-7-rgb": "93, 56, 0",
  "color-yellow-8": "#472200",
  "color-yellow-8-rgb": "71, 34, 0",
  "color-yellow-9": "#320000",
  "color-yellow-9-rgb": "50, 0, 0",

  /*  Orange
   *  ─────────────────────────────────── */
  "color-orange-1": "#fff2ce",
  "color-orange-1-rgb": "255, 242, 206",
  "color-orange-2": "#ffdda4",
  "color-orange-2-rgb": "255, 221, 164",
  "color-orange-3": "#ffad51",
  "color-orange-3-rgb": "255, 173, 81",
  "color-orange-4": "#f2810b",
  "color-orange-4-rgb": "242, 129, 11",
  "color-orange-5": "#d16300",
  "color-orange-5-rgb": "209, 99, 0",
  "color-orange-6": "#a63f00",
  "color-orange-6-rgb": "166, 63, 0",
  "color-orange-7": "#7d1800",
  "color-orange-7-rgb": "125, 24, 0",
  "color-orange-8": "#620000",
  "color-orange-8-rgb": "98, 0, 0",
  "color-orange-9": "#420000",
  "color-orange-9-rgb": "66, 0, 0",
};

const colorTokens = {
  "color-brand-primary-dark": mdrnColor["color-blue-9"],
  "color-brand-primary": mdrnColor["color-blue-6"],
  "color-brand-primary-light": mdrnColor["color-blue-1"],
  "color-error": mdrnColor["color-red-5"],
  "color-success": mdrnColor["color-green-3"],
  "color-warning": mdrnColor["color-yellow-3"],
  "color-info": mdrnColor["color-azure-4"],
};

const color = Object.assign({}, mdrnColor, colorTokens);

export default color;
export { colorTokens, mdrnColor };
