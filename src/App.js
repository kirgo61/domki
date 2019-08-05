import React, { Component } from "react";
import "./App.css";
import "./components/offer/offer.css";
import "./components/attractions/attractions.css";
import "./components/footer/footer.css";
import "./components/gallery/gallery.css";
import Header from "./components/header/Header";
import Slider from "./components/slider/index";
import Offer from "./components/offer/index";
import Attractions from "./components/attractions/index";
import Gallery from "./components/gallery/Gallery";
import OfferTitle from "./components/offer/OfferTitle";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import Map from "../src/components/utilities/Map";
import Footer from "./components/footer/Footer";
import domek from "./components/utilities/domkiZdjecia1/komanczaKrajobraz3.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slider />
        <Offer />
        <Attractions />
        <Parallax className="parallax" y={[0, 0]}>
          <ParallaxBanner
            layers={[
              {
                image: domek,
                amount: 0.3
              },
              {
                image: domek,
                amount: 0.3
              }
            ]}
            style={{
              height: "80vh"
            }}
          />
        </Parallax>
        <OfferTitle titleProp={"Galeria"} />
        <Gallery />
        <Map />
        <Footer />
      </div>
    );
  }
}

export default App;
