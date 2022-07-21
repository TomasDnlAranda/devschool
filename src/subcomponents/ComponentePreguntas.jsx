import React, { useState } from 'react';
import '../css/subcomponents/componentePregunta.css';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const ComponentePreguntas = ({ item }) => {
	const [leer, setLeer] = useState(false);

	const changeStateLeer = () => {
		setLeer(!leer);
	};

	return (
		<div className={leer === true ? 'comp-preg__container-open' : 'comp-preg__container-close'}>
			<div className="comp-preg__container-up" onClick={() => changeStateLeer()}>
				<span className="comp-preg__pregunta">{item.pregunta}</span>
				{leer === true ? <BsChevronUp className="comp-preg__icon" /> : <BsChevronDown />}
			</div>
			<hr />
			<div className="comp-preg__container-down">
				<span className="comp-preg__respuesta">{item.respuesta}</span>
				<span className="comp-preg__recalcar">{item.recalcar}</span>
				<span className="comp-preg__footer">{item.footer}</span>
			</div>
		</div>
	);
};

export default ComponentePreguntas;
