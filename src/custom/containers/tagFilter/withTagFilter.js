// Created by Andre Machon 30/03/2019
import React from 'react';
import PropTypes from "prop-types";
import { inject } from "mobx-react";

/**
 *
 * @param Component
 * @param filterMetaFieldKey - key name of metafield object, should usually be "keywords"
 * @param filterValue - value of metafield object
 * @returns {{propTypes, new(props: Readonly<P>): WithTagFilter, new(props: P, context?: any): WithTagFilter, prototype: WithTagFilter}}
 */
export default (Component, filterMetaFieldKey, filterValue) => (
  @inject('tags')
  class WithTagFilter extends React.Component {
    static propTypes = {
      filterMetaFieldKey: PropTypes.string.isRequired,
      filterValue: PropTypes.string.isRequired,
    };

    filterTags = () => {
      const { tags } = this.props;
      const filteredTags = [];

      tags.forEach(tag => {
        if (tag.metafields) {
          tag.metafields.forEach(obj => {
            if (obj.key === filterMetaFieldKey) {
              if (obj.value.split(' ').includes(filterValue)) {
                filteredTags.push(tag);
              }
            }
          });
        }
      });
      return filteredTags;
    };

    render() {
      return (
        <Component
          {...this.props}
          tags={this.filterTags()}
        />
      );
    }
  }
)
