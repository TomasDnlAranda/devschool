import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/Navbar';
import '../css/bolsaDeTrabajo/bolsaDeTrabajo.css';

const PageBolsaDeTrabajo = () => {
	return (
		<>
			<Navbar />
			<section className="page-bdt__container">
				<h3>AÚN NO HAY TRABAJOS PUBLICADOS, ¡VUELVE PRONTO!</h3>
			</section>
			<Footer />
		</>
	);
};

export default PageBolsaDeTrabajo;
