import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject } from "mobx-react";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { NavigationDesktop } from "components/NavigationDesktop";
import { NavigationMobile, NavigationToggleMobile } from "components/NavigationMobile";
import AccountDropdown from "components/AccountDropdown";
import ShopLogo from "@reactioncommerce/components/ShopLogo/v1";
import Link from "components/Link";
import MiniCart from "components/MiniCart";
import NavigationRenderCustom from 'custom/components/custom-render-functions/NavigationRenderCustom';
import ShopLogoWithData from 'custom/components/ShopLogoWithData'

const styles = (theme) => ({
  appBar: {
    // backgroundColor: theme.palette.reaction.white,
    // borderBottom: `solid 1px ${theme.palette.reaction.black05}`,
    color: theme.palette.reaction.coolGrey500,
    [theme.breakpoints.up('xl')]: {
      paddingLeft: theme.spacing.unit * 5,
      paddingRight: theme.spacing.unit * 5,
    },
  },
  controls: {
    alignItems: "inherit",
    display: "inherit",
    flex: 1
  },
  title: {
    // color: theme.palette.reaction.reactionBlue,
    // marginRight: theme.spacing.unit,
    // borderBottom: `solid 5px ${theme.palette.reaction.reactionBlue200}`
  },
  toolbar: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between"
  },
  logoLink: {
    width: "20vw",
    [theme.breakpoints.down('md')]: {
      width: "30vw",
      marginLeft: "4vw"
    }
  },
  myLogo: {
    width: "80%",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginBottom: "-4px",
  }
});

@withStyles(styles, { name: "SkHeader" })
@inject("uiStore")
class Header extends Component {
  static propTypes = {
    classes: PropTypes.object,
    shop: PropTypes.shape({
      name: PropTypes.string
    }).isRequired,
    uiStore: PropTypes.shape({
      toggleMenuDrawerOpen: PropTypes.func.isRequired
    }).isRequired,
    viewer: PropTypes.object
  };

  static defaultProps = {
    classes: {}
  };

  handleNavigationToggleClick = () => {
    this.props.uiStore.toggleMenuDrawerOpen();
  };
 // TODO get header image url dynamicaly via envoirmental variable!
  render() {
    const { classes: { appBar, controls, toolbar, title, logoLink, myLogo }, shop, logoUrl } = this.props;

    return (
      <AppBar position="static" elevation={0} className={appBar}>
        <Toolbar className={toolbar}>
          <Hidden mdUp>
            <NavigationToggleMobile onClick={this.handleNavigationToggleClick}/>
          </Hidden>

          <div className={controls}>
            <Link route="/"
                  classes={{
                    anchor: logoLink
                  }}
            >
                {/*<ShopLogo shopName={shop.name}*/}
                          {/*// classes={{img: myImg}}*/}
                          {/*// shopLogoUrl="http://localhost:3000/assets/files/Media/ZBabytZwKrenABath/medium/Anton und Sophie color.png"*/}
                {/*/>*/}
                <img
                  src="/static/images/AuS_Logo_ohne_Claim_200px_RGB.png"
                  alt="Logo"
                  className={myLogo}
                />
                {/*<ShopLogoWithData />*/}

              </Link>
            {/*<Typography className={title} color="inherit" variant="h6">*/}
              {/**/}
            {/*</Typography>*/}

            <Hidden smDown initialWidth={"md"}>
              <NavigationDesktop
                render={NavigationRenderCustom.renderDesktopNav}
                filter={'headerItem'}
              />
            </Hidden>
          </div>

          <AccountDropdown/>
          <MiniCart/>
        </Toolbar>
        <NavigationMobile filter={'headerItem'}/>
      </AppBar>
    );
  }
}

export default Header;
