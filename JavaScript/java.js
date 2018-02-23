$(document).ready(function(){
    var nivel=1;
    var pregunta=0;
    var busqueda=7;
    var inicio=0;
    var variable=0;
    var puntos=0;
    var cont=0;
    var preguntas = [

    /*---------------------Primer Bloque--------------------*/
        [
            "1- Se le acusa de gritar, faltar al respeto y humillar en público a una persona de descendencia africana",
            "Articulo 1",
            "Articulo 3",
            "Articulo 4",
            "Articulo 5",
            "Articulo 1",
            true,
            "Todos los seres humanos nacen libres e iguales en dignidad y derechos y, dotados como están de razón y conciencia, deben comportarse fraternalmente los unos con los otros.",
        ],

        [
            "3- Se le acusa de atracar a una anciana saliendo del supermercado, agrediendola físicamente y atentando contra su seguridad personal. ",
            "Articulo 5",
            "Articulo 3",
            "Articulo 6",
            "Articulo 7",
            "Articulo 3",
            true,
            "Todo individuo tiene derecho a la vida, a la libertad y a la seguridad de su persona.",
        ],

        [
            "4- Se le acusa de pertenecer a las guerrillas del LRA en Uganda, donde se han secuestrado a 20.000 niños durante los últimos años y los han obligado a servir como soldados o esclavas sexuales para el ejército.", 
            "Articulo 1",
            "Articulo 7",
            "Articulo 2",
            "Articulo 4",
            "Articulo 4",
            true,
            "Nadie estará sometido a esclavitud ni a servidumbre, la esclavitud y la trata de esclavos están prohibidas en todas sus formas.",
        ],

        [
            "5- Se le acusa de haber tenido a su mujer encerrada en el sótano por varios días, sin dejarla salir, torturándola física y psicológicamente. ",
            "Articulo 3",
            "Articulo 5",
            "Articulo 4",
            "Articulo 6",
            "Articulo 5",
            true,
            "Nadie será sometido a torturas ni a penas o tratos crueles, inhumanos o degradantes.",
        ],

        [
            "6- Se le acusa de impedir de que una persona pueda tener defensa en un juicio.",
            "Articulo 1",
            "Articulo 3",
            "Articulo 6",
            "Articulo 2",
            "Articulo 6",
            true,
            "Todo ser humano tiene derecho, en todas partes, al reconocimiento de su personalidad jurídica.",
        ],

        [
            "7- Se le acusa de negar protección de testigos a una persona que ha colaborado en una investigación en la que su vida ha estado en juego.",
            "Articulo 7",
            "Articulo 3",
            "Articulo 4",
            "Articulo 6",
            "Articulo 7",
            true,
            "Todos son iguales ante la ley y tienen, sin distinción, derecho a igual protección de la ley. Todos tienen derecho a igual protección contra toda discriminación que infrinja esta Declaración y contra toda provocación a tal discriminación.",
        ],

        [
            "8- Se le acusa de negar justicia a un sujeto agredido por motivos de racismo. ",
            "Articulo 5",
            "Articulo 7",
            "Articulo 8",
            "Articulo 1",
            "Articulo 8",
            true,
            "Toda persona tiene derecho a un recurso efectivo ante los tribunales nacionales competentes, que la ampare contra actos que violen sus derechos fundamentales reconocidos por la constitución o por la ley.",
        ],

        /*---------------------Segundo Bloque--------------------*/


        [
            "9- Se le acusa de detener a una persona de raza afroamericana que pasaba por los alrededores de una escena de un crimen, sin previamente comprobar ninguna prueba o evidencia que lo sitúe allí. ",
            "Articulo 10",
            "Articulo 9",
            "Articulo 4",
            "Articulo 14",
            "Articulo 9",
            true,
            "Nadie podrá ser arbitrariamente detenido, preso ni desterrado.",
        ],
        
        [
            "10- Se le acusa de encarcelar directamente a una persona, sin previamente haberle realizado un juicio justo. ",
            "Articulo 10",
            "Articulo 3",
            "Articulo 4",
            "Articulo 12",
            "Articulo 10",
            true,
            "Toda persona tiene derecho, en condiciones de plena igualdad, a ser oída públicamente y con justicia por un tribunal independiente e imparcial, para la determinación de sus derechos y obligaciones o para el examen de cualquier acusación contra ella en materia penal.",
        ],
        

        [
            "11- Se le acusa de denegar el derecho a  expresar la inocencia de un acusado ",
            "Articulo 10",
            "Articulo 13",
            "Articulo 11",
            "Articulo 1",
            "Articulo 11",
            true,
            "Toda persona acusada de delito tiene derecho a que se presuma su inocencia mientras no se pruebe su culpabilidad, conforme a la ley y en juicio público en el que se le hayan asegurado todas las garantías necesarias para su defensa.",
        ],

        [
            "12- Se le acusa de acosar a un basurero repetidas veces, humillando su honor provocando daños psicológicos a la víctima.",
            "Articulo 12",
            "Articulo 6",
            "Articulo 7",
            "Articulo 13",
            "Articulo 12",
            true,
            "Nadie será objeto de injerencias arbitrarias en su vida privada, su familia, su domicilio o su correspondencia, ni de ataques a su honra o a su reputación. Toda persona tiene derecho a la protección de la ley contra tales injerencias o ataques.",

        ],

        [
            "13- Se le acusa de no permitir una vivienda a una persona por el hecho de ser de color",
            "Articulo 11",
            "Articulo 9",
            "Articulo 13",
            "Articulo 1",
            "Articulo 13",
            true,
            "Toda persona tiene derecho a circular libremente y a elegir su residencia en el territorio de un Estado.",

        ],

        [
            "14- Se le acusa de denegar el paso a un grupo de personas que buscaban refugio durante un terremoto.",
            "Articulo 12",
            "Articulo 14",
            "Articulo 13",
            "Articulo 2",
            "Articulo 14",
            true,
            "En caso de persecución, toda persona tiene derecho a buscar asilo, y a disfrutar de él, en cualquier país.",
        ],

        [
            "15- Se le acusa de denegar la nacionalidad a una persona de color, solo por el hecho de ser de etnia y raza diferente a el.",
            "Articulo 9",
            "Articulo 7",
            "Articulo 1",
            "Articulo 15",
            "Articulo 15",
            true,
            "Toda persona tiene derecho a una nacionalidad.",

        ],


        /*---------------------Tercer Bloque--------------------*/



        [
            "17- Se le acusa de diferentes actos de molestia a una pareja alojada en su vivienda de alquiler, con el fin de echarlos de esta misma si motivo alguno.",
            "Articulo 11",
            "Articulo 21",
            "Articulo 17",
            "Articulo 20",
            "Articulo 17",
            true,
            "Toda persona tiene derecho a la propiedad, individual y colectivamente.",
        ],

        [
            "18- Se le acusa de agredir a una persona en público, solo por estar manifestando en una conversación la religión a la que pertenece.",
            "Articulo 21",
            "Articulo 3",
            "Articulo 18",
            "Articulo 12",
            "Articulo 18",
            true,
            "Toda persona tiene derecho a la libertad de pensamiento, de conciencia y de religión; este derecho incluye la libertad de cambiar de religión o de creencia, así como la libertad de manifestar su religión o su creencia, individual y colectivamente, tanto en público como en privado, por la enseñanza, la práctica, el culto y la observancia.",
        ],

        [
            "19- Se le acusa de amenazar a sus empleados, con el fin de que no opinen sobre el trabajo que realizan ni puedan hacer ninguna queja",
            "Articulo 19",
            "Articulo 3",
            "Articulo 4",
            "Articulo 12",
            "Articulo 19",
            true,
            "Todo individuo tiene derecho a la libertad de opinión y de expresión; este derecho incluye el de no ser molestado a causa de sus opiniones, el de investigar y recibir informaciones y opiniones, y el de difundirlas, sin limitación de fronteras, por cualquier medio de expresión.",
        ],

        [
            "20-  Se le acusa de amenazar de muerte a un individuo, con el fin de que pertenezca a su asociación.",
            "Articulo 10",
            "Articulo 13",
            "Articulo 4",
            "Articulo 20",
            "Articulo 20",
            true,
            "Toda persona tiene derecho a la libertad de reunión y de asociación pacíficas.",
        ],

        [
            "21- Se le acusa de denegar el derecho a ejercer su trabajo en la mesa electoral de su pueblo.",
            "Articulo 21",
            "Articulo 20",
            "Articulo 14",
            "Articulo 9",
            "Articulo 21",
            true,
            "Toda persona tiene derecho a participar en el gobierno de su país, directamente o por medio de representantes libremente escogidos.",
        ],

        [
            "24- Se le acusa de denegar las vacaciones a sus empleados, y a hacerles trabajar más de 56 horas semanales.",
            "Articulo 17",
            "Articulo 30",
            "Articulo 24",
            "Articulo 1",
            "Articulo 24",
            true,
            "Toda persona tiene derecho al descanso, al disfrute del tiempo libre, a una limitación razonable de la duración del trabajo y a vacaciones periódicas pagadas.",
        ],

        [
            "28- Se le acusa de crear una dictadura militar en su país, restringiendo los derechos y libertades de sus ciudadanos.",
            "Articulo 28",
            "Articulo 27",
            "Articulo 29",
            "Articulo 26",
            "Articulo 28",
            true,
            "Toda persona tiene derecho a que se establezca un orden social e internacional en el que los derechos y libertades proclamados en esta Declaración se hagan plenamente efectivos.",
        ]

    ];


    /*-----------------INICIAR----------------*/
    function inicializar(){
        $("#nivel").text("Nivel: "+nivel);
        $("#puntos").text("Puntos: "+puntos);
        

        //cargarPreguntas();
        cargarInfo();
        $("#continue").hide();
    }

    /*-------------CARGAR INFO ARTICULOS-----------------*/

    function cargarInfo(){
        $("#info").show();
        $("#juez").hide();
        $("#op").hide();
        //$("#info").text("");
        for (var i = inicio; i < busqueda; i++) {
            $("#info").append("<p style='padding:15px;'>"+preguntas[i][5]+" : "+preguntas[i][7]+"</p>");     
        }
        //$("#info").append("<button id='btn5' class='btn btn-primary'>Comenzar</button>") ;
    }


    /*---------------COMENZAR NIVE--------------*/

    $("#btn5").click(function(){
        cargarPreguntas();
        $("#info").hide();
        $("#juez").show();
        $("#op").show();
    });

    /*---------------CARGAR PREGUNTAS-------------*/
    function cargarPreguntas(){     
        if(pregunta < 5){
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


    /*-----------CONTINUAR-----------------*/
    $("#continue").click(function(){
            alert("cargar siguiente nivel");
            pregunta=0;
            inicio=busqueda;
            busqueda+=7;
            $("button").show();
            $("#continue").hide();
            
            //cargarPreguntas();
            cargarInfo();
        });



/*LLAMAR A LA COMPROVACION*/
    $("#op").children("button").click(function(){
            comprobar($(this).text(),variable);
        });









/*---------------COMPROBAR RESPUESTA------------------*/
    function comprobar(respuesta,op){
        if(respuesta==preguntas[op][5]){
            alert("correcto");
            puntos+=5;
            $("#puntos").text("Puntos: "+puntos);
            if (cont==15) {
                alert("Se acabó el juego.");
            }else{
                cargarPreguntas();
            }
        }else{
            alert("incorrecto");                  
            if (cont==15) {
                alert("Se acabó el juego.");
            }else{
                cargarPreguntas();
            }           
        }
    }
/*-----------COGER PREGUNTAS-------------------*/
    function escogerPreguntas(){
        var parar = false;
        while(parar==false){
            if (cont==15) {
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


















    


/*-----------------HUD-----------------*/

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

