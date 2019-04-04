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

const styles = (theme) => ({
  appBar: {
    // backgroundColor: theme.palette.reaction.white,
    // borderBottom: `solid 1px ${theme.palette.reaction.black05}`,
    color: theme.palette.reaction.coolGrey500
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
  toolbar: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between"
  },
  logo: {
    // '&:hover img': {
    //   width: "150px"
    // }
    'img &': {
      width: "150px"
    }
  },
  myImg: {
    width: "150px"
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

  render() {
    const { classes: { appBar, controls, toolbar, title, logo, myImg }, shop } = this.props;

    return (
      <AppBar position="static" elevation={0} className={appBar}>
        <Toolbar className={toolbar}>
          <Hidden mdUp>
            <NavigationToggleMobile onClick={this.handleNavigationToggleClick}/>
          </Hidden>

          <div className={controls}>
            <Typography className={title} color="inherit" variant="h6">
              <Link route="/">
                {/*<ShopLogo shopName={shop.name}*/}
                          {/*// classes={{img: myImg}}*/}
                          {/*// shopLogoUrl="http://localhost:3000/assets/files/Media/ZBabytZwKrenABath/medium/Anton und Sophie color.png"*/}
                {/*/>*/}
                <img src="http://localhost:3000/assets/files/Media/ZBabytZwKrenABath/medium/Anton und Sophie color.png"
                     alt="Logo"
                     style={{maxWidth: "150px"}}
                />
              </Link>
            </Typography>

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
