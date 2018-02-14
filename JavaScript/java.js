$(document).ready(function(){
    var nivel=0;
    var pregunta=0;
    var busqueda=6;
    var variable=0;
    var puntos=0;
    var cont=0;
    var preguntas = [
        [
            "1- Se le acusa de gritar, faltar al respeto y humillar en público a una persona de descendencia africana",
            "Articulo 1",
            "Articulo 3",
            "Articulo 4",
            "Articulo 12",
            "Articulo 1",
            true,
        ],

        [
            "2- Se le acusa de acosar a un basurero repetidas veces, humillando su honor provocando daños psicológicos a la víctima.",
            "Articulo 12",
            "Articulo 6",
            "Articulo 7",
            "Articulo 30",
            "Articulo 12",
            true,

        ],



        [
            "3- Se le acusa de no permitir una vivienda a una persona por el hecho de ser de color",
            "Articulo 11",
            "Articulo 9",
            "Articulo 13",
            "Articulo 21",
            "Articulo 13",
            true,

        ],



        [
            "4- Se le acusa de denegar el paso a un grupo de personas que buscaban refugio durante un terremoto.",
            "Articulo 12",
            "Articulo 14",
            "Articulo 13",
            "Articulo 22",
            "Articulo 14",
            true,

        ],



        [
            "5- Se le acusa de denegar la nacionalidad a una persona de color, solo por el hecho de ser de etnia y raza diferente a el.",
            "Articulo 19",
            "Articulo 27",
            "Articulo 1",
            "Articulo 15",
            "Articulo 15",
            true,

        ],


        [
            "6- Se le acusa de no permitir casarse a una pareja arábica, por ser de raza diferente a la suya.",
            "Articulo 24",
            "Articulo 20",
            "Articulo 16",
            "Articulo 24",
            "Articulo 16",
            true,
        ]

    ];

    function inicializar(){
        $("#nivel").text("Nivel: "+nivel);
        $("#puntos").text("Puntos: "+puntos);

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
            //El nivel no cambia
            cargarPreguntas();
        });

    function cargarPreguntas(){    	
         if(pregunta < 2){
        variable = escogerPreguntas();        
        $("#juez").show();
        $("#pregunta").text(preguntas[variable][0]);
        $("#btn1").text(preguntas[variable][1]);
        $("#btn2").text(preguntas[variable][2]);
        $("#btn3").text(preguntas[variable][3]);
        $("#btn4").text(preguntas[variable][4]);
        $("#ok").click(function(){
        	$("#juez").hide();
        });

        pregunta++;
       
        }else{
            alert("fin de nivel");
            $("#pregunta").text('Siguiente nivel');
            nivel++;
	        $("#nivel").text("Nivel: "+nivel);

            $("button").hide();
            $("#continue").show();
           
        }
           
    }

    function comprobar(respuesta,op){
        if(respuesta==preguntas[op][5]){
            alert("correcto");
            puntos+=5;
            $("#puntos").text("Puntos: "+puntos);
            if (cont==6) {
                alert("Se acabó el juego.");
            }else{
                cargarPreguntas();
            }
        }else{
            alert("incorrecto");                  
            if (cont==6) {
                alert("Se acabó el juego.");
            }else{
                cargarPreguntas();
            }           
        }
    }

    function escogerPreguntas(){
        var parar = false;
        while(parar==false){
            if (cont==6) {
                $("#juez").text("");
                return;
            }
            var num=Math.floor(Math.random()*busqueda);
            if (preguntas[num][6]==true) {
                parar=true;
                preguntas[num][6]=false;
                cont++;
                return num;
            }
        }
    }


    	//Tiempo
    function startTimer(duracion, display) {
    var start = Date.now(),
        difer,
        minutos,
        segundos;
    function tempor() {
        difer = duracion - (((Date.now() - start) / 1000) | 0);

        minutos = (difer / 60) | 0;
        segundos = (difer % 60) | 0;

        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;

        display.textContent = minutos + ":" + segundos; 

        if (difer <= 0) {
            start = Date.now() + 1000;
        }
	    };
	    tempor();
	    setInterval(tempor, 1000);
	}

	window.onload = function () {
	    var fiveMinutes = 60 * 5,
	        display = document.querySelector('#reloj');
	    startTimer(fiveMinutes, display);
	};

    inicializar();

    
});

