import React, { useState } from 'react';
import '../css/subcomponents/menuNavbar.css';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import Cursos from './Cursos';
import { Link } from 'react-router-dom';

const MenuNavbar = ({ menu }) => {
	const [cursos, setCursos] = useState(false);

	const changeStateCursos = () => {
		if (menu === false) {
			setCursos(false);
		}
		setCursos(!cursos);
	};

	return (
		<>
			<div className={menu === true ? 'menu__container-appear' : 'menu__container-esconde'}>
				<Link to="/" className="menu__option">
					<span className="menu__home">HOME</span>
				</Link>
				<div className="menu__option menu__cursos-container" onClick={() => changeStateCursos()}>
					<span className="menu__cursos">CURSOS</span>
					{cursos === true ? (
						<AiFillCaretUp className="menu__icon-down" />
					) : (
						<AiFillCaretDown className="menu__icon-down" />
					)}
				</div>
				<Cursos cursos={cursos} />
				<a
					className="menu__option responsive_768"
					href="https://devschool.gnomio.com/login/"
					target="_blank"
					rel="noreferrer"
				>
					<span className="menu__contact">CAMPUS</span>
				</a>
				<a
					className="menu__option responsive_768 contactanos-wpp"
					target="_blank"
					rel="noreferrer"
					href="https://api.whatsapp.com/send/?phone=%2B541132855336&text=%C2%A1Hola+DevSchool%21+Me+interesa,+quiero+m%C3%A1s+informaci%C3%B3n"
				>
					<span className="menu__contact">CONTACTANOS</span>
				</a>
			</div>
		</>
	);
};

export default MenuNavbar;
