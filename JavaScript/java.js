$(document).ready(function(){
	/*var cars = ["Se le acusa por denegar el derecho a  expresar la inocencia de un acusado"
	, " Se le acusa por acosar a un basurero repetidas veces, humillando su honor provocando daños psicológicos a la víctima."
	, "Se le acusa por no permitir una vivienda a una persona por el hecho de ser de color"];*/
	var variable=0;
	var pregunta=0;
	var preguntas = [
		[
			"Se le acusa por gritar, faltar al respeto y humillar en público a una persona de descendencia africana",
			"Articulo 1",
			"Articulo 3",
			"Articulo 4",
			"Articulo 12",
			"Articulo 1",
		],

		[
			"Se le acusa por acosar a un basurero repetidas veces, humillando su honor provocando daños psicológicos a la víctima.",
			"Articulo 12",
			"Articulo 6",
			"Articulo 7",
			"Articulo 30",
			"Articulo 12",
		]

		[
			"Se le acusa de no permitir una vivienda a una persona por el hecho de ser de color",
			"Articulo 11",
			"Articulo 9",
			"Articulo 13",
			"Articulo 21",
			"Articulo 13",
		]

		[
			"Se le acusa de denegar el paso a un grupo de personas que buscaban refugio durante un terremoto.",
			"Articulo 12",
			"Articulo 14",
			"Articulo 13",
			"Articulo 22",
			"Articulo 14",
		]

		[
			"Se le acusa de denegar la nacionalidad a una persona de color, solo por el hecho de ser de etnia y raza diferente a el.",
			"Articulo 19",
			"Articulo 27",
			"Articulo 1",
			"Articulo 15",
			"Articulo 15",
		]

		[
			"Se le acusa de no permitir casarse a una pareja arábica, por ser de raza diferente a la suya.",
			"Articulo 24",
			"Articulo 20",
			"Articulo 16",
			"Articulo 24",
			"Articulo 16",
		]



	];

	function inicializar(){

		cargarPreguntas();
		$("#continue").hide();
    }

    $("#op").children("button").click(function(){
        	comprobar($(this).text(),variable);
    	});
    $("#continue").click(function(){
        	alert("cargar siguiente nivel");
        	pregunta=0;
        	$("button").show();
        	$("#continue").hide();
        	cargarPreguntas();
    	});

    function cargarPreguntas(){
		if(pregunta <=4){
			variable=Math.floor(Math.random()*2);
        $("#pregunta").text(preguntas[variable][0]);
        $("#btn1").text(preguntas[variable][1]);
        $("#btn2").text(preguntas[variable][2]);
        $("#btn3").text(preguntas[variable][3]);
        $("#btn4").text(preguntas[variable][4]);
        pregunta++;
        
		}else{
			alert("fin de nivel");
			$("#pregunta").text('Siguiente nivel');
			$("button").hide();
			$("#continue").show();
		}
    		
    }

    function comprobar(respuesta,op){
    	if(respuesta==preguntas[op][5]){
    		alert("correcto");
    		cargarPreguntas();
    	}else{
    		alert("incorrecto");
    		cargarPreguntas();
    	}
    }

    inicializar();
    
});

