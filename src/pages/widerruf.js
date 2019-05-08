// Created by Andre Machon 20/03/2019
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import Helmet from "react-helmet";
import Typography from "@material-ui/core/Typography";

@inject("routingStore")
@observer
class Widerruf extends Component {
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
          <div style={{marginRight: "8em", marginLeft: "8em"}}>
            <h1>Widerrufsbelehrung &amp; Widerrufsformular</h1>

          <p>Verbrauchern steht ein Widerrufsrecht nach folgender Ma&szlig;gabe zu, wobei Verbraucher jede
            nat&uuml;rliche Person ist, die ein Rechtsgesch&auml;ft zu Zwecken abschlie&szlig;t, die &uuml;berwiegend
            weder ihrer gewerblichen noch ihrer selbst&auml;ndigen beruflichen T&auml;tigkeit zugerechnet werden
            k&ouml;nnen:</p>

          <h2>A. Widerrufsbelehrung</h2>

          <h3>Widerrufsrecht</h3>

          <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gr&uuml;nden diesen Vertrag zu widerrufen.</p>

          <p>Die Widerrufsfrist betr&auml;gt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter,
            der nicht der Bef&ouml;rderer ist, die letzte Ware in Besitz genommen haben bzw. hat.</p>

          <p>Um Ihr Widerrufsrecht auszu&uuml;ben, m&uuml;ssen Sie uns (Helen Schondorff, Birresborner Strasse 41, 50935
            K&ouml;ln, Deutschland, Tel.: 0049 157 83054821, E-Mail: kontakt@anton-und-sophie.de) mittels einer
            eindeutigen Erkl&auml;rung (z. B. ein mit der Post versandter Brief oder E-Mail) &uuml;ber Ihren Entschluss,
            diesen Vertrag zu widerrufen, informieren. Sie k&ouml;nnen daf&uuml;r das beigef&uuml;gte
            Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>

          <p>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung &uuml;ber die Aus&uuml;bung des
            Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p>

          <h3>Folgen des Widerrufs</h3>

          <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben,
            einschlie&szlig;lich der Lieferkosten (mit Ausnahme der zus&auml;tzlichen Kosten, die sich daraus ergeben,
            dass Sie eine andere Art der Lieferung als die von uns angebotene, g&uuml;nstigste Standardlieferung
            gew&auml;hlt haben), unverz&uuml;glich und sp&auml;testens binnen vierzehn Tagen ab dem Tag
            zur&uuml;ckzuzahlen, an dem die Mitteilung &uuml;ber Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
            F&uuml;r diese R&uuml;ckzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der urspr&uuml;nglichen
            Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdr&uuml;cklich etwas anderes vereinbart; in
            keinem Fall werden Ihnen wegen dieser R&uuml;ckzahlung Entgelte berechnet. Wir k&ouml;nnen die
            R&uuml;ckzahlung verweigern, bis wir die Waren wieder zur&uuml;ckerhalten haben oder bis Sie den Nachweis
            erbracht haben, dass Sie die Waren zur&uuml;ckgesandt haben, je nachdem, welches der fr&uuml;here Zeitpunkt
            ist.</p>

          <p>Sie haben die Waren unverz&uuml;glich und in jedem Fall sp&auml;testens binnen vierzehn Tagen ab dem Tag,
            an dem Sie uns &uuml;ber den Widerruf dieses Vertrags unterrichten, an uns zur&uuml;ckzusenden oder
            zu &uuml;bergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen
            absenden.</p>

          <p>Sie tragen die unmittelbaren Kosten der R&uuml;cksendung der Waren.</p>

          <p>Sie m&uuml;ssen f&uuml;r einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf
            einen zur Pr&uuml;fung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen
            Umgang mit ihnen zur&uuml;ckzuf&uuml;hren ist.</p>

          <h3>Ausschluss bzw. vorzeitiges Erl&ouml;schen des Widerrufsrechts</h3>

          <p>Das Widerrufsrecht besteht nicht bei Vertr&auml;gen zur Lieferung von Waren, die nicht vorgefertigt sind
            und f&uuml;r deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher
            ma&szlig;geblich ist oder die eindeutig auf die pers&ouml;nlichen Bed&uuml;rfnisse des Verbrauchers
            zugeschnitten sind.</p>

          <p>Das Widerrufsrecht gilt nicht f&uuml;r Verbraucher, die zum Zeitpunkt des Vertragsschlusses keinem
            Mitgliedstaat der Europ&auml;ischen Union angeh&ouml;ren und deren alleiniger Wohnsitz und Lieferadresse zum
            Zeitpunkt des Vertragsschlusses au&szlig;erhalb der Europ&auml;ischen Union liegen.</p>

          <h3>Allgemeine Hinweise</h3>

          <p>1) Bitte vermeiden Sie Besch&auml;digungen und Verunreinigungen der Ware. Senden Sie die Ware bitte in
            Originalverpackung mit s&auml;mtlichem Zubeh&ouml;r und mit allen Verpackungsbestandteilen an uns
            zur&uuml;ck. Verwenden Sie ggf. eine sch&uuml;tzende Umverpackung. Wenn Sie die Originalverpackung nicht
            mehr besitzen, sorgen Sie bitte mit einer geeigneten Verpackung f&uuml;r einen ausreichenden Schutz vor
            Transportsch&auml;den.<br/>
            2) Senden Sie die Ware bitte nicht unfrei an uns zur&uuml;ck.<br/>
            3) Bitte beachten Sie, dass die vorgenannten Ziffern 1-2 nicht Voraussetzung f&uuml;r die wirksame
            Aus&uuml;bung des Widerrufsrechts sind.</p>

          <h2>B. Widerrufsformular</h2>

          <p>Wenn Sie den Vertrag widerrufen wollen, dann f&uuml;llen Sie bitte dieses Formular aus und senden es
            zur&uuml;ck.</p>

          <p>An</p>

          <p>Helen Schondorff<br/>
            Birresborner Strasse 41<br/>
            50935 K&ouml;ln<br/>
            Deutschland<br/>
            E-Mail: kontakt@anton-und-sophie.de</p>

          <p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag &uuml;ber den Kauf der
            folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)</p>

          <p>_______________________________________________________</p>

          <p>_______________________________________________________</p>

          <p>Bestellt am (*) ____________ / erhalten am (*) __________________</p>

          <p>________________________________________________________<br/>
            Name des/der Verbraucher(s)</p>

          <p>________________________________________________________<br/>
            Anschrift des/der Verbraucher(s)</p>

          <p>________________________________________________________<br/>
            Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</p>

          <p>_________________________<br/>
            Datum</p>

          <p>(*) Unzutreffendes streichen</p>
          </div>
        </Typography>
      </Fragment>
    );
  }
}

export default Widerruf;
