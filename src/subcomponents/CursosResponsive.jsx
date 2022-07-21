import React from 'react';
import { Link } from 'react-router-dom';
import '../css/subcomponents/cursosResponsive.css';

const CursosResponsive = ({ menuResponsive }) => {
	return (
		<div
			className={
				menuResponsive === true ? 'cursos-responsive__esconde' : 'cursos-responsive__appear'
			}
		>
			<Link to="/fullstack" className="cursos-responsive__options">
				<span>Full Stack</span>
			</Link>
		</div>
	);
};

export default CursosResponsive;
