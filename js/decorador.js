(function(){
    //Patron Decorador
   class Decorador {
    constructor(title = '', content = '') {
        this.title = title;
        this.content = content;
    }
}
const title1 = new Decorador('Track 1', 'CONISOFT, scientific papers in English (original research, basic and experimental).');
const title2 = new Decorador('Trackt 2', 'CONISOFT, Work in progress in English. Papers describing works that are at an early stage of the investigation.')
const title3 = new Decorador('Track 3', 'JIISIC, Scientific papers in Spanish (original research, basic and experimental)')

   document.getElementById('prototype').innerHTML = Decorador();
 
 })();