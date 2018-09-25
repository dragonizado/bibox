

const getRemainTime = deadline => {
	let fecha_actual = new Date(),
	 fecha_milisegundos = (new Date(deadline) - fecha_actual + 1000) / 1000,
	 fecha_segundos = ('0' + Math.floor(fecha_milisegundos % 60)).slice(-2),
	 fecha_minutos = ('0' + Math.floor(fecha_milisegundos / 60 % 60)).slice(-2),
	 fecha_horas = ('0' + Math.floor(fecha_milisegundos / 3600 % 24)).slice(-2),
	 fecha_dias =  Math.floor(fecha_milisegundos /( 3600 * 24));


return {
	fecha_milisegundos,
	fecha_segundos,
	fecha_minutos,
	fecha_horas,
	fecha_dias
}

}

const countdown = (deadLine,elem,mensaje)=>{
	const el = document.getElementById(elem);
	const timeupdate = setInterval(()=>{
		let t = getRemainTime(deadLine);
		el.innerHTML = ` ${t.fecha_dias}d : ${t.fecha_horas}h : ${t.fecha_minutos}m : ${(t.fecha_segundos).slice(-2)}s`;

		if(t.fecha_milisegundos <= 1){
			clearInterval(timeupdate);
			el.innerHTML = mensaje;
		}
	},1000);
}