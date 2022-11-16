import GlobalStyle from "../../styles/global";
import ListMembers from "./Functions/ListMembers";


const Equipe = () => {
  return (
    <main>
      <section className="homeEquipe">
        <div className="home-text">
          <h4 className="text-h4">Gerencie sua Equipe</h4>
          <h1 className="text-h1">Equipe</h1>
          <p>
            Crie e adicione membros à sua equipe. Podendo promove-los a capitão
            ou removê-los.
          </p>
        </div>
      </section>
      <GlobalStyle />
      <ListMembers />
    </main>
  );
}
// const users = [
//   { name: "Rodrigo", sal: 7000, status: "Disponivel" },
//   { name: "Bernado", sal: 7000, status: "Indisponivel" },
//   { name: "Vinicius", sal: 7000, status: "Indisponivel" },
// ];

// const Equipe = () => {
//   return (
//     <main>
//       <section className="homeEquipe">
//         <div className="home-text">
//           <h4 className="text-h4">Gerencie sua Equipe</h4>
//           <h1 className="text-h1">Equipe</h1>
//           <p>
//             Crie e adicione membros à sua equipe. Podendo promove-los a capitão
//             ou removê-los.
//           </p>
//         </div>
//       </section>
//       <GlobalStyle />

//       <h3>Membros da Equipe</h3>
//       <ListMembers membros={users} />
//     </main>
//   );
// }

export default Equipe;
