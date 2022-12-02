(function(){
   var puesto;
   var nombre;
   var facultad;
   this.prototype;
   this.clone=function(){
    var comittees = new Comittees();
    comittees.puesto = prototype.puesto;
    comittees.nombre = prototype.nombre;
    comittees.facultad = prototype.facultad;
    return comittees;
   };

   function Comittees (puesto, nombre, facultad){
    this.puesto = puesto;
    this.nombre = nombre;
    this.facultad = facultad;
    this.say = function()
    {
        console.log(this.puesto + " " + this.nombre + " " + this.facultad);
    };
   }

   function printed (){
    var proto1 = new Comittees ("General Chair", "Reyes Juarez Ramirez", "UABC (MEXICO)");
    var proto2 = new Comittees ("Co-Chair", "Mtro. Jesus Alfonso Cruz Valencia", "Universidad Tecnologica Bilingue Internacional y Sustentable de Puebla");
    var proto3 = new Comittees ("Co-Chair", "Cesar Jesus Pardo Calvache", "Universidad del Cauca");
    var comittees = prototype.clone();
    comittees.say();
   }
   document.getElementById("prototype").innerHTML = Comittees();

})();