db.shisha.insertMany([
	{
		_id: "MVP 360",
		nombreCompleto: "Aladin MVP 360 Shiny Clear",
		marca: "Aladin", 
		precio: 89.99,
	    fechaEntrada: new Date("2020-11-20"),
		contenidoCaja: [
			"Base para agua", 
			"Cazoleta Tradicional",
			"Plato para ceniza",
			"Pinzas",
			"Goma Cazoleta",
			"Cuerpo de la cachimba"
		],
		materialesEmpleados: {
			cuerpo: "Acero inoxidable",
			base: "Vidrio",
			mangera: "Silicona",
			cazoleta: "barro"
		},
			
		gestorCalor: false, 
		medidasCuerpo: 
		{
			mangera: "1,5m",
			altura: "36cm",
			peso: "13,5kg"
			
		},
		
	
},


{
	_id: "Hookah S Red",
	nombreCompleto: "Alpha Hookah S Red Candy",
	marca: "Alpha Hookah", 
	precio: 299.95,
	fechaEntrada: new Date("2020-11-28"),
	contenidoCaja: [
		"Manguera", 
		"Boquilla",
		"Cazoleta Tradicional",
		"Plato para ceniza",
		"Mastil",
		"Base",
		"Cuerpo de la cachimba"
	],
	materialesEmpleados: {
		cuerpo: "Acero inoxidable",
		base: "Cristal soplado a mano",
		mangera: "Silicona",
		cazoleta: "barro",
		Boquilla: "Acero inoxidable"
	},
		
	gestorCalor: true, 
	medidasCuerpo: 
	{
		mangera: "1,5m",
		altura: "32cm",
		plato: "13mm",
		peso: "15kg"
		
	},
	

},


{
	_id: "Rocket 2.0",
	nombreCompleto: "Mr.Shisha Rocket 2.0 Resin",
	marca: "Mr.Shisha", 
	precio: 99.95,
	fechaEntrada: new Date("2020-11-16"),
	contenidoCaja: [
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
	materialesEmpleados: {
		cuerpo: "Acero inoxidable",
		base: "Cristal",
		mangera: "Silicona",
		cazoleta: "Barro",
		plato: "Aluminio",
		boquilla: "Acero inoxidable",
		maletin: "Cuero"
	},
		
	gestorCalor: true, 
	medidasCuerpo: 
	{
		mangera: "1,7m",
		altura: "42cm",
		plato: "15mm",
		peso: "12kg"
	},
	

},


{
	_id: "Oduman N2",
	nombreCompleto: "Oduman N2 Travel",
	marca: "Oduman", 
	precio: 74.95,
	fechaEntrada: new Date("2020-12-20"),
	contenidoCaja: [
		"Cuerpo",
		"Boquilla",
		"Plato",
		"Base",
		"Mangera",
		"Maletin de transporte"
		
	],
	materialesEmpleados: {
		cuerpo: "Acero inoxidable",
		base: "Cristal",
		mangera: "Silicona",
		plato: "Acero",
		boquilla: "Acero inoxidable",
		maletin: "Tela"
	},
		
	gestorCalor: false, 
	medidasCuerpo: 
	{
		mangera: "1,2m",
		altura: "34cm",
		plato: "10mm",
		peso: "9kg"
		
	},
	

},


{
	_id: "Idol Old Wood",
	nombreCompleto: "Totem Hookah Idol Old Wood",
	marca: "Totem Hookah", 
	precio: 199.95,
	fechaEntrada: new Date("2021-03-02"),
	contenidoCaja: [
		"Cuerpo",
		"Boquilla",
		"Plato",
		"Base",
		"Mangera"
		
		
	],
	materialesEmpleados: {
		cuerpo: "Acero inoxidable y Madera",
		base: "Cristal",
		mangera: "Silicona",
		plato: "Aluminio",
		boquilla: "Acero"
		
	},
		
	gestorCalor: true, 
	medidasCuerpo: 
	{
		mangera: "1,5m",
		altura: "40cm",
		plato: "15mm",
		peso: "13kg"
		
	},
	

},


{
	_id: "PackClassic",
	nombreCompleto: "Pack HispaCachimba Classic smoke",
	marca: "HispaCachimba", 
	precio: 79.99,
	fechaEntrada: new Date("2020-12-12"),
	contenidoPack: [
		"Caja de pastillas",
		"Tabaco",
		"Alpaca Egy",
		"Cubrevientos Rejilla",
		"Cold Smoke Rainbow Yellow",
		"Hornillo"
		
		
	],
	espeficicacionesContenido: {
		pastillas: "King Coco",
		tabaco: "Pera menta Taboo",
		cazoleta: "Barro blanco",
		hornillo: "1500W"
		
	},
		
	disponible: true, 
	
},


{
	_id: "PackCovid",
	nombreCompleto: "PackCovid Shishas Kaizen 19",
	marca: "Shishas Kaizen", 
	precio: 45.99,
	fechaEntrada: new Date("2021-11-12"),
	contenidoPack: [
		"Caja de pastillas",
		"Cazoleta",
		"Pinzas",
		"Punzon",
		"Screen",
		"Rejilla",
		"Hornillo",
		"Papel de plata"
		
	],
	espeficicacionesContenido: {
		pastillas: "Carbin Yacuza",
		hornillo: "1500W",
		rejilla: "screen",
		cazoleta: "Kaizen"
		
	},
		
	disponible: false, 
	
},


{
	_id: "Pack KaPro",
	nombreCompleto: "Pack KaPro 2020",
	marca: "Shishas Kaizen", 
	precio: 17.95,
	fechaEntrada: new Date("2020-12-19"),
	contenidoPack: [
		"Cazoleta",
		"Gestor de calor"
		
	],
	espeficicacionesContenido: {
		gestorCalor: "Provost",
		cazoleta: "Kaizen"
		
	},
		
	disponible: true, 
	
},
	
])