// Created by Andre Machon 28/02/2019
import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject } from "mobx-react";
import { withStyles } from "@material-ui/core/styles";
import { withComponents } from "@reactioncommerce/components-context";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ImageTile from 'custom/components/ImageTile';

const styles = (theme) => ({
  grid: {
    flexGrow: 1,
    marginBottom: "20px",
    marginTop: "20px",
  },

  imgLabel: {}

});

// @withTag
@inject("routingStore", "uiStore")
@withStyles(styles, { name: "SkCategoryTileGrid" })
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
    lg: 2,
  };

  render() {
    const { classes, tags, xs, md, lg } = this.props;

    return (
      <React.Fragment>
        <Grid container spacing={40} className={classes.grid}>
          {tags.map((tag, index) => {
            let caption = (
              <Typography inline="true" align="center" variant='h5' className={classes.imgLabel}>
                {tag.name}
              </Typography>
            );

            return tag.heroMediaUrl ? (
              <Grid item xs={xs} md={md} lg={lg} key={index}
                    style={{ marginBottom: "10px", textAlign: "center" }}>

                <ImageTile
                  route={`/tag/${tag.slug}`}
                  imgUrl={tag.heroMediaUrl}
                  imgAlt={tag.name}
                  caption={caption}
                />
              </Grid>) : null;

          })
          }
        </Grid>
      </React.Fragment>
    );
  }
}
