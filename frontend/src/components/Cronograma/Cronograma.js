import GlobalStyle from "../../styles/global";
import React, { useEffect, useState } from "react";

import Board from "./Board/Board";

import "./Cronograma.css";
import Editable from "./Editabled/Editable";

function Cronograma() {
	const [boards, setBoards] = useState(
		JSON.parse(localStorage.getItem("yourteam-mock")) || []
	);

	const addboardHandler = (name) => {
		const tempBoards = [...boards];
		tempBoards.push({
			id: Date.now() + Math.random() * 2,
			title: name,
			cards: [],
		});
		setBoards(tempBoards);
	};

	const removeBoard = (id) => {
		const index = boards.findIndex((item) => item.id === id);
		if (index < 0) return;

		const tempBoards = [...boards];
		tempBoards.splice(index, 1);
		setBoards(tempBoards);
	};

	const addCardHandler = (id, title) => {
		const index = boards.findIndex((item) => item.id === id);
		if (index < 0) return;

		const tempBoards = [...boards];
		tempBoards[index].cards.push({
			id,
			title,
			labels: [],
			date: "",
			tasks: [],
		});
		setBoards(tempBoards);
	};

	const removeCard = (bid, cid) => {
		const index = boards.findIndex((item) => item.id === bid);
		if (index < 0) return;

		const tempBoards = [...boards];
		const cards = tempBoards[index].cards;

		const cardIndex = cards.findIndex((item) => item.id === cid);
		if (cardIndex < 0) return;

		cards.splice(cardIndex, 1);
		setBoards(tempBoards);
	};

	const updateCard = (bid, cid, card) => {
		const index = boards.findIndex((item) => item.id === bid);
		if (index < 0) return;

		const tempBoards = [...boards];
		const cards = tempBoards[index].cards;

		const cardIndex = cards.findIndex((item) => item.id === cid);
		if (cardIndex < 0) return;

		tempBoards[index].cards[cardIndex] = card;

		setBoards(tempBoards);
	};
	useEffect(() => {
		localStorage.setItem("yourteam-mock", JSON.stringify(boards));
	}, [boards]);

	//localStorage.clear();
	return (
		<main>
			<section className="homeCronograma">
				<div className="home-text">
					<h4 className="text-h4">Gerencie o Cronograma da sua Equipe</h4>
					<h1 className="text-h1">Cronograma</h1>
					<p>
						Adicione no cronograma do YouR TeaM, eventos que sua equipe de
						E-sports está envolvida, como Campeonatos, Treinos, WorkShops e
						muito mais! Insira um evento abaixo com sua descrição e horário em
						que ocorrerá.
					</p>
				</div>
			</section>
			<div className="app_boards_container">
				<div className="app_boards">
					{boards.map((item) => (
						<Board
							key={item.id}
							board={item}
							addCard={addCardHandler}
							removeBoard={() => removeBoard(item.id)}
							removeCard={removeCard}
							updateCard={updateCard}
						/>
					))}
					<div className="app_boards_last">
						<Editable
							displayClass="app_boards_add-board"
							editClass="app_boards_add-board_edit"
							placeholder="Insira o nome do evento..."
							text="Adicionar Evento"
							buttonText="Adicionar Evento"
							onSubmit={addboardHandler}
						/>
					</div>
				</div>
			</div>
			<GlobalStyle />
		</main>
	);
}
export default Cronograma;
