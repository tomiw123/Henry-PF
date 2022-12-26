import React from "react";
import style from "../NotFound/NotFound.css";
import dosdagasNF from "../NotFound/dosdagasNF.jpeg";


const NoResults = () => {
	return (
		<div className={style.notFoundContainer}>
			<p className={style.notFoundText}>
				Lo sentimos, no se pudo encontrar el producto o la receta que estabas buscando.
			</p>
			<img
				className={style.notFoundImg}
				src={imgNotFound}
				alt='nuestro hermoso logo'
			/>
		</div>
	);
};

export default NoResults;