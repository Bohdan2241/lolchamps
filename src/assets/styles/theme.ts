export const COLUMNS = 24;
export const BASE_WIDTH = 1440;
export const MAX_WIDTH = 1800;
export const COLUMN_WIDTH = BASE_WIDTH / COLUMNS;
export const MOBILE_MARGIN = 20;

const FONT_FAMILY_SPIEGEL = 'Spiegel';

const FONT_FAMILY_BEAUFORT = 'Beaufort for LOL';

export const FONT_FAMILY_SANS_SERIF = `'${FONT_FAMILY_SPIEGEL}', 'Arial Narrow', Arial, sans-serif`;
export const FONT_FAMILY_SERIF = `'${FONT_FAMILY_BEAUFORT}', serif`;

export const COLOR_PRIMARY_BLUE = '#0bc6e3';
export const COLOR_PRIMARY_BLUE_ACTIVE = '#13d8f6';
export const COLOR_PRIMARY_GOLD = '#d0a85c';
export const COLOR_PRIMARY_GOLD_ACTIVE = '#e0b667';
export const COLOR_PRIMARY_DARK_GOLD = '#c39031';
export const COLOR_PRIMARY_ORANGE = '#c2902d';
export const COLOR_PRIMARY_RED = '#bf302a';
export const COLOR_PRIMARY_GREEN = '#4ea64e';

export const COLOR_TEXT_WHITE = '#ffffff';
export const COLOR_TEXT_LIGHT_GREY = '#bac2cc';
export const COLOR_TEXT_MEDIUM_GREY = '#868686';
export const COLOR_TEXT_DARK_GREY = '#5d6166';
export const COLOR_TEXT_OFF_BLACK = '#1a1d21';
export const COLOR_TEXT_BLACK = '#010101';

export const COLOR_BACKGROUND_WHITE = '#ffffff';
export const COLOR_BACKGROUND_TRANSPARENT_WHITE = 'rgba(255, 255, 255, 0.5)';
export const COLOR_BACKGROUND_LIGHT_GREY = '#f7f7f7';
export const COLOR_BACKGROUND_DARK = '#07121a';
export const COLOR_BACKGROUND_BLACK = '#030608';
export const COLOR_BACKGROUND_DARK_LIGHT = '#000913';
export const COLOR_BACKGROUND_LIGHT_BLUE = '#32c8ff';
export const COLOR_BACKGROUND_DARK_BLUE = '#141e37';

export const COLOR_OUTLINE_DARKER = '#242C36';
export const COLOR_OUTLINE_DARK = '#394048'; // == COLOR_BACKGROUND_TRANSPARENT_WHITE
export const COLOR_OUTLINE_DARK_GREY = '#7e7e7e';
export const COLOR_OUTLINE_MEDIUM_GREY = '#ababab';
export const COLOR_OUTLINE_LIGHT_GREY = '#c1c1c1';
export const COLOR_OUTLINE_WHITE = '#ffffff';
export const COLOR_OUTLINE_TRANSPARENT_WHITE = 'rgba( 255, 255, 255, 0.6 )';
export const COLOR_OUTLINE_EXTRA_TRANSPARENT_WHITE =
  'rgba( 255, 255, 255, 0.2 )';

export const BREAKPOINT_MOBILE_ALL = 599;
export const BREAKPOINT_MOBILE_TINY = 320;
export const BREAKPOINT_MOBILE_SMALL = 360;
export const BREAKPOINT_MOBILE_MEDIUM = 400;
export const BREAKPOINT_MOBILE_LARGE = 599;
export const BREAKPOINT_TABLET_SMALL = 768;
export const BREAKPOINT_TABLET_ALL = 1023;
export const BREAKPOINT_DESKTOP_NARROW = 1200;
export const BREAKPOINT_DESKTOP_SMALL = 1360;

export const MEDIA_MOBILE_ALL = `(max-width: ${BREAKPOINT_MOBILE_ALL}px)`;
export const MEDIA_NOT_MOBILE = `(min-width: ${BREAKPOINT_MOBILE_ALL + 1}px)`;
export const MEDIA_MOBILE_TINY = `(max-width: ${BREAKPOINT_MOBILE_TINY}px)`;
export const MEDIA_MOBILE_SMALL = `(min-width: ${
  BREAKPOINT_MOBILE_TINY + 1
}px) and (max-width: ${BREAKPOINT_MOBILE_SMALL}px)`;
export const MEDIA_MOBILE_MEDIUM = `(min-width: ${
  BREAKPOINT_MOBILE_SMALL + 1
}px) and (max-width: ${BREAKPOINT_MOBILE_MEDIUM}px)`;
export const MEDIA_MOBILE_LARGE = `(min-width: ${
  BREAKPOINT_MOBILE_MEDIUM + 1
}px) and (max-width: ${BREAKPOINT_MOBILE_LARGE}px)`;
export const MEDIA_MOBILE_LANDSCAPE = `(max-width: ${BREAKPOINT_TABLET_ALL}px) and (max-height: 450px)`;
export const MEDIA_TABLET_SMALL = `(max-width: ${BREAKPOINT_TABLET_SMALL}px)`;
export const MEDIA_TABLET_AND_SMALLER = `(max-width: ${BREAKPOINT_TABLET_ALL}px)`;
export const MEDIA_TABLET_ALL = `(min-width: ${
  BREAKPOINT_MOBILE_LARGE + 1
}px) and (max-width: ${BREAKPOINT_TABLET_ALL}px)`;
export const MEDIA_DESKTOP_NARROW = `(min-width: ${BREAKPOINT_MOBILE_ALL}px) and (max-width: ${BREAKPOINT_DESKTOP_NARROW}px)`;
export const MEDIA_DESKTOP_AND_SMALLER = `(max-width: ${BREAKPOINT_DESKTOP_NARROW}px)`;
export const MEDIA_DESKTOP_AT_MAX_WIDTH = `(min-width: ${MAX_WIDTH}px)`;
export const MEDIA_DESKTOP_SMALL = `(min-width: ${
  BREAKPOINT_TABLET_ALL + 1
}px) and (max-width: ${BREAKPOINT_DESKTOP_SMALL}px)`;
