// Created by Andre Machon 28/01/2019
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { withComponents } from "@reactioncommerce/components-context";
import Typography from "@material-ui/core/Typography";
import HomePageFeatured from "custom/components/HomePageFeatured";
import CategoryTileGrid from "custom/components/CategoryTileGrid";
import Grid from "@material-ui/core/Grid";
import FeaturedCategories from "custom/components/FeaturedCategories";
import withTagFilter from "custom/containers/tagFilter/withTagFilter";

const MainCategories = withTagFilter(CategoryTileGrid, 'keywords', 'HomePageCategory');
// const FeatCategories = withTagFilter(FeaturedCategories, 'keywords', 'featuredCategory');

const styles = (theme) => ({
  homepage: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing.unit * 2
  },

  text: {
    fontSize: 28
  },

  headlineDiv: {
    width: "99.21vw",
    // width: "100%",
    height: "auto",
    minHeight: "140px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundImage: "linear-gradient(to right, rgba(210,255,82,0.5), rgba(145,255,92,0.9))",
    outline: "4px solid #afff8b",

    // background: "#ff9adb",
    // boxShadow: "-2px 3px 5px #ff67a9",
    // border: "solid 2px #ff9adb",

  },

  aboutDiv: {
    // width: "100%",
    width: "99.21vw",
    height: "350px",
    // backgroundColor: theme.palette.reaction.teal200,
    // backgroundColor: theme.palette.primary.light,
    backgroundImage: "linear-gradient(to right, rgba(210,255,82,0.5), rgba(145,255,92,0.9))",
    textAlign: "center"
  },

  marginGridItem: {
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5,
  },

  headerIMG: {
    // maxHeight: "635px",
    paddingTop: "33%"
  }
});

@withComponents
@withStyles(styles, {name: 'SkHomePage'})
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
    const { classes, components: { Button, ProgressiveImage } } = this.props;

    return (
      <div className="homepage">
        <div style={{marginBottom: "30px"}}>
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

        <Grid container spacing={16} style={{ maxWidth: "100%" }}>
          <Grid item xs={12}>
            <div className={classes.marginGridItem}>
              <FeaturedCategories/>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className={classes.headlineDiv}>
              {/*<Typography variant="h3" align="center" gutterBottom style={{ color: "#ff67a9" }}>*/}
              {/*Kategorie Sektion*/}
              {/*</Typography>*/}
              <img
                src="http://localhost:3000/assets/files/Media/2qw9oTxvbwutn4aQo/small/AntonUndSophie_Siegel_weiss.png"
                alt="siegel"/>
              <div style={{maxWidth: "50%"}}>
                <Typography variant="body1">Alltagstaugliche Baby- und Kinderprodukte mit bester Qualität in einem coolen, schönen Look -
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

          <Grid item xs={12}>
            <div className={classes.marginGridItem}>
              <div style={{width: "80%", margin: "auto"}}>
                <MainCategories/>
              </div>
            </div>
          </Grid>

          {/*<Grid item xs={12}>*/}
          {/*<div className={classes.aboutDiv}*/}
          {/*style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>*/}
          {/*<Typography variant="h3" style={{ color: "#ff67a9" }}>*/}
          {/*Wir haben dir schonmal was rausgesucht PLATZHALTER!*/}
          {/*</Typography>*/}
          {/*</div>*/}
          {/*</Grid>*/}

          {/*<Grid item xs={12}>*/}
          {/*<div className={classes.aboutDiv}>*/}
          {/*<Typography variant="h3" style={{ color: "#ff67a9" }} gutterBottom>Über Anton&Sophie PLATZHALTER!</Typography>*/}
          {/*<img src="http://localhost:3000/assets/files/Media/ZBabytZwKrenABath/medium/Anton und Sophie color.png"*/}
          {/*alt="Logo" style={{ maxWidth: "40%" }}/>*/}
          {/*<Typography variant="p">Logo kleiner und ohne weissen Hintergrund</Typography>*/}
          {/*<Typography variant="p">Hier eine kurze Beschreibung und / oder Link zur über uns Seite</Typography>*/}
          {/*<Typography variant="p">*/}
          {/*Eventuell auch ein anderes Bild, gutes Beispiel war die Seite über Anton&Sophie bei Amazon*/}
          {/*</Typography>*/}
          {/*</div>*/}
          {/*</Grid>*/}


          {/*<Grid item xs={12}>*/}
          {/*<Button*/}
          {/*title="Default"*/}
          {/*className="myBtn"*/}
          {/*isWaiting={this.state.isWaiting}*/}
          {/*onClick={this.onBtnClick}*/}
          {/*>Default Reaction Button!</Button>*/}
          {/*</Grid>*/}


          {/*<Grid item xs={12}>*/}
          {/*<Button*/}
          {/*title="Secondary"*/}
          {/*actionType="secondary"*/}
          {/*className="myBtn"*/}
          {/*isWaiting={this.state.isWaiting}*/}
          {/*onClick={this.onBtnClick}*/}
          {/*>Secondary Reaction Button!</Button>*/}
          {/*</Grid>*/}


          {/*<HomePageFeatured/>*/}
        </Grid>
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

// export default withStyles(styles)(HomePage);
