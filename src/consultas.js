/* -- Soluciones a las consultas realizadas -- */

/* [ 1º Consulta con $eq ]

* En esta consulta vamos a utilizar el operador $eq para 
encontrar los cajas que contengan un Mastil
*/

db.shisha.find({ contenidoCaja: {$eq:"Mastil"} }).pretty() 

/*
{
        "_id" : "Hookah S Red",
        "nombreCompleto" : "Alpha Hookah S Red Candy",
        "marca" : "Alpha Hookah",
        "precio" : 299.95,
        "fechaEntrada" : ISODate("2020-11-28T00:00:00Z"),
        "contenidoCaja" : [
                "Manguera",
                "Boquilla",
                "Cazoleta Tradicional",
                "Plato para ceniza",
                "Mastil",
                "Base",
                "Cuerpo de la cachimba"
        ],
        "materialesEmpleados" : {
                "cuerpo" : "Acero inoxidable",
                "base" : "Cristal soplado a mano",
                "mangera" : "Silicona",
                "cazoleta" : "barro",
                "Boquilla" : "Acero inoxidable"
        },
        "gestorCalor" : true,
        "medidasCuerpo" : {
                "mangera" : "1,5m",
                "altura" : "32cm",
                "plato" : "13mm",
                "peso" : "15kg"
        }
}
{
        "_id" : "Rocket 2.0",
        "nombreCompleto" : "Mr.Shisha Rocket 2.0 Resin",
        "marca" : "Mr.Shisha",
        "precio" : 99.95,
        "fechaEntrada" : ISODate("2020-11-16T00:00:00Z"),
        "contenidoCaja" : [
                "Manguera",
                "Boquilla",
                "Cazoleta Terrocota",
                "Plato para ceniza",
                "Mastil",
                "Screen",
                "Base",
                "Cuerpo de la cachimba",
                "Muelle",
                "Maletin de transporte"
        ],
        "materialesEmpleados" : {
                "cuerpo" : "Acero inoxidable",
                "base" : "Cristal",
                "mangera" : "Silicona",
                "cazoleta" : "Barro",
                "plato" : "Aluminio",
                "boquilla" : "Acero inoxidable",
                "maletin" : "Cuero"
        },
        "gestorCalor" : true,
        "medidasCuerpo" : {
                "mangera" : "1,7m",
                "altura" : "42cm",
                "plato" : "15mm",
                "peso" : "12kg"
        }
}
> 

*/


/* [ 2º Consulta con $gte ]

* En esta consulta vamos a utilizar el operador $gte para ver
 los precios que sean iguales o mayores a 80€
*/


