import React from 'react';
import '../css/subcomponents/componenteComisiones.css';

const ComponenteComisiones = ({ item }) => {
	return (
		<div className="cc__container">
			<h4>
				Comisión: <span>{item.nombre}</span>
			</h4>
			<p>
				{item.dias} de {item.horarioArg}
			</p>
			<h5>(INICIA EL {item.inicio}).</h5>
			<div className="cc__container-svg">
				{' '}
				<div className="cc__resaltar">
					<svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17">
						<g id="Arg" transform="translate(-219 -6646)">
							<rect
								id="Rectángulo_115"
								data-name="Rectángulo 115"
								width="23"
								height="6"
								transform="translate(219 6646)"
								fill="#68dbff"
							></rect>
							<rect
								id="Rectángulo_118"
								data-name="Rectángulo 118"
								width="23"
								height="6"
								transform="translate(219 6657)"
								fill="#68dbff"
							></rect>
							<circle
								id="Elipse_141"
								data-name="Elipse 141"
								cx="2.5"
								cy="2.5"
								r="2.5"
								transform="translate(228 6652)"
								fill="#f9e425"
							></circle>
						</g>
					</svg>
					<span>
						{item.dias} de {item.horarioArg} (Argentina).
					</span>
				</div>
				<div className="cc__resaltar">
					<svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18">
						<g id="Grupo_206" data-name="Grupo 206" transform="translate(-219 -6760)">
							<g
								id="Rectángulo_122"
								data-name="Rectángulo 122"
								transform="translate(228 6760)"
								fill="none"
								stroke="#707070"
								strokeWidth="0.3"
							>
								<rect width="14" height="10" stroke="none"></rect>
								<rect x="0.15" y="0.15" width="13.7" height="9.7" fill="none"></rect>
							</g>
							<rect
								id="Rectángulo_121"
								data-name="Rectángulo 121"
								width="23"
								height="9"
								transform="translate(219 6769)"
								fill="#c40000"
							></rect>
							<rect
								id="Rectángulo_123"
								data-name="Rectángulo 123"
								width="10"
								height="9"
								transform="translate(219 6760)"
								fill="#00478e"
							></rect>
						</g>
					</svg>
					<span>
						{item.dias} de {item.horarioCh} (Chile).
					</span>
				</div>
				<div className="cc__resaltar">
					<svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17">
						<g id="Grupo_205" data-name="Grupo 205" transform="translate(-219 -6703)">
							<rect
								id="Rectángulo_116"
								data-name="Rectángulo 116"
								width="23"
								height="6"
								transform="translate(219 6703)"
								fill="#f3e300"
							></rect>
							<rect
								id="Rectángulo_117"
								data-name="Rectángulo 117"
								width="23"
								height="6"
								transform="translate(219 6709)"
								fill="#00478e"
							></rect>
							<rect
								id="Rectángulo_119"
								data-name="Rectángulo 119"
								width="23"
								height="6"
								transform="translate(219 6714)"
								fill="#c40000"
							></rect>
						</g>
					</svg>
					<span>
						{item.dias} de {item.horarioCol} (Colombia y Ecuador).
					</span>
				</div>
			</div>
			<a
				className="main__btn page-fs__btn-wpp"
				target="_blank"
				rel="noreferrer"
				href="https://forms.gle/QQC8XKzLtUpNvW4s8"
			>
				¡Inscribirse!
			</a>
		</div>
	);
};

export default ComponenteComisiones;
