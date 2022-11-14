import React from 'react'
import GlobalStyle from "../styles/global";

function NotFound (){
    return (
  <main>
    <section class="homeNotFound">
      <div class="home-text">
        <h4 class="text-h4">Error 404: Page not Found</h4>
        <h1 class="text-h1">Ops! Página não encontrada.</h1>
        <p>
          Acho que você foi para o lugar errado =/. Não encontramos essa página.
        </p>
      </div>
    </section>
    <GlobalStyle />
  </main>
)
}
export default NotFound