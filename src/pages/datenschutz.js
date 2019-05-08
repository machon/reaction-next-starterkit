// Created by Andre Machon 19/03/2019
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import Helmet from "react-helmet";
import Typography from "@material-ui/core/Typography";

@inject("routingStore")
@observer
class Datenschutz extends Component {
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
        <Typography variant='body1'>
          <div style={{marginRight: "8em", marginLeft: "8em"}}>
            <h1>Datenschutzerkl&auml;rung</h1>

          <h2>1) Information &uuml;ber die Erhebung personenbezogener Daten und Kontaktdaten des Verantwortlichen</h2>

          <p><b>1.1</b>&thinsp;Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns f&uuml;r Ihr Interesse.
            Im Folgenden informieren wir Sie &uuml;ber den Umgang mit Ihren personenbezogenen Daten bei Nutzung unserer
            Website. Personenbezogene Daten sind hierbei alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden
            k&ouml;nnen.</p>

          <p><b>1.2</b>&thinsp;Verantwortlicher f&uuml;r die Datenverarbeitung auf dieser Website im Sinne der
            Datenschutz-Grundverordnung (DSGVO) ist Helen Schondorff, Birresborner Strasse 41, 50935 K&ouml;ln,
            Deutschland, Tel.: 0049 157 83054821, E-Mail: kontakt@anton-und-sophie.de. Der f&uuml;r die Verarbeitung von
            personenbezogenen Daten Verantwortliche ist diejenige nat&uuml;rliche oder juristische Person, die allein
            oder gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
            entscheidet.</p>

          <p><b>1.3</b>&thinsp;Diese Website nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung
            personenbezogener Daten und anderer vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an den
            Verantwortlichen) eine SSL-bzw. TLS-Verschl&uuml;sselung. Sie k&ouml;nnen eine verschl&uuml;sselte
            Verbindung an der Zeichenfolge &bdquo;https://&ldquo; und dem Schloss-Symbol in Ihrer Browserzeile erkennen.
          </p>

          <h2>2) Datenerfassung beim Besuch unserer Website</h2>

          <p>Bei der blo&szlig; informatorischen Nutzung unserer Website, also wenn Sie sich nicht registrieren oder uns
            anderweitig Informationen &uuml;bermitteln, erheben wir nur solche Daten, die Ihr Browser an unseren
            Server &uuml;bermittelt (sog. &bdquo;Server-Logfiles&ldquo;). Wenn Sie unsere Website aufrufen, erheben wir
            die folgenden Daten, die f&uuml;r uns technisch erforderlich sind, um Ihnen die Website anzuzeigen:</p>

          <ul>
            <li>Unsere besuchte Website</li>
            <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
            <li>Menge der gesendeten Daten in Byte</li>
            <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
            <li>Verwendeter Browser</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
          </ul>

          <p>Die Verarbeitung erfolgt gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten
            Interesses an der Verbesserung der Stabilit&auml;t und Funktionalit&auml;t unserer Website. Eine Weitergabe
            oder anderweitige Verwendung der Daten findet nicht statt. Wir behalten uns allerdings vor, die
            Server-Logfiles nachtr&auml;glich zu &uuml;berpr&uuml;fen, sollten konkrete Anhaltspunkte auf eine
            rechtswidrige Nutzung hinweisen.</p>

          <h2>3) Cookies</h2>

          <p>Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu
            erm&ouml;glichen, verwenden wir auf verschiedenen Seiten sogenannte Cookies. Hierbei handelt es sich um
            kleine Textdateien, die auf Ihrem Endger&auml;t abgelegt werden. Einige der von uns verwendeten Cookies
            werden nach dem Ende der Browser-Sitzung, also nach Schlie&szlig;en Ihres Browsers, wieder gel&ouml;scht
            (sog. Sitzungs-Cookies). Andere Cookies verbleiben auf Ihrem Endger&auml;t und erm&ouml;glichen uns oder
            unseren Partnerunternehmen (Cookies von Drittanbietern), Ihren Browser beim n&auml;chsten Besuch
            wiederzuerkennen (persistente Cookies). Werden Cookies gesetzt, erheben und verarbeiten diese im
            individuellen Umfang bestimmte Nutzerinformationen wie Browser- und Standortdaten sowie IP-Adresswerte.
            Persistente Cookies werden automatisiert nach einer vorgegebenen Dauer gel&ouml;scht, die sich je nach
            Cookie unterscheiden kann.</p>

          <p>Teilweise dienen die Cookies dazu, durch Speicherung von Einstellungen den Bestellprozess zu vereinfachen
            (z.B. Merken des Inhalts eines virtuellen Warenkorbs f&uuml;r einen sp&auml;teren Besuch auf der Website).
            Sofern durch einzelne von uns implementierte Cookies auch personenbezogene Daten verarbeitet werden, erfolgt
            die Verarbeitung gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchf&uuml;hrung des Vertrages
            oder gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer berechtigten Interessen an der
            bestm&ouml;glichen Funktionalit&auml;t der Website sowie einer kundenfreundlichen und effektiven
            Ausgestaltung des Seitenbesuchs.</p>

          <p>Wir arbeiten unter Umst&auml;nden mit Werbepartnern zusammen, die uns helfen, unser Internetangebot
            f&uuml;r Sie interessanter zu gestalten. Zu diesem Zweck werden f&uuml;r diesen Fall bei Ihrem Besuch
            unserer Website auch Cookies von Partnerunternehmen auf Ihrer Festplatte gespeichert (Cookies von
            Drittanbietern). Wenn wir mit vorbenannten Werbepartnern zusammenarbeiten, werden Sie &uuml;ber den Einsatz
            derartiger Cookies und den Umfang der jeweils erhobenen Informationen innerhalb der nachstehenden
            Abs&auml;tze individuell und gesondert informiert.</p>

          <p>Bitte beachten Sie, dass Sie Ihren Browser so einstellen k&ouml;nnen, dass Sie &uuml;ber das Setzen von
            Cookies informiert werden und einzeln &uuml;ber deren Annahme entscheiden oder die Annahme von Cookies
            f&uuml;r bestimmte F&auml;lle oder generell ausschlie&szlig;en k&ouml;nnen. Jeder Browser unterscheidet sich
            in der Art, wie er die Cookie-Einstellungen verwaltet. Diese ist in dem Hilfemen&uuml; jedes Browsers
            beschrieben, welches Ihnen erl&auml;utert, wie Sie Ihre Cookie-Einstellungen &auml;ndern k&ouml;nnen. Diese
            finden Sie f&uuml;r die jeweiligen Browser unter den folgenden Links:</p>

          <p>Internet Explorer:
            https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies<br/>
            Firefox: https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen<br/>
            Chrome: https://support.google.com/chrome/answer/95647?hl=de&amp;hlrm=en<br/>
            Safari: https://support.apple.com/de-de/guide/safari/sfri11471/mac<br/>
            Opera: https://help.opera.com/en/latest/web-preferences/#cookies</p>

          <p>Bitte beachten Sie, dass bei Nichtannahme von Cookies die Funktionalit&auml;t unserer Website
            eingeschr&auml;nkt sein kann.</p>

          <h2>4) Kontaktaufnahme</h2>

          <p>Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden personenbezogene Daten
            erhoben. Welche Daten im Falle eines Kontaktformulars erhoben werden, ist aus dem jeweiligen Kontaktformular
            ersichtlich. Diese Daten werden ausschlie&szlig;lich zum Zweck der Beantwortung Ihres Anliegens bzw.
            f&uuml;r die Kontaktaufnahme und die damit verbundene technische Administration gespeichert und verwendet.
            Rechtsgrundlage f&uuml;r die Verarbeitung der Daten ist unser berechtigtes Interesse an der Beantwortung
            Ihres Anliegens gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf den Abschluss
            eines Vertrages ab, so ist zus&auml;tzliche Rechtsgrundlage f&uuml;r die Verarbeitung Art. 6 Abs. 1 lit. b
            DSGVO. Ihre Daten werden nach abschlie&szlig;ender Bearbeitung Ihrer Anfrage gel&ouml;scht, dies ist der
            Fall, wenn sich aus den Umst&auml;nden entnehmen l&auml;sst, dass der betroffene Sachverhalt
            abschlie&szlig;end gekl&auml;rt ist und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>

          <h2>5) Datenverarbeitung bei Er&ouml;ffnung eines Kundenkontos und zur Vertragsabwicklung</h2>

          <p>Gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO werden personenbezogene Daten weiterhin erhoben und
            verarbeitet, wenn Sie uns diese zur Durchf&uuml;hrung eines Vertrages oder bei der Er&ouml;ffnung eines
            Kundenkontos mitteilen. Welche Daten erhoben werden, ist aus den jeweiligen Eingabeformularen ersichtlich.
            Eine L&ouml;schung Ihres Kundenkontos ist jederzeit m&ouml;glich und kann durch eine Nachricht an die o.g.
            Adresse des Verantwortlichen erfolgen. Wir speichern und verwenden die von Ihnen mitgeteilten Daten zur
            Vertragsabwicklung. Nach vollst&auml;ndiger Abwicklung des Vertrages oder L&ouml;schung Ihres Kundenkontos
            werden Ihre Daten mit R&uuml;cksicht auf steuer- und handelsrechtliche Aufbewahrungsfristen gesperrt und
            nach Ablauf dieser Fristen gel&ouml;scht, sofern Sie nicht ausdr&uuml;cklich in eine weitere Nutzung Ihrer
            Daten eingewilligt haben oder eine gesetzlich erlaubte weitere Datenverwendung von unserer Seite vorbehalten
            wurde, &uuml;ber die wir Sie nachstehend entsprechend informieren.</p>

          <h2>6) Nutzung Ihrer Daten zur Direktwerbung</h2>

          <p><b>6.1</b>&thinsp;Anmeldung zu unserem E-Mail-Newsletter</p>

          <p>Wenn Sie sich zu unserem E-Mail Newsletter anmelden, &uuml;bersenden wir Ihnen regelm&auml;&szlig;ig
            Informationen zu unseren Angeboten. Pflichtangabe f&uuml;r die &Uuml;bersendung des Newsletters ist allein
            Ihre E-Mail-Adresse. Die Angabe weiterer evtl. Daten ist freiwillig und wird verwendet, um Sie
            pers&ouml;nlich ansprechen zu k&ouml;nnen. F&uuml;r den Versand des Newsletters verwenden wir das sog.
            Double Opt-in Verfahren. Dies bedeutet, dass wir Ihnen erst dann einen E-Mail Newsletter &uuml;bermitteln
            werden, wenn Sie uns ausdr&uuml;cklich best&auml;tigt haben, dass Sie in den Versand von Newsletter
            einwilligen. Wir schicken Ihnen dann eine Best&auml;tigungs-E-Mail, mit der Sie gebeten werden durch
            Anklicken eines entsprechenden Links zu best&auml;tigen, dass Sie k&uuml;nftig Newsletter erhalten
            wollen.</p>

          <p>Mit der Aktivierung des Best&auml;tigungslinks erteilen Sie uns Ihre Einwilligung f&uuml;r die Nutzung
            Ihrer personenbezogenen Daten gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO. Bei der Anmeldung zum Newsletter
            speichern wir Ihre vom Internet Service-Provider (ISP) eingetragene IP-Adresse sowie das Datum und die
            Uhrzeit der Anmeldung, um einen m&ouml;glichen Missbrauch Ihrer E-Mail-Adresse zu einem sp&auml;teren
            Zeitpunkt nachvollziehen zu k&ouml;nnen. Die von uns bei der Anmeldung zum Newsletter erhobenen Daten werden
            ausschlie&szlig;lich f&uuml;r Zwecke der werblichen Ansprache im Wege des Newsletters benutzt. Sie
            k&ouml;nnen den Newsletter jederzeit &uuml;ber den daf&uuml;r vorgesehenen Link im Newsletter oder durch
            entsprechende Nachricht an den eingangs genannten Verantwortlichen abbestellen. Nach erfolgter Abmeldung
            wird Ihre E-Mail-Adresse unverz&uuml;glich in unserem Newsletter-Verteiler gel&ouml;scht, soweit Sie nicht
            ausdr&uuml;cklich in eine weitere Nutzung Ihrer Daten eingewilligt haben oder wir uns eine
            dar&uuml;berhinausgehende Datenverwendung vorbehalten, die gesetzlich erlaubt ist und &uuml;ber die wir Sie
            in dieser Erkl&auml;rung informieren.</p>

          <p><b>6.2</b>&thinsp;Newsletter-Versand via MailChimp<br/>
            Der Versand unserer E-Mail-Newsletter erfolgt &uuml;ber den technischen Dienstleister The Rocket Science
            Group, LLC d/b/a MailChimp, 675 Ponce de Leon Ave NE, Suite 5000, Atlanta, GA 30308, USA
            (http://www.mailchimp.com/), an die wir Ihre bei der Newsletteranmeldung bereitgestellten Daten weitergeben.
            Diese Weitergabe erfolgt gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO und dient unserem berechtigten
            Interesse an der Verwendung eines werbewirksamen, sicheren und nutzerfreundlichen Newslettersystems. Bitte
            beachten Sie, dass Ihre Daten in der Regel an einen Server von MailChimp in den USA &uuml;bertragen und dort
            gespeichert werden.<br/>
            MailChimp verwendet diese Informationen zum Versand und zur statistischen Auswertung der Newsletter in
            unserem Auftrag. F&uuml;r die Auswertung beinhalten die versendeten E-Mails sog. Web-Beacons bzw.
            Trackings-Pixel, die Ein-Pixel-Bilddateien darstellen, die auf unserer Website gespeichert sind. So kann
            festgestellt werden, ob eine Newsletter-Nachricht ge&ouml;ffnet und welche Links ggf. angeklickt wurden.
            Mithilfe der Web-Beacons werden von Mailchimp automatisiert generelle, nicht personenbezogene
            Statistiken &uuml;ber das Reaktionsverhalten auf Newsletter-Kampagnen erstellt. Auf Basis unseres
            berechtigten Interesses an der statistischen Auswertung der Newsletterkampagnen zur Optimierung der
            werblichen Kommunikation und der besseren Ausrichtung auf Empf&auml;ngerinteressen werden durch die
            Web-Beacons gem&auml;&szlig; Art. 6 Abs. 1 lit f. DSGVO aber auch Daten des jeweiligen
            Newsletter-Empf&auml;ngers erfasst (Mailadresse, Zeitpunkt des Abrufs, IP-Adresse, Browsertyp und
            Betriebssystem) und verwertet. Diese Daten lassen einen individuellen R&uuml;ckschluss auf den
            Newsletter-Empf&auml;nger zu und werden von Mailchimp zur automatisierten Erstellung einer Statistik
            verarbeitet, die erkennen l&auml;sst, ob ein bestimmter Empf&auml;nger eine Newsletter-Nachricht
            ge&ouml;ffnet hat.<br/>
            Wenn Sie die Datenanalyse zu statistischen Auswertungszwecken deaktiveren m&ouml;chten, m&uuml;ssen Sie den
            Newsletterbezug abbestellen.<br/>
            Auch MailChimp kann diese Daten gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO selbst aufgrund seines eigenen
            berechtigten Interesses an der bedarfsgerechten Ausgestaltung und der Optimierung des Dienstes sowie zu
            Marktforschungszwecken nutzen, um etwa zu bestimmen, aus welchen L&auml;ndern die Empf&auml;nger kommen.
            MailChimp nutzt die Daten unserer Newsletterempf&auml;nger jedoch nicht, um diese selbst anzuschreiben oder
            sie an Dritte weiterzugeben.<br/>
            Zum Schutz Ihrer Daten in den USA haben wir mit MailChimp einen Datenverarbeitungsauftrag
            (&bdquo;Data-Processing-Agreement&ldquo;) auf Basis der Standardvertragsklauseln der Europ&auml;ischen
            Kommission abgeschlossen, um die &Uuml;bermittlung Ihrer personenbezogenen Daten an MailChimp zu
            erm&ouml;glichen. Dieser Datenverarbeitungsvertrag kann bei Interesse unter nachstehender Internetadresse
            eingesehen werden: https://mailchimp.com/legal/forms/data-processing-agreement<br/>
            MailChimp ist dar&uuml;ber hinaus unter dem us-europ&auml;ischen Datenschutzabkommen &bdquo;Privacy
            Shield&ldquo; zertifiziert und verpflichtet sich damit, die EU-Datenschutzvorgaben einzuhalten.<br/>
            Die Datenschutzbestimmungen von MailChimp k&ouml;nnen Sie hier einsehen:
            https://mailchimp.com/legal/privacy/</p>

          <h2>7) Datenverarbeitung zur Bestellabwicklung</h2>

          <p><b>7.1</b>&thinsp;Die von uns erhobenen personenbezogenen Daten werden im Rahmen der Vertragsabwicklung an
            das mit der Lieferung beauftragte Transportunternehmen weitergegeben, soweit dies zur Lieferung der Ware
            erforderlich ist. Ihre Zahlungsdaten geben wir im Rahmen der Zahlungsabwicklung an das beauftragte
            Kreditinstitut weiter, sofern dies f&uuml;r die Zahlungsabwicklung erforderlich ist. Sofern
            Zahlungsdienstleister eingesetzt werden, informieren wir hier&uuml;ber nachstehend explizit. Die
            Rechtsgrundlage f&uuml;r die Weitergabe der Daten ist hierbei Art. 6 Abs. 1 lit. b DSGVO.</p>

          <p><b>7.2</b>&thinsp;Einsatz von speziellen Dienstleistern zur Bestellbearbeitung und -abwicklung</p>

          <p>- Billbee<br/>
            Die Bestellabwicklung erfolgt &uuml;ber den Dienstanbieter &quot;Billbee&quot; (Billbee GmbH,
            Paulinenstrasse 54, 32756 Detmold). Name, Anschrift sowie gegebenenfalls weitere personenbezogene Daten
            werden gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO ausschlie&szlig;lich zur Abwicklung der Online-Bestellung
            an Billbee weitergegeben. Die Weitergabe Ihrer Daten erfolgt hierbei nur, soweit dies f&uuml;r die
            Abwicklung der Bestellung tats&auml;chlich erforderlich ist. Details zum Datenschutz bei Billbee und die
            Datenschutzerkl&auml;rung von Billbee sind auf der Internetseite von Billbee
            unter &quot;billbee.de&quot; einsehbar.</p>

          <p><b>7.3</b>&thinsp;Weitergabe personenbezogener Daten an Versanddienstleister</p>

          <p>- DHL<br/>
            Erfolgt die Zustellung der Ware durch den Transportdienstleister DHL (Deutsche Post AG,
            Charles-de-Gaulle-Stra&szlig;e 20, 53113 Bonn), so geben wir Ihre E-Mail-Adresse gem&auml;&szlig; Art. 6
            Abs. 1 lit. a DSGVO vor der Zustellung der Ware zum Zwecke der Abstimmung eines Liefertermins bzw. zur
            Lieferank&uuml;ndigung an DHL weiter, sofern Sie hierf&uuml;r im Bestellprozess Ihre ausdr&uuml;ckliche
            Einwilligung erteilt haben. Anderenfalls geben wir zum Zwecke der Zustellung gem&auml;&szlig; Art. 6 Abs. 1
            lit. b DSGVO nur den Namen des Empf&auml;ngers und die Lieferadresse an DHL weiter. Die Weitergabe erfolgt
            nur, soweit dies f&uuml;r die Warenlieferung erforderlich ist. In diesem Fall ist eine vorherige Abstimmung
            des Liefertermins mit DHL bzw. die Lieferank&uuml;ndigung nicht m&ouml;glich.<br/>
            Die Einwilligung kann jederzeit mit Wirkung f&uuml;r die Zukunft gegen&uuml;ber dem oben bezeichneten
            Verantwortlichen oder gegen&uuml;ber dem Transportdienstleister DHL widerrufen werden.</p>

          <h2>8) Webanalysedienste</h2>

          <p>Google (Universal) Analytics</p>

          <p>Google Analytics<br/>
            Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited, Gordon House, 4
            Barrow St, Dublin, D04 E5W5, Irland (&quot;Google&quot;). Google Analytics verwendet
            sog. &quot;Cookies&quot;, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der
            Benutzung der Website durch Sie erm&ouml;glichen. Die durch das Cookie erzeugten Informationen &uuml;ber
            Ihre Benutzung dieser Website (einschlie&szlig;lich der gek&uuml;rzten IP-Adresse) werden in der Regel an
            einen Server von Google &uuml;bertragen und dort gespeichert, hierbei kann es auch zu
            einer &Uuml;bermittlung an die Server der Google LLC. in den USA kommen.<br/>
            Diese Website verwendet Google Analytics ausschlie&szlig;lich mit der
            Erweiterung &quot;_anonymizeIp()&quot;, die eine Anonymisierung der IP-Adresse durch K&uuml;rzung
            sicherstellt und eine direkte Personenbeziehbarkeit ausschlie&szlig;t. Durch die Erweiterung wird Ihre
            IP-Adresse von Google innerhalb von Mitgliedstaaten der Europ&auml;ischen Union oder in anderen
            Vertragsstaaten des Abkommens &uuml;ber den Europ&auml;ischen Wirtschaftsraum zuvor gek&uuml;rzt. Nur in
            Ausnahmef&auml;llen wird die volle IP-Adresse an einen Server von Google LLC.in den USA &uuml;bertragen und
            dort gek&uuml;rzt. In diesen Ausnahmef&auml;llen erfolgt diese Verarbeitung gem&auml;&szlig; Art. 6 Abs. 1
            lit. f DSGVO auf Grundlage unseres berechtigten Interesses an der statistischen Analyse des Nutzerverhaltens
            zu Optimierungs- und Marketingzwecken.<br/>
            In unserem Auftrag wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um
            Reports &uuml;ber die Websiteaktivit&auml;ten zusammenzustellen und um weitere mit der Websitenutzung und
            der Internetnutzung verbundene Dienstleistungen uns gegen&uuml;ber zu erbringen. Die im Rahmen von Google
            Analytics von Ihrem Browser &uuml;bermittelte IP-Adresse wird nicht mit anderen Daten von Google
            zusammengef&uuml;hrt.<br/>
            Sie k&ouml;nnen die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software
            verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht s&auml;mtliche
            Funktionen dieser Website vollumf&auml;nglich werden nutzen k&ouml;nnen. Sie k&ouml;nnen dar&uuml;ber hinaus
            die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer
            IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem
            folgenden Link verf&uuml;gbare Browser-Plugin herunterladen und installieren:<br/>
            https://tools.google.com/dlpage/gaoptout?hl=de<br/>
            Alternativ zum Browser-Plugin oder innerhalb von Browsern auf mobilen Ger&auml;ten klicken Sie bitte auf den
            folgenden Link, um ein Opt-Out-Cookie zu setzen, der die Erfassung durch Google Analytics innerhalb dieser
            Website zuk&uuml;nftig verhindert (dieses Opt-Out-Cookie funktioniert nur in diesem Browser und nur f&uuml;r
            diese Domain, l&ouml;schen Sie Ihre Cookies in diesem Browser, m&uuml;ssen Sie diesen Link erneut
            klicken): <a onClick="alert('Google Analytics wurde deaktiviert');" href="javascript:gaOptout()">Google
              Analytics deaktivieren</a><br/>
            F&uuml;r den Fall der &Uuml;bermittlung von personenbezogenen Daten an die Google LLC. mit Sitz in den USA,
            hat sich Google LLC. f&uuml;r das us-europ&auml;ische Datenschutz&uuml;bereinkommen &bdquo;Privacy
            Shield&ldquo; zertifiziert, welches die Einhaltung des in der EU geltenden Datenschutzniveaus
            gew&auml;hrleistet. Ein aktuelles Zertifikat kann hier eingesehen werden: https://www.privacyshield.gov/list<br/>
            Weitere Hinweise zu Google (Universal) Analytics finden Sie hier:
            https://support.google.com/analytics/answer/2838718?hl=de&amp;ref_topic=6010376</p>

          <h2>9) Rechte des Betroffenen</h2>

          <p><b>9.1</b>&thinsp;Das geltende Datenschutzrecht gew&auml;hrt Ihnen gegen&uuml;ber dem Verantwortlichen
            hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten umfassende Betroffenenrechte (Auskunfts- und
            Interventionsrechte), &uuml;ber die wir Sie nachstehend informieren:</p>

          <ul>
            <li>Auskunftsrecht gem&auml;&szlig; Art. 15 DSGVO: Sie haben insbesondere ein Recht auf Auskunft &uuml;ber
              Ihre von uns verarbeiteten personenbezogenen Daten, die Verarbeitungszwecke, die Kategorien der
              verarbeiteten personenbezogenen Daten, die Empf&auml;nger oder Kategorien von Empf&auml;ngern,
              gegen&uuml;ber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer bzw. die
              Kriterien f&uuml;r die Festlegung der Speicherdauer, das Bestehen eines Rechts auf Berichtigung,
              L&ouml;schung, Einschr&auml;nkung der Verarbeitung, Widerspruch gegen die Verarbeitung, Beschwerde bei
              einer Aufsichtsbeh&ouml;rde, die Herkunft Ihrer Daten, wenn diese nicht durch uns bei Ihnen erhoben
              wurden, das Bestehen einer automatisierten Entscheidungsfindung einschlie&szlig;lich Profiling und ggf.
              aussagekr&auml;ftige Informationen &uuml;ber die involvierte Logik und die Sie betreffende Tragweite und
              die angestrebten Auswirkungen einer solchen Verarbeitung, sowie Ihr Recht auf Unterrichtung, welche
              Garantien gem&auml;&szlig; Art. 46 DSGVO bei Weiterleitung Ihrer Daten in Drittl&auml;nder bestehen;
            </li>
            <li>Recht auf Berichtigung gem&auml;&szlig; Art. 16 DSGVO: Sie haben ein Recht auf unverz&uuml;gliche
              Berichtigung Sie betreffender unrichtiger Daten und/oder Vervollst&auml;ndigung Ihrer bei uns
              gespeicherten unvollst&auml;ndigen Daten;
            </li>
            <li>Recht auf L&ouml;schung gem&auml;&szlig; Art. 17 DSGVO: Sie haben das Recht, die L&ouml;schung Ihrer
              personenbezogenen Daten bei Vorliegen der Voraussetzungen des Art. 17 Abs. 1 DSGVO zu verlangen. Dieses
              Recht besteht jedoch insbesondere dann nicht, wenn die Verarbeitung zur Aus&uuml;bung des Rechts auf freie
              Meinungs&auml;u&szlig;erung und Information, zur Erf&uuml;llung einer rechtlichen Verpflichtung, aus
              Gr&uuml;nden des &ouml;ffentlichen Interesses oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von
              Rechtsanspr&uuml;chen erforderlich ist;
            </li>
            <li>Recht auf Einschr&auml;nkung der Verarbeitung gem&auml;&szlig; Art. 18 DSGVO: Sie haben das Recht, die
              Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, solange die von Ihnen
              bestrittene Richtigkeit Ihrer Daten &uuml;berpr&uuml;ft wird, wenn Sie eine L&ouml;schung Ihrer Daten
              wegen unzul&auml;ssiger Datenverarbeitung ablehnen und stattdessen die Einschr&auml;nkung der Verarbeitung
              Ihrer Daten verlangen, wenn Sie Ihre Daten zur Geltendmachung, Aus&uuml;bung oder Verteidigung von
              Rechtsanspr&uuml;chen ben&ouml;tigen, nachdem wir diese Daten nach Zweckerreichung nicht mehr
              ben&ouml;tigen oder wenn Sie Widerspruch aus Gr&uuml;nden Ihrer besonderen Situation eingelegt haben,
              solange noch nicht feststeht, ob unsere berechtigten Gr&uuml;nde &uuml;berwiegen;
            </li>
            <li>Recht auf Unterrichtung gem&auml;&szlig; Art. 19 DSGVO: Haben Sie das Recht auf Berichtigung,
              L&ouml;schung oder Einschr&auml;nkung der Verarbeitung gegen&uuml;ber dem Verantwortlichen geltend
              gemacht, ist dieser verpflichtet, allen Empf&auml;ngern, denen die Sie betreffenden personenbezogenen
              Daten offengelegt wurden, diese Berichtigung oder L&ouml;schung der Daten oder Einschr&auml;nkung der
              Verarbeitung mitzuteilen, es sei denn, dies erweist sich als unm&ouml;glich oder ist mit einem
              unverh&auml;ltnism&auml;&szlig;igen Aufwand verbunden. Ihnen steht das Recht zu, &uuml;ber diese
              Empf&auml;nger unterrichtet zu werden.
            </li>
            <li>Recht auf Daten&uuml;bertragbarkeit gem&auml;&szlig; Art. 20 DSGVO: Sie haben das Recht, Ihre
              personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, g&auml;ngigen und
              maschinenlesebaren Format zu erhalten oder die &Uuml;bermittlung an einen anderen Verantwortlichen zu
              verlangen, soweit dies technisch machbar ist;
            </li>
            <li>Recht auf Widerruf erteilter Einwilligungen gem&auml;&szlig; Art. 7 Abs. 3 DSGVO: Sie haben das Recht,
              eine einmal erteilte Einwilligung in die Verarbeitung von Daten jederzeit mit Wirkung f&uuml;r die Zukunft
              zu widerrufen. Im Falle des Widerrufs werden wir die betroffenen Daten unverz&uuml;glich l&ouml;schen,
              sofern eine weitere Verarbeitung nicht auf eine Rechtsgrundlage zur einwilligungslosen Verarbeitung
              gest&uuml;tzt werden kann. Durch den Widerruf der Einwilligung wird die Rechtm&auml;&szlig;igkeit der
              aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht ber&uuml;hrt;
            </li>
            <li>Recht auf Beschwerde gem&auml;&szlig; Art. 77 DSGVO: Wenn Sie der Ansicht sind, dass die Verarbeitung
              der Sie betreffenden personenbezogenen Daten gegen die DSGVO verst&ouml;&szlig;t, haben Sie - unbeschadet
              eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs - das Recht auf Beschwerde bei
              einer Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat Ihres Aufenthaltsortes, Ihres
              Arbeitsplatzes oder des Ortes des mutma&szlig;lichen Versto&szlig;es.
            </li>
          </ul>

          <p><b>9.2</b>&thinsp;WIDERSPRUCHSRECHT</p>

          <p>WENN WIR IM RAHMEN EINER INTERESSENABW&Auml;GUNG IHRE PERSONENBEZOGENEN DATEN AUFGRUND
            UNSERES &Uuml;BERWIEGENDEN BERECHTIGTEN INTERESSES VERARBEITEN, HABEN SIE DAS JEDERZEITIGE RECHT, AUS
            GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG WIDERSPRUCH MIT
            WIRKUNG F&Uuml;R DIE ZUKUNFT EINZULEGEN.<br/>
            MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN. EINE
            WEITERVERARBEITUNG BLEIBT ABER VORBEHALTEN, WENN WIR ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE
            VERARBEITUNG NACHWEISEN K&Ouml;NNEN, DIE IHRE INTERESSEN, GRUNDRECHTE UND GRUNDFREIHEITEN &Uuml;BERWIEGEN,
            ODER WENN DIE VERARBEITUNG DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN
            DIENT.</p>

          <p>WERDEN IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS
            RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
            DERARTIGER WERBUNG EINZULEGEN. SIE K&Ouml;NNEN DEN WIDERSPRUCH WIE OBEN BESCHRIEBEN AUS&Uuml;BEN.</p>

          <p>MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN ZU
            DIREKTWERBEZWECKEN.</p>

          <h2>10) Dauer der Speicherung personenbezogener Daten</h2>

          <p>Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der jeweiligen gesetzlichen
            Aufbewahrungsfrist (z.B. handels- und steuerrechtliche Aufbewahrungsfristen). Nach Ablauf der Frist werden
            die entsprechenden Daten routinem&auml;&szlig;ig gel&ouml;scht, sofern sie nicht mehr zur
            Vertragserf&uuml;llung oder Vertragsanbahnung erforderlich sind und/oder unsererseits kein berechtigtes
            Interesse an der Weiterspeicherung fortbesteht.</p>
          </div>
        </Typography>
      </Fragment>
    );
  }
}

export default Datenschutz;
