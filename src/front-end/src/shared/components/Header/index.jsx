import { useNavigate } from "react-router-dom";
import LogoHeader from "../../img/logo.svg";
import { Menu } from "../Menu";

export function Header() {
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="mb-25px mb-25px d-flex align-items-center justify-content-center bg-primary w-mobile-100 w-tablet-100 w-laptop-100 w-100">
      <div className="d-flex w-mobile-100 w-tablet-100 w-laptop-100 align-items-center align-items-center align-items-center align-items-center">
        {/* <div className="hidden d-flex align-items-center align-items-center align-items-center w-mobile-10 w-tablet-10 w-laptop-10 justify-content-center">
          <input type="checkbox" id="menu-toggle" className="hidden" />
          <label htmlFor="menu-toggle" className="cursor-pointer">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </label>
          <nav className="menu d-flex w-100 h-100 flex-column">
            <ul>
              <li>
                <a
                  className="text-uppercase color-secondary py-2"
                  href="library"
                >
                  Meus jogos
                </a>
              </li>
              <li>
                <a
                  className="text-uppercase color-secondary py-2"
                  href="games-management"
                >
                  Gerenciar jogos
                </a>
              </li>
              <li>
                <a
                  className="text-uppercase color-secondary py-2"
                  href="platform-management"
                >
                  Gerenciar plataformas
                </a>
              </li>
              <li>
                <a
                  className="text-uppercase color-secondary py-2"
                  onClick={logout}
                  href="games"
                >
                  Sair
                </a>
              </li>
            </ul>
          </nav>
        </div> */}
        <Menu />


        <div className="w-mobile-90 w-tablet-90 w-laptop-90 d-flex justify-content-center align-items-center align-self-center">
          <a href="library">
            <img className="w-80 h-80" src={LogoHeader} alt="Nossa Logo" />
          </a>
        </div>
      </div>
      <nav className="w-50 d-mobile-none d-tablet-none d-laptop-none">
        <ul className="d-flex justify-content-around">
          <li>
            <a className="text-uppercase color-secondary py-2" href="library">
              Meus jogos
            </a>
          </li>
          <li>
            <a className="text-uppercase color-secondary py-2" href="platform">
              Plataformas
            </a>
          </li>
          <li>
            <a
              className="text-uppercase color-secondary py-2"
              onClick={logout}
              href="games"
            >
              Sair
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
