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
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = theme => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
    margin: "auto",
  },
  header: {
    // display: 'flex',
    alignItems: 'center',
    height: 50,
    // paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
    textAlign: 'center'
  },
  img: {
    height: 255,
    display: 'inline-block',
    maxWidth: "33.333%",
    overflow: 'hidden',
    width: '100%',
  },

  catCaption: {
    fontWeight: "bold",
    fontSize: "25px"
  }
});

@inject("routingStore", "uiStore", "tags")
class FeaturedCategoryStepper extends React.Component {
  state = {
    activeStep: 0,
  };

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

  /**
   * getFeaturedCategoryTags
   * @summary return filtered array of tags, based on metafields
   * @param {string} metaFieldKey - key name of metafield object, defaults to "keywords"
   * @param {string} metaFieldValue - value of metafield object, defaults to "featuredCategory"
   * @returns {Array}
   */
  getFeaturedCategoryTags = (metaFieldKey="keywords", metaFieldValue="featuredCategory") => {
    const { tags } = this.props;
    const featuredTags = [];

    tags.forEach(tag => {
      if (tag.metafields) {
        for (let i = 0; i < tag.metafields.length; i++) {
          let obj = tag.metafields[i];
          if (obj.key === metaFieldKey) {
            if (obj.value.split(' ').includes(metaFieldValue)) {
              featuredTags.push(tag);
              break;
            }
          }
        }
      }
    });
    return featuredTags;
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const featuredTags = this.getFeaturedCategoryTags();
    const maxSteps = featuredTags.length;
    
    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography variant={'headline'}>Featured Categories</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
          interval={5000}
        >
          {featuredTags.map((tag, index) => {

            let nextTag = featuredTags[index + 1];
            let nextTag2 = featuredTags[index + 2];
            if (featuredTags.length <= index + 2) {
              nextTag2 = featuredTags[0];
            }
            if (featuredTags.length <= index + 1) {
              nextTag = featuredTags[0];
              nextTag2 = featuredTags[1];

            }

            return (
              
              <div key={tag.name}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Fragment>
                    <div style={{ display: "inline", position: "relative" }}>
                      <img className={classes.img} src={tag.heroMediaUrl} alt={tag.name}/>
                      <a style={{ position: "absolute", bottom: "5px", left: "30%" }} href={`/tag/${tag.slug}`}>
                        <span className={classes.catCaption}>{tag.name}</span></a>
                    </div>
                    <div style={{ display: "inline", position: "relative" }}>
                      <img className={classes.img} src={nextTag.heroMediaUrl} alt={nextTag.name}/>
                      <a style={{ position: "absolute", bottom: "5px", left: "30%" }} href={`/tag/${nextTag.slug}`}>
                        <span className={classes.catCaption}>{nextTag.name}</span></a>
                    </div>
                    <div style={{ display: "inline", position: "relative" }}>
                      <img className={classes.img} src={nextTag2.heroMediaUrl} alt={nextTag2.name}/>
                      <a style={{ position: "absolute", bottom: "5px", left: "30%" }} href={`/tag/${nextTag2.slug}`}>
                        <span className={classes.catCaption}>{nextTag2.name}</span></a>
                    </div>
                  </Fragment>
                ) : null}
              </div>
            );
          })}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

FeaturedCategoryStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  tags: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(FeaturedCategoryStepper);
