import React from 'react';
import '../../css/main/ingles.css';
import IMG_INGLES from '../../assets/image/ingles.jpg';

const Ingles = () => {
	return (
		<div className="ing__container">
			<div className="ing__container-text">
				<span className="ing__complemento">PROGRAMA</span>
				<h3>APRENDE INGLES</h3>
				<p>
					{' '}
					Si deseas expandirte como programador en cualquier parte del mundo y ser partícipe de
					proyectos grandes y de todo tipo, en inglés será fundamental.
				</p>
				<p>
					Aprende ingles con nosotros, ofrecemos este indispensable complemento para el curso full
					stack, para que puedas expandir tus ofertas laborales en las mejores empresas del mundo.
				</p>
				<button>MAS INFORMACION</button>
			</div>
			<div className="ing__container-img">
				<img src={IMG_INGLES} alt="img-ingles" />
			</div>
		</div>
	);
};

export default Ingles;
