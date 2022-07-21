import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/main/fullStack.css';
import { Icons } from '../../data/Icons';
import IconsFullStack from '../../subcomponents/IconsFullStack';

const FullStack = () => {
	return (
		<div className="fs__container">
			<span className="fs__programa">PROGRAMA</span>
			<div className="fs__container-text">
				<h2 className="fs__title">FULL-STACK</h2>
				<p className="fs__description">
					Programa ideal para principiantes con o sin experiencia. En 6 meses te preparamos para
					poder trabajar con el set de tecnologías más demandado por la industria, te formamos para
					que incrementes al máximo tus posibilidades laborales. No es necesario que estés graduado
					para comenzar a aprender.
				</p>
				<p className="fs__description_2">
					NO ES NECESARIO QUE ESTES GRADUADO PARA COMENZAR A APRENDER.
				</p>
				<Link to="/fullstack" className="fs__btn-responsive">
					VER COMISIONES DISPONIBLES
				</Link>
			</div>
			<div className="fs__container-icons">
				{Icons.map((item) => (
					<IconsFullStack item={item} key={item.id} />
				))}
			</div>
			<Link to="/fullstack" className="fs__btn">
				VER COMISIONES DISPONIBLES
			</Link>
		</div>
	);
};

export default FullStack;
