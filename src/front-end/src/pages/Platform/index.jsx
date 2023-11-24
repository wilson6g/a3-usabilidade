import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CardGameLibrary } from "../../shared/components/CardGameLibrary";
import { Footer } from "../../shared/components/Footer";
import { Header } from "../../shared/components/Header";
import { UserContext } from "../../shared/contexts/user-context";
import { useQuery } from "../../shared/hooks/UseQuery";
import { getAllGamesByUser } from "../../shared/services/game-service/game-service";
import { findAllPlatforms } from "../../shared/services/platforms-service/platform-service";
import "../../styles/profile.css";

export function Platform() {
  let query = useQuery();
  const [platform, setPlatform] = useState();
  const [games, setGames] = useState();
  const [platforms, setPlatforms] = useState();
  const { userEmail } = useContext(UserContext);

  const getPlatformById = () => {
    const platformId = query.get("platformId");

    const output =
      games && games.find((game) => game.plataforma_id == platformId);

    setPlatform(output?.plataforma_id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userEmail !== "") {
          const gamesResponse = await getAllGamesByUser(userEmail);
          setGames(gamesResponse.data);
          getPlatformById();
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

      <main className="d-flex justify-content-center p1-025-t flex-mobile-column flex-tablet-column flex-laptop-column flex-1">
        <div className="d-flex flex-column align-items-center w-100 h-100 w-mobile-100 w-tablet-100 w-laptop-100">
          <nav className="bg-primary d-flex align-mobile-items-center align-tablet-items-center align-laptop-items-center w-75 w-tablet-100 w-laptop-100 w-mobile-100 flex-mobile-column flex-tablet-column flex-laptop-column">
            <ul className="d-flex align-items-center d-mobile-block d-tablet-block d-laptop-block w-mobile-90 w-tablet-90 w-laptop-90 p-06-r flex-mobile-column flex-tablet-column flex-laptop-column p-0 w-100">
              <li className="w-100 fs-3-5 w-mobile-100 p-2 w-tablet-100 w-laptop-100 justify-content-center d-tablet-block d-laptop-block d-flex align-item-center align-mobile-items-center align-tablet-items-start align-laptop-items-start">
                <span className="color-secondary fs-3 lh-34 fw-600 align-self-center">
                  Jogos por Plataforma
                </span>
              </li>
            </ul>
          </nav>

          <div className="d-flex m1-025-t w-75 w-mobile-100 w-tablet-100 w-laptop-100 flex-column align-items-center justify-content-center">
            <div className="d-flex w-100 align-items-center justify-content-center">
              <div className="d-flex w-30 w-mobile-100 w-tablet-100 justify-content-center align-items-center border-light bg-blue">
                <select
                  className="w-100 d-flex text-center color-white bg-blue border-light p-2 color-white border-none bg-black border-none fs-3 fw-200"
                  onChange={(event) => setPlatform(event.target.value)}
                  value={platform}
                >
                  <option value="*">Todas Plataformas</option>
                  {platforms &&
                    platforms.map((platform) => (
                      <option key={platform.id} value={platform.id}>
                        {platform.nome}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="d-flex flex-column align-item-start justify-content-start m1-025-t h-90 w-mobile-100 color-white w-100">
              {games &&
                games
                  .filter(
                    (game) =>
                      !platform ||
                      platform === "*" ||
                      game.plataforma_id === platform
                  )
                  .map((game) => <CardGameLibrary key={game.id} game={game} />)}

              {/* <div className="d-flex flex-mobile-column justify-mobile-content-center align-items-center justify-content-between w-100 bg-primary m1-025-t">
                <a
                  className="w-50 h-100 w-mobile-100 w-tablet-100 w-laptop-100"
                  href="./info-game-cs2.html"
                >
                  <img
                    className="d-flex w-100 h-100 max-inline-size-100"
                    src="../img/csgo2.png"
                  />
                </a>
                <div className="d-flex flex-column justify-content-between w-100 align-item-center h-100">
                  <div className="d-flex px-2 flex-column align-item-center justify-content-center">
                    <a
                      className="color-white fw-500 fs-4 d-block white-space-nowrap overflow-hidden lh-18"
                      href="./info-game-cs2.html"
                    >
                      Counter Strike 2: Global Offensive
                    </a>
                    <p className="color-white">Ação, Gratuito p/ Jogar</p>
                    <div className="d-flex">
                      <p className="color-white p-06-r">Windows</p>
                    </div>
                  </div>
                </div>
                <div className="color-white fw-500 pb-mobile-1 pb-tablet-1 pb-laptop-1 d-mobile-none d-tablet-none p-06-r">
                  <span className="text-overflow-ellipses d-block lh-18 white-space-nowrap overflow-hidden fs-3">
                    Gratuito p/ Jogar
                  </span>
                </div>
              </div> */}
              {/* <div className="d-flex flex-mobile-column justify-mobile-content-center align-items-center justify-content-between w-100 bg-primary m1-025-t">
                <a
                  className="w-50 w-mobile-100 w-tablet-100 w-laptop-100"
                  href="./info-game-muaway.html"
                >
                  <img
                    className="d-flex max-inline-size-100 w-100"
                    src="../img/muaway.jpg"
                  />
                </a>
                <div className="d-flex flex-column justify-content-between w-100 align-item-center h-100 white-space-nowrap overflow-hidden text-overflow-ellipsis fs-3 pt-1">
                  <div className="d-flex px-2 flex-column align-item-center justify-content-center">
                    <a
                      className="color-white fw-500 fs-4 d-block white-space-nowrap overflow-hidden lh-18"
                      href="./info-game-muaway.html"
                    >
                      Muaway
                    </a>
                    <p className="color-white">Ação, Gratuito p/ Jogar</p>
                    <div className="d-flex">
                      <p className="color-white p-06-r">Windows</p>
                    </div>
                  </div>
                </div>
                <div className="color-white fw-500 pb-mobile-1 pb-tablet-1 pb-laptop-1 d-mobile-none d-tablet-none p-06-r">
                  <span className="text-overflow-ellipses lh-18 d-block white-space-nowrap overflow-hidden fs-3">
                    Gratuito p/ Jogar
                  </span>
                </div>
              </div>
              <div className="d-flex flex-mobile-column justify-mobile-content-center align-items-center justify-content-between w-100 bg-primary m1-025-t">
                <a
                  className="w-50 w-mobile-100 w-tablet-100 w-laptop-100"
                  href="./info-game-gunbound.html"
                >
                  <img
                    className="d-flex w-100 max-inline-size-100"
                    src="../img/gunbound.jpg"
                  />
                </a>
                <div className="d-flex flex-column justify-content-between w-100 align-item-center h-100">
                  <div className="d-flex px-2 flex-column align-item-center justify-content-center">
                    <a
                      className="color-white fw-500 fs-4 d-block white-space-nowrap overflow-hidden lh-18"
                      href="./info-game-gunbound.html"
                    >
                      Gunbound
                    </a>
                    <p className="color-white">Ação, Gratuito p/ Jogar</p>
                    <div className="d-flex">
                      <p className="color-white p-06-r">Windows</p>
                    </div>
                  </div>
                </div>
                <div className="color-white fw-500 pb-mobile-1 pb-tablet-1 pb-laptop-1 d-mobile-none d-tablet-none p-06-r">
                  <span className="text-overflow-ellipses lh-18 d-block white-space-nowrap overflow-hidden fs-3">
                    Gratuito p/ Jogar
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
