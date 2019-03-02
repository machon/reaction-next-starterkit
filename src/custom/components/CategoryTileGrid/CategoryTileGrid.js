// Created by Andre Machon 28/02/2019
import React, {Component} from "react";
import PropTypes from "prop-types";
import {inject} from "mobx-react"
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import { withComponents } from "@reactioncommerce/components-context";


const styles = (theme) => ({
  grid: {
    flexGrow: 1,
  },

  paper: {
    // padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // paddingBottom: 40,
    // paddingTop: 40
  },

  heroImg: {
    width: "100%",
    height: "auto",
    transition: "all,.6s",
    // "will-change": "transform",
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
      ProgressiveImage: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
      Link: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    }).isRequired
  };

  static defaultProps = {
    classes: {},
    navItems: []
  };

  linkPath = (providedNavItem) => {
    const { routingStore } = this.props;

    const currentNavItem = providedNavItem.node;

    return routingStore.queryString !== ""
      ? `/tag/${currentNavItem.slug}?${routingStore.queryString}`
      : `/tag/${currentNavItem.slug}`;
  }

  // renderCategoryTile = (navItem, index) => {
  //
  // }
  render() {
    const {classes, components: { ProgressiveImage, Link }, navItems} = this.props;

    return (
      <Grid container spacing={24} className={classes.grid}>
        {navItems.map((navItem, index) => (
            <Grid item xs={12} md={6} lg={6} key={index}>
              {/*<div style={{width: "90%", height: "auto"}}>*/}
              {/*<Paper className={classes.paper}>*/}
                {/*<img src={navItem.node.heroMediaUrl}/>*/}
                <Link route={`${this.linkPath(navItem)}`}>
                  {/*<ProgressiveImage src={navItem.node.heroMediaUrl} fit="contain" className={classes.heroImg}/>*/}
                  <img src={navItem.node.heroMediaUrl} className={classes.heroImg}/>
                </Link>
                {/*<label>{navItem.node.slug}</label>*/}
              {/*</Paper>*/}
              {/*</div>*/}
            </Grid>
          ))}
      </Grid>
    );
  }
}
