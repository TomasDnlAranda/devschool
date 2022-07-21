import React from 'react';
import '../../css/footer/footer.css';
import LOGO_FOOTER from '../../assets/image/logo_darkmode.png';
import LOGO_NAME from '../../assets/image/name.png';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaFacebook, FaLinkedin, FaGraduationCap } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
	return (
		<footer className="footer__container">
			<div className="footer__columna-1">
				<Link className="footer__bolsa" to="/bolsa-de-trabajo">
					BOLSA DE TRABAJO
				</Link>
				<a
					href="https://devschool.gnomio.com/login/"
					target="_blank"
					rel="noreferrer"
					className="footer__campus"
				>
					CAMPUS
				</a>
			</div>
			<div className="footer__columna-2">
				<div className="footer__container-cursos">
					<h4 className="footer__cursos">CURSOS</h4>
					<Link to="/fullstack" className="footer__fs">
						<FaGraduationCap />
						<span>Full Stack</span>
					</Link>
				</div>
				<div className="footer__container-contactanos">
					<h4 className="footer__contactanos">CONTACTANOS</h4>
					<a
						href="https://api.whatsapp.com/send/?phone=%2B541132855336&text=%C2%A1Hola+DevSchool%21+Me+interesa,+quiero+m%C3%A1s+informaci%C3%B3n"
						className="footer__container-wpp"
						target="_blank"
						rel="noreferrer"
					>
						<IoLogoWhatsapp className="footer__icon" />
						<span>+54 11 32855336</span>
					</a>
					<a
						href="https://www.instagram.com/devschool_academia/"
						target="_blank"
						rel="noreferrer"
						className="footer__container-ig"
					>
						<RiInstagramFill className="footer__icon" />
						<span>@devschool_academia</span>
					</a>
					<a
						href="mailto: devschool.consultas@gmail.com"
						className="footer__container-correo"
						target="_blank"
						rel="noreferrer"
					>
						<MdEmail className="footer__icon" />
						<span>devschool.consultas@gmail.com</span>
					</a>
					<a
						href="https://www.facebook.com/devschoolacademia/"
						className="footer__container-correo"
						target="_blank"
						rel="noreferrer"
					>
						<FaFacebook className="footer__icon" />
						<span>devschoolacademia</span>
					</a>
					<a
						href="https://www.linkedin.com/company/devschoolacademy/"
						className="footer__container-correo"
						target="_blank"
						rel="noreferrer"
					>
						<FaLinkedin className="footer__icon" />
						<span>devschoolacademia</span>
					</a>
				</div>
			</div>
			<div className="footer__columna-3">
				<img className="footer__logo" src={LOGO_FOOTER} alt="logo-footer" />
				<img className="footer__name" src={LOGO_NAME} alt="logo-name-footer" />
			</div>
		</footer>
	);
};

export default Footer;
