import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Footer } from "../../shared/components/Footer";
import { Header } from "../../shared/components/Header";
import { UserContext } from "../../shared/contexts/user-context";
import { getAllGamesByUser } from "../../shared/services/game-service/game-service";
import "../../styles/library.css";
import { CardGameMyGames } from "./components/CardGameMyGames";

export function Library() {
  const [games, setGames] = useState();
  const [game, setGame] = useState();
  const { userEmail } = useContext(UserContext);

  const getGameById = () => {
    const filter = game != "*" ? game : "*";

    const output = games && games.find((game) => game.id == filter);

    setGame(output?.id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userEmail !== "") {
          const gamesResponse = await getAllGamesByUser(userEmail);
          setGames(gamesResponse.data);
          getGameById();
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    fetchData();
  }, [userEmail]);

  return (
    <>
      <Header />

      <main className="min-h-100 d-flex justify-content-center pt-2 flex-mobile-column flex-tablet-column flex-laptop-column">
        <nav className="w-25 mt-2 d-mobile-none d-tablet-none d-laptop-none">
          <ul className="pl-2">
            <li>
              <span className="color-black">Gerenciar</span>
              <ul className="pl-2">
                <li>
                  <a className="color-primary" href="platform-management">
                    Gerenciar Plataforma
                  </a>
                </li>
                <li>
                  <a className="color-primary" href="games-management">
                    Gerenciar Jogos
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div className="d-flex flex-column align-items-start w-75 h-100 w-mobile-100 w-tablet-100 w-laptop-100">
          <div className="d-flex w-75 w-mobile-100 w-tablet-100 w-laptop-100 flex-column align-items-center justify-content-center">
            <div className="justify-content-center bg-primary mb-25px d-flex align-items-center w-100 w-tablet-100 w-laptop-100 w-mobile-100 flex-mobile-column flex-tablet-column flex-laptop-column">
              <h1 className="color-white text-center">Meus Jogos</h1>
            </div>
            <div className="d-flex w-100 align-items-center justify-content-center py-4">
              <div className="d-flex w-30 w-mobile-100 w-tablet-100 justify-content-center align-items-center border-light bg-blue">
                <select
                  className="w-100 d-flex text-center color-white bg-blue border-light p-2 color-white border-none bg-black border-none fs-3 fw-200"
                  onChange={(event) => setGame(event.target.value)}
                  value={game}
                >
                  <option value="*">Todos Jogos</option>
                  {games &&
                    games.map((platform) => (
                      <option key={platform.id} value={platform.id}>
                        {platform.nome}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="d-flex bc-primary flex-column align-items-center justify-content-center h-90 w-mobile-100 color-white w-100 ">
              {games &&
                games
                  .filter(
                    (gameItem) =>
                      !game ||
                      game === "*" ||
                      gameItem.id === game
                  )
                  .map((game) => (
                    <div
                      key={game.id}
                      className="w-100 mb-2 align-items-center justify-content-center d-flex"
                    >
                      <CardGameMyGames
                        key={game.id}
                        game={game}
                        games={games}
                      />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
