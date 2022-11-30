import React, { useEffect } from "react";
import GlobalStyle from "./styles/global";

function Home() {

  const callAPI = async () => {
    return fetch("http://localhost:9000/");
  }

  useEffect(() => {
    const f = async () => {
      let r = await callAPI();
      console.log(r);
    };
    f();

		//localStorage.setItem("yourteam-mock", JSON.stringify(boards));
	}, []);

  return (
    <div>
      <div className="container">
        <main>
          <section className='home'>
            <div className='home-text'>
              <h4 className='text-h4'>Bem vindo a YouR TeaM</h4>
              <h1 className='text-h1'>Gerencie sua Equipe de E-sports</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                error veniam in voluptatem magni quisquam
              </p>
            </div>
          </section>
          <section>
            <div className='services-container'>
              <div className='service-box'>
                <div className='service-title' id="gerenciamento-box">
                  <p>Gerenciamento de Eventos</p>
                </div>
                <div className='service-description'>
                  <h3 id="gerenciamento-title">Cronograma</h3>
                  <p>
                    Adicione no cronograma do YouR TeaM, eventos que sua equipe
                    de E-sports está envolvida, como Campeonatos, Treinos,
                    WorkShops e muito mais!
                  </p>
                </div>
              </div>
              <div className='service-box'>
                <div className='service-title' id="dev-box">
                  <p>Gerenciamento de Equipe</p>
                </div>
                <div className='service-description'>
                  <h3 id="dev-title">Equipe</h3>
                  <p>Adicione, remova e edite membros da sua equipe.</p>
                </div>
              </div>
              <div className='service-box'>
                <div className='service-title' id="design-box">
                  <p>Relatório de Estatísticas</p>
                </div>
                <div className='service-description'>
                  <h3 id="design-title">Metas</h3>
                  <p>
                    Crie metas de desempenho para sua equipe, como vitórias,
                    campeonatos vencidos, menos mortes numa partida e muito
                    mais! Colete um relatório conforme metas forem concluídas
                    para uma ánalise mais aprofundada de desempenho.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className='footer-container'>
            <section>
              <div className='about-container'>
                <div className='about-card'>
                  <i className='fas fa-server'></i>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam iaculis suscipit ligula et imperdiet. Nunc vulputate
                    mattis lacus, eu lobortis ipsum porta sed.
                  </p>
                </div>
                <div className='about-card middle-card'>
                  <i className='fas fa-briefcase'></i>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam iaculis suscipit ligula et imperdiet. Nunc vulputate
                    mattis lacus, eu lobortis ipsum porta sed.
                  </p>
                </div>
                <div className='about-card'>
                  <i className='fas fa-tablet-alt'></i>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam iaculis suscipit ligula et imperdiet. Nunc vulputate
                    mattis lacus, eu lobortis ipsum porta sed.
                  </p>
                </div>
              </div>
            </section>

            <footer>
              <div className='form-container'>
                <form action="">
                  <input type="text" name="name" id="name" placeholder="Nome" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                  />
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Sua mensagem"
                  ></textarea>
                  <input type="submit" class="submit" value="Enviar" />
                </form>
              </div>
              <div className='copyright'>
                <p>Copyright 2022 - YourTeam</p>
              </div>
            </footer>
          </div>
        </main>
        <GlobalStyle />
      </div>
    </div>
  );
}

export default Home;
