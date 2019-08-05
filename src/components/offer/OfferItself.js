import React from "react";
import photoOffer1 from "../utilities/domkiZdjecia1/photoOffer1.JPG";
import photoOffer2 from "../utilities/domkiZdjecia1/photoOffer2.JPG";
import Fade from "react-reveal";

const OfferItself = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        // height: "70vh",
        marginBottom: "10vh"
      }}
    >
      <Fade left>
        <img
          src={photoOffer1}
          alt="Kuchnia"
          title="Kuchnia"
          className="offerPhotos"
        />
      </Fade>
      <div
        style={{
          width: "40vw",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <h3 className="offerTitleSmall"> Oferta</h3>
        <p className="offerText" style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut illo
          voluptate libero laborum quisquam assumenda quo ratione suscipit quam
          minima, exercitationem, reprehenderit magni cum nulla cumque. Omnis
          accusamus rem sapiente? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Placeat fugiat, maxime dicta dolores, doloribus vel
          quasi exercitationem officiis iste voluptatum autem odit harum cumque
          id accusamus optio aliquam quos est! Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
        <h3 className="offerTitleSmall"> Cennik</h3>
        <p className="offerText" style={{ textAlign: "center" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, beatae
          quibusdam, atque tenetur laudantium repellendus a vero nesciunt nemo
          quod ratione voluptates voluptate, ut odio repudiandae eum eligendi ab
          rerum.
        </p>
        <div style={{ textAlign: "center" }}>
          <button className="offerTextButton">Galeria</button>
        </div>
      </div>
      <Fade right>
        <img
          src={photoOffer2}
          alt="Salon"
          title="Salon"
          className="offerPhotos"
        />
      </Fade>
    </section>
  );
};

export default OfferItself;
