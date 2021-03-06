import React from 'react';
import '../css/linktr/pageLinktr.css';
import IMG_LOGO_LINKTR from '../assets/image/logo-linktr.png';

const PageLinktree = () => {
	return (
		<div className="linktr__container">
			<div className="linktr__perfil">
				<img src={IMG_LOGO_LINKTR} alt="logo-linktr" />
				<p>@devschool_academia</p>
				<span>Potencia tu perfil y aprendรฉ a programar ๐ป ๐</span>
			</div>
			<div className="linktr__container-links">
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSd3vrKV4qk2nBe0NFjiwtqWC16L-OBfdcUc5yuxsrUSvR4EWA/viewform?usp=sf_link"
					target="_blank"
					rel="noreferrer"
				>
					๐ฅ๐ฅ Full Stack Sale - Inscripcion Agosto
				</a>
				<a href="#">
					๐๐ Ingles Sale - Inscripcion
					<span>
						{' '}
						<br />
						ยกยกPRรXIMAMENTE!!
					</span>
				</a>
				<a href="https://n9.cl/devschool-temario-fullstack" target="_blank" rel="noreferrer">
					๐ป Temario - Carrera Full Stack
				</a>
				<a href="https://forms.gle/jKbWJBiuLizKgv3n8" target="_blank" rel="noreferrer">
					๐ Becas 100% - Carrera Full Stack
				</a>
				<a href="https://devschool.com.ar/" target="_blank" rel="noreferrer">
					๐ Visita nuestro sitio web
				</a>
				<a
					href="https://api.whatsapp.com/send/?phone=%2B541132855336&text=%C2%A1Hola+DevSchool%21+Me+interesa,+quiero+m%C3%A1s+informaci%C3%B3n"
					target="_blank"
					rel="noreferrer"
				>
					๐ฒ WhatsApp
				</a>
				<a href="https://www.instagram.com/devschool_academia/" target="_blank" rel="noreferrer">
					๐ท Instagram
				</a>
				<a
					href="https://www.linkedin.com/company/devschoolacademy"
					target="_blank"
					rel="noreferrer"
				>
					๐ผ Linkedin
				</a>
				<a href="https://www.facebook.com/devschoolacademia/" target="_blank" rel="noreferrer">
					๐ Facebook
				</a>
			</div>
		</div>
	);
};

export default PageLinktree;
