

function Inicio() 
{
	$('#KTV').hide();
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
	}
	if(Personaje == "L" )
	{ 
		$('#L').show(); 
	}
	if(Personaje == "T" )
	{ 
		$('#T').show(); 
	}
	if(Personaje == "P" )
	{ 
		$('#P').show();	
	}
	if(Personaje == "B" )
	{ 
		$('#B').show();
	}

}

function InfoEnemigos(Enemigos) 
{
	$('#LG').hide();
	$('#KTV').hide();
	$('#KTR').hide();
	$('#KTVV').hide();
	$('#KTVR').hide();
	$('#BB').hide();
	$('#HB').hide();
	$('#L').hide();

	if(Enemigos == "LG" )
	{ 
		$('#LG').show(); 
	}
	if(Enemigos == "KTV" )
	{ 
		$('#KTV').show(); 
	}
	if(Enemigos == "KTR" )
	{ 
		$('#KTR').show(); 
	}
	if(Enemigos == "KTVV" )
	{ 
		$('#KTVV').show(); 
	}

	if(Enemigos == "KTVR" )
	{ 
		$('#KTVR').show(); 
	}
	if(Enemigos == "BB" )
	{ 
		$('#BB').show(); 
	}
	if(Enemigos == "HB" )
	{ 
		$('#HB').show(); 
	}
	if(Enemigos == "L" )
	{ 
		$('#L').show(); 
	}


}


