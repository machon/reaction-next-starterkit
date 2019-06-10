// Created by Andre Machon 30/05/2019
import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {observer, inject} from "mobx-react";
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
    const {shop} = this.props;

    // TODO update links to point to products on this page
    return (
      <Fragment>
        <Helmet>
          <title>{shop && shop.name}</title>
          <meta name="about-page" content={shop && shop.description}/>
        </Helmet>
        <Typography variant={'body1'} align="justify">

          <div style={{width: "95%", margin: "0 auto", textAlign: "center"}}>
            <h1 className="entry-title">
              Über uns </h1>

            <div className="entry-content">
              <h1>Anton &amp; Sophie &#8230; für dein Kind</h1>
              {/*style="text-align: justify;"*/}<p>2014 gründete ich Anton &amp; Sophie. Ich &#8211; das ist eine
              inzwischen
              3-fache Mama aus der Metropole Köln. In einem Leben mit Kindern ist die ganze Welt viel bunter, viel
              aufregender, viel intensiver und v.a. VIEL SCHÖNER! Die Kinder halten einen auf Trapp, zeigen einem die
              Welt auf eine neue Weise, stellen Fragen, die man sich selbst nie gestellt hätte und beeindrucken einen
              mit Ihrer Art, ALLES in Frage zu stellen &#8211; nichts als gesetzt anzusehen. Jedes Straßenschild wird
              plötzlich analysiert, jedes Verbot diskutiert, jede Regel hinterfragt. Es ist ein aufregendes,
              lebendiges Leben.</p>
              {/*style="text-align: justify;"*/}<p>Und dieses einzigartige Leben mit diesen geliebten Kindern möchte man
              auch
              selbst durch schöne, selbstgemachte Dinge verschönern. Man dekoriert, man backt, man näht, man wird
              plötzlich kreativ &#8211; und wusste vorher gar nicht, dass man das alles kann. Jedenfalls ging es mir
              so. Da sah ich mich plötzlich die 30 Jahre alte Nähmaschine meiner Mutter ausleihen und ohne Erfahrung
              drauf los nähen. Plötzlich war da eine wunderschöne Krabbeldecke, ein kuscheliges Schnuffeltuch, eine
              Wärmflasche, die ich meiner Mutter nachnähte&#8230; Und plötzlich merkte ich, dass ich Dinge verändern
              kann! Dinge, die mich störten und für die ich noch keine Lösung hatte, wurden an der Nähmaschine
              plötzlich gelöst. Ich entwickelte Schnitte, probierte hier und änderte da. Endlich hatte ich mit der <a
                href="http://www.anton-und-sophie.de/produkt-kategorie/fuer-kinder/autotaschen-fuer-kinder"
                target="_blank">Autotasche </a>eine praktische und zugleich wunderschöne Lösung für das Chaos auf der
              Rücksitzbank gefunden. Endlich hatte ich das Problem gelöst, dass ein Schal im Winter nicht gleichzeitig
              Hals und Brust wärmt, wenn die Jacke ein Stück auf geht &#8211; ich entwarf einfach einen <a
                href="http://www.anton-und-sophie.de/produkt-kategorie/muetze-und-loops" target="_blank">Loop</a>, der
              beides kann. Endlich hielten mit den edlen <a
                href="http://www.anton-und-sophie.de/produkt-kategorie/fuer-kinder/haarspangen"
                target="_blank">Haarspangen </a>die Haare meiner kleinen Tochter und flutschten nicht ständig wieder
              aus den herkömmlichen Spangen raus. Endlich hatte ich eine sehr <a
                href="http://www.anton-und-sophie.de/produkt-kategorie/fuer-kinder/haarspangenboards" target="_blank">dekorative
                Ordnung</a> für die ganzen Haarspangen und Haargummis&#8230;</p>
              {/*style="text-align: justify;"*/}<p>So kam eins zu anderen, und ich gründete das Kinderlabel
              Anton &amp; Sophie &#8211; um Euch an meinen wunderschönen Lösungen teilhaben zu lassen! 🙂</p>
              {/*style="text-align: justify;"*/}<p>Viel Freude mit unseren zauberhaften Kinderartikeln <em>für Dein
              Kind</em> wünscht Dir</p>
              {/*style="text-align: center;"*/}<p>Deine Helen Schondorff</p>
              {/*style="text-align: center;"*/}<p> ***</p>
              {/*style="text-align: center;"*/}<p><em>Der Name Anton &amp; Sophie lehnt sich an die Namen meiner ersten
              beiden Kinder an<br/>
              und steht damit für</em></p>
              {/*style="text-align: center;"*/}<p><strong><em>100% Liebe und Schutz</em></strong></p>
              {/*style="text-align: center;"*/}<p>***</p>
            </div>
          </div>

        </Typography>
      </Fragment>
    );
  }
}

export default About;
