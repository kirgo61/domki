import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

const OfferAbout = () => {
  return (
    <section>
      <div className="offerAbout">
        <div className="offerAboutInnerDiv">
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
              <a href="https://www.google.pl/destination/map/topsights?client=opera&hs=Qri&ei=8LtbXc_nCMHHwQLZgamQBQ&q=google+atrakcje+komancza&oq=google+atrakcje+komancza&gs_l=psy-ab.3...1607.3317..3563...0.2..0.131.1006.1j8......0....1..gws-wiz.......0i71j0j0i22i30j33i160.0NeeMe1IrmY&uact=5&tcfs=&dest_src=ts&dest_mid=/m/027nk14&sa=X&ved=2ahUKEwidsdKFkJHkAhXPYVAKHfJrDdkQ6tEBKAQwAHoECAsQBw#dest_mid=/m/027nk14&dest_src=ts&tcfs=EhcKCi9tLzAyN25rMTQSCUtvbWHFhGN6YQ&trifp=skpm%3D/m/0q3xydd%26t%3De">
                <button className="offerTextButton">Atrakcje</button>
              </a>
            </div>
          </Fade>
        </div>
        <div className="offerAboutInnerDiv">
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
