import React from 'react';
import { Link } from 'react-router-dom';
import '../css/subcomponents/cursos.css';

const Cursos = ({ cursos }) => {
	return (
		<>
			<div className={cursos === true ? 'cursos__esconde' : 'cursos__appear'}>
				<Link to="/fullstack">
					<div className="cursos__options">
						<span className="cursos__full-stack">Full Stack</span>
					</div>
				</Link>
			</div>
		</>
	);
};

export default Cursos;
