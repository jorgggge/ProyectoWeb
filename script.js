

function Inicio() 
{
	$('#L').hide();
	$('#T').hide();
	$('#P').hide();
	$('#B').hide();
}

var Personaje = '';

function Info(Personaje) 
{
	$('#M').hide();
	$('#L').hide();
	$('#T').hide();
	$('#P').hide();
	$('#B').hide();

	if(Personaje == "M" )
	{ 
		$('#M').show(); 
		document.getElementById('Cuerpo').style.backgroundImage = "url('M.png')";
	}
	if(Personaje == "L" )
	{ 
		$('#L').show(); 
		document.getElementById('Cuerpo').style.backgroundImage = "url('L.png')";
	}
	if(Personaje == "T" )
	{ 
		$('#T').show(); 
		document.getElementById('Cuerpo').style.backgroundImage = "url('T.png')";
	}
	if(Personaje == "P" )
	{ 
		$('#P').show();
		document.getElementById('Cuerpo').style.backgroundImage = "url('P.png')";	
	}
	if(Personaje == "B" )
	{ 
		$('#B').show();
		document.getElementById('Cuerpo').style.backgroundImage = "url('B.png')";
	}

}

