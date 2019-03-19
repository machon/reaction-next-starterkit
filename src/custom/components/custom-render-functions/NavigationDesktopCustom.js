// Created by Andre Machon 19/03/2019
import { NavigationItemDesktop } from "components/NavigationDesktop";

/**
 * If a filter is passed this function only renders
 * NavigationItemDesktop Components if they have a class matching the filter
 * @param navItem
 * @param index
 * @param filter
 * @returns {NavigationItemDesktop} React Navigation Component
 */
function renderNavItem(navItem, index, filter = null) {
  if (filter) {
    // console.log();
    if (navItem.navigationItem.data.classNames.split(' ').includes(filter)) return <NavigationItemDesktop key={index}
                                                                                         navItem={navItem}/>;
  } else {
    return <NavigationItemDesktop key={index} navItem={navItem}/>;
  }
}

export default {
  /**
   * render function for desktop navigation items, only renders items filtered via classname
   * @param props
   * @returns {*}
   */
  render(props) {
    const { navItems, filter } = props;

    if (navItems && navItems.items) {
      return <nav>{navItems.items.map(
        (navItem, index) => {
          return renderNavItem(navItem, index, filter);
        }
      )}</nav>;
    }

    // If navItems.items aren't available, skip rendering of navigation
    return null;
  }

};
