import React from 'react';
import IMG_MAIN from '../../assets/image/main.jpeg';
import '../../css/main/main.css';
import { ImWhatsapp } from 'react-icons/im';

const Main = () => {
	return (
		<>
			<div className="main__container">
				<div className="main__container-img">
					<img src={IMG_MAIN} className="main__img" alt="img-main" />
				</div>
				<div className="main__container-text">
					<h1 className="main__title">CAMBIÁ TU FUTURO</h1>
					<p className="main__description">
						Aprendé a programar desde cero y sumate a la industria con mayor crecimiento. No hace
						falta que tengas experiencia. Nosotros te la damos.
					</p>
					<a
						className="main__btn"
						target="_blank"
						rel="noreferrer"
						href="https://api.whatsapp.com/send/?phone=%2B541132855336&text=%C2%A1Hola+DevSchool%21+Me+interesa,+quiero+m%C3%A1s+informaci%C3%B3n"
					>
						{' '}
						<ImWhatsapp className="main__icon-wpp" />
						¿Preguntas? ¡Escribenos!
					</a>
				</div>
			</div>
		</>
	);
};

export default Main;
