import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const styles = (theme) => ({
  heroImg: {
    width: "100%"
  },
  heroGridContainer: {
    maxWidth: theme.layout.mainContentMaxWidth,
    margin: "12px auto"
  }
});

@withStyles(styles, { name: "SkProductGridHero" })
export default class ProductGridHero extends Component {
  static propTypes = {
    classes: PropTypes.object,
    tag: PropTypes.object
  };

  static defaultProps = {
    classes: {},
    tag: {}
  };

  render() {
    const { classes, tag: {heroMediaUrl, metafields} } = this.props;

    if (!heroMediaUrl) return null;

    return (
      <section className={classes.heroGridContainer}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            {/*<img src={heroMediaUrl} alt="Product category" className={classes.heroImg} />*/}
            <Typography variant="body2">
              {/*{JSON.stringify(tag)}*/}
              {/*{tag.metafields.description}*/}
            </Typography>
          </Grid>
        </Grid>
      </section>
    );
  }
}