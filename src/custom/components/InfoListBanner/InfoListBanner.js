// Created by Andre Machon 29/03/2019
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Icon from '@material-ui/core/Icon';
import Helmet from "react-helmet";
import Typography from "@material-ui/core/Typography";
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
  list: {
    listStyleType: "none",
    margin: "0",
    padding: "0",
    display: "flex",
    justifyContent: "center"
  },
  listItem: {
    color: theme.palette.secondary.dark,
    // position: "relative"
    lineHeight: "40px",
    paddingLeft: "18px",
    marginRight: "2.8%",
  },
  listContainer: {
    width: "80%",
    margin: "auto"
  },
  itemIcon: {
    lineHeight: "35px",
    marginRight: "4px"
  },
  outerDiv: {
    display: "flex",
    // backgroundColor: theme.palette.reaction.teal100,
  }
});

// TODO adjust InfoListBanner to be mobile friendly, perhaps show on medium

@withStyles(styles, { name: "SkInfoListBanner" })
class InfoListBanner extends Component {
  render() {
    const { classes, listItems, iconName } = this.props;

    return (
      <Fragment>
        <Helmet>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        </Helmet>

        <Hidden mdDown>
          <div className={classes.outerDiv}>
            <div className={classes.listContainer}>
              <Typography>
                <ul className={classes.list}>
                  {listItems.map(item => (
                    <li className={classes.listItem}>
                      <Icon className={classes.itemIcon}>{iconName}</Icon>
                      {item}
                    </li>
                  ))}
                </ul>
              </Typography>
            </div>
          </div>
        </Hidden>

      </Fragment>
    );
  }
}

InfoListBanner.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  iconName: PropTypes.string
};

export default InfoListBanner;
