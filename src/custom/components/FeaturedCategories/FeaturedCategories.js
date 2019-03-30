// Created by Andre Machon 27/03/2019
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTagFilter from "custom/containers/tagFilter/withTagFilter";
import CategoryTileGrid from "custom/components/CategoryTileGrid";
import FeaturedCategoryStepper from 'custom/components/FeaturedCategoryStepper';

class FeaturedCategories extends Component {
  render() {
    const { tags } = this.props;

    if (tags.length === 1) {
      return <CategoryTileGrid tags={tags} md={12} lg={12}/>;
    }
    if (tags.length === 2) {
      return <CategoryTileGrid tags={tags} lg={6}/>;
    }
    if(tags.length === 3) {
      return <CategoryTileGrid tags={tags}/>
    }
    return <FeaturedCategoryStepper tags={tags}/>;
  }
}

FeaturedCategories.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object),
};

export default withTagFilter(FeaturedCategories, 'keywords', 'featuredCategory');
