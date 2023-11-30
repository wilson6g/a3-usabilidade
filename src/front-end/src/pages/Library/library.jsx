import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Footer } from "../../shared/components/Footer";
import { Header } from "../../shared/components/Header";
import { UserContext } from "../../shared/contexts/user-context";
import { getAllGamesByUser } from "../../shared/services/game-service/game-service";
import { findAllPlatforms } from "../../shared/services/platforms-service/platform-service";
import "../../styles/library.css";
import { CardGameMyGames } from "./components/CardGameMyGames";

export function Library() {
  const [games, setGames] = useState();
  const [platforms, setPlatforms] = useState();
  const { userEmail } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userEmail !== "") {
          const gamesResponse = await getAllGamesByUser(userEmail);
          setGames(gamesResponse.data);
        }

        const platformsResponse = await findAllPlatforms();
        setPlatforms(platformsResponse.data);
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
              <span className="color-black">Plataformas</span>
              <ul className="pl-2">
                {platforms &&
                  platforms.map((platform) => (
                    <li key={platform.id}>
                      <a
                        className="color-primary"
                        href={`platform?platformId=${platform.id}`}
                      >
                        {platform.nome}
                      </a>
                    </li>
                  ))}
              </ul>
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
              <h1 className="color-white">Meus Jogos</h1>
            </div>

            <div className="d-flex bc-primary flex-column align-items-center justify-content-center mt-2 h-90 w-mobile-100 color-white w-100 ">
              {games &&
                games.map((game) => (
                  <CardGameMyGames
                    key={game.id}
                    game={game}
                    games={games}
                    // updateMyGames={updateGames}
                  />
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
