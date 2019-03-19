import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { NavigationMobile, NavigationToggleMobile } from "components/NavigationMobile";
import { NavigationDesktop } from "components/NavigationDesktop";
import Hidden from "@material-ui/core/Hidden";
import NavigationDesktopCustom from 'custom/components/custom-render-functions/NavigationDesktopCustom';
import Link from "components/Link";
import ShopLogo from "@reactioncommerce/components/ShopLogo/v1";

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
        {/*<Typography className={props.classes.title} color="inherit" variant="h6">*/}
        {/*<Link route="/">*/}
        {/*<ShopLogo shopName={props.shop.name}/>*/}
        {/*</Link>*/}
        {/*</Typography>*/}

        <Hidden smDown initialWidth={"md"}>
          <NavigationDesktop
            render={NavigationDesktopCustom.render}
            filter={'footerItem'}
          />
        </Hidden>
      </div>

      <NavigationMobile/>
    </Typography>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles, { name: "SkFooter" })(Footer);
