// Created by Andre Machon 28/01/2019
import React, {Component} from "react"
import withFeatured from "custom/containers/homepage/withFeatured";
import withShop from "containers/shop/withShop";
// import withShop from "containers/shop/withShop";
import {withStyles} from "@material-ui/core/styles";
import {compose} from "recompose"
import ProductGrid from "components/ProductGrid"

const styles = (theme) => ({
  HomePageFeatured: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing.unit * 2
  }
});

// @withStyles(styles, { name: "HomePageFeatured" })
class HomePageFeatured extends Component {
  render() {

    const {classes, featuredProducts} = this.props;
    return (
      <div className={classes.root}>
        <div>HomePage Featured</div>
        {!!featuredProducts && featuredProducts.map((product) => {
            return (
              <div className="featured-product-box" key={product.product.slug}
                   style={{border: "1px solid black", width: "350px"}}>
                <div className="featured-product-title">
                  {/*{product.product.title}*/}
                  <a href={`/product/${product.product.slug}`}><img src={product.product.media[0].URLs.medium} alt="product-image"/></a></div>
                  {/*<p>{JSON.stringify(product)}</p>*/}
              </div>
            )
          }
        )}
      </div>
    );
  }
}

export default compose(
  withShop,
  withFeatured,
  withStyles(styles),
)(HomePageFeatured);
