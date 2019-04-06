// Created by Andre Machon 28/01/2019
import React, {Fragment} from "react";
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

  primaryDarkColor: {
    // color: theme.palette.primary.dark,
    color: theme.palette.reaction.black45,
  },

  headlineDiv: {
    // width: "99.21vw",
    width: "100%",
    height: "auto",
    minHeight: "140px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main,

    // backgroundImage: "linear-gradient(to right, rgba(210,255,82,0.5), rgba(145,255,92,0.9))",
    // outline: "4px solid #afff8b",

    // background: "#ff9adb",
    // boxShadow: "-2px 3px 5px #ff67a9",
    // border: "solid 2px #ff9adb",

  },

  aboutDiv: {
    width: "100%",
    // width: "99.21vw",
    height: "350px",
    // backgroundColor: theme.palette.reaction.teal200,
    // backgroundColor: theme.palette.primary.main,
    // backgroundImage: "linear-gradient(to right, rgba(210,255,82,0.5), rgba(145,255,92,0.9))",
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
    border: `4px solid ${theme.palette.primary.light}`,
    padding: "10px",
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
              large: "http://localhost:3000/assets/files/Media/jejxGbTZ2XwyKmm6a/large/StartFoto.png",
              medium: "http://localhost:3000/assets/files/Media/jejxGbTZ2XwyKmm6a/medium/StartFoto.png",
              small: "http://localhost:3000/assets/files/Media/jejxGbTZ2XwyKmm6a/small/StartFoto.png"
            }}
            presrc="http://localhost:3000/assets/files/Media/jejxGbTZ2XwyKmm6a/medium/StartFoto.png"
            alt="HeaderImage"/>
        </div>


        {/*<Grid container spacing={32}>*/}
          <Grid item xs={12} className={classes.gridItem}>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
          >
            Unsere Lieblinge
          </Typography>
          <div className={classNames(classes.marginGridItem)}>
            <div className={classes.mainCategoryContainer}>
              <MainCategories/>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} className={classNames(classes.gridItem, classes.marginGridItem)}>
          <div className={classes.headlineDiv}>
            <img
              src="http://localhost:3000/assets/files/Media/2qw9oTxvbwutn4aQo/small/AntonUndSophie_Siegel_weiss.png"
              alt="siegel"/>
            <div style={{ maxWidth: "50%" }}>
              <Typography variant="body1">Alltagstaugliche Baby- und Kinderprodukte mit bester Qualität in einem coolen,
                schönen Look -
                das ist die Welt von Anton & Sophie. WILLKOMMEN IN UNSERER WELT! Eure Helen Schondorff</Typography>
              <img
                src="http://localhost:3000/assets/files/Media/jJ4W8kT2gSLgjwAsP/medium/Unterschrift Helen.png"
                alt="unterschrift"/>
            </div>

            <div>
              <img
                src="http://localhost:3000/assets/files/Media/brzziSTS2svsnyHjZ/small/Anton und Sophie owl.png"
                alt="eule"/>
            </div>
          </div>
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
        {/*</Grid>*/}



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

// export default withTheme()(HomePage);
