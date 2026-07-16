import color from "./color";
import media from "./media";
import opacity from "./opacity";
import typography from "./typography";

const tokens = Object.assign({}, color, media, opacity, typography);

export default tokens;
export { color, media, opacity, typography };
