import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { NavigationMobile, NavigationToggleMobile } from "components/NavigationMobile";
import { NavigationDesktop } from "components/NavigationDesktop";
import Hidden from "@material-ui/core/Hidden";
import NavigationRenderCustom from 'custom/components/custom-render-functions/NavigationRenderCustom';

const date = new Date();

const styles = (theme) => ({
  footer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing.unit * 2
  },
  controls: {
    alignItems: "inherit",
    display: "inherit",
    flex: 1,
    textAlign: "center"
  },
});


const Footer = ({ ...props }) => (
  <footer className={props.classes.footer}>
    <Typography variant="caption">
      <div className={props.classes.controls}>
        <span>&copy; {date.getFullYear()} Reaction Commerce</span>
        <NavigationDesktop
          render={NavigationRenderCustom.renderDesktopNav}
          filter={'footerItem'}
        />
      </div>
    </Typography>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles, { name: "SkFooter" })(Footer);
