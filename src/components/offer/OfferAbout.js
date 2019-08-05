import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

const OfferAbout = () => {
  return (
    <section>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ padding: "2rem", width: "30vw" }}>
          <Fade left>
            <h3 className="offerTitleSmall">O nas</h3>
            <p className="offerText">
              Jest nam niezmiernie miło ze jesteście państwo zainteresowani
              urlopem w naszych domkach wypoczynkowych. Swoją przygodę z
              turystyką rozpoczeliśmy w 2011r. kiedy uznaliśmy ze piękno
              Komańczy jest zbyt niedocenione i każdy powinien poczuć na własnej
              skórze urok tej malowniczej krainy. Jesteśmy pewni że po
              przyjeździe do nas poczują Państwo smak prawdziwego spokoju i
              relaksu, zdala od miejskiego zgiełku i pośpiechu. Poza naszymi
              domkami jak i samą Komańczą w okolicy znajduje się mnóstwo
              ciekawych zabytków i atrakcji o których wiecej poniżej.
            </p>
          </Fade>
          <Fade top>
            <div style={{ textAlign: "center", paddingTop: "1rem" }}>
              <button className="offerTextButton">Atrakcje</button>
            </div>
          </Fade>
        </div>
        <div style={{ padding: "2rem", width: "30vw" }}>
          <Fade right>
            <FontAwesomeIcon
              icon={faQuoteRight}
              style={{
                width: "15%",
                height: "55px",
                color: "grey",
                opacity: ".5"
              }}
            />
            <p className="offerQuote">
              Kocham deszcz, który pada czasami z Komańczy, Nawet taki szorstki
              i chłodny, gwiazdę śniegu, co nieraz mu w oknach zatańczy, żeby
              był tak jak zawsze pogodny Prostą lampkę na stole. Wszystkie jego
              książki, Brewiarz, zegar, wieczorną ciszę - nawet taki najmniejszy
              z Matką Bożą obrazek, który komuś z wygnania podpisze Krzyże żadne
              nie krwawią gdy jest świętość i spokój, Gdy z wygnańcem po cichu
              drży Polska - wszystko proste jak wiersze -brewiarz, lampka,
              pokój, drzew warszawskich na niebie gałązka.
            </p>
            <p style={{ fontStyle: "italic" }}>ks. Jan Twardowski</p>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default OfferAbout;
