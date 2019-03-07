$("document").ready(function () {
    //Con el metodo append añadimos elementos.
    $("#cuadrado-1").append("<h1>I love Jquery</h1>");


    //Ejer2 css_filtros
    //Con el metodo css podemos editar la aprarencia a nuestro gusto (1 ponemos la propiedad por ejemplo border,margin,padding , y luego el valor 1px solid black, auto);
    $("#cuadrado-2").css("border", "1px solid black");
    $("#cuadrado-2").css("width", "240px");

    //Y los filtros por si tienes muchoss selectores a la vez en vez de hacer un id podemos decir si el primero o el último. La prodiedad:orden
    $("h3:last").css("box-shadow", "5px 10px");
    $("h3:first").css("box-shadow", "5px 10px");



    //Ejer3 replacing_contents
    //Con el metodo html podemos editar cualquier atributo o etiqueta que este en el documeno html por ejemplo.
    //En el div newtext tengo un apárrafo entero pues en una variable me guarado un texto y le digo que en el div newtext lo modifice
    //por mi variable mediante el metodo html.
    var newtxt = "<h1>Esto será un cambio para toda la humanidad";

    $("#newtext").html(newtxt);





    //Ejer 4 Events
    //Con los eventos on y el evento que queramos el famoso click y el mouseleave que significa cuando el raton esta fuera de rango.
    //En el click le decimos que cuando haga click se vaya a la función clicked y dentro de esta función ya hara lo que tenga que hacer en mi caso agregar texto.

    $("#hide-show-div").on("click", clicked);

    $("#hide-show-div").on("mouseleave", ratonFuera);

    //Recalcar una cosa porque he puesto en vez de html append y lo que hacia era agregarme todo el rato sin sobreescribir y con html se sobreescribe.
    function clicked() {
        $("#hide-show-div").html("<h2>You clicked the div NICE!!!!</h2>");
    }

    function ratonFuera() {
        $("#hide-show-div").html("<h2>Try to click the div crack!!</h2>");
    }

    //Ejer5
    //Consiste en cambiar el texto que ya hay en en documento pero tambi´ne se puede hacer con el metodo html...
    $("#enviar").on("click", cambio);

    function cambio() {
        $("#titulo_form").text("Valores introducido correctamente");
    }

    //Ejer6 Eliminar el contenido que hay dentro de la etiqueta p pero si miramosd el codigo fuente la etiqueta aun esta pero su contenido ya no.
    $("#parrafos p:last").empty();

















});