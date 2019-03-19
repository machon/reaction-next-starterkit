// Created by Andre Machon 19/03/2019
import { NavigationItemDesktop } from "components/NavigationDesktop";

function renderNavItem(navItem, index, filter = null) {
  if (filter) {
    if (navItem.navigationItem.data.classNames === filter) return <NavigationItemDesktop key={index}
                                                                                         navItem={navItem}/>;
  } else {
    return <NavigationItemDesktop key={index} navItem={navItem}/>;
  }
}

export default {
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
