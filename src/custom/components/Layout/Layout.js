import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Header from "components/Header";
import Footer from "custom/components/Footer";
import InfoListBanner from "custom/components/InfoListBanner";

const styles = (theme) => ({
  root: {
    minHeight: "100vh"
  },
  main: {
    flex: "1 1 auto",
    maxWidth: theme.layout.mainContentMaxWidth,
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: "78.3vh",
  },
  article: {
    padding: theme.spacing.unit * 3
  }
});

@withStyles(styles, { name: "SkLayout" })
class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    shop: PropTypes.shape({
      name: PropTypes.string
    }).isRequired,
    viewer: PropTypes.object
  };

  static defaultProps = {
    classes: {}
  };

  render() {
    const { classes, children, shop, viewer } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <InfoListBanner
            iconName="check"
            listItems={['Gratis Versand', '30 Tage Rückgaberecht', 'Lieferzeit 2-3 Werktage']}/>
          <Header shop={shop} viewer={viewer} />
          <main className={classes.main}>
            <article className={classes.article}>
              {children}
            </article>
          </main>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
