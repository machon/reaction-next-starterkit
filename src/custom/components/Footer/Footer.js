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
    flex: 1
  },
  title: {
    color: theme.palette.reaction.reactionBlue,
    marginRight: theme.spacing.unit,
    borderBottom: `solid 5px ${theme.palette.reaction.reactionBlue200}`
  },
});


const Footer = ({ ...props }) => (
  <footer className={props.classes.footer}>
    <Typography variant="caption">
      &copy; {date.getFullYear()} Reaction Commerce

      <div className={props.classes.controls}>
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
