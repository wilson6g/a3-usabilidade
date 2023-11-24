import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LogoSvg from "../../shared/img/logo.svg";
import { registrarUsuarioService } from "../../shared/services/usuario-service/usuario-service";
import "../../styles/register.css";

export function Register() {
  const initialValues = {
    usuario: "",
    nome: "",
    email: "",
    senha: "",
    repetirSenha: "",
  };
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await registrarUsuarioService(values);
      toast.success("Usuário registrado com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <main className="d-flex flex-mobile-column vw-100 vh-100">
      <aside className="d-flex align-items-center w-mobile-100 w-lm-100 h-lm-60 justify-content-center w-60 h-100 bg-primary">
        <img className="w-60 h-60" src={LogoSvg} alt="Nossa Logo" />
      </aside>

      <div className="d-flex align-items-center justify-content-center flex-column w-mobile-100 w-lm-100 w-40 h-100">
        <h1 className="text-center fw-600 fs-3">Registro</h1>
        <form
          method="post"
          className="w-60 d-flex justify-content-center flex-column"
          onSubmit={handleSubmit}
        >
          <label className="fs-3 d-flex py-5px" htmlFor="email">
            E-mail:
          </label>
          <input
            className="d-flex w-100 border-none text-input bg-secondary"
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email."
            value={values.email}
            onChange={(event) =>
              setValues({ ...values, email: event.target.value })
            }
          />

          <label className="fs-3 d-flex py-5px" htmlFor="name">
            Nome:
          </label>
          <input
            className="d-flex w-100 border-none text-input bg-secondary"
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome."
            value={values.nome}
            onChange={(event) =>
              setValues({ ...values, nome: event.target.value })
            }
          />

          <label className="fs-3 d-flex py-5px" htmlFor="senha">
            Senha:
          </label>
          <input
            className="d-flex w-100 border-none text-input bg-secondary"
            type="password"
            name="senha"
            id="senha"
            placeholder="Digite sua senha."
            value={values.senha}
            onChange={(event) =>
              setValues({ ...values, senha: event.target.value })
            }
          />

          <label className="fs-3 d-flex py-5px" htmlFor="repeat-password">
            Repetir senha:
          </label>
          <input
            className="d-flex w-100 border-none text-input bg-secondary"
            type="password"
            name="repeat-password"
            id="repeat-password"
            placeholder="Repita sua senha."
            value={values.repetirSenha}
            onChange={(event) =>
              setValues({ ...values, repetirSenha: event.target.value })
            }
          />
          <div className="d-flex w-100 fs-3 align-items-center justify-content-center m1-0625-t">
            <button
              type="submit"
              className="border-rounded p-2 fs-3 d-flex color-secondary align-items-center justify-content-center bg-primary w-50"
            >
              Registrar
            </button>
          </div>
        </form>
        <p className="d-flex text-center flex-column">
          Já tem uma conta?
          <a className="text-decoration-underline" href="/">
            Faça login.
          </a>
        </p>
      </div>
    </main>
  );
}
