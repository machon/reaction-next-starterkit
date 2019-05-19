// Created by Andre Machon 28/01/2019
const os = require('os');
const url = require('url');
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { withComponents } from "@reactioncommerce/components-context";
import Typography from "@material-ui/core/Typography";
import HomePageFeatured from "custom/components/HomePageFeatured";
import CategoryTileGrid from "custom/components/CategoryTileGrid";
import Grid from "@material-ui/core/Grid";
import FeaturedCategories from "custom/components/FeaturedCategories";
import withTagFilter from "custom/containers/tagFilter/withTagFilter";
import classNames from 'classnames';
import withCatalogItems from "containers/catalog/withCatalogItems";
// TODO change this later when component is renamed
import FeaturedCategoryStepper from 'custom/components/FeaturedCategoryStepper';
import withWidth from '@material-ui/core/withWidth';

const MainCategories = withTagFilter(CategoryTileGrid, 'keywords', 'HomePageCategory');
// const FeatCategories = withTagFilter(FeaturedCategories, 'keywords', 'featuredCategory');
// const origin = window.location.href;
const canonicalurl = process.env.CANONICAL_URL;
const backendurl = `${canonicalurl}:3000/`;

const styles = (theme) => ({
  gridItem: {
    marginBottom: "4em",
  },

  primaryLightColor: {
    color: theme.palette.primary.light,
  },

  aboutDiv: {
    width: "100%",
    height: "350px",
    textAlign: "center"
  },

  marginGridItem: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing.unit * 8,
      paddingRight: theme.spacing.unit * 8,
    },

  },

  headerIMG: {
    // maxHeight: "635px",
    paddingTop: "33%",
  },

  mainCategoryContainer: {
    // border: `4px solid ${theme.palette.primary.light}`,
    // padding: "10px",
    borderBottom: "7px solid #ffd6ed",
    borderTop: "7px solid #ffd6ed",
  },

  mobileAdjustmentDiv: {
    margin: "0 auto",
    [theme.breakpoints.down('md')]: {
      width: "80%"
    }
  },

  mainAdjustmentDiv: {
    margin: "0 auto",
    [theme.breakpoints.down('md')]: {
      width: "85%"
    },
    [theme.breakpoints.down('sm')]: {
      width: "70%"
    }
  },

  pictureCenterDiv: {
    // alignItems: "center",
    justifyContent: "center",
    display: "flex"
  }
});

@withComponents
@withStyles(styles, { name: 'SkHomePage', withTheme: true })
class HomePage extends React.Component {

