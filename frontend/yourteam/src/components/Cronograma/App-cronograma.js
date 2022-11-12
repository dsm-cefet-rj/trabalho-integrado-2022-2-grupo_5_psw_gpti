import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Board from './components/Board';
import Navbar from '../Navbar';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Navbar/>
      <Header/>
      <Board/>
      <GlobalStyle />
    </DndProvider>
  );
}

export default App;