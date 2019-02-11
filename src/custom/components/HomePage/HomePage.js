// Created by Andre Machon 28/01/2019
import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import HomePageFeatured from "custom/components/HomePageFeatured"

const styles = (theme) => ({
  homepage: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing.unit * 2
  }
});

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <Typography>

        <div className="homepage">
          <h1>This is the Homepage!!!</h1>
          <HomePageFeatured/>

          <p>This is our placeholder text</p>
        </div>
      </Typography>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(HomePage);
