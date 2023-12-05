import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Footer } from "../../shared/components/Footer";
import { Header } from "../../shared/components/Header";
import { createPlatform } from "../../shared/services/platforms-service/platform-service";
import "../../styles/edit-platform.css";

export function AddPlatform() {
  const initialValues = {
    nome: "",
    descricao: "",
  };
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createPlatform(values);
      toast.success("Plataforma criada com sucesso!");
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
            <h1 className="color-white px-2">Cadastrar Plataforma</h1>
          </div>
          <form
            method="post"
            className="d-flex flex-column w-75 align-items-center justify-content-center py-3"
            onSubmit={handleSubmit}
          >
            <label className="color-white d-flex py-5px" htmlFor="nome">
              Nome
            </label>
            <input
              className="w-60 border-none bg-white p-1 w-mobile-100 w-tablet-100 w-laptop-100"
              name="nome"
              id="nome"
              required
              placeholder="Nome da Plataforma"
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
              className="w-60 border-none bg-white p-1 w-mobile-100 w-tablet-100 w-laptop-100"
              name="descricao"
              rows="4"
              cols="50"
              required
              value={values.descricao}
              onChange={(event) =>
                setValues({ ...values, descricao: event.target.value })
              }
              placeholder="Descrição"
            ></textarea>

            <div className="py-3 d-flex w-40 align-items-center justify-content-center">
              <div className="w-100">
                <button
                  className="bg-primary color-white border-none border-light p-2 w-100 w-mobile-100 w-tablet-100 w-laptop-100"
                  type="submit"
                >
                  Adicionar
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
