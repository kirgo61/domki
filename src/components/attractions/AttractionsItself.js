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
        <div>
          <div className="attractionsItem">
            <FontAwesomeIcon
              icon={faMountain}
              className="attractionsItemIcon"
            />
            <h3>Góry i szlaki</h3>
            <p>
              Komańcza znajduje sie na pograniczu Bieszczad i Beskidu Niskiego
              co sprawia że w okolicy jest mnóstwo szlaków do zwiedzenia.
            </p>
          </div>
          <div className="attractionsItem">
            <FontAwesomeIcon
              icon={faMonument}
              className="attractionsItemIcon"
            />
            <h3>Zabytki</h3>
            <p>
              W Komańczy i okolicy można obejrzeć wiele ciekawych zabytków z,
              których najważniejszym zdecydowanie bedzie klasztor sióstr
              Nazaretanek w którym był przetrzymywany kardynał Stefan Wyszyński.
            </p>
          </div>
        </div>
        <div>
          <div className="attractionsItem">
            <FontAwesomeIcon icon={faBed} className="attractionsItemIcon" />
            <h3>Wypoczynek</h3>
            <p>
              Na naszych domkach można przede wszystkim odpocząć, a to przecież
              jest głównym celem naszych gości.
            </p>
          </div>
          <div className="attractionsItem">
            <FontAwesomeIcon icon={faFire} className="attractionsItemIcon" />
            <h3>Grillowanie</h3>
            <p>
              Na terenie naszych domków znajdują sie paleńiska dzięki, którym
              można klimatycznie spędzić wieczór.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttractionsItself;