  render() {
    const { classes, components: { ProgressiveImage }, theme, headerImageName, width } = this.props;

    let numProductsDisplayed = 3;

    switch (width) {
      case 'xs':
        numProductsDisplayed = 2;
        break;
      case 'sm':
        numProductsDisplayed = 3;
        break;
      case 'md':
        numProductsDisplayed = 4;
        break;
      case 'lg':
        numProductsDisplayed = 5;
        break;
      case 'xl':
        numProductsDisplayed = 5;
        break;
    }


    return (
      <div>

        <Grid container>

          <Grid item xs={12} className={classes.gridItem}>
            <ProgressiveImage
              className={classes.headerIMG}
              srcs={{
                large: `static/images/${headerImageName}.jpg`,
                medium: `static/images/${headerImageName}_medium.jpg`,
                small: `static/images/${headerImageName}_small.png`
              }}
              presrc={`static/images/${headerImageName}_thumbnail.png`}
              alt="HeaderImage"/>

          </Grid>

          <Grid item xs={12} className={classes.gridItem}>
            <Typography
              variant={width === 'lg' || width === 'xl' ? 'h2' : 'h3'}
              align="center"
              gutterBottom
            >
              Kategorien
              {/*{width}*/}
              {/*{os.hostname()}*/}
              {/*{os.networkInterfaces()}*/}
            </Typography>
            <div className={classNames(classes.marginGridItem)}>
              <div className={classNames(classes.mainCategoryContainer, classes.mobileAdjustmentDiv)}>
                <div className={classes.mainAdjustmentDiv}>
                  <MainCategories/>
                </div>
              </div>
            </div>
          </Grid>


          <Grid item xs={12} className={classes.gridItem}>
            <Typography
              variant={width === 'lg' || width === 'xl' ? 'h2' : 'h3'}
              align="center"
              gutterBottom
            >
              Specials
            </Typography>
            <div className={classNames(classes.marginGridItem, classes.mobileAdjustmentDiv)}>
              <div style={{ borderBottom: "7px solid #ffd6ed", paddingBottom: "4em" }}>
                <FeaturedCategories/>
              </div>
            </div>
          </Grid>

          {/*Hier featured Produkt Slider*/}
          <Grid item xs={12} className={classes.gridItem}>
            <div className={classNames(classes.marginGridItem, classes.mobileAdjustmentDiv)}>
              <div style={{ borderBottom: "7px solid #ffd6ed", paddingBottom: "4em" }}>
                <Typography
                  variant={width === 'lg' || width === 'xl' ? 'h2' : 'h3'}
                  align="center"
                  gutterBottom
                >
                  Deine Lieblinge
                </Typography>
                {/*TODO change this later only preview*/}
                <FeaturedCategoryStepper
                  numProductsDisplayed={numProductsDisplayed}
                />
              </div>
            </div>

          </Grid>

          <Grid item xs={12} className={classNames(classes.marginGridItem)}
                style={{ background: theme.palette.primary.main }}>

            {/*Todo export to own component*/}
            <Typography
              variant={width === 'lg' || width === 'xl' ? 'h2' : 'h3'}
              align="center"
              gutterBottom
              style={{ paddingTop: "20px" }}
            >
              Über Uns
            </Typography>
            {/*♡*/}
            <Grid container spacing={16}>

              <Grid item xs={12} md={4} className={classNames(classes.pictureCenterDiv, classes.mobileAdjustmentDiv)}>
                <div style={{ textAlign: "center" }}>
                  <Typography variant="h5" gutterBottom>Erstklassig</Typography>
                  <Typography variant="body2">
                    Unsere Produkte werden ausschließlich in sehr guten Nähereien in Deutschland bzw. der EU genäht.
                    Hochwertige Stoffe, perfekte Verarbeitung und hohe Standards sind unser Maßstab.</Typography>
                  <Typography variant="body2" gutterBottom>❤ Für ein gutes Gefühl - für uns - für dich - für dein Kind
                    ❤</Typography>
                  <div style={{width: "30%", margin: "0 auto"}}>
                    <img
                    src="static/images/AuS_owl_200px_RGB.png"
                    style={{ width: "60%" }}
                    alt="fish"/>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} className={classNames(classes.pictureCenterDiv, classes.mobileAdjustmentDiv)} >
                <div style={{ textAlign: "center" }}>
                  <Typography variant="h5" gutterBottom>Alltagstauglich</Typography>
                  <Typography variant="body2">
                    All unsere Produkte haben ein Ziel: den Alltag mit Kindern ein Stück
                    zu vereinfachen. Jeder Artikel wird mit viel Herzblut & Liebe designed / ausgewählt
                    und daraufhin ausführlich getestet.</Typography>
                  <Typography variant="body2" gutterBottom>❤ Von Müttern für dein Kind ❤</Typography>
                  <div style={{width: "30%", margin: "0 auto"}}>
                    <img
                    src={`static/images/AntonUndSophie_Siegel_weiss.png`}
                    style={{width: "85%"}}
                    alt="siegel"/>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} className={classNames(classes.pictureCenterDiv, classes.mobileAdjustmentDiv)}>
                <div style={{ textAlign: "center" }} >
                  <Typography variant="h5" gutterBottom>Individuell</Typography>
                  <Typography variant="body2">
                    Jedes Kind ist ein ganz besonderes Unikat. Und dieses Gefühl möchten wir mit unserem
                    Personalisierungs-Service in die Welt transportieren,
                  </Typography>
                  <Typography variant="body2" style={{ marginBottom: "2.4em" }}>❤ denn Dein Kind ist einzigartig auf
                    dieser Welt! ❤</Typography>
                  <div style={{width: "30%", margin: "0 auto"}}>
                    <img
                    src={`/static/images/AuS_fish_200px_RGB.png`}
                    style={{ width: "85%" }}
                    alt="eule"/>
                  </div>
                </div>
              </Grid>

            </Grid>

            {/*</div>*/}

          </Grid>

        </Grid>


        {/*<HomePageFeatured/>*/}
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object,
  components: PropTypes.shape({
    /**
     * Use Reaction Design System Button
     */
    Button: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  })
};

export default withWidth()(HomePage);