> db.shisha.find({ precio:{$gte:80}}).pretty()     
/*         
{
        "_id" : "MVP 360",
        "nombreCompleto" : "Aladin MVP 360 Shiny Clear", 
        "marca" : "Aladin",
        "precio" : 89.99,
        "fechaEntrada" : ISODate("2020-11-20T00:00:00Z"),
        "contenidoCaja" : [
                "Base para agua",
                "Cazoleta Tradicional",
                "Plato para ceniza",
                "Pinzas",
                "Goma Cazoleta",
                "Cuerpo de la cachimba"
        ],
        "materialesEmpleados" : {
                "cuerpo" : "Acero inoxidable",
                "base" : "Vidrio",
                "mangera" : "Silicona",
                "cazoleta" : "barro"
        },
        "gestorCalor" : false,
        "medidasCuerpo" : {
                "mangera" : "1,5m",
                "altura" : "36cm",
                "peso" : "13,5kg"
        }
}
{
        "_id" : "Hookah S Red",
        "nombreCompleto" : "Alpha Hookah S Red Candy",
        "marca" : "Alpha Hookah",
        "precio" : 299.95,
        "fechaEntrada" : ISODate("2020-11-28T00:00:00Z"),
        "contenidoCaja" : [
                "Manguera",
                "Boquilla",
                "Cazoleta Tradicional",
                "Plato para ceniza",
                "Mastil",
                "Base",
                "Cuerpo de la cachimba"
        ],
        "materialesEmpleados" : {
                "cuerpo" : "Acero inoxidable",
                "base" : "Cristal soplado a mano",
                "mangera" : "Silicona",
                "cazoleta" : "barro",
                "Boquilla" : "Acero inoxidable"
        },
        "gestorCalor" : true,
        "medidasCuerpo" : {
                "mangera" : "1,5m",
                "altura" : "32cm",
                "plato" : "13mm",
                "peso" : "15kg"
        }
}
{
        "_id" : "Rocket 2.0",
        "nombreCompleto" : "Mr.Shisha Rocket 2.0 Resin",
        "marca" : "Mr.Shisha",
        "precio" : 99.95,
        "fechaEntrada" : ISODate("2020-11-16T00:00:00Z"),
        "contenidoCaja" : [
                "Manguera",
                "Boquilla",
                "Cazoleta Terrocota",
                "Plato para ceniza",
                "Mastil",
                "Screen",
                "Base",
                "Cuerpo de la cachimba",
                "Muelle",
                "Maletin de transporte"
        ],
        "materialesEmpleados" : {
                "cuerpo" : "Acero inoxidable",
                "base" : "Cristal",
                "mangera" : "Silicona",
                "cazoleta" : "Barro",
                "plato" : "Aluminio",
                "boquilla" : "Acero inoxidable",
                "maletin" : "Cuero"
        },
        "gestorCalor" : true,
        "medidasCuerpo" : {
                "mangera" : "1,7m",
                "altura" : "42cm",
                "plato" : "15mm",
                "peso" : "12kg"
        }
}
{
        "_id" : "Idol Old Wood",
        "nombreCompleto" : "Totem Hookah Idol Old Wood",
        "marca" : "Totem Hookah",
        "precio" : 199.95,
        "fechaEntrada" : ISODate("2021-03-02T00:00:00Z"),
        "contenidoCaja" : [
                "Cuerpo",
                "Boquilla",
                "Plato",
                "Base",
                "Mangera"
        ],
        "materialesEmpleados" : {
                "cuerpo" : "Acero inoxidable y Madera",
                "base" : "Cristal",
                "mangera" : "Silicona",
                "plato" : "Aluminio",
                "boquilla" : "Acero"
        },
        "gestorCalor" : true,
        "medidasCuerpo" : {
                "mangera" : "1,5m",
                "altura" : "40cm",
                "plato" : "15mm",
                "peso" : "13kg"
        }
}

*/



/* [ 3º Consulta con $nin ]

* En esta consulta vamos a utilizar el operador $nin para ver
 las Cajas que no contengan lo seleccionado
*/
> db.shisha.find({ contenidoCaja:{$nin:[ "Pinzas", "Goma Cazoleta", "Plato para ceniza" , "Base"]}}).pretty()
/*
{
        "_id" : "PackClassic",
        "nombreCompleto" : "Pack HispaCachimba Classic smoke",
        "marca" : "HispaCachimba",
        "precio" : 79.99,
        "fechaEntrada" : ISODate("2020-12-12T00:00:00Z"),
        "contenidoPack" : [
                "Caja de pastillas",
                "Tabaco",
                "Alpaca Egy",
                "Cubrevientos Rejilla",
                "Cold Smoke Rainbow Yellow",
                "Hornillo"
        ],
        "espeficicacionesContenido" : {
                "pastillas" : "King Coco",
                "tabaco" : "Pera menta Taboo",
                "cazoleta" : "Barro blanco",
                "hornillo" : "1500W"
        },
        "disponible" : true
}
{
        "_id" : "PackCovid",
        "nombreCompleto" : "PackCovid Shishas Kaizen 19",
        "marca" : "Shishas Kaizen",
        "precio" : 45.99,
        "fechaEntrada" : ISODate("2021-11-12T00:00:00Z"),
        "contenidoPack" : [
                "Caja de pastillas",
                "Cazoleta",
                "Pinzas",
                "Punzon",
                "Screen",
                "Rejilla",
                "Hornillo",
                "Papel de plata"
        ],
        "espeficicacionesContenido" : {
                "pastillas" : "Carbin Yacuza",
                "hornillo" : "1500W",
                "rejilla" : "screen",
                "cazoleta" : "Kaizen"
        },
        "disponible" : false
}
{
        "_id" : "Pack KaPro",
        "nombreCompleto" : "Pack KaPro 2020",
        "marca" : "Shishas Kaizen",
        "precio" : 17.95,
        "fechaEntrada" : ISODate("2020-12-19T00:00:00Z"),
        "contenidoPack" : [
                "Cazoleta",
                "Gestor de calor"
        ],
        "espeficicacionesContenido" : {
                "gestorCalor" : "Provost",
                "cazoleta" : "Kaizen"
        },
        "disponible" : true
}
*/


