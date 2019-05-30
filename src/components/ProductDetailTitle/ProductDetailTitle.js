import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  pageTitle: {
    color: theme.palette.secondary.dark,
    // color: "#96D702",

  }
});

/**
 * Product detail title and pageTitle (subtitle)
 * @class ProductDetailTitle
 */
@withStyles(styles, {name: 'SkProductDetailTitle'})
class ProductDetailTitle extends Component {
  static propTypes = {
    /**
     * Subtitle
     */
    pageTitle: PropTypes.string,

    /**
     * Main title, the h1 for the page
     */
    title: PropTypes.string,

    /**
     * Typography theme variant
     */
    variant: PropTypes.string
  };

  render() {
    const { pageTitle, title, width, classes } = this.props;

    // Render nothing if neither the title nor pageTitle exists
    if (!title && !pageTitle) return null;

    return (
      <Grid item sm={12}>
        {title && <Typography color="textSecondary" gutterBottom={true}
                              variant={width === 'sm' || width === 'xs' ? 'h4' : 'h3'}>{title}</Typography>}
        {pageTitle && <Typography component="h2" variant="h6" className={classes.pageTitle}>{pageTitle}</Typography>}
      </Grid>
    );
  }
}

export default withWidth()(ProductDetailTitle);
