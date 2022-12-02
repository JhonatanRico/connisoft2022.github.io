(function(){
    function constructorSitios() {
        // creamos el método
        this.crearElemento = (texto, tipo) => {
             let html;
   
             if (tipo === 'input'){
                  html = new InputHTML(texto)
             } else if (tipo === 'img'){
                  html = new ImangenHTML(texto)
             } else if (tipo === 'h1'){
                  html = new HeadingHTML(texto)
             } else if (tipo === 'p'){
                  html = new ParrafoHTML(texto)
             }
             html.tipo = tipo;
             return html;
        }
   }
       
 })();