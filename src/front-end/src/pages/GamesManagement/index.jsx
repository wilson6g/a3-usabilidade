import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Footer } from "../../shared/components/Footer";
import { Header } from "../../shared/components/Header";
import { UserContext } from "../../shared/contexts/user-context";
import { getAllGamesByUser } from "../../shared/services/game-service/game-service";
import "../../styles/games-management.css";
import { GameTable } from "./components/GameTable";

export function GamesManagement() {
  const [rows, setRows] = useState([]);
  const [columns] = useState([
    {
      name: "Nome",
    },
    {
      name: "Descrição",
    },
    {
      name: "Nota",
    },
    {
      name: "Plataforma",
    },
  ]);
  const { userEmail } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userEmail !== "") {
          const gamesResponse = await getAllGamesByUser(userEmail);
          setRows(gamesResponse.data);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    fetchData();
  }, [userEmail]);

  const updateRows = (updatedRows) => {
    setRows(updatedRows);
  };

  return (
    <>
      <Header />

      <main className="d-flex min-h-100 justify-content-center p1-025-t flex-mobile-column flex-tablet-column flex-laptop-column flex-1">
        <div className="d-flex flex-column align-items-center w-100 h-100 w-mobile-100 w-tablet-100 w-laptop-100">
          <nav className="bg-primary d-flex align-mobile-items-center align-tablet-items-center align-laptop-items-center w-75 w-tablet-100 w-laptop-100 w-mobile-100 flex-mobile-column flex-tablet-column flex-laptop-column">
            <ul className="d-flex align-items-center d-mobile-block d-tablet-block d-laptop-block w-mobile-90 w-tablet-90 w-laptop-90 p-06-r flex-mobile-column flex-tablet-column flex-laptop-column p-0 w-100">
              <li className="w-100 fs-3-5 w-mobile-100 p-2 w-tablet-100 w-laptop-100 justify-content-center d-tablet-block d-laptop-block d-flex align-item-center align-mobile-items-center align-tablet-items-start align-laptop-items-start">
                <span className="color-secondary fs-3 lh-34 fw-600 align-self-center">
                  Gerenciar Jogos
                </span>
              </li>
            </ul>
          </nav>

          <div className="d-flex w-70 w-mobile-100 w-tablet-100 w-laptop-100 flex-column align-items-center justify-content-center">
            <div className="d-flex flex-column align-item-center justify-content-center m1-025-t h-90 w-mobile-100 color-white w-100">
              <div className="d-flex w-100">
                <a
                  href="add-game"
                  className="w-15 w-mobile-50 py-2 text-center bg-primary color-white border-rounded"
                >
                  Adicionar Jogo
                </a>
              </div>
              <GameTable
                columns={columns}
                rows={rows}
                updateRows={updateRows}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
