function mostrar(){
    var btn=document.querySelector("#boton");
    
    var nombre = document.querySelector("#nombre").value;
    var appaterno = document.querySelector("#appaterno").value;
    var apmaterno = document.querySelector("#apmaterno").value;
    var rut = document.querySelector("#rut").value;
    var edad = document.querySelector("#edad").value;
    var masculino = document.querySelector("#masculino").value;
    var femenino = document.querySelector("#femenino").value;
    var celular = document.querySelector("#celular").value;

    document.querySelector("#nom").innerHTML = "Nombre: "+nombre;
    document.querySelector("#app").innerHTML = "Apellido Paterno: "+appaterno;
    document.querySelector("#apm").innerHTML = "Apellido Materno: "+apmaterno;
    document.querySelector("#run").innerHTML = "Rut: "+rut;
    document.querySelector("#cel").innerHTML = "Celular: "+celular;
    document.querySelector("#año").innerHTML = "Edad: "+edad;
    document.querySelector("#gen").innerHTML = "Genero: "+masculino;
    document.querySelector("#gen").innerHTML = "Genero: "+femenino;

}