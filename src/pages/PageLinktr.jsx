import React from 'react';
import '../css/linktr/pageLinktr.css';
import IMG_LOGO_LINKTR from '../assets/image/logo-linktr.png';

const PageLinktree = () => {
	return (
		<div className="linktr__container">
			<div className="linktr__perfil">
				<img src={IMG_LOGO_LINKTR} alt="logo-linktr" />
				<p>@devschool_academia</p>
				<span>Potencia tu perfil y aprendé a programar 💻 😎</span>
			</div>
			<div className="linktr__container-links">
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSd3vrKV4qk2nBe0NFjiwtqWC16L-OBfdcUc5yuxsrUSvR4EWA/viewform?usp=sf_link"
					target="_blank"
					rel="noreferrer"
				>
					🔥🔥 Full Stack Sale - Inscripcion Agosto
				</a>
				<a href="#">
					📚📚 Ingles Sale - Inscripcion
					<span>
						{' '}
						<br />
						¡¡PRÓXIMAMENTE!!
					</span>
				</a>
				<a href="https://n9.cl/devschool-temario-fullstack" target="_blank" rel="noreferrer">
					💻 Temario - Carrera Full Stack
				</a>
				<a href="https://forms.gle/jKbWJBiuLizKgv3n8" target="_blank" rel="noreferrer">
					📌 Becas 100% - Carrera Full Stack
				</a>
				<a href="https://devschool.com.ar/" target="_blank" rel="noreferrer">
					💖 Visita nuestro sitio web
				</a>
				<a
					href="https://api.whatsapp.com/send/?phone=%2B541132855336&text=%C2%A1Hola+DevSchool%21+Me+interesa,+quiero+m%C3%A1s+informaci%C3%B3n"
					target="_blank"
					rel="noreferrer"
				>
					📲 WhatsApp
				</a>
				<a href="https://www.instagram.com/devschool_academia/" target="_blank" rel="noreferrer">
					📷 Instagram
				</a>
				<a
					href="https://www.linkedin.com/company/devschoolacademy"
					target="_blank"
					rel="noreferrer"
				>
					💼 Linkedin
				</a>
				<a href="https://www.facebook.com/devschoolacademia/" target="_blank" rel="noreferrer">
					🌐 Facebook
				</a>
			</div>
		</div>
	);
};

export default PageLinktree;
