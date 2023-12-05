import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/menu.css";

export function Menu() {
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef();

  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuAberto(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="d-flex d-flex align-items-center hidden align-items-center align-items-center w-mobile-10 w-tablet-10 w-laptop-10 justify-content-center menu-container"
      ref={menuRef}
    >
      <div
        className={`menu-icon hidden ${menuAberto ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`menu py-4 ${menuAberto ? "open" : ""}`}>
        <ul>
          <li>
            <a
              className="text-uppercase text-center color-secondary py-2"
              href="library"
            >
              Meus Jogos
            </a>
          </li>
          <li>
            <a
              className="text-uppercase text-center color-secondary py-2"
              href="platform"
            >
              Plataformas
            </a>
          </li>
          <li>
            <a
              className="text-uppercase text-center color-secondary py-2"
              href="games-management"
            >
              Gerenciar jogos
            </a>
          </li>
          <li>
            <a
              className="text-uppercase text-center color-secondary py-2"
              href="platform-management"
            >
              Gerenciar plataformas
            </a>
          </li>
          <li>
            <a
              className="text-uppercase text-center color-secondary py-2"
              href="documentation"
            >
              Documentação
            </a>
          </li>
          <li>
            <a
              className="text-uppercase text-center color-secondary py-2"
              href="login"
              id="sair"
              onClick={logout}
            >
              Sair
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
