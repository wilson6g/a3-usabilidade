import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../shared/contexts/user-context";
import LogoSvg from "../../shared/img/logo.svg";
import { loginService } from "../../shared/services/usuario-service/usuario-service";
import "../../styles/login.css";

export function Login() {
  const initialValues = {
    email: "",
    senha: "",
  };
  const [values, setValues] = useState(initialValues);
  const { setUserEmail } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await loginService(values);

      if (data && data?.auth) {
        toast.success(data.message);
        localStorage.setItem("token", data?.token);
        setUserEmail(values.email);
        navigate("/library");
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <main className="d-flex flex-mobile-column vw-100 vh-100">
      <div className="d-flex align-items-center w-mobile-100 w-lm-100 h-lm-60 justify-content-center w-60 h-100 bg-primary">
        <img
          className="w-60 h-60"
          src={LogoSvg}
          alt="Logomarca da plataforma composta por um dragão azulado ao lado do nome 'Dominus Pro'"
        />
      </div>

      <div className="d-flex align-items-center justify-content-center flex-column w-mobile-100 w-lm-100 w-40 h-100">
        <h1 className="text-center fw-600 fs-3">Login</h1>
        <form method="post" className="w-60" onSubmit={onSubmit}>
          <label className="fs-3 d-flex py-5px" htmlFor="email">
            {" "}
            Email{" "}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="d-flex w-100 border-none text-input bg-secondary"
            placeholder="seuemail@exemplo.com"
            value={values.email}
            onChange={(event) =>
              setValues({ ...values, email: event.target.value })
            }
          />

          <label className="fs-3 d-flex py-5px" htmlFor="password">
            {" "}
            Senha{" "}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="d-flex w-100 border-none text-input bg-secondary"
            placeholder="Senha"
            value={values.senha}
            onChange={(event) =>
              setValues({ ...values, senha: event.target.value })
            }
          />

          <div className="d-flex w-100 align-items-center justify-content-center m1-025-t">
            <button
              type="submit"
              className="border-rounded p-2 fs-3 d-flex color-secondary align-items-center justify-content-center bg-primary w-50"
            >
              Entrar
            </button>
          </div>

          <p className="d-flex text-center flex-column">
            Não tem uma conta?
            <a className="text-decoration-underline" href="register">
              {" "}
              Cadastre-se{" "}
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}
