// Created by Andre Machon 30/05/2019
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import Helmet from "react-helmet";
import Typography from "@material-ui/core/Typography";

@inject("routingStore")
@observer
class Versandkosten extends Component {
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
        <Typography variant={'body1'}>
          <div className="entry" style={{width: "95%", margin: "0 auto", textAlign: "center"}}>
            <header className="entry-header">
              <h1 className="entry-title">
                Versandkosten &amp; Lieferung </h1>
            </header>
            <div className="entry-content">
              <p><strong>Preise, Versandkosten und Lieferinformationen innerhalb Deutschlands:</strong></p>
              <p>Zusätzlich zu den angegebenen Produkt-Preisen berechnen wir für die Lieferung innerhalb Deutschlands
                pauschal 4,95 Euro pro Bestellung. Unsere Pakete werden mit DHL inkl. Sendungsnachweis versendet.</p>
              <p>Bestellungen, die ausschließlich Haarspangen und Namensaufkleber für personalisierte Produkte umfassen,
                versenden wir per Briefumschlag mit der Deutschen Post ohne Sendungsnummer zu einem Pauschalbetrag von
                1,95 Euro.</p>
              <p><strong>Preise, Versandkosten und Lieferinformationen weltweit: </strong></p>
              <p>Wir versenden weltweit mit der Deutschen Post (Warenpost international) mit Sendungsnachweis und
                berechnen pauschal 11,95 Euro pro Bestellung. Bestellungen, die ausschließlich Haarspangen oder
                Namensaufkleber beinhalten, werden per Briefsendung ohne Sendungsverfolgung versendet Die Versandkosten
                dafür betragen 3,95 Euro.</p>
              <p><strong>Allgemeine Hinweise:</strong></p>
              <p>Die auf den Produktseiten genannten Preise enthalten die gesetzliche Mehrwertsteuer von 19%.</p>
              <p>Wir versenden jeden Montag, Mittwoch und Freitag.</p>
              <p>Die Versandkosten werden Ihnen im Warenkorbsystem und auf der Bestellseite nochmals deutlich
                mitgeteilt.</p>
              <p><strong>Ab einem Warenkorbwert von 75 Euro (deutsche Lieferadresse) bzw. 120 € (weltweite
                Lieferadresse) entfallen die Versandkosten.</strong></p>
            </div>
          </div>
        </Typography>
      </Fragment>
    );
  }
}

export default Versandkosten;
