import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Footer } from "../../shared/components/Footer";
import { Header } from "../../shared/components/Header";
import { useQuery } from "../../shared/hooks/UseQuery";
import {
  deleteGameById,
  getGameById,
} from "../../shared/services/game-service/game-service";
import "../../styles/edit-game.css";

export function DeleteGame() {
  let query = useQuery();
  const initialValues = {
    nome: "",
    descricao: "",
    fk_plataforma: "",
    nota: "",
    fk_categoria: [],
    fk_usuario: "",
  };
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();

  useEffect(() => {
    getGameById(query.get("id")).then((response) => {
      const categoria = response.data.categorias.map(
        (categoria) => categoria.categoria_id
      );

      setValues({
        id: response.data.id,
        nome: response.data.nome,
        descricao: response.data.descricao,
        fk_plataforma: response.data.plataforma_id,
        nota: response.data.nota,
        fk_categoria: categoria,
      });
    });
  }, []);

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      await deleteGameById(values.id);
      toast.success("Jogo deletado com sucesso!");
      navigate("/games-management");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <>
      <Header />
      <main className="d-flex min-h-100 justify-content-center align-items-center p1-025-t flex-mobile-column flex-tablet-column flex-laptop-column flex-1">
        <div className="d-flex justify-content-center align-items-center flex-column w-50 w-mobile-100 w-tablet-100 w-laptop-100 h-100 bg-dark-blue">
          <div className="w-100 bg-primary">
            <h1 className="color-white px-2">
              Tem certeza que deseja apagar o jogo?
            </h1>
          </div>

          <label className="color-white d-flex py-5px" htmlFor="nome">
            {" "}
            Nome{" "}
          </label>
          <input
            className="w-40 border-none bg-white py-2 w-mobile-100 w-tablet-50 w-laptop-50"
            name="nome"
            id="nome"
            value={values.nome}
            onChange={(event) =>
              setValues({ ...values, nome: event.target.value })
            }
          />

          <div className="py-3 d-flex w-40 align-items-center justify-content-center">
            <div className="w-100">
              <button
                className="bg-primary color-white border-none border-light p-2 w-100 w-mobile-100 w-tablet-100 w-laptop-100"
                onClick={(event) => handleDelete(event)}
              >
                Deletar
              </button>
            </div>
            <div className="w-100">
              <button
                onClick={() => navigate(-1)}
                id="cancel"
                className="bg-red color-white border-none border-light ml-2 p-2 w-100 w-mobile-100 w-tablet-100 w-laptop-100"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
