// Created by Andre Machon 28/01/2019
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { withComponents } from "@reactioncommerce/components-context";
import Typography from "@material-ui/core/Typography";
import HomePageFeatured from "custom/components/HomePageFeatured";
import CategoryTileGrid from "custom/components/CategoryTileGrid";
import Grid from "@material-ui/core/Grid";
import MobileStepper from "custom/components/FeaturedCategoryStepper";

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
    width: "100%",
    height: "auto",
    padding: "10px",
    // background: "#ff9adb",
    // boxShadow: "-2px 3px 5px #ff67a9",
    // border: "solid 2px #ff9adb",

  }
});

@withComponents
@withStyles(styles)
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isWaiting: false
    };

  }

  onBtnClick = () => {
    this.setState({ isWaiting: true });
    setTimeout(() => {
      this.setState({ isWaiting: false });
    }, 3000);
  };

  render() {

    const { classes, components: { Button } } = this.props;

    return (
      <div className="homepage">
        <Grid container spacing={24}>

          <Grid item xs={12}>
            <div style={{ width: "100%", height: "500px", backgroundColor: "#5acc25", alignItems: "center" }}>
              <Typography variant="headline" align="center">
                Header Image goes here
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12}>
            <MobileStepper/>
          </Grid>

          <Grid item xs={12}>
            <div className={classes.headlineDiv}>
              <Typography variant="headline" align="center">
                <h1 style={{ color: "#ff67a9" }}>View all the beautiful Products at the Anton&Sophie Webstore!</h1>
              </Typography>
            </div>
          </Grid>


          <Grid item xs={12}>

            <CategoryTileGrid/>
          </Grid>

          <Grid item xs={12}>
            <Button
              title="Default"
              className="myBtn"
              isWaiting={this.state.isWaiting}
              onClick={this.onBtnClick}
            >Default Reaction Button!</Button>
          </Grid>


          <Grid item xs={12}>
            <Button
              title="Secondary"
              actionType="secondary"
              className="myBtn"
              isWaiting={this.state.isWaiting}
              onClick={this.onBtnClick}
            >Secondary Reaction Button!</Button>
          </Grid>


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
