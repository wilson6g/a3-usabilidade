import { Footer } from "../../shared/components/Footer";
import { Header } from "../../shared/components/Header";

import "../../styles/info-game.css";

export function Documentation() {
  return (
    <>
      <Header />
      <main className="min-h-100 d-flex justify-content-center flex-column align-items-center p1-025-t flex-mobile-column flex-tablet-column flex-laptop-column flex-1">
        <div className="d-flex w-75 w-mobile-75 w-tablet-75 w-laptop-75 flex-column align-items-center justify-content-center">
          <div className="justify-mobile-center justify-content-center bg-primary mb-25px d-flex align-items-center w-100 w-tablet-100 w-laptop-100 w-mobile-100 flex-mobile-column flex-tablet-column flex-laptop-column">
            <h1 className="color-white text-center">Documentação</h1>
          </div>
        </div>

        <div className="d-flex flex-column color-white justify-mobile-center justify-content-center bg-primary mb-25px d-flex align-items-center w-75 w-tablet-100 w-laptop-100 w-mobile-100 flex-mobile-column flex-tablet-column flex-laptop-column">
          <div className="w-75">
            <h1 className="align-self-center">Bem-vindo ao Dominus Pro</h1>
            <h2 className="">Visão Geral</h2>
            <p className="text-justify">
              A Dominus Pro oferece uma plataforma completa para administrar e
              desfrutar de uma vasta gama de jogos. Com recursos de catalogação
              e organização, proporcionamos uma experiência de gerenciamento de
              jogos simplificada.
            </p>
          </div>
          <div className="w-75">
            <h2>Recursos Principais</h2>
            <span className="fw-600">Gerenciamento de Jogos:</span>
            <p className="text-justify">
              Tenha controle total sobre seus jogos, adicione novos jogos
              atribuindo notas, plataforma e categorizando de acordo com sua
              experiência personalizada. Tenha controle total sobre os jogos,
              removendo, alterando a depender da sua necessidade.
            </p>
            <span className="fw-600">Gerenciamento de Plataforma:</span>
            <p className="text-justify">
              Temos uma proposta diferente para a plataforma, a medida que os
              usuários forem cadastrando as plataformas, essas plataformas
              poderão ser utilizadas por todos. Temos validações para alterações
              da plataforma limitando ao usuário a atualizar ou remover uma
              plataforma que tenha jogos vinculados.
            </p>
            <span className="fw-600">Meus jogos:</span>
            <p className="text-justify">
              Tenha uma lista com todos os seus jogos, com filtro para conseguir
              buscar aquele jogo mais rápido. Tenha acesso a mais informações do
              seu jogo ao clicar.
            </p>
            <span className="fw-600">Jogos por Plataforma:</span>
            <p className="text-justify">
              Filtre os jogos por plataforma, acesse, selecione a plataforma e
              faça um filtro de todos os seus jogos por plataforma.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
