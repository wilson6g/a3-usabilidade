import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Footer } from "../../shared/components/Footer";
import { Header } from "../../shared/components/Header";
import { useQuery } from "../../shared/hooks/UseQuery";
import {
  deletePlatformById,
  getPlatformById,
} from "../../shared/services/platforms-service/platform-service";
import "../../styles/edit-platform.css";
export function DeletePlatform() {
  let query = useQuery();
  const initialValues = {
    nome: "",
    descricao: "",
  };
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();

  useEffect(() => {
    getPlatformById(query.get("id")).then((response) => {
      setValues({
        id: response.data.id,
        nome: response.data.nome,
        descricao: response.data.descricao,
      });
    });
  }, []);

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      await deletePlatformById(values.id, values);
      toast.success("Plataforma deletada com sucesso!");
      navigate("/platform-management");
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
              Você tem certeza que vai apagar a plataforma?
            </h1>
          </div>

          <label className="color-white d-flex py-5px" htmlFor="plataforma">
            Plataforma
          </label>
          <input
            className="w-40 border-none bg-white p-1 w-mobile-100 w-tablet-100 w-laptop-100"
            name="nome"
            id="nome"
            required
            value={values.nome}
            onChange={(event) =>
              setValues({ ...values, nome: event.target.value })
            }
          ></input>

          <div className="py-3 d-flex w-40 align-items-center justify-content-center">
            <div className="w-100">
              <button
                className="bg-primary color-white border-none border-light p-2 w-100 w-mobile-100 w-tablet-100 w-laptop-100"
                onClick={(event) => handleDelete(event)}
              >
                Apagar
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
