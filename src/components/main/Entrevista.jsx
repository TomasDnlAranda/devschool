import React from 'react';
import '../../css/main/entrevista.css';
import IMG_ENTREVISTA from '../../assets/image/entrevista.jpeg';
import { BsCheck } from 'react-icons/bs';

export const Entrevista = () => {
	return (
		<div className="ent__container">
			<div className="ent__container-img">
				<img src={IMG_ENTREVISTA} alt="img_entrevista" />
			</div>
			<div className="ent__container-text">
				<h3>SERVICIOS DE DESARROLLO PROFESIONAL</h3>
				<p>
					Nuestro equipo va a trabajar con vos para comprender tus objetivos profesionales y mejorar
					tus habilidades blandas.
				</p>
				<div className="ent__container-list">
					<div className="ent__list">
						<BsCheck className="ent__icon" />
						<span>Entrenamiento para entrevistas</span>
					</div>
					<div className="ent__list">
						<BsCheck className="ent__icon" />
						<span>Perfil de LinkedIn y CV</span>
					</div>
					<div className="ent__list">
						<BsCheck className="ent__icon" />
						<span>Creación de portfolio</span>
					</div>
				</div>
			</div>
		</div>
	);
};
