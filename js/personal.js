var clicks = 0;
function kui() {
	clicks += 1;
	switch (clicks) {		
		case 2:
			document.getElementById("kgrr").innerHTML="Kui";
		break;
		case 4:
			document.getElementById("kgrr").innerHTML="Torokui";
		break;
		case 5:
			document.getElementById("kgrr").innerHTML="Torotorotoro";
		break;
		case 7:
			document.getElementById("kgrr").innerHTML="Kgrrrrrr";
		break;
		case 10:
			document.getElementById("kgrr").innerHTML="<input type='password' id='ipsw' size='50' style='background: orange;'><a href='#' onclick='personal()'><br><strong>Ir</strong></a>";
		break;
		}
	}

function personal() {
	hash = hex_md5(document.getElementById('ipsw').value);
	switch(hash) {
		case "7bf15658f85b2d359bfa48a44ef12f26":
			document.getElementById("personalBar").style.display='block';
			document.getElementById("kgrr").style.display='none';
		break;
		case "271f1a893d9825f1024a4a99feaa0fe6":
			document.getElementById("logo").style.display='none';
			mostrar("./content/jv.html");
		break;
		}
	}
	
function mostrar(pagina) {
	document.getElementById("logo").style.display='none';
	$("#prueba").load(pagina);
	}
function loadtrivia() {
	document.getElementById("logo").style.display='none';
	document.getElementById('prueba').innerHTML="<iframe src='./trivia_game_script/trivia.html' width='800' height='500' frameborder='0'>"
	}
	
function pequeURI(hash){ 	// Acortador para crear enlaces a contenido específico.
	switch(hash){			// añadir aquí el script vinculado a cada tag.
		case "a":
			mostrar('./content/blog.html');
		break;
		case "b":
			alert('bla');
		break;
		}
	}

function cargarBusqueda(destino) {
	if (destino != "") {
		mostrar("./404.html");
		mostrar("./" + hex_md5(destino) + "/index.html" );
		}
	}