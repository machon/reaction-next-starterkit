// Created by Andre Machon 20/03/2019
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { inject } from "mobx-react";
import { withStyles } from "@material-ui/core/styles";
import { withComponents } from "@reactioncommerce/components-context";
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay, virtualize } from 'react-swipeable-views-utils';
import ImageTile from 'custom/components/ImageTile';
import Link from "components/Link";
import Icon from '@material-ui/core/Icon';
import { ChevronLeft, ChevronRight} from '@material-ui/icons'

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import withWidth from '@material-ui/core/withWidth';
import CatalogGridItem from "@reactioncommerce/components/CatalogGridItem/v1";
import track from "lib/tracking/track";
import trackProductClicked from "lib/tracking/trackProductClicked";

import withFeatured from "custom/containers/homepage/withFeatured";
import withShop from "containers/shop/withShop";
import { mod } from 'react-swipeable-views-core';
import logger from 'lib/logger';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const VirtualizeSwipeableViews = virtualize(SwipeableViews);

const styles = (theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
    margin: "auto",
  },
  caption: {
    position: "absolute",
    [theme.breakpoints.down('sm')]: {
      bottom: "5%",
    },
    [theme.breakpoints.up('md')]: {
      bottom: "3%"
    },
    left: 0, right: 0,
    marginLeft: "auto",
    marginRight: "auto"
  },

});

@withShop
@withFeatured
@inject("routingStore", "uiStore")
@withStyles(styles, { withTheme: true })
@track()
class FeaturedCategoryStepper extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
    };
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  componentDidUpdate(prevProps) {
    if (this.props.numProductsDisplayed !== prevProps.numProductsDisplayed) {
      this.handleStepChange(this.state.activeStep+1);
    }
  }

  renderProductSlide = (params) => {
    const { index, key } = params;
    const { featuredProducts, numProductsDisplayed } = this.props;
    const products = [];

    for (let i = 0; i < numProductsDisplayed; i++) {
      // TODO perhaps set activestep from index here and put loop for list in ProductSlide
      products.push(featuredProducts[mod(index + i, featuredProducts.length)]);
    }

    return (
        <Grid container key={key} spacing={16}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={{ margin: "auto" }}>
            <CatalogGridItem
              product={product.product}
              currencyCode="EUR"
            />
          </Grid>
        ))}
      </Grid>
    );

  };

  renderProducts() {
    const { classes, theme, featuredProducts, width } = this.props;

    const { activeStep } = this.state;

    return (
      <div className={classes.root}>

        <VirtualizeSwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
          slideRenderer={this.renderProductSlide}
          classes={{
            slide: classes.overflow
          }}
        >

        </VirtualizeSwipeableViews>

        <MobileStepper
          // steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="medium" onClick={this.handleNext}>

              {theme.direction === 'rtl' ? <ChevronLeft/> : <ChevronRight/>}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack}>
              {theme.direction === 'rtl' ?  <ChevronRight/>: <ChevronLeft/>}

            </Button>
          }
        />
      </div>
    );
  };

  tagTileRenderer = () => {

  };

  renderTags() {
    const { classes, theme, tags, captionColor, width } = this.props;
    // this.setState({maxSteps: tags.length});
    const { activeStep, maxSteps } = this.state;

    return (
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
          interval={6000}
          springConfig={{
            duration: '2.5s',
            easeFunction: 'ease-in-out',
            delay: '0s'
          }}
        >
          {tags.map((tag, index) => {

            let nextTag = tags[index + 1];
            if (tags.length <= index + 1) {
              nextTag = tags[0];
            }

            return (
              <Fragment key={index}>
                <Grid container>

                  <Grid item sm={12} md={6}>
                    <div style={{ position: "relative" }}>
                      <ImageTile
                        imgUrl={tag.heroMediaUrl}
                        alt={tag.name}
                        caption={
                          <Link route={`/tag/${tag.slug}`}>
                            <Typography
                              inline="true" align="center"
                              variant={width === 'xs' ? 'h5' : 'h4'}
                              className={classes.caption}
                              style={{ color: captionColor }}
                            >
                              {tag.name}
                            </Typography>
                          </Link>
                        }
                        scaleOnHover={false}
                      />
                    </div>
                  </Grid>

                  <Hidden smDown>
                    <Grid item md={6}>
                      <div style={{ position: "relative" }}>
                        <ImageTile
                          imgUrl={nextTag.heroMediaUrl}
                          alt={nextTag.name}
                          caption={
                            <Link route={`/tag/${nextTag.slug}`}>
                              <Typography
                                inline="true" align="center"
                                variant={width === 'xs' ? 'h5' : 'h4'}
                                className={classes.caption}
                                style={{ color: captionColor }}
                              >
                                {nextTag.name}
                              </Typography>
                            </Link>
                          }
                          scaleOnHover={false}
                        />
                      </div>
                    </Grid>
                  </Hidden>
                </Grid>
              </Fragment>
            );
          })}
        </AutoPlaySwipeableViews>
      </div>
    );
  };

  render() {
    const { tags, featuredProducts } = this.props;

    if (tags) {
      return this.renderTags();
    }

    if (featuredProducts) {
      return this.renderProducts();
    }

    return null;
  };
}

FeaturedCategoryStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

FeaturedCategoryStepper.defaultProps = {
  captionColor: "white"
};

export default withWidth()(FeaturedCategoryStepper);
