/**
 * There are two theme files. This is the theme file used by the Reaction Design System components.
 * The other theme file is `reactionTheme.js`
 *
 * Any variables you define here will override the default value for that
 * variable, but will not impact any other default variables (i.e., you are
 * extending the default theme object, and not overwriting it).
 * https://designsystem.reactioncommerce.com/#!/Theming%20Components
 */

export default {
  rui_typography: {
    // bodyText: {
    //   color: "#5acc25"
    // },
    labelText: {
      color: "#8c8c8c"
    },
    labelTextBold: {
      color: "#8c8c8c"
    },
    headingTextBold: {
      color: "#8c8c8c"
    },
    // caption: {
    //   color: "#8c8c8c"
    // }
  },

  rui_components: {
    CatalogGridItemProductTitle: {
      color: "red",
    },
    Button: {
      backgroundColor_default: "#5acc25",
      backgroundColor_default_active: "#129a00",
      backgroundColor_default_hover: "#91ff5c",
      borderColor_default: "#5acc25",
      borderColor_default_active: "#129a00",
      borderColor_default_hover: "#91ff5c",
      foregroundColor_default_hover : "#3c3c3c",
      
      backgroundColor_secondary: "#ff67a9",
      backgroundColor_secondary_active: "#c8317a",
      backgroundColor_secondary_hover: "#ff9adb",
      borderColor_secondary: "#ff67a9",
      borderColor_secondary_active: "#c8317a",
      borderColor_secondary_hover: "#ff9adb",
      foregroundColor_secondary: "#fff"
    },
    CatalogGridItem: {
      // verticalSpacingBetweenImageAndInfo: "100px"
    }
  }
};
