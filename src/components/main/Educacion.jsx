import React from 'react';
import VIDEO_EDUCACION from '../../assets/video/educacion.mp4';
import '../../css/main/educacion.css';
import { BsCheck } from 'react-icons/bs';

const Educacion = () => {
	return (
		<div className="ed__container">
			<div className="ed__container-text">
				<h2 className="ed__title">EDUCACION ONLINE QUE FUNCIONA</h2>
				<h4 className="ed__subtitle">Clases online en vivo con profesores expertos</h4>
				<p className="ed__description">
					En nuestros cursos online en vivo vas a tener interacción real e instantánea con tu
					profesor y compañeros, para resolver todas tus dudas y avanzar en tus proyectos prácticos
					todas las semanas, para que apliques todos los conocimientos y como se aplican en la
					industria laboral.
				</p>
			</div>
			<div className="ed__container-video">
				<div className="ed__container-list">
					<div className="ed__list">
						<BsCheck className="ed__icon" />
						<span>Interaccion en Vivo</span>
					</div>
					<div className="ed__list">
						<BsCheck className="ed__icon" />
						<span>Correccion de proyectos practicos</span>
					</div>
					<div className="ed__list">
						<BsCheck className="ed__icon" />
						<span>Networking con tus compañeros</span>
					</div>
					<div className="ed__list">
						<BsCheck className="ed__icon" />
						<span>Feedback constante</span>
					</div>
					<div className="ed__list">
						<BsCheck className="ed__icon" />
						<span>Acompañamiento en el proyecto final</span>
					</div>
					<div className="ed__list">
						<BsCheck className="ed__icon" />
						<span>Atención en menos de 24 h</span>
					</div>
					<div className="ed__list">
						<BsCheck className="ed__icon" />
						<span>Clases de practica profesional</span>
					</div>
				</div>
				<video className="ed__video" src={VIDEO_EDUCACION} loop autoPlay muted />
			</div>
		</div>
	);
};

export default Educacion;
