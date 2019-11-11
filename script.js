function Navegar(pagina) {
	
	if (pagina == 'Inicio') {
		$('#Cuerpo').load('inicio.html');
	}
	if (pagina == 'Personajes') {
		$('#Cuerpo').load('Personajes.html');
	}
}