/* [ 4º Consulta con $and]

* En esta consulta vamos a utilizar el operador $and para ver  
 que paquetes traen gestor de calor y los que salen antes de   
 la fecha indicada                                             

*/
> db.shisha.find({ $and: [ { gestorCalor: true } , {fechaEntrada:{ $lte: ISODate("2021-12-01")}}]}).pretty()
/*
{
        "_id" : "Hookah S Red",
        "nombreCompleto" : "Alpha Hookah S Red Candy",
        "marca" : "Alpha Hookah",
        "precio" : 299.95,
        "fechaEntrada" : ISODate("2020-11-28T00:00:00Z"),
        "contenidoCaja" : [
                "Manguera",
                "Boquilla",
                "Cazoleta Tradicional",
                "Plato para ceniza",
                "Mastil",
                "Base",
                "Cuerpo de la cachimba"
        ],
        "materialesEmpleados" : {
                "cuerpo" : "Acero inoxidable",
                "base" : "Cristal soplado a mano",
                "mangera" : "Silicona",
                "cazoleta" : "barro",
                "Boquilla" : "Acero inoxidable"
        },
        "gestorCalor" : true,
        "medidasCuerpo" : {
                "mangera" : "1,5m",
                "altura" : "32cm",
                "plato" : "13mm",
                "peso" : "15kg"
        }
}
{
        "_id" : "Rocket 2.0",
        "nombreCompleto" : "Mr.Shisha Rocket 2.0 Resin",
        "marca" : "Mr.Shisha",
        "precio" : 99.95,
        "fechaEntrada" : ISODate("2020-11-16T00:00:00Z"),
        "contenidoCaja" : [
                "Manguera",
                "Boquilla",
                "Cazoleta Terrocota",
                "Plato para ceniza",
                "Mastil",
                "Screen",
                "Base",
                "Cuerpo de la cachimba",
                "Muelle",
                "Maletin de transporte"
        ],
        "materialesEmpleados" : {
                "cuerpo" : "Acero inoxidable",
                "base" : "Cristal",
                "mangera" : "Silicona",
                "cazoleta" : "Barro",
                "plato" : "Aluminio",
                "boquilla" : "Acero inoxidable",
                "maletin" : "Cuero"
        },
        "gestorCalor" : true,
        "medidasCuerpo" : {
                "mangera" : "1,7m",
                "altura" : "42cm",
                "plato" : "15mm",
                "peso" : "12kg"
        }
}
{
        "_id" : "Idol Old Wood",
        "nombreCompleto" : "Totem Hookah Idol Old Wood",
        "marca" : "Totem Hookah",
        "precio" : 199.95,
        "fechaEntrada" : ISODate("2021-03-02T00:00:00Z"),
        "contenidoCaja" : [
                "Cuerpo",
                "Boquilla",
                "Plato",
                "Base",
                "Mangera"
        ],
        "materialesEmpleados" : {
                "cuerpo" : "Acero inoxidable y Madera",
                "base" : "Cristal",
                "mangera" : "Silicona",
                "plato" : "Aluminio",
                "boquilla" : "Acero"
        },
        "gestorCalor" : true,
        "medidasCuerpo" : {
                "mangera" : "1,5m",
                "altura" : "40cm",
                "plato" : "15mm",
                "peso" : "13kg"
        }
}
*/


