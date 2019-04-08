// Created by Andre Machon 28/01/2019
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

const MainCategories = withTagFilter(CategoryTileGrid, 'keywords', 'HomePageCategory');
// const FeatCategories = withTagFilter(FeaturedCategories, 'keywords', 'featuredCategory');

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
    paddingLeft: theme.spacing.unit * 8,
    paddingRight: theme.spacing.unit * 8,
  },

  headerIMG: {
    // maxHeight: "635px",
    paddingTop: "33%",
  },

  mainCategoryContainer: {
    // border: `4px solid ${theme.palette.primary.light}`,
    // padding: "10px",
    borderBottom: "10px solid #ffd6ed",
  },

  pictureCenterDiv: {
    // alignItems: "center",
    justifyContent: "center",
    display: "flex"
  }
});

@withComponents
@withStyles(styles, { name: 'SkHomePage', withTheme: true })
// @withTheme()
export default class HomePage extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     isWaiting: false
  //   };
  //
  // }
  //
  // onBtnClick = () => {
  //   this.setState({ isWaiting: true });
  //   setTimeout(() => {
  //     this.setState({ isWaiting: false });
  //   }, 3000);
  // };

  render() {
    const { classes, components: { Button, ProgressiveImage }, theme } = this.props;

    return (
      <div>
        <div className={classes.gridItem}>
          <ProgressiveImage
            className={classes.headerIMG}
            srcs={{
              large: "static/images/StartFoto.jpg",
              medium: "http://localhost:3000/assets/files/Media/jejxGbTZ2XwyKmm6a/medium/StartFoto.png",
              small: "http://localhost:3000/assets/files/Media/jejxGbTZ2XwyKmm6a/small/StartFoto.png"
            }}
            presrc="http://localhost:3000/assets/files/Media/jejxGbTZ2XwyKmm6a/medium/StartFoto.png"
            alt="HeaderImage"/>
        </div>

        <Grid item xs={12} className={classes.gridItem}>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
          >
            Unsere Produkte
          </Typography>
          <div className={classNames(classes.marginGridItem)}>
            <div className={classes.mainCategoryContainer}>
              <MainCategories/>
            </div>
          </div>
        </Grid>

        {/*About Anton & Sophie Div*/}
        {/*<Grid item xs={12} className={classNames(classes.gridItem, classes.marginGridItem)} style={{ background: theme.palette.primary.light }} >*/}
        <Grid item xs={12} className={classNames(classes.marginGridItem, classes.gridItem)} >

          {/*<div style={{ background: theme.palette.primary.light }}>*/}

          {/*Todo export to own component*/}
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            style={{ paddingTop: "20px" }}
          >
            Über Uns
          </Typography>
          <Grid container style={{ background: theme.palette.primary.light }}>

            <Grid item xs={12} md={4} className={classes.pictureCenterDiv}>
              <div style={{ textAlign: "center" }}>
                <Typography variant="h5" gutterBottom>Alltagstauglich</Typography>
                <Typography variant="body2">
                  All unsere Produkte haben ein Ziel: den Alltag mit Kindern ein Stück
                  zu vereinfachen. Jeder Artikel wird mit viel Herzblut & Liebe designed / ausgewählt
                  und daraufhin ausführlich getestet. ❤ Von Müttern für dein Kind ❤</Typography>
                <img
                  src="http://localhost:3000/assets/files/Media/2qw9oTxvbwutn4aQo/small/AntonUndSophie_Siegel_weiss.png"
                  alt="siegel"/>
              </div>
            </Grid>

            <Grid item xs={12} md={4} className={classes.pictureCenterDiv}>
              <div style={{ textAlign: "center" }}>
                <Typography variant="h5" gutterBottom>Individuell</Typography>
                <Typography variant="body2">
                  Jedes Kind ist ein ganz besonderes Unikat. Und dieses Gefühl möchten wir mit unserem
                  Personalisierungs-Service in die Welt transportieren, denn: dein Kind ist einzigartig auf dieser Welt!
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} md={4} className={classes.pictureCenterDiv}>
              <div style={{ textAlign: "center" }}>
                <Typography variant="h5" gutterBottom>Erstklassig</Typography>
                <Typography variant="body2">
                  Hochwertige Stoffe, perfekte Verarbeitung und hohe Standards sind unser Maßstab für dein Kind.
                </Typography>
                <img
                  src="http://localhost:3000/assets/files/Media/brzziSTS2svsnyHjZ/small/Anton und Sophie owl.png"
                  alt="eule"/>
              </div>
            </Grid>

          </Grid>

            {/*</div>*/}

        </Grid>

        <Grid item xs={12} className={classes.gridItem}>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
          >
            Unsere Specials
          </Typography>
          <div className={classes.marginGridItem}>
            <FeaturedCategories/>
          </div>
        </Grid>

        {/*Hier featured Produkt Slider*/}
        {/*<Grid item xs={12} className={classes.gridItem}>*/}
          {/*<Typography*/}
            {/*variant="h2"*/}
            {/*align="center"*/}
            {/*gutterBottom*/}
          {/*>*/}
            {/*Unsere Lieblinge*/}
          {/*</Typography>*/}
          {/*<div className={classes.marginGridItem}>*/}
          {/*</div>*/}
        {/*</Grid>*/}

        {/*About Anton & Sophie Div*/}
        {/*<Grid item xs={12} className={classNames(classes.gridItem, classes.marginGridItem)} style={{ background: theme.palette.primary.light }} >*/}
        <Grid item xs={12} className={classNames(classes.marginGridItem)} style={{ background: "#ffe0f4" }}>

          {/*<div style={{ background: theme.palette.primary.light }}>*/}

          {/*Todo export to own component*/}
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            style={{ paddingTop: "20px" }}
          >
            Über Uns
          </Typography>
          <Grid container>

            <Grid item xs={12} md={4} className={classes.pictureCenterDiv}>
              <div style={{ textAlign: "center" }}>
                <Typography variant="h5" gutterBottom>Alltagstauglich</Typography>
                <Typography variant="body2">
                  All unsere Produkte haben ein Ziel: den Alltag mit Kindern ein Stück
                  zu vereinfachen. Jeder Artikel wird mit viel Herzblut & Liebe designed / ausgewählt
                  und daraufhin ausführlich getestet. ❤ Von Müttern für dein Kind ❤</Typography>
                <img
                  src="http://localhost:3000/assets/files/Media/2qw9oTxvbwutn4aQo/small/AntonUndSophie_Siegel_weiss.png"
                  alt="siegel"/>
              </div>
            </Grid>

            <Grid item xs={12} md={4} className={classes.pictureCenterDiv}>
              <div style={{ textAlign: "center" }}>
                <Typography variant="h5" gutterBottom>Individuell</Typography>
                <Typography variant="body2">
                  Jedes Kind ist ein ganz besonderes Unikat. Und dieses Gefühl möchten wir mit unserem
                  Personalisierungs-Service in die Welt transportieren, denn: dein Kind ist einzigartig auf dieser Welt!
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} md={4} className={classes.pictureCenterDiv}>
              <div style={{ textAlign: "center" }}>
                <Typography variant="h5" gutterBottom>Erstklassig</Typography>
                <Typography variant="body2">
                  Hochwertige Stoffe, perfekte Verarbeitung und hohe Standards sind unser Maßstab für dein Kind.
                </Typography>
                <img
                  src="http://localhost:3000/assets/files/Media/brzziSTS2svsnyHjZ/small/Anton und Sophie owl.png"
                  alt="eule"/>
              </div>
            </Grid>

          </Grid>

            {/*</div>*/}

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

// 3er Einteilung:
//
// Alltagstauglich
// All unsere Produkte haben ein Ziel: den Alltag mit Kindern ein Stück zu vereinfachen. Jeder Artikel wird mit viel Herzblut & Liebe designed / ausgewählt und daraufhin ausführlich getestet. ❤ Von Müttern für dein Kind ❤
//
// (dadrunter das Siegel)
//
// Individuell
// Jedes Kind ist ein ganz besonderes Unikat. Und dieses Gefühl möchten wir mit unserem Personalisierungs-Service in die Welt transportieren, denn: dein Kind ist einzigartig auf dieser Welt!
//
// (Bild im Anhang)
//
// Erstklassig
// Hochwertige Stoffe, perfekte Verarbeitung und hohe Standards sind unser Maßstab für dein Kind.
//
// (dadrunter die Eule)
