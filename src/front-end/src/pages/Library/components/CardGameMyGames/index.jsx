import { PropTypes } from "prop-types";
import "./card-game.css";

CardGameMyGames.propTypes = {
  game: PropTypes.object,
  games: PropTypes.array,
};

export function CardGameMyGames(props) {
  return (
    <a
      href={`info-game?id=${props.game?.id}`}
      className="d-flex flex-column align-items-center justify-content-center w-90 w-mobile-100 w-tablet-100 w-laptop-100 h-100 bg-blue border-light"
    >
      <div className="d-flex flex-column align-items-center justify-content-center w-100 w-mobile-100 w-tablet-100 w-laptop-100 h-100 bg-blue border-light">
        <div className="d-flex flex-column align-items-center justify-content-center w-75 w-mobile-100 w-tablet-100 w-laptop-100 h-100 bg-blue border-light">
          <div className="d-flex flex-column justify-content-center align-items-center w-100 w-mobile-100 w-tablet-100 w-laptop-100 h-100">
            <a
              className="color-white fw-600 text-uppercase fw-600 py-3 fs-15 text-center"
              href={`info-game?id=${props.game?.id}`}
            >
              {props.game?.nome}
            </a>
            <div className="d-flex flex-column justify-content-start align-items-start w-100">
              <div className="w-100 w-mobile-100 w-tablet-100 w-laptop-100">
                <p className="color-white text-wrap text-justify w-100">
                  <span className="fw-600">Sobre o jogo: </span>
                  {props.game?.descricao}
                </p>

                <p className="color-white text-wrap text-justify w-90">
                  <span className="fw-600">Plataforma: </span>{" "}
                  {props.game?.plataforma_nome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
