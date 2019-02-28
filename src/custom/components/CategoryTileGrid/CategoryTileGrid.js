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
    paddingBottom: 40,
    paddingTop: 40
  }
});

@inject("navItems")
@withStyles(styles, {name: "SkCategoryTileGrid"})
export default class CategoryTileGrid extends Component {
  static propTypes = {
    classes: PropTypes.object,
    navItems: PropTypes.array
  };0

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
            <Grid item xs={12} md={6} lg={6} key={index}>
              <Paper className={classes.paper}>
                <img src={navItem.node.heroMediaUrl}/>
                <label>{navItem.node.name}</label>
              </Paper>
            </Grid>
          ))}
      </Grid>
    );
  }
}
