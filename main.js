

const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        //console.log("This, this");
        //console.log("ThisapprovedCourses", this);
        this.approvedCourses.push(newCourse);
    }
};
//CINCO metodos estaticos para la modificiacion o cuidado del encapsulamiento de nuestros objetos y sus atributos 
Object.keys(juan);
Object.getOwnPropertyNames(juan);
Object.entries(juan);
//Object.entries(juan)[1][]
Object.getOwnPropertyDescriptors(juan);
Object.defineProperty(juan)
// esta función recibe tres parametros/argumentos: nombre objeto a trabajar, nombre del nuevo atributo que queremos crear, lista de atributos a modificar de los cuatro de value 
//Object.defineProperty(juan, "navigator", {
    //value: "Chrome",
    //enumerable: true,
    //writable: false,
    //configurable: true,
//})
Object.seal(juan)
// nos ayuda a configurar que nuestras propiedades no se puedan modificar
Object.freeze(juan);
// no se puede borrar ni modificar nuestras propiedades