/* [ 5º Consulta con $and + avanzada ]

* En esta consulta vamos a utilizar el operador $and , $nor y $or para filtrar
los paquetes que no tengan gestor de calor y que no tengan en su caja Base ni Manguera
y a parte los articulos que vayan a llegar antes de la fecha indicada y que tengan un precio mayor a 80 €                                            
*/
> db.shisha.find({$and:[{$nor:[{gestorCalor:true},{ contenidoCaja:["Base","Manguera"]}]},{$or:[{fechaEntrada:{$lt: ISODate("2021-01-01")}},{precio:{$gt:80}}]}]}).pretty()
/*     
{
        "_id" : "MVP 360",
        "nombreCompleto" : "Aladin MVP 360 Shiny Clear",
        "marca" : "Aladin",
        "precio" : 89.99,
        "fechaEntrada" : ISODate("2020-11-20T00:00:00Z"),
        "contenidoCaja" : [
                "Base para agua",
                "Cazoleta Tradicional",
                "Plato para ceniza",
                "Pinzas",
                "Goma Cazoleta",
                "Cuerpo de la cachimba"
        ],
        "materialesEmpleados" : {
                "cuerpo" : "Acero inoxidable",
                "base" : "Vidrio",
                "mangera" : "Silicona",
                "cazoleta" : "barro"
        },
        "gestorCalor" : false,
        "medidasCuerpo" : {
                "mangera" : "1,5m",
                "altura" : "36cm",
                "peso" : "13,5kg"
        }
}
{
        "_id" : "Oduman N2",
        "nombreCompleto" : "Oduman N2 Travel",
        "marca" : "Oduman",
        "precio" : 74.95,
        "fechaEntrada" : ISODate("2020-12-20T00:00:00Z"),
        "contenidoCaja" : [
                "Cuerpo",
                "Boquilla",
                "Plato",
                "Base",
                "Mangera",
                "Maletin de transporte"
        ],
        "materialesEmpleados" : {
                "cuerpo" : "Acero inoxidable",
                "base" : "Cristal",
                "mangera" : "Silicona",
                "plato" : "Acero",
                "boquilla" : "Acero inoxidable",
                "maletin" : "Tela"
        },
        "gestorCalor" : false,
        "medidasCuerpo" : {
                "mangera" : "1,2m",
                "altura" : "34cm",
                "plato" : "10mm",
                "peso" : "9kg"
        }
}
{
        "_id" : "PackClassic",
        "nombreCompleto" : "Pack HispaCachimba Classic smoke",
        "marca" : "HispaCachimba",
        "precio" : 79.99,
        "fechaEntrada" : ISODate("2020-12-12T00:00:00Z"),
        "contenidoPack" : [
                "Caja de pastillas",
                "Tabaco",
                "Alpaca Egy",
                "Cubrevientos Rejilla",
                "Cold Smoke Rainbow Yellow",
                "Hornillo"
        ],
        "espeficicacionesContenido" : {
                "pastillas" : "King Coco",
                "tabaco" : "Pera menta Taboo",
                "cazoleta" : "Barro blanco",
                "hornillo" : "1500W"
        },
        "disponible" : true
}
{
        "_id" : "Pack KaPro",
        "nombreCompleto" : "Pack KaPro 2020",
        "marca" : "Shishas Kaizen",
        "precio" : 17.95,
        "fechaEntrada" : ISODate("2020-12-19T00:00:00Z"),
        "contenidoPack" : [
                "Cazoleta",
                "Gestor de calor"
        ],
        "espeficicacionesContenido" : {
                "gestorCalor" : "Provost",
                "cazoleta" : "Kaizen"
        },
        "disponible" : true
}
*/


/* [ 6º Consulta con $and y $regex ]

* En esta consulta vamos a utilizar los operadores $and y $regex para 
buscar todos los materiales de base que estuvieron disponibles antes de la fecha indicada                                      
*/
> db.shisha.find({ $and: [  {  "materialesEmpleados.base":{ $regex: ".*" } } , { fechaEntrada:{ $lt: ISODate("2020-11-20")} } ]}).pretty()
/*
{
        "_id" : "Rocket 2.0",
        "nombreCompleto" : "Mr.Shisha Rocket 2.0 Resin",
        "marca" : "Mr.Shisha",
        "precio" : 99.95,
        "fechaEntrada" : ISODate("2020-11-16T00:00:00Z"),
        "contenidoCaja" : [
                "Manguera",
                "Boquilla",
                "Cazoleta Terrocota",
                "Plato para ceniza",
                "Mastil",
                "Screen",
                "Base",
                "Cuerpo de la cachimba",
                "Muelle",
                "Maletin de transporte"
        ],
        "materialesEmpleados" : {
                "cuerpo" : "Acero inoxidable",
                "base" : "Cristal",
                "mangera" : "Silicona",
                "cazoleta" : "Barro",
                "plato" : "Aluminio",
                "boquilla" : "Acero inoxidable",
                "maletin" : "Cuero"
        },
        "gestorCalor" : true,
        "medidasCuerpo" : {
                "mangera" : "1,7m",
                "altura" : "42cm",
                "plato" : "15mm",
                "peso" : "12kg"
        }
}
*/



