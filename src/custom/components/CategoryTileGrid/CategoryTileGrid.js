// Created by Andre Machon 28/02/2019
import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject } from "mobx-react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { withComponents } from "@reactioncommerce/components-context";
import SharedPropTypes from "lib/utils/SharedPropTypes";
import Typography from "@material-ui/core/Typography";
import logger from 'lib/logger';

const styles = (theme) => ({
  grid: {
    flexGrow: 1,
  },

  overflowDiv: {
    overflow: "hidden",
    width: "100%",
    margin: "0 auto",
    position: "relative"
  },

  heroImg: {
    width: "100%",
    height: "auto",
    // transition: "all,.6s",
    // border: "4px solid #d6d7e1",
    "will-change": "transform",
    '&:hover': {
      // transform: "scale(1.05)",
      border: "4px solid #afff8b",

    }
  },

  imgLabel: {
    position: "absolute",
    top: "90%",
    bottom: 0,
    right: 0,
    left: 0,
    textDecoration: "underline",
  }

});

// @withTag
@inject("routingStore", "uiStore")
@withStyles(styles, { name: "SkCategoryTileGrid" })
@withComponents
export default class CategoryTileGrid extends Component {
  static propTypes = {
    classes: PropTypes.object,
    // tags: PropTypes.isArray,
    components: PropTypes.shape({
      Link: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    })
  };

  static defaultProps = {
    classes: {},
    tags: [],
    xs: 12,
    md: 6,
    lg: 4,
  };

  render() {
    const { classes, components: { Link }, tags, xs, md, lg } = this.props;

    return (
      <React.Fragment>
        <Grid container spacing={40} className={classes.grid}>
          {tags.map((tag, index) => {

            return tag.heroMediaUrl ? (
              <Grid item xs={xs} md={md} lg={lg} key={index}
                    style={{ marginBottom: "10px", textAlign: "center" }}>
                <Link route={`/tag/${tag.slug}`}>
                  <div className={classes.overflowDiv}>
                    <img src={tag.heroMediaUrl} className={classes.heroImg} alt={"Main Category"}/>
                    <Typography inline="true" align="center" variant='title' className={classes.imgLabel}>
                      {tag.name}
                    </Typography>
                  </div>

                </Link>
              </Grid>) : null;

          })
          }
        </Grid>
      </React.Fragment>
    );
  }
}
