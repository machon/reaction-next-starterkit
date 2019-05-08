// Created by Andre Machon 16/03/2019
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import Helmet from "react-helmet";
import Typography from "@material-ui/core/Typography";

@inject("routingStore")
@observer
class About extends Component {
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
            <h1>Allgemeine Gesch&auml;ftsbedingungen mit Kundeninformationen</h1>

          <h2>Inhaltsverzeichnis</h2>
          <ol>
            <li>Geltungsbereich</li>
            <li>Vertragsschluss</li>
            <li>Widerrufsrecht</li>
            <li>Preise und Zahlungsbedingungen</li>
            <li>Liefer- und Versandbedingungen</li>
            <li>Eigentumsvorbehalt</li>
            <li>M&auml;ngelhaftung (Gew&auml;hrleistung)</li>
            <li>Besondere Bedingungen f&uuml;r die Verarbeitung von Waren nach bestimmten Vorgaben des Kunden</li>
            <li>Einl&ouml;sung von Aktionsgutscheinen</li>
            <li>Einl&ouml;sung von Geschenkgutscheinen</li>
            <li>Anwendbares Recht</li>
            <li>Alternative Streitbeilegung</li>
          </ol>

          <h2>1) Geltungsbereich</h2>

          <p><b>1.1</b>&thinsp;Diese Allgemeinen Gesch&auml;ftsbedingungen (nachfolgend &quot;AGB&quot;) der Helen
            Schondorff (nachfolgend &quot;Verk&auml;ufer&quot;), gelten f&uuml;r alle Vertr&auml;ge &uuml;ber die
            Lieferung von Waren, die ein Verbraucher oder Unternehmer (nachfolgend &bdquo;Kunde&ldquo;) mit dem
            Verk&auml;ufer hinsichtlich der vom Verk&auml;ufer in seinem Online-Shop dargestellten Waren
            abschlie&szlig;t. Hiermit wird der Einbeziehung von eigenen Bedingungen des Kunden widersprochen, es sei
            denn, es ist etwas anderes vereinbart.</p>

          <p><b>1.2</b>&thinsp;F&uuml;r Vertr&auml;ge &uuml;ber die Lieferung von Gutscheinen gelten diese AGB
            entsprechend, sofern insoweit nicht ausdr&uuml;cklich etwas Abweichendes geregelt ist.</p>

          <p><b>1.3</b>&thinsp;Verbraucher im Sinne dieser AGB ist jede nat&uuml;rliche Person, die ein
            Rechtsgesch&auml;ft zu Zwecken abschlie&szlig;t, die &uuml;berwiegend weder ihrer gewerblichen noch ihrer
            selbst&auml;ndigen beruflichen T&auml;tigkeit zugerechnet werden k&ouml;nnen. Unternehmer im Sinne dieser
            AGB ist eine nat&uuml;rliche oder juristische Person oder eine rechtsf&auml;hige Personengesellschaft, die
            bei Abschluss eines Rechtsgesch&auml;fts in Aus&uuml;bung ihrer gewerblichen oder selbst&auml;ndigen
            beruflichen T&auml;tigkeit handelt.</p>

          <h2>2) Vertragsschluss</h2>

          <p><b>2.1</b>&thinsp;Die im Online-Shop des Verk&auml;ufers enthaltenen Produktbeschreibungen stellen keine
            verbindlichen Angebote seitens des Verk&auml;ufers dar, sondern dienen zur Abgabe eines verbindlichen
            Angebots durch den Kunden.</p>

          <p><b>2.2</b>&thinsp;Der Kunde kann das Angebot &uuml;ber das in den Online-Shop des Verk&auml;ufers
            integrierte Online-Bestellformular abgeben. Dabei gibt der Kunde, nachdem er die ausgew&auml;hlten Waren in
            den virtuellen Warenkorb gelegt und den elektronischen Bestellprozess durchlaufen hat, durch Klicken des den
            Bestellvorgang abschlie&szlig;enden Buttons ein rechtlich verbindliches Vertragsangebot in Bezug auf die im
            Warenkorb enthaltenen Waren ab.</p>

          <p><b>2.3</b>&thinsp;Der Verk&auml;ufer kann das Angebot des Kunden innerhalb von f&uuml;nf Tagen annehmen,
          </p>

          <ul>
            <li>indem er dem Kunden eine schriftliche Auftragsbest&auml;tigung oder eine Auftragsbest&auml;tigung in
              Textform (Fax oder E-Mail) &uuml;bermittelt, wobei insoweit der Zugang der Auftragsbest&auml;tigung beim
              Kunden ma&szlig;geblich ist, oder
            </li>
            <li>indem er dem Kunden die bestellte Ware liefert, wobei insoweit der Zugang der Ware beim Kunden
              ma&szlig;geblich ist, oder
            </li>
            <li>indem er den Kunden nach Abgabe von dessen Bestellung zur Zahlung auffordert.</li>
          </ul>

          <p>Liegen mehrere der vorgenannten Alternativen vor, kommt der Vertrag in dem Zeitpunkt zustande, in dem eine
            der vorgenannten Alternativen zuerst eintritt. Die Frist zur Annahme des Angebots beginnt am Tag nach der
            Absendung des Angebots durch den Kunden zu laufen und endet mit dem Ablauf des f&uuml;nften Tages, welcher
            auf die Absendung des Angebots folgt. Nimmt der Verk&auml;ufer das Angebot des Kunden innerhalb vorgenannter
            Frist nicht an, so gilt dies als Ablehnung des Angebots mit der Folge, dass der Kunde nicht mehr an seine
            Willenserkl&auml;rung gebunden ist.</p>

          <p><b>2.4</b>&thinsp;Bei der Abgabe eines Angebots &uuml;ber das Online-Bestellformular des Verk&auml;ufers
            wird der Vertragstext nach dem Vertragsschluss vom Verk&auml;ufer gespeichert und dem Kunden nach Absendung
            von dessen Bestellung in Textform (z. B. E-Mail, Fax oder Brief) &uuml;bermittelt. Eine dar&uuml;ber
            hinausgehende Zug&auml;nglichmachung des Vertragstextes durch den Verk&auml;ufer erfolgt nicht. Sofern der
            Kunde vor Absendung seiner Bestellung ein Nutzerkonto im Online-Shop des Verk&auml;ufers eingerichtet hat,
            werden die Bestelldaten auf der Website des Verk&auml;ufers archiviert und k&ouml;nnen vom Kunden &uuml;ber
            dessen passwortgesch&uuml;tztes Nutzerkonto unter Angabe der entsprechenden Login-Daten kostenlos abgerufen
            werden.</p>

          <p><b>2.5</b>&thinsp;Vor verbindlicher Abgabe der Bestellung &uuml;ber das Online-Bestellformular des
            Verk&auml;ufers kann der Kunde m&ouml;gliche Eingabefehler durch aufmerksames Lesen der auf dem Bildschirm
            dargestellten Informationen erkennen. Ein wirksames technisches Mittel zur besseren Erkennung von
            Eingabefehlern kann dabei die Vergr&ouml;&szlig;erungsfunktion des Browsers sein, mit deren Hilfe die
            Darstellung auf dem Bildschirm vergr&ouml;&szlig;ert wird. Seine Eingaben kann der Kunde im Rahmen des
            elektronischen Bestellprozesses so lange &uuml;ber die &uuml;blichen Tastatur- und Mausfunktionen
            korrigieren, bis er den den Bestellvorgang abschlie&szlig;enden Button anklickt.</p>

          <p><b>2.6</b>&thinsp;F&uuml;r den Vertragsschluss steht ausschlie&szlig;lich die deutsche Sprache zur
            Verf&uuml;gung.</p>

          <p><b>2.7</b>&thinsp;Die Bestellabwicklung und Kontaktaufnahme finden in der Regel per E-Mail und
            automatisierter Bestellabwicklung statt. Der Kunde hat sicherzustellen, dass die von ihm zur
            Bestellabwicklung angegebene E-Mail-Adresse zutreffend ist, so dass unter dieser Adresse die vom
            Verk&auml;ufer versandten E-Mails empfangen werden k&ouml;nnen. Insbesondere hat der Kunde bei dem Einsatz
            von SPAM-Filtern sicherzustellen, dass alle vom Verk&auml;ufer oder von diesem mit der Bestellabwicklung
            beauftragten Dritten versandten E-Mails zugestellt werden k&ouml;nnen.</p>

          <h2>3) Widerrufsrecht</h2>

          <p><b>3.1</b>&thinsp;Verbrauchern steht grunds&auml;tzlich ein Widerrufsrecht zu.</p>

          <p><b>3.2</b>&thinsp;N&auml;here Informationen zum Widerrufsrecht ergeben sich aus der Widerrufsbelehrung des
            Verk&auml;ufers.</p>

          <h2>4) Preise und Zahlungsbedingungen</h2>

          <p><b>4.1</b>&thinsp;Sofern sich aus der Produktbeschreibung des Verk&auml;ufers nichts anderes ergibt,
            handelt es sich bei den angegebenen Preisen um Gesamtpreise, die die gesetzliche Umsatzsteuer enthalten.
            Gegebenenfalls zus&auml;tzlich anfallende Liefer- und Versandkosten werden in der jeweiligen
            Produktbeschreibung gesondert angegeben.</p>

          <p><b>4.2</b>&thinsp;Bei Lieferungen in L&auml;nder au&szlig;erhalb der Europ&auml;ischen Union k&ouml;nnen im
            Einzelfall weitere Kosten anfallen, die der Verk&auml;ufer nicht zu vertreten hat und die vom Kunden zu
            tragen sind. Hierzu z&auml;hlen beispielsweise Kosten f&uuml;r die Geld&uuml;bermittlung durch
            Kreditinstitute (z.B. &Uuml;berweisungsgeb&uuml;hren, Wechselkursgeb&uuml;hren) oder einfuhrrechtliche
            Abgaben bzw. Steuern (z.B. Z&ouml;lle). Solche Kosten k&ouml;nnen in Bezug auf die Geld&uuml;bermittlung
            auch dann anfallen, wenn die Lieferung nicht in ein Land au&szlig;erhalb der Europ&auml;ischen Union
            erfolgt, der Kunde die Zahlung aber von einem Land au&szlig;erhalb der Europ&auml;ischen Union aus vornimmt.
          </p>

          <p><b>4.3</b>&thinsp;Die Zahlungsm&ouml;glichkeit/en wird/werden dem Kunden im Online-Shop des Verk&auml;ufers
            mitgeteilt.</p>

          <p><b>4.4</b>&thinsp;Ist Vorauskasse per Bank&uuml;berweisung vereinbart, ist die Zahlung sofort nach
            Vertragsabschluss f&auml;llig, sofern die Parteien keinen sp&auml;teren F&auml;lligkeitstermin vereinbart
            haben.</p>

          <p><b>4.5</b>&thinsp;Bei Zahlung mittels einer von PayPal angebotenen Zahlungsart erfolgt die
            Zahlungsabwicklung &uuml;ber den Zahlungsdienstleister PayPal (Europe) S.&agrave; r.l. et Cie, S.C.A., 22-24
            Boulevard Royal, L-2449 Luxembourg (im Folgenden: &quot;PayPal&quot;), unter Geltung der
            PayPal-Nutzungsbedingungen, einsehbar unter https://www.paypal.com/de/webapps/mpp/ua/useragreement-full oder
            - falls der Kunde nicht &uuml;ber ein PayPal-Konto verf&uuml;gt &ndash; unter Geltung der Bedingungen
            f&uuml;r Zahlungen ohne PayPal-Konto, einsehbar unter
            https://www.paypal.com/de/webapps/mpp/ua/privacywax-full.</p>

          <h2>5) Liefer- und Versandbedingungen</h2>

          <p><b>5.1</b>&thinsp;Die Lieferung von Waren erfolgt auf dem Versandweg an die vom Kunden angegebene
            Lieferanschrift, sofern nichts anderes vereinbart ist. Bei der Abwicklung der Transaktion ist die in der
            Bestellabwicklung des Verk&auml;ufers angegebene Lieferanschrift ma&szlig;geblich.</p>

          <p><b>5.2</b>&thinsp;Sendet das Transportunternehmen die versandte Ware an den Verk&auml;ufer zur&uuml;ck, da
            eine Zustellung beim Kunden nicht m&ouml;glich war, tr&auml;gt der Kunde die Kosten f&uuml;r den erfolglosen
            Versand. Dies gilt nicht, wenn der Kunde den Umstand, der zur Unm&ouml;glichkeit der Zustellung gef&uuml;hrt
            hat, nicht zu vertreten hat oder wenn er vor&uuml;bergehend an der Annahme der angebotenen Leistung
            verhindert war, es sei denn, dass der Verk&auml;ufer ihm die Leistung eine angemessene Zeit vorher
            angek&uuml;ndigt hatte. Ferner gilt dies im Hinblick auf die Kosten f&uuml;r die Hinsendung nicht, wenn der
            Kunde sein Widerrufsrecht wirksam aus&uuml;bt. F&uuml;r die R&uuml;cksendekosten gilt bei wirksamer
            Aus&uuml;bung des Widerrufsrechts durch den Kunden die in der Widerrufsbelehrung des Verk&auml;ufers hierzu
            getroffene Regelung.</p>

          <p><b>5.3</b>&thinsp;Bei Selbstabholung informiert der Verk&auml;ufer den Kunden zun&auml;chst per E-Mail
            dar&uuml;ber, dass die von ihm bestellte Ware zur Abholung bereit steht. Nach Erhalt dieser E-Mail kann der
            Kunde die Ware nach Absprache mit dem Verk&auml;ufer am Sitz des Verk&auml;ufers abholen. In diesem Fall
            werden keine Versandkosten berechnet.</p>

          <p><b>5.4</b>&thinsp;Gutscheine werden dem Kunden wie folgt &uuml;berlassen:</p>

          <ul>
            <li>per E-Mail</li>
            <li>postalisch</li>
          </ul>

          <h2>6) Eigentumsvorbehalt</h2>

          <p>Tritt der Verk&auml;ufer in Vorleistung, beh&auml;lt er sich bis zur vollst&auml;ndigen Bezahlung des
            geschuldeten Kaufpreises das Eigentum an der gelieferten Ware vor.</p>

          <h2>7) M&auml;ngelhaftung (Gew&auml;hrleistung)</h2>

          <p><b>7.1</b>&thinsp;Ist die Kaufsache mangelhaft, gelten die Vorschriften der gesetzlichen
            M&auml;ngelhaftung.</p>

          <p><b>7.2</b>&thinsp;Der Kunde wird gebeten, angelieferte Waren mit offensichtlichen Transportsch&auml;den bei
            dem Zusteller zu reklamieren und den Verk&auml;ufer hiervon in Kenntnis zu setzen. Kommt der Kunde dem nicht
            nach, hat dies keinerlei Auswirkungen auf seine gesetzlichen oder vertraglichen M&auml;ngelanspr&uuml;che.
          </p>

          <h2>8) Besondere Bedingungen f&uuml;r die Verarbeitung von Waren nach bestimmten Vorgaben des Kunden</h2>

          <p><b>8.1</b>&thinsp;Schuldet der Verk&auml;ufer nach dem Inhalt des Vertrages neben der Warenlieferung auch
            die Verarbeitung der Ware nach bestimmten Vorgaben des Kunden, hat der Kunde dem Betreiber alle f&uuml;r die
            Verarbeitung erforderlichen Inhalte wie Texte, Bilder oder Grafiken in den vom Betreiber vorgegebenen
            Dateiformaten, Formatierungen, Bild- und Dateigr&ouml;&szlig;en zur Verf&uuml;gung zu stellen und ihm die
            hierf&uuml;r erforderlichen Nutzungsrechte einzur&auml;umen. F&uuml;r die Beschaffung und den Rechteerwerb
            an diesen Inhalten ist allein der Kunde verantwortlich. Der Kunde erkl&auml;rt und &uuml;bernimmt die
            Verantwortung daf&uuml;r, dass er das Recht besitzt, die dem Verk&auml;ufer &uuml;berlassenen Inhalte zu
            nutzen. Er tr&auml;gt insbesondere daf&uuml;r Sorge, dass hierdurch keine Rechte Dritter verletzt werden,
            insbesondere Urheber-, Marken- und Pers&ouml;nlichkeitsrechte.</p>

          <p><b>8.2</b>&thinsp;Der Kunde stellt den Verk&auml;ufer von Anspr&uuml;chen Dritter frei, die diese im
            Zusammenhang mit einer Verletzung ihrer Rechte durch die vertragsgem&auml;&szlig;e Nutzung der Inhalte des
            Kunden durch den Verk&auml;ufer diesem gegen&uuml;ber geltend machen k&ouml;nnen. Der Kunde &uuml;bernimmt
            hierbei auch die angemessenen Kosten der notwendigen Rechtsverteidigung einschlie&szlig;lich aller Gerichts-
            und Anwaltskosten in gesetzlicher H&ouml;he. Dies gilt nicht, wenn die Rechtsverletzung vom Kunden nicht zu
            vertreten ist. Der Kunde ist verpflichtet, dem Verk&auml;ufer im Falle einer Inanspruchnahme durch Dritte
            unverz&uuml;glich, wahrheitsgem&auml;&szlig; und vollst&auml;ndig alle Informationen zur Verf&uuml;gung zu
            stellen, die f&uuml;r die Pr&uuml;fung der Anspr&uuml;che und eine Verteidigung erforderlich sind.</p>

          <p><b>8.3</b>&thinsp;Der Verk&auml;ufer beh&auml;lt sich vor, Verarbeitungsauftr&auml;ge abzulehnen, wenn die
            vom Kunden hierf&uuml;r &uuml;berlassenen Inhalte gegen gesetzliche oder beh&ouml;rdliche Verbote oder gegen
            die guten Sitten versto&szlig;en. Dies gilt insbesondere bei &Uuml;berlassung verfassungsfeindlicher,
            rassistischer, fremdenfeindlicher, diskriminierender, beleidigender, Jugend gef&auml;hrdender und/oder
            Gewalt verherrlichender Inhalte.</p>

          <h2>9) Einl&ouml;sung von Aktionsgutscheinen</h2>

          <p><b>9.1</b>&thinsp;Gutscheine, die vom Verk&auml;ufer im Rahmen von Werbeaktionen mit einer bestimmten
            G&uuml;ltigkeitsdauer unentgeltlich ausgegeben werden und die vom Kunden nicht k&auml;uflich erworben werden
            k&ouml;nnen (nachfolgend &quot;Aktionsgutscheine&quot;), k&ouml;nnen nur im Online-Shop des Verk&auml;ufers
            und nur im angegebenen Zeitraum eingel&ouml;st werden.</p>

          <p><b>9.2</b>&thinsp;Aktionsgutscheine k&ouml;nnen nur von Verbrauchern eingel&ouml;st werden.</p>

          <p><b>9.3</b>&thinsp;Einzelne Produkte k&ouml;nnen von der Gutscheinaktion ausgeschlossen sein, sofern sich
            eine entsprechende Einschr&auml;nkung aus dem Inhalt des Aktionsgutscheins ergibt.</p>

          <p><b>9.4</b>&thinsp;Aktionsgutscheine k&ouml;nnen nur vor Abschluss des Bestellvorgangs eingel&ouml;st
            werden. Eine nachtr&auml;gliche Verrechnung ist nicht m&ouml;glich.</p>

          <p><b>9.5</b>&thinsp;Pro Bestellung kann immer nur ein Aktionsgutschein eingel&ouml;st werden.</p>

          <p><b>9.6</b>&thinsp;Der Warenwert muss mindestens dem Betrag des Aktionsgutscheins entsprechen. Etwaiges
            Restguthaben wird vom Verk&auml;ufer nicht erstattet.</p>

          <p><b>9.7</b>&thinsp;Reicht der Wert des Aktionsgutscheins zur Deckung der Bestellung nicht aus, kann zur
            Begleichung des Differenzbetrages eine der &uuml;brigen vom Verk&auml;ufer angebotenen Zahlungsarten
            gew&auml;hlt werden.</p>

          <p><b>9.8</b>&thinsp;Das Guthaben eines Aktionsgutscheins wird weder in Bargeld ausgezahlt noch verzinst.</p>

          <p><b>9.9</b>&thinsp;Der Aktionsgutschein wird nicht erstattet, wenn der Kunde die mit dem Aktionsgutschein
            ganz oder teilweise bezahlte Ware im Rahmen seines gesetzlichen Widerrufsrechts zur&uuml;ckgibt.</p>

          <p><b>9.10</b>&thinsp;Der Aktionsgutschein ist &uuml;bertragbar. Der Verk&auml;ufer kann mit befreiender
            Wirkung an den jeweiligen Inhaber, der den Aktionsgutschein im Online-Shop des Verk&auml;ufers einl&ouml;st,
            leisten. Dies gilt nicht, wenn der Verk&auml;ufer Kenntnis oder grob fahrl&auml;ssige Unkenntnis von der
            Nichtberechtigung, der Gesch&auml;ftsunf&auml;higkeit oder der fehlenden Vertretungsberechtigung des
            jeweiligen Inhabers hat.</p>

          <h2>10) Einl&ouml;sung von Geschenkgutscheinen</h2>

          <p><b>10.1</b>&thinsp;Gutscheine, die &uuml;ber den Online-Shop des Verk&auml;ufers k&auml;uflich erworben
            werden k&ouml;nnen (nachfolgend &quot;Geschenkgutscheine&quot;), k&ouml;nnen nur im Online-Shop des
            Verk&auml;ufers eingel&ouml;st werden, sofern sich aus dem Gutschein nichts anderes ergibt.</p>

          <p><b>10.2</b>&thinsp;Geschenkgutscheine und Restguthaben von Geschenkgutscheinen sind bis zum Ende des
            dritten Jahres nach dem Jahr des Gutscheinkaufs einl&ouml;sbar. Restguthaben werden dem Kunden bis zum
            Ablaufdatum gutgeschrieben.</p>

          <p><b>10.3</b>&thinsp;Geschenkgutscheine k&ouml;nnen nur vor Abschluss des Bestellvorgangs eingel&ouml;st
            werden. Eine nachtr&auml;gliche Verrechnung ist nicht m&ouml;glich.</p>

          <p><b>10.4</b>&thinsp;Pro Bestellung kann immer nur ein Geschenkgutschein eingel&ouml;st werden.</p>

          <p><b>10.5</b>&thinsp;Geschenkgutscheine k&ouml;nnen nur f&uuml;r den Kauf von Waren und nicht f&uuml;r den
            Kauf von weiteren Geschenkgutscheinen verwendet werden.</p>

          <p><b>10.6</b>&thinsp;Reicht der Wert des Geschenkgutscheins zur Deckung der Bestellung nicht aus, kann zur
            Begleichung des Differenzbetrages eine der &uuml;brigen vom Verk&auml;ufer angebotenen Zahlungsarten
            gew&auml;hlt werden.</p>

          <p><b>10.7</b>&thinsp;Das Guthaben eines Geschenkgutscheins wird weder in Bargeld ausgezahlt noch verzinst.
          </p>

          <p><b>10.8</b>&thinsp;Der Geschenkgutschein ist &uuml;bertragbar. Der Verk&auml;ufer kann mit befreiender
            Wirkung an den jeweiligen Inhaber, der den Geschenkgutschein im Online-Shop des Verk&auml;ufers
            einl&ouml;st, leisten. Dies gilt nicht, wenn der Verk&auml;ufer Kenntnis oder grob fahrl&auml;ssige
            Unkenntnis von der Nichtberechtigung, der Gesch&auml;ftsunf&auml;higkeit oder der fehlenden
            Vertretungsberechtigung des jeweiligen Inhabers hat.</p>

          <h2>11) Anwendbares Recht</h2>

          <p>F&uuml;r s&auml;mtliche Rechtsbeziehungen der Parteien gilt das Recht der Bundesrepublik Deutschland unter
            Ausschluss der Gesetze &uuml;ber den internationalen Kauf beweglicher Waren. Bei Verbrauchern gilt diese
            Rechtswahl nur insoweit, als nicht der gew&auml;hrte Schutz durch zwingende Bestimmungen des Rechts des
            Staates, in dem der Verbraucher seinen gew&ouml;hnlichen Aufenthalt hat, entzogen wird.</p>

          <h2>12) Alternative Streitbeilegung</h2>

          <p><b>12.1</b>&thinsp;Die EU-Kommission stellt im Internet unter folgendem Link eine Plattform zur
            Online-Streitbeilegung bereit: https://ec.europa.eu/consumers/odr</p>

          <p>Diese Plattform dient als Anlaufstelle zur au&szlig;ergerichtlichen Beilegung von Streitigkeiten aus
            Online-Kauf- oder Dienstleistungsvertr&auml;gen, an denen ein Verbraucher beteiligt ist.</p>

          <p><b>12.2</b>&thinsp;Der Verk&auml;ufer ist zur Teilnahme an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle weder verpflichtet noch bereit.</p>
          </div>
        </Typography>
      </Fragment>
    );
  }
}

export default About;
