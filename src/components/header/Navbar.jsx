import React, { useState } from 'react';
import LOGO_DARKMODE from '../../assets/image/logo.jpeg';
import NAME_DARKMODE from '../../assets/image/name.png';
import { HiMenuAlt1 } from 'react-icons/hi';
import '../../css/header/navbar.css';
import MenuNavbar from '../../subcomponents/MenuNavbar';
import { IoMdClose } from 'react-icons/io';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import CursosResponsive from '../../subcomponents/CursosResponsive';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const [menuResponsive, setMenuResponsive] = useState(false);

	const changeStateMenu = () => {
		setMenu(!menu);
	};

	const handleChangeCursos = () => {
		setMenuResponsive(!menuResponsive);
	};

	return (
		<>
			<nav>
				<div className="navbar__container">
					<Link to="/" className="navbar__container-logo">
						<img className="navbar__logo" src={LOGO_DARKMODE} alt="logo" />
						<img className="navbar__name" src={NAME_DARKMODE} alt="logo" />
					</Link>
					<div className="navbar__menu">
						<div className="menu__responsive-1316">
							<div className="menu__cursos-1316" onClick={() => handleChangeCursos()}>
								<div className="menu__cursos-icon-1316">
									<span className="menu__text-1316">CURSOS</span>
									{menuResponsive === true ? (
										<AiFillCaretUp className="menu__icon-1316" />
									) : (
										<AiFillCaretDown className="menu__icon-1316" />
									)}
								</div>
								<div className="menu__cursos-icon-1316 menu__cursos-icon-1316-con">
									<span className="menu__text-1316">CONTACTANOS</span>
								</div>
								<div className="menu__cursos_responsive-1316">
									<CursosResponsive menuResponsive={menuResponsive} />
								</div>
							</div>
						</div>
						<div className="menu__container-768">
							<Link className="menu__contact-768  menu__outline" to="/bolsa-de-trabajo">
								<span className="menu__text menu__text-bdt">BOLSA DE TRABAJO</span>
							</Link>
							<a
								href="https://devschool.gnomio.com/login/"
								target="_blank"
								rel="noreferrer"
								className="menu__campus-768"
							>
								<span className="menu__text">CAMPUS</span>
							</a>
						</div>
						<div className="navbar__con-logo">
							{menu === true ? (
								<IoMdClose onClick={() => changeStateMenu()} />
							) : (
								<HiMenuAlt1 onClick={() => changeStateMenu()} />
							)}
						</div>
					</div>
				</div>
				<MenuNavbar menu={menu} />
			</nav>
		</>
	);
};

export default Navbar;
