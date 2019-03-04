// Created by Andre Machon 28/02/2019
import React, {Component} from "react";
import PropTypes from "prop-types";
import {inject} from "mobx-react"
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";
import {withComponents} from "@reactioncommerce/components-context";
import Typography from "@material-ui/core/Typography";


const styles = (theme) => ({
  grid: {
    flexGrow: 1,
  },

  overflowDiv: {
    overflow: "hidden",
  },

  heroImg: {
    width: "100%",
    height: "auto",
    transition: "all,.6s",
    "will-change": "transform",
    '&:hover': {
      transform: "scale(1.05)"
    }
  }

});

@inject("navItems", "routingStore")
@withStyles(styles, {name: "SkCategoryTileGrid"})
@withComponents
export default class CategoryTileGrid extends Component {
  static propTypes = {
    classes: PropTypes.object,
    navItems: PropTypes.array,
    components: PropTypes.shape({
      // ProgressiveImage: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
      Link: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    })
  };

  static defaultProps = {
    classes: {},
    navItems: []
  };

  linkPath = (providedNavItem) => {
    const {routingStore} = this.props;

    const currentNavItem = providedNavItem.node;

    return routingStore.queryString !== ""
      ? `/tag/${currentNavItem.slug}?${routingStore.queryString}`
      : `/tag/${currentNavItem.slug}`;
  }

  // renderCategoryTile = (navItem, index) => {
  //
  // }
  render() {
    const {classes, components: {Link}, navItems} = this.props;

    return (
      <React.Fragment>
        <Grid container spacing={24} className={classes.grid}>
          {navItems.map((navItem, index) => (
            <Grid item xs={12} md={6} lg={4} key={index} style={{"margin-bottom": "10px"}}>

              <Link route={`${this.linkPath(navItem)}`}>
                <div className={classes.overflowDiv}>
                  <img src={navItem.node.heroMediaUrl} className={classes.heroImg}/>
                </div>
                <Typography inline={true} align="center" variant='title'>
                  <label style={{"text-decoration": "underline"}}>{navItem.node.slug}</label>
                </Typography>
              </Link>


            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}
