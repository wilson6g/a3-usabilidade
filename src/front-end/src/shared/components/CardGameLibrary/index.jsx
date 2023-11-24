import { PropTypes } from "prop-types";
import "./card-game.css";

CardGameLibrary.propTypes = {
  game: PropTypes.object,
};

export function CardGameLibrary(props) {
  return (
    <div className="d-flex flex-mobile-column justify-mobile-content-center align-items-center mb-25px justify-content-between w-100 mt-2 bg-primary">
      <a
        className="w-50 h-100 w-mobile-100 w-tablet-100 w-laptop-100 fs-15 color-white d-flex align-items-center justify-content-center"
        href={`./info-game?id=${props.game?.id}`}
      >
        {props.game?.nome.substr(0, 3)}
      </a>
      <div className="d-flex flex-column justify-content-between w-100 align-items-start h-100 white-space-nowrap overflow-hidden text-overflow-ellipsis fs-3 pt-1">
        <div className="d-flex flex-column align-items-start justify-content-start px-2">
          <a
            className="color-white fw-500 fs-3 d-block white-space-nowrap overflow-hidden lh-18"
            href={`./info-game?id=${props.game?.id}`}
          >
            {props.game.nome}
          </a>
          <p className="color-white text-wrap text-justify w-90">
            <span className="fw-600">Descrição do jogo: </span>
            {props.game?.descricao}
          </p>

          <p className="color-white">
            <span className="fw-600">Plataforma: </span>{" "}
            {props.game?.plataforma_nome}
          </p>
        </div>
      </div>
    </div>
  );
}
