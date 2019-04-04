// Created by Andre Machon 27/03/2019
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTagFilter from "custom/containers/tagFilter/withTagFilter";
import CategoryTileGrid from "custom/components/CategoryTileGrid";
import FeaturedCategoryStepper from 'custom/components/FeaturedCategoryStepper';
import Typography from "@material-ui/core/Typography";

class FeaturedCategories extends Component {
  render() {
    const { tags } = this.props;

    if(tags.length === 0) {
      return null
    }

    if (tags.length === 1) {
      return (
        <div style={{ maxWidth: "900px", margin: "auto", textAlign: "center" }}>
          {/*<Typography variant="h3" gutterBottom style={{ color: "#ff67a9" }}>Featured Kategorie Sektion</Typography>*/}
          <CategoryTileGrid tags={tags} md={12} lg={12}/>
        </div>
      );
    }
    if (tags.length === 2) {
      return (
        <div style={{textAlign: "center" }}>
          {/*<Typography variant="h3" style={{ color: "#ff67a9" }} gutterBottom>Featured Kategorie Sektion</Typography>*/}
          <CategoryTileGrid tags={tags} lg={6}/>
        </div>
      );

    }
    // if (tags.length === 3) {
    //   return (
    //     <div style={{textAlign: "center" }}>
    //       <Typography variant="h3" style={{ color: "#ff67a9" }} gutterBottom>Featured Kategorie Sektion</Typography>
    //       <CategoryTileGrid tags={tags} />
    //     </div>
    //   );
    // }
    return <FeaturedCategoryStepper tags={tags}/>;
  }
}

FeaturedCategories.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object),
};

export default withTagFilter(FeaturedCategories, 'keywords', 'featuredCategory');
