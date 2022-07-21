import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/main/aplica.css';

const Aplica = () => {
	return (
		<div className="aplica__container">
			<h3>¿Listo para cambiar tu vida?</h3>
			<Link to="/fullstack">Aplica</Link>
		</div>
	);
};

export default Aplica;
