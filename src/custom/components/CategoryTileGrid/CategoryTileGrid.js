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
    width: "95%",
    margin: "0 auto"
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

// @withTag
@inject("routingStore", "uiStore", "tags")
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
  };

  render() {
    const { classes, components: { Link }, tags } = this.props;

    return (
      <React.Fragment>
        <Grid container spacing={24} className={classes.grid}>
          {tags.map((tag, index) => {
            let mainCategory = false;
            if (tag.metafields) {
              tag.metafields.forEach(obj => {
                if (obj.key === "keywords") {
                  if (obj.value.split(' ').includes('HomePageCategory')) {
                    mainCategory = true;
                  } else {
                    mainCategory = false;
                  }
                }
              });
            }

            if (mainCategory) {
              return tag.heroMediaUrl ? (
                <Grid item xs={12} md={6} lg={4} key={index}
                      style={{ marginBottom: "10px", textAlign: "center", }}>
                  <Link route={`/tag/${tag.slug}`}>
                    <div className={classes.overflowDiv}>
                      <img src={tag.heroMediaUrl} className={classes.heroImg} alt={"Main Category"}/>
                    </div>
                    <Typography inline="true" align="center" variant='title'>
                      <label style={{ textDecoration: "underline" }}>{tag.name}</label>
                    </Typography>
                  </Link>
                </Grid>): null;
            }
          })
          }
        </Grid>
      </React.Fragment>
    );
  }
}
