import React from 'react'
import style from '../Error/Error.css'
import dosdagasNF from '../Error/dosdagasNF.jpeg'

const errorPage = () => {
	return (
		<div className={style.errorContainer}>
			<div className={style.errorTextContainer}>
				<p className={style.errorTextError}>
					Error 404 - ha ocurrido un problema
				</p>
				<h2>
					La pagina que estas intentando acceder no se encuentra disponible
				</h2>
				<p>
					Posiblemente se encuentra en proceso de mantenimiento o el servidor se cayó, descuida que
					nuestro maestro asador está dando lo mejor de él para solucionarlo.
				</p>
			</div>
			<Link className={style.errorButton} to='/Home/'>
				REGRESAR AL HOME
			</Link>
			 <img
				className={style.errorImg}
				src={psyduckNotFoundPage}
				alt='nuestro hermoso logo'
			/> 
		</div>
	);
};

export default errorPage;