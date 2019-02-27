// Created by Andre Machon 28/01/2019
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { withComponents } from "@reactioncommerce/components-context";
import Typography from "@material-ui/core/Typography";
import HomePageFeatured from "custom/components/HomePageFeatured"

const styles = (theme) => ({
  homepage: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing.unit * 2
  },

  text: {
    fontSize: 28
  }
});

@withComponents
class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isWaiting: false
    };

  }

  onBtnClick = () => {
    this.setState({ isWaiting: true }); setTimeout(() => { this.setState({ isWaiting: false }); }, 3000);
  };

  render() {

    const { classes, components: { Button } } = this.props;

    return (
      <Typography>

        <div className="homepage">
          <h1>This is the Homepage!!!</h1>
          <Button
            title="Default"
            className="myBtn"
            isWaiting={this.state.isWaiting}
            onClick={this.onBtnClick}
          >My Own Reaction Button!</Button>
          <HomePageFeatured/>

          <p className={classes.text}>This is our placeholder text</p>
        </div>
      </Typography>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object,
  components: PropTypes.shape({
    /**
     * Use Reaction Design System Button
     */
    Button: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  }).isRequired
};

export default withStyles(styles)(HomePage);
