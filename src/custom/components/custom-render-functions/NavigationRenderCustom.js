// Created by Andre Machon 19/03/2019
import { NavigationItemDesktop } from "components/NavigationDesktop";
import { NavigationItemMobile } from "components/NavigationMobile";

/**
 * If a filter is passed this function only renders
 * NavigationItemDesktop Components if they have a class matching the filter
 * @param navItem
 * @param index
 * @param filter
 * @returns {NavigationItemDesktop} React Navigation Component
 */
function renderNavItemDesktop(navItem, index, filter = null) {
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
  renderDesktopNav(props) {
    const { navItems, filter } = props;

    if (navItems && navItems.items) {
      return <nav>{navItems.items.map(
        (navItem, index) => renderNavItemDesktop(navItem, index, filter)
      )}</nav>;
    }

    // If navItems.items aren't available, skip rendering of navigation
    return null;
  },

  // renderMobileNavMenuList(props) {
  //   props.navItems.items.map((navItem, index) => renderNavItemMobile(navItem, index, props.filter));
  // }

};
