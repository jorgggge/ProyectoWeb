
function Inicio() {
	$('#L').hide();
	$('#T').hide();
	$('#P').hide();
	$('#B').hide();
}

function Info(Personaje) {
	$('#M').hide();
	$('#L').hide();
	$('#T').hide();
	$('#P').hide();
	$('#B').hide();

	if(Personaje == "M" ){ $('#M').show(); }
	if(Personaje == "L" ){ $('#L').show(); }
	if(Personaje == "T" ){ $('#T').show(); }
	if(Personaje == "P" ){ $('#P').show(); }
	if(Personaje == "B" ){ $('#B').show(); }

}