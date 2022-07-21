import React from 'react';
import { PreguntasFrecuentes } from '../../data/PreguntasFrecuentes.js';
import ComponentePreguntas from '../../subcomponents/ComponentePreguntas';
import '../../css/main/preguntas.css';

const Preguntas = () => {
	return (
		<div className="preguntas__container">
			<h3 className="preguntas__title">Preguntas Frecuentes</h3>
			{PreguntasFrecuentes.map((item) => (
				<ComponentePreguntas key={item.id} item={item} />
			))}
		</div>
	);
};

export default Preguntas;
