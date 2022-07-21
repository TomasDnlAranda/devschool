import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/Navbar';
import IMG_INGLES_1 from '../assets/image/ingles-5.jpg';
import IMG_INGLES_2 from '../assets/image/ingles-6.jpg';
import '../css/ingles/pageIngles.css';
import { BsCheck } from 'react-icons/bs';

const PageIngles = () => {
	return (
		<>
			<Navbar />
			<div className="page-ing__container">
				<div className="apr-ing__container">
					<div className="apr-ing__container-text">
						<h3>APRENDE INGLES CON NOSOTROS</h3>
						<p>
							Complementa el curso de full stack con el idioma ingles para subir aun mas tu
							potencial de aspirar a trabajar en el exterior.
						</p>
						<p>
							No solo mejorara tus ofertas laborales, sino que te ayudará a entender mejor el mundo
							de los codigos, te vamos a preparar para entrevistas en inglés, o proyectos enfocados
							en idioma inglés.
						</p>
						<span>SIN CONOCIMIENTOS PREVIOS</span>
						<button>¿TE INTERESA? ¡APLICA!</button>
					</div>
					<div className="apr-ing__container-img">
						<img src={IMG_INGLES_1} alt="img-ingles" />
					</div>
				</div>
				<div className="importancia__container">
					<div className="importancia__container-img">
						<img src={IMG_INGLES_2} alt="img-ingles" />
					</div>
					<div className="importancia__container-text">
						<h3>LA IMPORTANCIA DE APRENDERLO</h3>
						<p>
							Es muy importante aprender ingles para ser un desarrollador de software y poder
							aspirar a encontrar las mejores ofertas laborales.
						</p>
						<p>
							Por lo que, si estás aspirando a cargos laborales más competitivos y atractivos
							económicamente, lo mejor es aprender inglés. Con nuestro curso comprenderás mucho
							mejor los lenguajes, y te expandirás en muchas áreas de trabajo techs.
						</p>
					</div>
				</div>
				<div className="importancia__container-col-2">
					<p>
						Estas son algunas de las razones por la cual es conveniente aprender inglés para
						programadores:
					</p>
					<div className="importancia__container-list">
						<div className="importancia__list">
							<BsCheck className="importancia__icon" />
							<span>Mayor y mejores ofertas de trabajo.</span>
						</div>
						<div className="importancia__list">
							<BsCheck className="importancia__icon" />
							<span>Mayor y mejores ofertas de trabajo a nivel mundial.</span>
						</div>
						<div className="importancia__list">
							<BsCheck className="importancia__icon" />
							<span>
								Mayor capacidad para entender y desarrollar código y lenguajes de programación.
							</span>
						</div>
						<div className="importancia__list">
							<BsCheck className="importancia__icon" />
							<span>Capacidad de expandir tu campo laboral a cualquier parte del mundo.</span>
						</div>
						<div className="importancia__list">
							<BsCheck className="importancia__icon" />
							<span>Posibilidad de optar por los mejores puestos laborales en empresas.</span>
						</div>
						<div className="importancia__list">
							<BsCheck className="importancia__icon" />
							<span>Los lenguajes de programación suelen trabajar inglés técnico.</span>
						</div>
						<div className="importancia__list">
							<BsCheck className="importancia__icon" />
							<span>
								Las entrevistas de las mejores empresas desarrolladores techs son en inglés.
							</span>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default PageIngles;
