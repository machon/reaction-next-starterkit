// Created by Andre Machon 01/04/2019
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  img: {
    // height: 355,
    display: 'inline-block',
    maxWidth: "33.333%",
    overflow: 'hidden',
    // width: '100%',
  },

  catCaption: {
    fontWeight: "bold",
    fontSize: "25px"
  }
});


@withStyles(styles, { name: 'SkStepperCategoryTile' })
class StepperCategoryTile extends Component {
  static propTypes = {
    classes: PropTypes.object,
  };


  render() {
    return (
      <div style={{ display: "inline", position: "relative" }}>
        <img className={classes.img} src={tag.heroMediaUrl} alt={tag.name}/>
        <a style={{ position: "absolute", bottom: "5px", left: "30%" }} href={`/tag/${tag.slug}`}>
          <span className={classes.catCaption}>{tag.name}</span></a>
      </div>
    );
  }
}

StepperCategoryTile.propTypes = {};

export default StepperCategoryTile;
