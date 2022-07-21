import React from 'react';
import '../../css/main/jobs.css';
import IMG_JOBS from '../../assets/image/jobs.jpeg';

const Jobs = () => {
	return (
		<div className="jobs__container">
			<div className="jobs__container-img">
				<img src={IMG_JOBS} alt="img-jobs" />
			</div>
			<div className="jobs__container-text">
				<span className="jobs__programa">EMPLEO</span>
				<h3>TRABAJA CON NOSOTROS CUANDO EGRESES</h3>
				<p>¡Una vez egresado de nuestro curso te ofrecemos trabajar con nosotros!</p>
				<span>
					En nuestros cursos por cada comision ofrecemos 2 puestos de empleo para trabajar con
					nosotros una vez que te egreses, lo unico que necesitas es capacitarte con nosotros.
				</span>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://api.whatsapp.com/send/?phone=%2B541132855336&text=%C2%A1Hola+DevSchool%21+Me+interesa,+quiero+m%C3%A1s+informaci%C3%B3n"
				>
					MÁS INFORMACION
				</a>
			</div>
		</div>
	);
};

export default Jobs;
