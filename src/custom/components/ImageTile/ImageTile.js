// Created by Andre Machon 08/04/2019
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Link from "components/Link";


const styles = (theme) => ({
  overflowDiv: {
    overflow: "hidden",
    width: "100%",
    margin: "0 auto",
    position: "relative"
  },
  overflowImg: {
    width: "100%",
    height: "auto",
    transition: "all,.6s",
    verticalAlign: "middle",
    willChange: "transform",
    '&:hover': {
      transform: "scale(1.05)",
      // border: "4px solid #afff8b",

    },
  },
  img: {
    width: "100%"
  }
});

@withStyles(styles, { name: "SkImageTile" })
export default class ImageTile extends Component {

  static propTypes = {
    classes: PropTypes.object,
    route: PropTypes.string,
    imgUrl: PropTypes.string,
    imgAlt: PropTypes.string,
    caption: PropTypes.object,
  };

  static defaultProps = {
    scaleOnHover: true,
  };

  render() {
    const { classes, route, imgUrl, imgAlt, caption, scaleOnHover } = this.props;

    return (
      <Fragment>

        {
          scaleOnHover ?
            <Link route={route ? route : ''}>
              <div className={classes.overflowDiv}>
                <img
                  src={imgUrl}
                  alt={imgAlt}
                  className={classes.overflowImg}
                />
              </div>
            </Link> :
            <img
              src={imgUrl}
              alt={imgAlt}
              className={classes.img}
            />
        }
        {caption ? caption : null}
      </Fragment>
    );
  }
}

