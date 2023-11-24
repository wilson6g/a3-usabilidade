import { PropTypes } from "prop-types";
// import { deleteMyGameById } from "../../../shared/services/my-games-service/my-games-service";
import "./card-game.css";

CardGameMyGames.propTypes = {
  game: PropTypes.object,
  games: PropTypes.array,
  updateMyGames: PropTypes.func,
};

export function CardGameMyGames(props) {
  // const handleDelete = async () => {
  //   try {
  //     // await deleteMyGameById(props.game.meus_jogos_id);

  //     toast.success("Jogo deletado com sucesso!");

  //     const updatedRows = props.games.filter(
  //       (item) => item.meus_jogos_id !== props.game.meus_jogos_id
  //     );

  //     await props.updateMyGames(updatedRows);
  //   } catch (error) {
  //     toast.error(error.response.data.error);
  //   }
  // };

  return (
    <div className="d-flex flex-mobile-column justify-mobile-content-center align-items-center mb-25px justify-content-between w-100 mt-2 bg-primary">
      <a
        href={`info-game?id=${props.game?.id}`}
        className="w-50 h-100 w-mobile-100 w-tablet-100 w-laptop-100 fs-15 color-white d-flex align-items-center justify-content-center"
      >
        {props.game?.nome.substr(0, 3)}
      </a>
      <div className="d-flex flex-column justify-content-between w-100 align-items-start h-100 white-space-nowrap overflow-hidden text-overflow-ellipsis fs-3 pt-1">
        <div className="d-flex flex-column align-items-start justify-content-start px-2">
          <div className="py-3 w-100 d-flex justify-content-between">
            <a
              className="color-white fw-600 fs-15 py-3 w-100 h-100 d-block white-space-nowrap overflow-hidden lh-18"
              href={`info-game?id=${props.game?.id}`}
            >
              {props.game?.nome}
            </a>
            {/* <div className="d-flex align-items-center">
              <a
                className="d-flex align-items-center color-white "
                href={`./edit-game?id=${props.game?.id}`}
              >
                <span className="material-symbols-outlined fs-3-5">edit</span>
              </a>
              <a
                className="d-flex align-items-center color-white "
                onClick={handleDelete}
              >
                <span className="material-symbols-outlined fs-3-5">delete</span>
              </a>
            </div> */}
          </div>

          {/* <p className="color-white">
            <span className="fw-600">Nota: </span> {props.game?.nota}
          </p> */}

          <p className="color-white text-wrap text-justify w-90">
            <span className="fw-600">Descrição do jogo: </span>
            {props.game?.descricao}
          </p>

          <p className="color-white">
            <span className="fw-600">Plataforma: </span>{" "}
            {props.game?.plataforma_nome}
          </p>

          {/* <p className="color-white text-wrap text-justify w-90">
            <span className="fw-600">Descrição da plataforma: </span>
            {props.game?.plataforma_descricao}
          </p> */}

          {/* <p className="color-white text-wrap text-justify">
            <span className="fw-600">Categorias: </span>
            {props.game?.categorias?.map((categoria, index) => {
              const isPenultimate = index === props.game.categorias.length - 2;

              if (props.game?.categorias.length === 1) {
                return categoria.categoria_nome;
              }

              return index != isPenultimate
                ? `${categoria.categoria_nome}`
                : `${categoria.categoria_nome}, `;
            })}
          </p> */}
        </div>
      </div>
    </div>
  );
}
