class Pakiman
{
    constructor(n, v, a)
    {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;   
        
        this.imagen.src = imagenes[this.nombre];
    }

    hablar()
    {
        document.write("Hola, soy " + this.nombre);
    }
    mostrar()
    {
        document.write("<p>");
        document.body.appendChild(this.imagen);
        document.write("<strong>" + this.nombre + "</strong><br />");
        document.write("Vida: " + this.vida + "<br />");        
        document.write("Ataque: " + this.ataque + "<br />");
        pakin.hablar();
        document.write("<hr />");

        document.write("</p>");
    }
}