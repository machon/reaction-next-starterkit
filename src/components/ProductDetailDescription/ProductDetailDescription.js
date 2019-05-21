import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import parse from 'html-react-parser';

/**
 * Product detail description field
 * @class ProductDetailDescription
 */
class ProductDetailDescription extends Component {
  static propTypes = {
    /**
     * Product description
     */
    children: PropTypes.string
  }

  render() {
    const { children, ...props } = this.props;

    if (!children) return null;

    return (
      <Typography component="div" {...props}>{parse(children)}</Typography>
    );
  }
}

export default ProductDetailDescription;