/* [ 6º Consulta con $exits ]

* En esta consulta vamos a utilizar el operador $exists que sirve para enlazar
documentos con el valor el cual pongamos, en este caso, muestrame los que tengan una cazoleta de barro                                    
*/
> db.shisha.find( {"materialesEmpleados.cazoleta" : { $exists: true, $eq: "Barro" } } ).pretty()
/*
{
        "_id" : "Rocket 2.0",
        "nombreCompleto" : "Mr.Shisha Rocket 2.0 Resin",
        "marca" : "Mr.Shisha",
        "precio" : 99.95,
        "fechaEntrada" : ISODate("2020-11-16T00:00:00Z"),
        "contenidoCaja" : [
                "Manguera",
                "Boquilla",
                "Cazoleta Terrocota",
                "Plato para ceniza",
                "Mastil",
                "Screen",
                "Base",
                "Cuerpo de la cachimba",
                "Muelle",
                "Maletin de transporte"
        ],
        "materialesEmpleados" : {
                "cuerpo" : "Acero inoxidable",
                "base" : "Cristal",
                "mangera" : "Silicona",
                "cazoleta" : "Barro",
                "plato" : "Aluminio",
                "boquilla" : "Acero inoxidable",
                "maletin" : "Cuero"
        },
        "gestorCalor" : true,
        "medidasCuerpo" : {
                "mangera" : "1,7m",
                "altura" : "42cm",
                "plato" : "15mm",
                "peso" : "12kg"
        }
}
> db.shisha.find( {"materialesEmpleados.plato" : { $exists: true, $eq: "Aluminio" } } ).pretty()   
{
        "_id" : "Rocket 2.0",
        "nombreCompleto" : "Mr.Shisha Rocket 2.0 Resin",
        "marca" : "Mr.Shisha",
        "precio" : 99.95,
        "fechaEntrada" : ISODate("2020-11-16T00:00:00Z"),
        "contenidoCaja" : [
                "Manguera",
                "Boquilla",
                "Cazoleta Terrocota",
                "Plato para ceniza",
                "Mastil",
                "Screen",
                "Base",
                "Cuerpo de la cachimba",
                "Muelle",
                "Maletin de transporte"
        ],
        "materialesEmpleados" : {
                "cuerpo" : "Acero inoxidable",
                "base" : "Cristal",
                "mangera" : "Silicona",
                "cazoleta" : "Barro",
                "plato" : "Aluminio",
                "boquilla" : "Acero inoxidable",
                "maletin" : "Cuero"
        },
        "gestorCalor" : true,
        "medidasCuerpo" : {
                "mangera" : "1,7m",
                "altura" : "42cm",
                "plato" : "15mm",
                "peso" : "12kg"
        }
}
{
        "_id" : "Idol Old Wood",
        "nombreCompleto" : "Totem Hookah Idol Old Wood",
        "marca" : "Totem Hookah",
        "precio" : 199.95,
        "fechaEntrada" : ISODate("2021-03-02T00:00:00Z"),
        "contenidoCaja" : [
                "Cuerpo",
                "Boquilla",
                "Plato",
                "Base",
                "Mangera"
        ],
        "materialesEmpleados" : {
                "cuerpo" : "Acero inoxidable y Madera",
                "base" : "Cristal",
                "mangera" : "Silicona",
                "plato" : "Aluminio",
                "boquilla" : "Acero"
        },
        "gestorCalor" : true,
        "medidasCuerpo" : {
                "mangera" : "1,5m",
                "altura" : "40cm",
                "plato" : "15mm",
                "peso" : "13kg"
        }
}
*/