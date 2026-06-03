
//variables 
const idiomaNativo:string = "Español";
//console.log("Idioma selecionado es", idiomaNativo)

let likesEnFotos: number = 0;
//console.log("Mi foto tiene ", likesEnFotos)

likesEnFotos =15;
//console.log("Mi foto tiene ", likesEnFotos)

//primitivas
let curso:string = "Moviles 1"

let ciclo:number = 6;

let esHibrido: boolean = true;

// console.log("Mi curso es de ", curso)
// console.log("Mi ciclo es  ", ciclo)
// console.log("React Native es hibrido ", esHibrido)




//interfasces 

interface Alumno{
    nombre:string;
    edad:number;
    carrera?:string; // opcional
}

const estudianteEjmplo:Alumno ={

    nombre:"Andy",
    edad: 22,
    carrera: "Desarrollo de Sotfware"
}

//  console.log("Alumno",estudianteEjmplo)

const saludarEstudiante = (a:Alumno): string=> {
    return `Hola, ${a.nombre}! Edad registra ${a.edad}`
}

let respuesta:string = saludarEstudiante(estudianteEjmplo);
console.log("Probando la funcion ",respuesta)

interface BotonProps{
    titulo: string;
    colorFondo?:string;
    desabilitado: boolean
    
}

const componenteBotonRn =(props:BotonProps): void => {
    const colorAUsar = props.colorFondo? props.colorFondo: "Celeste"

    console.log(`[texto]: ${props.titulo}`)
    console.log(`[Color]: ${colorAUsar}`)
    console.log(`${props.desabilitado} ? "gris" : "Brillante"`);

    
}
//clic normal 
componenteBotonRn({
    titulo:"Registrar",
    desabilitado:false

})

//clic bloqueado
componenteBotonRn({
    titulo:"Eliminar Cuenta",
    colorFondo:"Rojo",
    desabilitado:true
})

//login
componenteBotonRn({
    titulo:"login",
    colorFondo:"verde",
    desabilitado:false
})

