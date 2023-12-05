import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Footer } from "../../shared/components/Footer";
import { Header } from "../../shared/components/Header";
import { UserContext } from "../../shared/contexts/user-context";
import { useQuery } from "../../shared/hooks/UseQuery";
import { findAllCategories } from "../../shared/services/category-service/category-service";
import {
  getGameById,
  updateGameById,
} from "../../shared/services/game-service/game-service";
import { findAllPlatforms } from "../../shared/services/platforms-service/platform-service";
import "../../styles/edit-game.css";

export function EditGame() {
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
  const [platforms, setPlatforms] = useState([]);
  const [categories, setCategories] = useState([]);
  const { userEmail } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    findAllPlatforms().then((response) => {
      setPlatforms(response.data);
    });

    findAllCategories().then((response) => {
      setCategories(response.data);
    });

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

  const tratarCampos = () => {
    if (values.fk_plataforma === "") {
      toast.warning("Por favor, selecione uma plataforma válida.");
      return;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (tratarCampos()) {
      try {
        const updatedValues = {
          ...values,
          fk_usuario: userEmail,
        };

        await updateGameById(values.id, updatedValues);
        toast.success("Jogo atualizado com sucesso!");
        navigate("/games-management");
      } catch (error) {
        toast.error(error.response.data.error);
      }
    }
  };

  return (
    <>
      <Header />
      <main className="d-flex min-h-100 justify-content-center align-items-center p1-025-t flex-mobile-column flex-tablet-column flex-laptop-column flex-1">
        <div className="d-flex justify-content-center align-items-center flex-column w-50 w-mobile-100 w-tablet-100 w-laptop-100 h-100 bg-dark-blue">
          <div className="w-100 bg-primary">
            <h1 className="color-white px-2">Editar Jogo</h1>
          </div>
          <form
            method="post"
            className="d-flex flex-column w-75 align-items-center justify-content-center py-3"
            onSubmit={handleSubmit}
          >
            <label className="color-white d-flex py-5px" htmlFor="nome">
              {" "}
              Nome{" "}
            </label>
            <input
              className="w-60 border-none bg-white p-1 w-mobile-100 w-tablet-100 w-laptop-100"
              name="nome"
              id="nome"
              value={values.nome}
              onChange={(event) =>
                setValues({ ...values, nome: event.target.value })
              }
            />

            <label className="color-white d-flex py-5px" htmlFor="descricao">
              Descrição
            </label>
            <textarea
              id="descricao"
              className="w-60 border-none bg-white p-1 w-mobile-100 w-tablet-100 w-laptop-100 text-justify"
              name="descricao"
              rows="4"
              cols="50"
              placeholder="Descrição"
              value={values.descricao}
              onChange={(event) =>
                setValues({ ...values, descricao: event.target.value })
              }
            ></textarea>

            <label className="color-white d-flex py-5px" htmlFor="plataforma">
              Nota
            </label>
            <select
              className="w-60 border-none bg-white p-1 w-mobile-100 w-tablet-100 w-laptop-100"
              name="nota"
              id="nota"
              required
              value={values.nota}
              onChange={(event) =>
                setValues({ ...values, nota: event.target.value })
              }
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>

            <label className="color-white d-flex py-5px" htmlFor="plataforma">
              Plataforma
            </label>
            <select
              className="w-60 border-none bg-white p-1 w-mobile-100 w-tablet-100 w-laptop-100"
              name="fk_plataforma"
              id="fk_plataforma"
              value={values.fk_plataforma}
              required
              onChange={(event) =>
                setValues({ ...values, fk_plataforma: event.target.value })
              }
            >
              {platforms.map((platform) => (
                <option key={platform.id} value={platform.id}>
                  {platform.nome}
                </option>
              ))}
            </select>

            <label className="color-white d-flex py-5px" htmlFor="fk_categoria">
              Categorias
            </label>
            <select
              className="w-60 border-none bg-white p-1 w-mobile-100 w-tablet-100 w-laptop-100"
              name="fk_categoria"
              id="fk_categoria"
              value={values.fk_categoria}
              required
              onChange={(event) => {
                const selectedOptions = Array.from(
                  event.target.selectedOptions,
                  (option) => option.value
                );
                setValues({ ...values, fk_categoria: selectedOptions });
              }}
              multiple
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.nome}
                </option>
              ))}
            </select>

            <div className="py-3 d-flex w-40 align-items-center justify-content-center">
              <div className="w-100">
                <button
                  className="bg-primary color-white border-none border-light p-2 w-100 w-mobile-100 w-tablet-100 w-laptop-100"
                  type="submit"
                >
                  Editar
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
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
