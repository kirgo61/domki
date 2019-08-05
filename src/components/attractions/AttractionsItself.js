import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountain,
  faMonument,
  faFire,
  faBed
} from "@fortawesome/free-solid-svg-icons";
const AttractionsItself = () => {
  return (
    <div className="attractions">
      <div className="attractionsWrapper">
        <div className="attractionsItem">
          <h3>Góry</h3>
          <FontAwesomeIcon icon={faMountain} />
          <p>
            Komańcza leży na granicy Bieszczad z Beskidem Niskim, co sprawia że
            świetnie nadaje sie do spacerowania i podziwiania widoków.
          </p>
        </div>
        <div className="attractionsItem">
          <h3>Zabytki</h3>
          <FontAwesomeIcon icon={faMonument} />
          <p>
            W Komańczy znajduje się sporo wartych uwagi zabytków, z których
            najbardziej wyróżnia się Klasztor sióstr Nazaretanek w którym swego
            czasu przebywał prymas polski Stefan Wyszyński.
          </p>
        </div>
        <div className="attractionsItem">
          <h3>Grillowanie</h3>
          <FontAwesomeIcon icon={faFire} />
          <p>
            Na podwórzu naszych domków znajduje się palenisko na którym można
            pogrillować.
          </p>
        </div>
        <div className="attractionsItem">
          <h3>Odpoczynek</h3>
          <FontAwesomeIcon icon={faBed} />
          <p>
            Na naszych domkach można przede wszystkim odpocząć, a to
            najważniejsze :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default AttractionsItself;
