// Created by Andre Machon 16/03/2019
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import Helmet from "react-helmet";
import Typography from "@material-ui/core/Typography";

@inject("routingStore")
@observer
class Impressum extends Component {
  static propTypes = {
    routingStore: PropTypes.object,
    shop: PropTypes.shape({
      currency: PropTypes.shape({
        code: PropTypes.string.isRequired
      })
    })
  };


  render() {
    const { shop } = this.props;

    return (
      <Fragment>
        <Helmet>
          <title>{shop && shop.name}</title>
          <meta name="about-page" content={shop && shop.description}/>
        </Helmet>
        <Typography>
          <div className="entry" style={{marginRight: "8em", marginLeft: "8em"}}>
            <header className="entry-header">
              <h1 className="entry-title">
                Impressum </h1>
            </header>
            <div className="entry-content">
              <Typography>Helen Schondorff</Typography>
              <Typography>Birresborner Strasse 41</Typography>
              <Typography>50935 Köln</Typography>
              <Typography>Deutschland</Typography>
              <p>Tel.: 0049 157 83054821
                E-Mail: kontakt@anton-und-sophie.de</p>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE294202460 </p>
              <p>Plattform der EU-Kommission zur Online-Streitbeilegung: <a href="https://ec.europa.eu/consumers/odr"
                                                                            target="_blank"
                                                                            rel="noopener">https://ec.europa.eu/consumers/odr</a>
              </p>
              <p>Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder
                verpflichtet noch bereit.</p>
              <div
                style={{
                  display: "block",
                  backgroundColor: "#fbfbfb",
                  color: "#292929",
                  border: "1px solid gray",
                  padding: "15px",
                  fontSize: "14px",
                  fontStyle: "normal"
                }}>
                <img style={{ float: "left", marginRight: "10px" }}
                     src="https://www.fairness-im-handel.de/wp-content/uploads/logo-fairness-90.png"
                     alt="Initiative: Fairness im Handel"/>
                <p>Mitglied der Initiative „Fairness im Handel“.</p>
                <p>Informationen zur Initiative: <a style={{ color: "#ef7b00" }}
                                                    href="https://www.fairness-im-handel.de"
                                                    target="_blank"
                                                    rel="noopener">https://www.fairness-im-handel.de </a>
                </p>
                <div style={{ clear: "both" }}></div>
              </div>
              <p>Bildrechte:&nbsp;Helen Schondorff, <a href="http://de.123rf.com/profile_stockbroker" target="_blank"
                                                       rel="noopener">stockbroker / 123RF Stockfoto</a></p>
            </div>
          </div>
        </Typography>
      </Fragment>
    );
  }
}

export default Impressum;
