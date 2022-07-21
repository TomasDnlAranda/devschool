import React, { useState } from 'react';
import '../../css/main/price.css';
import { AiFillInfoCircle } from 'react-icons/ai';

const Price = () => {
	const [hover, setHover] = useState(false);
	const [hoverMsg2, setMsg2Hover] = useState(false);
	const [hoverMsg3, setHoverMsg3] = useState(false);

	return (
		<div className="price__container">
			<div className="price__container-text">
				<h3>NUESTRO CURSO</h3>
			</div>
			<div className="price__container-price">
				<div className="price__container-beca-dev">
					<div className="descuento">
						75
						<div>
							% <br /> OFF
						</div>
					</div>
					<div className="price__container-beca-dev-info">
						<span className="price__title">Carrera Full Stack</span>
						<p className="price__subtitle">hasta 6 cuotas sin interés de</p>
						<p className="price__price">$ 4.500 ARS</p>
						<span className="price__standard">
							Precio Regular <span className="price__tachar">$ 105.000 ARS</span>
							<span className="price__resaltar"> OFERTA UNICA 75% OFF $21.000 ARS</span>
						</span>
						<p className="price__beneficios">Vas a tener</p>
						<span className="price__option">• Las 2 primeras clases gratis</span>
						<span className="price__option">• Clases online en vivo</span>
						<span className="price__option">• Desafios y Proyecto final</span>
						<span className="price__option">• Tutor las 24 hs</span>
						<span className="price__option">• Posibilidad de trabajar con nosotros</span>
						<span className="price__option">• Desafios y Proyecto final</span>
						<span className="price__option">• Las clases van a quedar grabadas</span>
						<p className="price__requisitos">Requisitos</p>
						<span className="price__option">
							<span>• 85% de asistencia en vivo</span>
							<div className="info__hover-85">
								<AiFillInfoCircle
									onMouseEnter={() => setHover(true)}
									onMouseLeave={() => setHover(false)}
								/>
								<p className={hover === true ? 'text-appear' : 'text-ghost'}>
									Vas a poder ver las clases grabadas, pero es necesario que asistas al 85% de las
									clases en vivo, ya que son un espacio muy bueno para que puedas interactuar con tu
									profesor, tutores y compañeros, y que puedas despejar todos tus dudas.
								</p>
							</div>
						</span>
						<span className="price__option">
							<span>• Entregar desafíos en tiempo y forma </span>
							<div className="info__hover-tiempo">
								<AiFillInfoCircle
									onMouseEnter={() => setMsg2Hover(true)}
									onMouseLeave={() => setMsg2Hover(false)}
								/>
								<p className={hoverMsg2 === true ? 'text-appear-tiempo' : 'text-ghost-tiempo'}>
									En todas las clases hay trabajos entregables. Vas a tener 7 días para entregarlos
									desde el día que se habilita.
								</p>
							</div>
						</span>
						<a href="https://forms.gle/SfRhAGJ9qGBpKV2m8" target="_blank" rel="noreferrer">
							Seleccionar Plan
						</a>
					</div>
				</div>
				{/* <div className="price__container-standard">
					<div className="price__container-standard-info">
						<span className="standard__title">Standard</span>
						<p className="price__subtitle">hasta 6 cuotas sin interés de</p>
						<p className="price__price">$ 9.248 ARS</p>
						<span className="price__standard">Precio Total $ 55.488 ARS</span>
						<p className="standard__beneficios">Vas a tener</p>
						<span className="price__option">• Las 2 primeras clases gratis</span>
						<span className="price__option">• Clases online en vivo</span>
						<span className="price__option">• Desafios y Proyecto final</span>
						<span className="price__option">• Tutor las 24 hs</span>
						<span className="price__option">• Posibilidad de trabajar con nosotros</span>
						<span className="price__option">• Desafios y Proyecto final</span>
						<span className="price__option">• Las clases van a quedar grabadas</span>
						<span className="price__option">• Aprende a tu ritmo</span>
						<p className="price__requisitos">Requisitos</p>
						<span className="price__option">
							<span>• 75% de asistencia en vivo </span>
							<div className="info__hover-standard">
								<AiFillInfoCircle
									onMouseEnter={() => setHoverMsg3(true)}
									onMouseLeave={() => setHoverMsg3(false)}
								/>
								<p className={hoverMsg3 === true ? 'text-appear-standard' : 'text-ghost-standard'}>
									Aunque vas a poder ver las clases grabadas, es necesario que asistas al 75% de las
									clases en vivo, ya que son un espacio ideal para interactuar con tu profesor,
									tutores y compañeros, y despejar todos tus dudas.
								</p>
							</div>
						</span>
						<a href="https://forms.gle/AeUevgDZPd1i4n5t9" target="_blank" rel="noreferrer">
							Seleccionar Plan
						</a>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Price;
