import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Footer } from "../../shared/components/Footer";
import { Header } from "../../shared/components/Header";
import { UserContext } from "../../shared/contexts/user-context";
import { useQuery } from "../../shared/hooks/UseQuery";
import { getAllGamesByUser } from "../../shared/services/game-service/game-service";
import "../../styles/info-game.css";

export function InfoGame() {
  let query = useQuery();
  const [game, setGame] = useState();
  const [games, setGames] = useState();
  const { userEmail } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userEmail !== "") {
          const gamesResponse = await getAllGamesByUser(userEmail);
          setGames(gamesResponse.data);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    fetchData();
  }, [userEmail]);

  useEffect(() => {
    const getGameById = () => {
      const gameId = query.get("id");

      if (games && games.length > 0 && gameId) {
        const output = games.find((g) => g.id === gameId);

        if (output) {
          setGame(output);
        }
      }
    };

    getGameById();
  }, [games, query]);

  return (
    <>
      <Header />
      <main className="min-h-100 d-flex justify-content-center align-items-center p1-025-t flex-mobile-column flex-tablet-column flex-laptop-column flex-1">
        <div className="d-flex flex-column align-items-center justify-content-center w-75 w-mobile-100 w-tablet-100 w-laptop-100 h-100 bg-blue border-light">
          <div className="d-flex flex-column justify-content-center align-items-center w-100 w-mobile-100 w-tablet-100 w-laptop-100 h-100">
            <h1 className="color-white fw-600 text-uppercase fw-600 py-3">
              {game?.nome}
            </h1>
            <h2 className="color-white fs-3-5">
              <span className="fw-600 ">Nota: </span> {game?.nota}
            </h2>
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
              <div className="w-50 w-mobile-100 w-tablet-100 w-laptop-100">
                <p className="color-white text-wrap text-justify w-90">
                  <span className="fw-600">Sobre o jogo: </span>
                  {game?.descricao}
                </p>

                <p className="color-white text-wrap text-justify w-90">
                  <span className="fw-600">Plataforma: </span>{" "}
                  {game?.plataforma_nome}
                </p>
                <p className="color-white text-wrap text-justify w-90">
                  <span className="fw-600">Descrição da plataforma: </span>{" "}
                  {game?.plataforma_descricao}
                </p>

                <p className="color-white text-wrap text-justify">
                  <span className="fw-600">Categorias: </span>
                  {game?.categorias?.map((categoria, index) => {
                    const isLastCategory = index === game.categorias.length - 1;

                    return isLastCategory
                      ? categoria.categoria_nome
                      : `${categoria.categoria_nome}, `;
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
