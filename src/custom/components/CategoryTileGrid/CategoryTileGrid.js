// Created by Andre Machon 28/02/2019
import React, {Component} from "react";
import PropTypes from "prop-types";
import {inject} from "mobx-react"
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  grid: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

@inject("navItems")
@withStyles(styles, {name: "SkCategoryTileGrid"})
class CategoryTileGrid extends Component {
  static propTypes = {
    classes: PropTypes.object,
    navItems: PropTypes.array
  };

  static defaultProps = {
    classes: {},
    navItems: []
  };

  // renderCategoryTile = (navItem, index) => {
  //
  // }
  render() {
    const {classes, navItems} = this.props;

    return (
      <Grid container spacing={16} className={classes.grid}>
        {navItems.map((navItem, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Paper className={classes.paper}>navItem.node.name</Paper>
            </Grid>
          ))}
      </Grid>
    );
  }
}

export default CategoryTileGrid;
