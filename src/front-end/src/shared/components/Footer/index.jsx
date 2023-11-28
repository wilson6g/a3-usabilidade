import LogoFooter from "../../img/logo.svg";

export function Footer() {
  return (
    <footer className="d-flex flex-column m1-0625-t align-items-center justify-content-center align-mobile-items-center justify-mobile-content-between bg-primary w-100 h-100">
      <div className="d-flex d-mobile-none flex-row align-items-start justify-content-center w-75">
        <div className="w-100 py-2">
          <span className="color-secondary">
            Desenvolvimento de Habilidades:
          </span>
          <p className="color-secondary">
            Os jogos podem melhorar a resolução de problemas, o pensamento
            estratégico e a tomada de decisões rápida.
          </p>
        </div>
        <div className="w-100 py-2">
          <span className="color-secondary">Entretenimento Social:</span>
          <p className="color-secondary">
            Muitos jogos oferecem modos multiplayer que permitem que os
            jogadores se conectem com amigos e pessoas de todo o mundo.
          </p>
        </div>
        <div className="w-100 py-2">
          <span className="color-secondary">
            Alívio do Estresse e Diversão:
          </span>
          <p className="color-secondary">
            Em um mundo agitado, os jogos podem ser uma maneira relaxante de
            aliviar o estresse.
          </p>
        </div>
      </div>
      <hr
        className="bc-secondary w-mobile-90 d-mobile-none"
        size="2"
        width="75%"
      />
      <div className="d-flex flex-row align-items-center justify-content-between w-75 w-mobile-90">
        <div className="w-mobile-90">
          <a href="library">
            <img className="logo" src={LogoFooter} alt="Nossa Logo" />
          </a>
        </div>
        <p className="fs-3-5 color-secondary">Encontre, Jogue, Viva</p>
      </div>
    </footer>
  );
}
