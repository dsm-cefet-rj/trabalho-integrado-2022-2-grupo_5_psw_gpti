import Navbar from "./components/Navbar";
import Home from "./Home";
import "./styles/global";
import Cronograma from "./components/Cronograma/Cronograma";
import { Route, Routes } from "react-router-dom";
import Equipe from "./components/Equipe/Equipe";
import Metas from "./components/Metas/Metas";
import NotFound from "./components/NotFound";
import { Component } from "react";

class App extends Component() {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/Cronograma")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}
 render(){
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cronograma" element={<Cronograma />} />
          <Route path="/Equipe" element={<Equipe />} />
          <Route path="/Metas" element={<Metas/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </>
  );
 } 
}
export default App;
