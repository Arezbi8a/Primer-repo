/*
POO

Clases: Pamtilla o molde para crear objetos
Constuctor: Es una funcion obligatoria para crear objetos (chefsitoxD) a través de caracteristicas o atributos especiales
Objetos : Es lo que construimos a traves de la clase y el constructor 

Atributo : Se refieren a las caracteristicas o propiedades de mi objeto 
Metodo : Lo que hace nuestro objeto (saludar, brincar, correr)
Instanciacion : Se refiere a cuando ya creamos la calse, el constructor y el objeto 

Pilares de POO

Herencia :Cuenta la palabar reservada extends. La herencia permite reutilizar el código de la clase padre en la clase hijo
Polimorfismo : El comportamniento de cada objeto de la misma clase a un metodo 
Encapsulamiento : Se refiere a encerrar y/o ocultar el código 
Abstracción : Se refieres a ser muy especificxs con los objetos (resumir)

Modularidad : Nos perimte reutilizar código, hacer modificaciones, tener orde, entender y mantener el código 

Metodos estaticos : Utiliza la palabra reservada static, nos permite ejecutar una clase sin instanciar al objeto 
Metodos accesores : Son aquellos que se caracterizan por devolver (retornar) información cerca del estado de un objeto 
Se tienen en cuenta en la herencia e implementación de interface.Por ejemplo que el getter sea público y el setter privado. 
*Un metodo «setter» sirve para cargar un valor(asignar un valor a una variable).
*Un metodo «getter» sirve para retornar el valor (solo devolver la informacion del atributo para quien la solicite.
(se necesita la sentencia return)

Principios SOLID (Para crear código comprensible, legible y comprobable en el que muchos desarrolladores puedan trabajar en colaboración.)
1.El Principio de responsabilidad única dice que una clase debe hacer una cosa y, por lo tanto, 
  debe tener una sola razón para cambiar.
2.El Principio Abierto-Cerrado aqui las clases deban estar abiertas a la extensión y cerradas a la modificación.
3.El Principio de sustitución de Liskov es cuando la clase secundaria extiende el comportamiento pero nunca lo reduce.
4.El Principio de segregación de interfaz significa mantener las cosas separadas, y el Principio de Segregación 
  de Interfaces se trata de separar las interfaces.
5.El Principio de inversión de dependencia, nuestras clases deben depender de interfaces o clases abstractas
  en lugar de clases y funciones concretas.

Objetos JSON
Javascript Object Notation
Se manejan a traves de clave-valor y no tienen métodos

*/

class ch47 {
    constructor(nombre, apellido, email, edad){
        this.name =nombre;
        this.lastName = apellido;
        this.email = email;
        this.age = edad;
        this.info = `Hola soy ${this.name} ${this.lastName}, micorreo es ${this.email}, y mi edad es ${this.age}`
    }

    infoIntegrantes(){
        console.log(this.info);
    }
}

class instruccion extends ch47{
    constructor(nombre, apellido, email, edad, escolaridad){
        super(nombre,apellido,email,edad)
        this.grado = escolaridad;
    }

    static darSesiones(){
        console.log("Hoy no tienes sesion");
    }

}

class mentoria extends ch47{
    constructor(nombre, apellido, email, edad, telefono){
        super(nombre,apellido,email,edad)
        this.tel = telefono;
    }

    static darMentoria(){
        console.log("tienes muchos mentees");
    }
}

class participantes extends ch47{
    constructor(nombre,apellido,email,edad,grado,lenguajeFav,estado){
    super(nombre,apellido,email,edad)
    this.estudios = grado;
    this.languaje = lenguajeFav;
    this.vivienda = estado;
    }

    static asistirClases(){
        console.log("Bienvenidx a Generation ch47");
    }

}

const inte1 = new ch47("Arezbi", "Zuñiga","arez8@gmail.com", 25); //los objetos se deben definir con const
const inte2 = new instruccion("Liliana", "Aguirre", "lili@gmail.com", 30, "licenciatura");
const inte3 = new mentoria("Yare","Arcos", "yareri@gmail.com",35, "5577889933")
const inte4 = new participantes("Andy", "Bernal", "andy@gmail.com", 25, "licenciatura", "Phyton", "Toluca");

inte2.infoIntegrantes();
instruccion.darSesiones();
mentoria.darMentoria();
participantes.asistirClases();

