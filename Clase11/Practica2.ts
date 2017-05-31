// Funciones Básicas
function sumar( a:number=0, b:number=0 ):number{
  return a + b;
}

let contar:(x:string[])=>number = function( heroes:string[] ):number{
  return heroes.length;
}
var superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
console.log(contar(superHeroes));

//Parametros por defecto
function llamarBatman( llamar:boolean=true ):void{
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
function unirheroes( nombre:string, ...personas:string[] ):string{
  return personas.join(", ");
}


// Tipo funcion
function noHaceNada( numero:number, texto:string, booleano:boolean, arreglo:any[] ):void{
}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco:(a:number, b:string, c:boolean, d:any[])=>void;
noHaceNadaTampoco = noHaceNada;
