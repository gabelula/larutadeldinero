var margin = {top: 45, right: 0, bottom: 0, left: 0},
    width = 574,
    height = 600 - margin.top - margin.bottom,
    formatNumber = d3.format(",d"),
    transitioning;

var color = d3.scale.ordinal()
  .range(colorbrewer.Dark2[7]);


var x = d3.scale.linear()
    .domain([0, width])
    .range([0, width]);

var y = d3.scale.linear()
    .domain([0, height])
    .range([0, height]);

var treemap = d3.layout.treemap()
    .children(function(d, depth) { return depth ? null : d.children; })
    .sort(function(a, b) { return a.value - b.value; })
    .ratio(height / width * 0.5 * (1 + Math.sqrt(5)))
    .round(false);

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.bottom + margin.top)
    .style("margin-left", -margin.left + "px")
    .style("margin.right", -margin.right + "px")
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .style("shape-rendering", "crispEdges");

var grandparent = svg.append("g")
    .attr("class", "grandparent");

grandparent.append("rect")
    .attr("y", -margin.top)
    .attr("width", width)
    .attr("height", margin.top);

grandparent.append("text")
    .attr("font-size", "22px")
    .attr("fill", "#FFF")
    .attr("x", 6)
    .attr("y", 10 - margin.top)
    .attr("dy", ".90em");


var root = {
  "name": "Ciclos",
  "children": [
  {"name": 2013, "children": [{"name": "PRIMARIAS", "children": [{"name": "CAPITAL FEDERAL", "children": [{"name": "UNEN", "value": 1566787}, {"name": "UNION PRO", "value": 6000000}, {"name": "FRENTE PARA LA VICTORIA", "value": 1539000},
  {"name": "MOVIMIENTO UNIDAD DEL TRABAJO Y LA PRODUCCION", "value": 95000}, {"name": "CAMINO POPULAR", "value": 221681}]}, {"name": "CORDOBA", "children": [{"name": "FRENTE PARA LA VICTORIA", "value": 2165420}, {"name": "UNION POR CORDOBA", "value": 388473}, {"name": "UNION CIVICA RADICAL", "value": 817282},
  {"name": "UNION PRO", "value": 254000}, {"name": "ENCUENTRO VECINAL CORDOBA", "value": 200}, {"name": "VECINALISMO INDEPENDIENTE", "value": 5500}]}, {"name": "LA PAMPA", "children": [{"name": "JUSTICIALISTA", "value": 256450}, {"name": "FRENTE PROPUESTA FEDERAL", "value": 101834}]}, {"name": "SALTA", "children": [{"name": "FRENTE POPULAR SALTE\u00d1O", "value": 150800}]}, {"name": "RIO NEGRO", "children": [{"name": "UNION CIVICA RADICAL", "value": 140925}, {"name": "PROVINCIAL RIONEGRINO", "value": 133100}]}, {"name": "MENDOZA", "children": [{"name": "UNION CIVICA RADICAL", "value": 818650}, {"name": "MOVIMIENTO SOCIALISTA DE LOS TRABAJADORES", "value": 115}, {"name": "FRENTE AMPLIO PROGRESISTA-COALICION CIVICA ARI", "value": 1500}, {"name": "UNION PD-PRO", "value": 35855}, {"name": "COMPROMISO FEDERAL", "value": 500}]}, {"name": "TIERRA DEL FUEGO", "children": [{"name": "JUSTICIALISTA", "value": 101095}, {"name": "ESPACIO DEMOCRATICO PARA LA VICTORIA", "value": 53881}, {"name": "UNION FEDERAL", "value": 102000}, {"name": "MOVIMIENTO POPULAR FUEGUINO", "value": 54400}, {"name": "FRENTE PARA LA VICTORIA", "value": 180000}, {"name": "MOVIMIENTO SOLIDARIO POPULAR", "value": 55100}, {"name": "POPULAR", "value": 27500}, {"name": "UNION CIVICA RADICAL", "value": 16033}]}, {"name": "SAN LUIS", "children": [{"name": "FRENTE PROGRESISTA CIVICO Y SOCIAL", "value": 20692}]}, {"name": "SANTA CRUZ", "children": [{"name": "JUSTICIALISTA", "value": 293215}, {"name": "UNION PARA VIVIR MEJOR", "value": 500}, {"name": "FRENTE PARA LA VICTORIA", "value": 223750}]}, {"name": "CHUBUT", "children": [{"name": "UNION CIVICA RADICAL", "value": 82027}, {"name": "ACCION CHUBUTENSE", "value": 390000}, {"name": "MOVIMIENTO POLO SOCIAL, LA TERCERA POSICION DE LA GENTE", "value": 650}, {"name": "FRENTE PARA LA VICTORIA", "value": 31000}]}, {"name": "SAN JUAN", "children": [{"name": "COMPROMISO FEDERAL", "value": 258050}, {"name": "FRENTE PARA LA VICTORIA", "value": 25500}, {"name": "FRENTE DEL PUEBLO", "value": 400}]}, {"name": "JUJUY", "children": [{"name": "FRENTE PRIMERO JUJUY", "value": 764}, {"name": "FRENTE PARA LA VICTORIA", "value": 52800}, {"name": "FRENTE JUJE\u00d1O", "value": 391}]}, {"name": "BUENOS AIRES", "children": [{"name": "FRENTE RENOVADOR", "value": 7104917}, {"name": "FRENTE PARA LA VICTORIA", "value": 10334011}, {"name": "UNIDOS POR LA LIBERTAD Y EL TRABAJO", "value": 5357600}, {"name": "UNION CON FE", "value": 2154612}, {"name": "FRENTE POPULAR DEMOCRATICO Y SOCIAL", "value": 12500}, {"name": "FRENTE DE IZQUIERDA Y DE LOS TRABAJADORES", "value": 50}]}, {"name": "TUCUMAN", "children": [{"name": "FRENTE PARA LA VICTORIA", "value": 618400}, {"name": "ALTERNATIVA POPULAR", "value": 94500}, {"name": "FRENTE ACUERDO CIVICO Y SOCIAL", "value": 140886}, {"name": "FUERZA REPUBLICANA", "value": 75000}]}, {"name": "CATAMARCA", "children": [{"name": "FRENTE TERCERA POSICION", "value": 21800}, {"name": "FRENTE CIVICO Y SOCIAL", "value": 82324}]}, {"name": "NEUQUEN", "children": [{"name": "MOVIMIENTO POPULAR NEUQUINO", "value": 1215000}, {"name": "FRENTE PARA LA VICTORIA", "value": 193000}, {"name": "FRENTE PROGRESISTA SUR", "value": 5112}, {"name": "UNION POPULAR", "value": 10000}, {"name": "MOVIMIENTO LIBRES DEL SUR", "value": 70000}, {"name": "COMPROMISO CIVICO NEUQUINO", "value": 5}]}, {"name": "SANTA FE", "children": [{"name": "FRENTE PARA LA VICTORIA", "value": 1484800}, {"name": "FRENTE PROGRESISTA CIVICO Y SOCIAL", "value": 404101}, {"name": "UNION PRO SANTA FE FEDERAL", "value": 165900}]}, {"name": "LA RIOJA", "children": [{"name": "COMPROMISO FEDERAL", "value": 44100}, {"name": "FUERZA CIVICA RIOJANA", "value": 100}]}, {"name": "ENTRE RIOS", "children": [{"name": "UNION POR ENTRE RIOS", "value": 140000}, {"name": "FRENTE AMPLIO PROGRESISTA", "value": 15000}, {"name": "FRENTE PARA LA VICTORIA", "value": 22}]}, {"name": "MISIONES", "children": [{"name": "UNION CIVICA RADICAL", "value": 1000}, {"name": "FRENTE RENOVADOR DE LA CONCORDIA", "value": 500}, {"name": "FRENTE PARA LA VICTORIA", "value": 200}, {"name": "FRENTE UNIDOS", "value": 986}]}, {"name": "CHACO", "children": [{"name": "FRENTE PARA LA VICTORIA", "value": 3254}]}, {"name": "SANTIAGO DEL ESTERO", "children": [{"name": "IZQUIERDA POR UNA OPCION SOCIALISTA", "value": 2500}, {"name": "FRENTE CIVICO POR SANTIAGO", "value": 200}]}, {"name": "FORMOSA", "children": [{"name": "FRENTE AMPLIO FORMOSE\u00d1O", "value": 700}]}]}, {"name": "GENERALES", "children": [{"name": "SAN LUIS", "children": [{"name": "COMPROMISO FEDERAL", "value": 70000}, {"name": "FRENTE PARA LA VICTORIA", "value": 30000}, {"name": "FRENTE PROGRESISTA CIVICO Y SOCIAL", "value": 1205}]}, {"name": "CORDOBA", "children": [{"name": "UNION POR CORDOBA", "value": 4779000}, {"name": "UNION PRO", "value": 540000}, {"name": "UNION CIVICA RADICAL", "value": 965000}, {"name": "FRENTE DE IZQUIERDA Y DE LOS TRABAJADORES", "value": 100}, {"name": "FRENTE PROGRESISTA CIVICO Y SOCIAL", "value": 1064}]}, {"name": "TUCUMAN", "children": [{"name": "FRENTE ACUERDO CIVICO Y SOCIAL", "value": 50350}, {"name": "ALTERNATIVA POPULAR", "value": 47000}, {"name": "FRENTE PARA LA VICTORIA", "value": 1662000}, {"name": "FUERZA REPUBLICANA", "value": 125000}]}, {"name": "TIERRA DEL FUEGO", "children": [{"name": "MOVIMIENTO SOLIDARIO POPULAR", "value": 98000}, {"name": "POPULAR", "value": 17500}, {"name": "UNION FEDERAL", "value": 183700}, {"name": "MOVIMIENTO POPULAR FUEGUINO", "value": 100000}, {"name": "FRENTE PARA LA VICTORIA", "value": 160000}]}, {"name": "BUENOS AIRES", "children": [{"name": "FRENTE PARA LA VICTORIA", "value": 13585800}, {"name": "FRENTE RENOVADOR", "value": 5701827}, {"name": "UNIDOS POR LA LIBERTAD Y EL TRABAJO", "value": 1080000}, {"name": "NUEVO BUENOS AIRES", "value": 1898}]}, {"name": "CAPITAL FEDERAL", "children": [{"name": "UNEN", "value": 53601}, {"name": "UNION PRO", "value": 6300000}, {"name": "FRENTE PARA LA VICTORIA", "value": 1199000}]}, {"name": "SANTA FE", "children": [{"name": "UNION PRO SANTA FE FEDERAL", "value": 813750}, {"name": "FRENTE PARA LA VICTORIA", "value": 1126000}, {"name": "SOCIALISTA", "value": 563934}, {"name": "FRENTE PROGRESISTA CIVICO Y SOCIAL", "value": 98900}, {"name": "SANTAFESINO CIEN POR CIENTO", "value": 122000}]}, {"name": "CATAMARCA", "children": [{"name": "FRENTE TERCERA POSICION", "value": 30000}, {"name": "FRENTE CIVICO Y SOCIAL", "value": 131675}]}, {"name": "NEUQUEN", "children": [{"name": "MOVIMIENTO POPULAR NEUQUINO", "value": 1148400}, {"name": "UNION POPULAR", "value": 121100}, {"name": "COMPROMISO CIVICO NEUQUINO", "value": 146000}]}, {"name": "SALTA", "children": [{"name": "JUSTICIALISTA", "value": 147999}, {"name": "FRENTE POPULAR SALTE\u00d1O", "value": 199171}]}, {"name": "SANTIAGO DEL ESTERO", "children": [{"name": "FE", "value": 129243}, {"name": "FRENTE POPULAR", "value": 350}, {"name": "IZQUIERDA POR UNA OPCION SOCIALISTA", "value": 2000}]}, {"name": "MISIONES", "children": [{"name": "UNION CIVICA RADICAL", "value": 35000}, {"name": "FRENTE PARA LA VICTORIA", "value": 550}, {"name": "JUSTICIALISTA", "value": 550}]}, {"name": "LA PAMPA", "children": [{"name": "FRENTE PROPUESTA FEDERAL", "value": 147665}, {"name": "PUEBLO NUEVO", "value": 4630}]}, {"name": "ENTRE RIOS", "children": [{"name": "UNION CIVICA RADICAL", "value": 20000}, {"name": "UNION POR ENTRE RIOS", "value": 282000}, {"name": "FRENTE AMPLIO PROGRESISTA", "value": 10000}]}, {"name": "RIO NEGRO", "children": [{"name": "UNION CIVICA RADICAL", "value": 30000}, {"name": "FRENTE PROGRESISTA", "value": 2356}]}, {"name": "SAN JUAN", "children": [{"name": "FRENTE PARA LA VICTORIA", "value": 346111}, {"name": "DIGNIDAD CIUDADANA", "value": 4800}, {"name": "COMPROMISO FEDERAL", "value": 40500}]}, {"name": "MENDOZA", "children": [{"name": "UNION CIVICA RADICAL", "value": 604571}, {"name": "FRENTE DE IZQUIERDA Y DE LOS TRABAJADORES", "value": 572}]}, {"name": "CHACO", "children": [{"name": "UNION POR CHACO", "value": 1100}, {"name": "FRENTE PARA LA VICTORIA", "value": 310}]}, {"name": "FORMOSA", "children": [{"name": "FRENTE AMPLIO FORMOSE\u00d1O", "value": 300}]}, {"name": "JUJUY", "children": [{"name": "FRENTE PRIMERO JUJUY", "value": 30000}]}, {"name": "LA RIOJA", "children": [{"name": "IZQUIERDA POR UNA OPCION SOCIALISTA", "value": 380}]}]}]}, {"name": 2009, "children": [{"name": "GENERALES", "children": [{"name": "CORDOBA", "children": [{"name": "ALIANZA FRENTE PARA LA VICTORIA POR LA EQUIDAD Y LA JUSTICIA SOCIAL", "value": 3563500}, {"name": "UNION CIVICA RADICAL", "value": 986903}, {"name": "ALIANZA UNION POR CORDOBA - COMPROMISO FEDERAL", "value": 7029701}, {"name": "ALIANZA FRENTE CIVICO", "value": 110000}, {"name": "ENCUENTRO POR CORDOBA", "value": 104637}]}, {"name": "NEUQUEN", "children": [{"name": "MOVIMIENTO POPULAR NEUQUINO", "value": 646000}, {"name": "FRENTE PRO FEDERAL", "value": 74045}, {"name": "UNION CIVICA RADICAL", "value": 308400}, {"name": "TODOS POR NEUQUEN", "value": 97000}, {"name": "MOVIMIENTO LIBRES DEL SUR", "value": 28250}]}, {"name": "SAN LUIS", "children": [{"name": "FRENTE JUSTICIALISTA ES POSIBLE", "value": 368875}, {"name": "FRENTE POPULAR", "value": 509}]}, {"name": "CAPITAL FEDERAL", "children": [{"name": "ACUERDO CIVICO Y SOCIAL", "value": 327031}, {"name": "ENCUENTRO POPULAR PARA LA VICTORIA", "value": 2419674}, {"name": "PROYECTO SUR", "value": 64600}, {"name": "PARTIDO SOCIALISTA", "value": 12631}, {"name": "PARTIDO ALTERNATIVA SOCIAL", "value": 9000}, {"name": "PROPUESTA REPUBLICANA", "value": 3012450}, {"name": "FRENTE ES POSIBLE", "value": 163500}, {"name": "INICIATIVA VERDE POR BUENOS AIRES", "value": 22700}, {"name": "MOVIMIENTO SOCIALISTA DE LOS TRABAJADORES", "value": 5000}, {"name": "PARTIDO DEMOCRATA CRISTIANO", "value": 5824}]}, {"name": "BUENOS AIRES", "children": [{"name": "UNION PRO", "value": 13360544}, {"name": "FRENTE JUSTICIALISTA PARA LA VICTORIA", "value": 10691842}, {"name": "NUEVO ENCUENTRO", "value": 673757}, {"name": "ACUERDO CIVICO Y SOCIAL", "value": 2873244}, {"name": "MOVIMIENTO LIBRES DEL SUR", "value": 172750}, {"name": "PARTIDO RENOVADOR DE LA PROVINCIA DE BUENOS AIRES", "value": 400}, {"name": "FRENTE DE IZQUIERDA Y LOS TRABAJADORES PTS - MAS- I.SOCIALISTA", "value": 2120}, {"name": "MST-MIJD", "value": 159182}]}, {"name": "MISIONES", "children": [{"name": "FRENTE RENOVADOR DE LA CONCORDIA", "value": 332496}, {"name": "UNION CIVICA RADICAL", "value": 33810}, {"name": "FRENTE UNION PRO DIGNIDAD", "value": 31131}, {"name": "PARTIDO COMUNISTA", "value": 971}, {"name": "FRENTE DE LA ESPERANZA", "value": 907}]}, {"name": "MENDOZA", "children": [{"name": "FRENTE CIVICO FEDERAL-UCR-CONFE", "value": 1537461}, {"name": "FRENTE PARA LA VICTORIA", "value": 1468749}, {"name": "PARTIDO SOCIALISTA", "value": 1000}, {"name": "FRENTE PARTIDO DEMOCRATA PRO", "value": 228260}, {"name": "POLO SOLIDARIO HUMANISTA", "value": 2920}, {"name": "ES POSIBLE", "value": 33786}]}, {"name": "SANTA FE", "children": [{"name": "FRENTE PROGRESISTA CIVICO Y SOCIAL", "value": 965512}, {"name": "FRENTE PARA LA VICTORIA", "value": 1414300}, {"name": "SANTA FE FEDERAL", "value": 1444120}, {"name": "POLITICA ABIERTA PARA LA INTEGRIDAD SOCIAL", "value": 28}, {"name": "PARTIDO DE LOS TRABAJADORES SOCIALISTAS", "value": 1600}]}, {"name": "CATAMARCA", "children": [{"name": "FRENTE CATAMARCA FEDERAL", "value": 23000}]}, {"name": "JUJUY", "children": [{"name": "FRENTE PRIMERO JUJUY", "value": 30658}]}, {"name": "ENTRE RIOS", "children": [{"name": "ALIANZA ACUERDO CIVICO Y SOCIAL", "value": 440135}, {"name": "ALIANZA FRENTE JUSTICIALISTA ENTRERRIANO", "value": 150000}, {"name": "ALIANZA FRENTE UNION PRO", "value": 33571}, {"name": "PARTIDO SOCIALISTA", "value": 48000}, {"name": "ALIANZA FRENTE POPULAR DISIDENTE", "value": 200}]}, {"name": "ORDEN NACIONAL", "children": [{"name": "AFIRMACION PARA UNA REPUBLICA IGUALITARIA", "value": 405400}, {"name": "UNION CIVICA RADICAL", "value": 385000}, {"name": "PARTIDO FRENTE GRANDE", "value": 180000}]}, {"name": "RIO NEGRO", "children": [{"name": "PARTIDO JUSTICIALISTA", "value": 385000}, {"name": "ALIANZA CONCERTACION PARA EL DESARROLLO", "value": 25000}, {"name": "PARTIDO SOCIALISTA", "value": 6500}, {"name": "AFIRMACION PARA UNA REPUBLICA IGUALITARIA", "value": 84929}]}, {"name": "SAN JUAN", "children": [{"name": "FRENTE PARA LA VICTORIA", "value": 481000}, {"name": "ACUERDO CIVICO Y SOCIAL", "value": 5650}, {"name": "FRENTE UNION POR SAN JUAN", "value": 40000}, {"name": "CONCERTACION DE IZQUIERDA POPULAR", "value": 585}]}, {"name": "CORRIENTES", "children": [{"name": "ENCUENTRO POR CORRIENTES - ACUERDO CIVICO Y SOCIAL", "value": 29157}, {"name": "FRENTE DE TODOS", "value": 17000}]}, {"name": "SALTA", "children": [{"name": "PARTIDO JUSTICIALISTA", "value": 345000}, {"name": "ACUERDO CIVICO Y SOCIAL", "value": 135000}]}, {"name": "CHUBUT", "children": [{"name": "ALIANZA TRANSITORIA FRENTE POR LA INTEGRACION", "value": 355399}, {"name": "ALIANZA TRANSITORIA FRENTE CIVICO POPULAR", "value": 200}]}, {"name": "LA RIOJA", "children": [{"name": "FRENTE JUSTICIALISTA DEL PUEBLO", "value": 15000}, {"name": "FRENTE CIVICO Y SOCIAL", "value": 1678}, {"name": "ENCUENTRO POPULAR RIOJANO", "value": 6000}]}, {"name": "TUCUMAN", "children": [{"name": "FRENTE DEL PUEBLO UNIDO", "value": 207000}, {"name": "FRENTE PARA LA VICTORIA", "value": 667457}, {"name": "FRENTE ACUERDO CIVICO Y SOCIAL", "value": 400995}, {"name": "FRENTE UNION PRO - FEDERAL", "value": 177154}, {"name": "PARTIDO LABORISTA DE TUCUMAN", "value": 182309}, {"name": "ALIANZA CON CONCIENCIA VOLUNTAD SOLIDARIA", "value": 204}, {"name": "MOVIMIENTO LIBRES DEL SUR", "value": 134668}, {"name": "PARTIDO DE LOS TRABAJADORES SOCIALISTAS", "value": 3886}, {"name": "PARTIDO HUMANISTA", "value": 2692}]}, {"name": "TIERRA DEL FUEGO", "children": [{"name": "FEDERAL FUEGUINO", "value": 207637}, {"name": "PARTIDO POPULAR", "value": 16484}]}, {"name": "SANTA CRUZ", "children": [{"name": "ENCUENTRO CIUDADANO", "value": 61845}, {"name": "FRENTE ELECTORAL CAMBIEMOS PARA CRECER", "value": 275}]}, {"name": "LA PAMPA", "children": [{"name": "ALIANZA FRENTE PAMPEANO CIVICO Y SOCIAL", "value": 177500}, {"name": "PUEBLO NUEVO", "value": 27200}, {"name": "ALIANZA FRENTE AMPLIO", "value": 55224}, {"name": "PARTIDO JUSTICIALISTA", "value": 20000}]}, {"name": "CHACO", "children": [{"name": "FRENTE DE TODOS", "value": 35200}]}, {"name": "FORMOSA", "children": [{"name": "ALIANZA ACUERDO CIVICO Y SOCIAL", "value": 500}]}]}]}, {"name": 2007, "children": [{"name": "GENERALES", "children": [{"name": "ORDEN NACIONAL", "children": [{"name": "FRENTE PARA LA VICTORIA", "value": 12727001}, {"name": "FRENTE JUSTICIA UNION Y LIBERTAD", "value": 4896028}, {"name": "EL MOVIMIENTO DE LAS PROVINCIAS UNIDAS", "value": 4842352}, {"name": "CONCERTACION UNA", "value": 2990046}, {"name": "RECREAR PARA EL CRECIMIENTO", "value": 959493}, {"name": "AFIRMACION PARA UNA REPUBLICA IGUALITARIA", "value": 82000}, {"name": "PARTIDO OBRERO", "value": 700}]}, {"name": "TIERRA DEL FUEGO", "children": [{"name": "FRENTE PARA LA VICTORIA", "value": 201730}, {"name": "PARTIDO SOCIALISTA", "value": 1321}, {"name": "AFIRMACION PARA UNA REPUBLICA IGUALITARIA", "value": 9000}, {"name": "PROPUESTA REPUBLICANA", "value": 11718}]}, {"name": "SANTA FE", "children": [{"name": "PARTIDO SOCIALISTA", "value": 375640}, {"name": "UNION DEL CENTRO DEMOCRATICO", "value": 42357}, {"name": "PARTIDO SOCIALISTA AUTENTICO", "value": 500}, {"name": "PARTIDO DEMOCRATA PROGRESISTA", "value": 15500}, {"name": "ALIANZA CONCERTACION PARA UNA SOCIEDAD JUSTA", "value": 1099}]}, {"name": "RIO NEGRO", "children": [{"name": "ALIANZA CONCERTACION PARA EL DESARROLLO", "value": 379687}, {"name": "EL MOVIMIENTO DE LAS PROVINCIAS UNIDAS", "value": 60184}, {"name": "ALIANZA FRENTE PARA LA VICTORIA", "value": 120000}, {"name": "ALIANZA CONCERTACION UNA - UCR - MID - PPR", "value": 500}]}, {"name": "MISIONES", "children": [{"name": "FRENTE RENOVADOR DE LA CONCORDIA", "value": 158133}, {"name": "FRENTE UNION POPULAR", "value": 23000}, {"name": "PARTIDO COMUNISTA", "value": 262}, {"name": "UNION DEL CENTRO DEMOCRATICO", "value": 5000}, {"name": "FRENTE PARA LA VICTORIA", "value": 400}]}, {"name": "CAPITAL FEDERAL", "children": [{"name": "COALICION CIVICA", "value": 90181}, {"name": "DIALOGO POR BUENOS AIRES", "value": 88350}, {"name": "PROPUESTA REPUBLICANA", "value": 1343000}, {"name": "PROYECTO SUR", "value": 102600}, {"name": "PARTIDO SOCIALISTA", "value": 220100}, {"name": "PARTIDO ASAMBLEAS POPULARES", "value": 31500}, {"name": "FRENTE AMPLIO HACIA LA UNIDAD LATINOAMERICANA", "value": 80}, {"name": "CONSENSO PORTE\u00d1\u0091O", "value": 34820}]}, {"name": "BUENOS AIRES", "children": [{"name": "VAMOS", "value": 1822300}, {"name": "UNION CIVICA RADICAL", "value": 97502}, {"name": "FRENTE PARA LA VICTORIA", "value": 125000}]}, {"name": "NEUQUEN", "children": [{"name": "MOVIMIENTO POPULAR NEUQUINO", "value": 502025}, {"name": "PARTIDO DE LOS TRABAJADORES SOCIALISTAS", "value": 2319}]}, {"name": "SANTIAGO DEL ESTERO", "children": [{"name": "FRENTE PARA LA VICTORIA", "value": 788}, {"name": "MOVIMIENTO DE ACCION VECINAL", "value": 15800}, {"name": "PROPUESTA REPUBLICANA", "value": 25000}, {"name": "UNA NUEVA OPCION", "value": 4200}, {"name": "DE LA CORRIENTE RENOVADORA", "value": 6499}]}, {"name": "CORRIENTES", "children": [{"name": "CRECER CON TODOS", "value": 86500}, {"name": "FRENTE DE TODOS", "value": 11000}]}, {"name": "SAN JUAN", "children": [{"name": "FRENTE PARA LA VICTORIA", "value": 315200}, {"name": "PROPUESTA REPUBLICANA", "value": 12000}, {"name": "UNA SAN JUAN", "value": 17556}, {"name": "FRENTE PARA EL CAMBIO", "value": 9300}, {"name": "PARTIDO MOVIMIENTO DEMOCRATICO FEDERAL", "value": 587}]}, {"name": "ENTRE RIOS", "children": [{"name": "POLITICA ABIERTA PARA LA INTEGRIDAD SOCIAL", "value": 45000}, {"name": "PARTIDO SOCIALISTA", "value": 40000}]}, {"name": "SALTA", "children": [{"name": "CONCERTACION PARA UNA NACION AVANZADA", "value": 6840}, {"name": "PROPUESTA SALTE\u00d1\u0091A", "value": 132000}, {"name": "FRENTE JUSTICIALISTA PARA LA VICTORIA", "value": 6000}, {"name": "FRENTE PARA LA VICTORIA-PARTIDO RENOVADOR DE SALTA", "value": 450}, {"name": "PARTIDO DEMOCRATA CRISTIANO", "value": 10000}]}, {"name": "CORDOBA", "children": [{"name": "UNION CIVICA RADICAL", "value": 13502}, {"name": "FRENTE AMPLIO HACIA LA UNIDAD LATINOAMERICANA", "value": 459}]}, {"name": "LA RIOJA", "children": [{"name": "PARTIDO UNION POR LA RIOJA", "value": 5000}, {"name": "ALIANZA FRENTE CIVICO Y SOCIAL", "value": 1587}, {"name": "ALIANZA FRENTE DEL PUEBLO RIOJANO", "value": 250}]}, {"name": "CATAMARCA", "children": [{"name": "FRENTE CIVICO Y SOCIAL", "value": 48000}]}, {"name": "TUCUMAN", "children": [{"name": "DEFENSA PROVINCIAL BANDERA BLANCA", "value": 379}]}, {"name": "JUJUY", "children": [{"name": "FRENTE PARA LA VICTORIA", "value": 50000}]}, {"name": "SAN LUIS", "children": [{"name": "FRENTE JUSTICIALISTA ES POSIBLE", "value": 59150}]}, {"name": "SANTA CRUZ", "children": [{"name": "FRENTE ELECTORAL CAMBIAR PARA CRECER", "value": 3200}]}, {"name": "LA PAMPA", "children": [{"name": "PUEBLO NUEVO", "value": 700}, {"name": "PROPUESTA REPUBLICANA", "value": 19500}, {"name": "PARTIDO HUMANISTA", "value": 8800}, {"name": "FRENTE PARA EL CAMBIO", "value": 22303}]}, {"name": "CHUBUT", "children": [{"name": "ALIANZA FRENTE CIVICO PARA LA CONCERTACION PLURAL", "value": 30}]}, {"name": "CHACO", "children": [{"name": "MOVIMIENTO INDEPENDIENTE DE JUBILADOS Y DESOCUPADOS", "value": 200}]}, {"name": "FORMOSA", "children": [{"name": "PARTIDO SOLIDARIDAD Y ORGANIZACION PARA LA LIBERACION", "value": 4000}]}]}]}, {"name": 2011, "children": [{"name": "PRIMARIAS", "children": [{"name": "MENDOZA", "children": [{"name": "MOVIMIENTO INDEPENDIENTE RENOVADOR", "value": 113110}, {"name": "FRENTE CIVICO FEDERAL - UDESO MENDOZA", "value": 1210}, {"name": "FRENTE PARA LA VICTORIA", "value": 522}, {"name": "NUEVA IZQUIERDA", "value": 200}, {"name": "COMPROMISO FEDERAL", "value": 100}, {"name": "PARTIDO DEL CAMPO POPULAR", "value": 4025}]}, {"name": "SANTA FE", "children": [{"name": "FRENTE PARA LA VICTORIA", "value": 165315}, {"name": "COALICION CIVICA - AFIRMACION PARA UNA REPUBLICA IGUALITARIA", "value": 24465}, {"name": "PARTIDO DE TRABAJADORES POR EL SOCIALISMO", "value": 2200}, {"name": "UNION CIVICA RADICAL", "value": 500}, {"name": "PROPUESTA REPUBLICANA", "value": 17448}, {"name": "PARTIDO NACIONALISTA CONSTITUCIONAL - UNIR", "value": 109000}, {"name": "PARTIDO CONSERVADOR POPULAR", "value": 300}, {"name": "MOVIMIENTO INDEPENDIENTE RENOVADOR", "value": 965}, {"name": "PARTIDO DEL CAMPO POPULAR", "value": 650}, {"name": "PROYECTO SUR", "value": 2000}, {"name": "FRENTE AMPLIO PROGRESISTA", "value": 695}]}, {"name": "ORDEN NACIONAL", "children": [{"name": "FRENTE PARA LA VICTORIA", "value": 6764042}, {"name": "COALICION CIVICA - AFIRMACION PARA UNA REPUBLICA IGUALITARIA", "value": 17500}, {"name": "UNION PARA EL DESARROLLO SOCIAL", "value": 420000}, {"name": "FRENTE POPULAR", "value": 635000}, {"name": "PROYECTO SUR", "value": 14278}]}, {"name": "TIERRA DEL FUEGO", "children": [{"name": "PARTIDO SOCIAL PATAGONICO", "value": 1434000}, {"name": "UNION POPULAR", "value": 36000}, {"name": "PARTIDO JUSTICIALISTA", "value": 2420}]}, {"name": "SALTA", "children": [{"name": "MOVIMIENTO SOCIALISTA DE LOS TRABAJADORES", "value": 171421}, {"name": "MOVIMIENTO INDEPENDIENTE DE JUBILADOS Y DESOCUPADOS", "value": 700000}, {"name": "FRENTE AMPLIO PROGRESISTA", "value": 78000}]}, {"name": "SANTA CRUZ", "children": [{"name": "UNION CIVICA RADICAL", "value": 75637}, {"name": "PARTIDO OBRERO", "value": 3500}]}, {"name": "FORMOSA", "children": [{"name": "PARTIDO OBRERO", "value": 1036060}, {"name": "ALIANZA TRANSITORIA FRENTE PARA LA VICTORIA", "value": 32835}]}, {"name": "SAN JUAN", "children": [{"name": "PARTIDO DIGNIDAD CIUDADANA", "value": 17000}, {"name": "FRENTE POPULAR", "value": 3798}, {"name": "PARTIDO DEL CAMPO POPULAR", "value": 151000}, {"name": "COMPROMISO FEDERAL", "value": 24000}]}, {"name": "TUCUMAN", "children": [{"name": "VOS CAMBIO Y ACCION", "value": 464497}, {"name": "FRENTE DE IZQUIERDA Y DE LOS TRABAJADORES", "value": 74755}, {"name": "CAMBIO POPULAR TUCUMANO", "value": 307833}, {"name": "FRENTE AMPLIO PROGRESISTA", "value": 1650}, {"name": "UNION CIVICA RADICAL", "value": 2500}, {"name": "ALIANZA PROYECTO SUR", "value": 5000}]}, {"name": "SAN LUIS", "children": [{"name": "COMPROMISO FEDERAL", "value": 200}, {"name": "PARTIDO DEMOCRATA INDEPENDIENTE", "value": 65}, {"name": "PARTIDO SOCIALISTA", "value": 3000}, {"name": "UNION CIVICA RADICAL", "value": 200}]}, {"name": "RIO NEGRO", "children": [{"name": "PARTIDO SOCIALISTA", "value": 44869}, {"name": "ALIANZA FRENTE PARA LA VICTORIA", "value": 121}]}, {"name": "SANTIAGO DEL ESTERO", "children": [{"name": "FRENTE PARA LA VICTORIA", "value": 177722}, {"name": "COMPROMISO FEDERAL", "value": 381}, {"name": "MOVIMIENTO LIBRES DEL SUR", "value": 350}]}, {"name": "NEUQUEN", "children": [{"name": "IZQUIERDA POR UNA OPCION SOCIALISTA", "value": 350}]}]}]}]};


  initialize(root);
  accumulate(root);
  layout(root);
  display(root);

  function initialize(root) {
    root.x = root.y = 0;
    root.dx = width;
    root.dy = height;
    root.depth = 0;
  }


  function accumulate(d) {
    return d.children
        ? d.value = d.children.reduce(function(p, v) { return p + accumulate(v); }, 0)
        : d.value;
  }

  function layout(d) {
    if (d.children) {
      treemap.nodes({children: d.children});
      d.children.forEach(function(c) {
        c.x = d.x + c.x * d.dx;
        c.y = d.y + c.y * d.dy;
        c.dx *= d.dx;
        c.dy *= d.dy;
        c.parent = d;
        layout(c);
      });
    }
  }

  function display(d) {
    grandparent
        .datum(d.parent)
        .on("click", transition)
      .select("text")
        .text(name(d));

    var g1 = svg.insert("g", " .grandparent")
        .datum(d)
        .attr("class", "depth");

    var g = g1.selectAll("g")
        .data(d.children)
      .enter().append("g");

    g.filter(function(d) { return d.children; })
        .classed("children", true)
        .on("click", transition);

    g.selectAll(".child")
        .data(function(d) { return d.children || [d]; })
      .enter().append("rect")
        .attr("class", "child")
        .call(rect);

    g.append("rect")
        .attr("class", "parent")
        .call(rect)
      .append("title")
        .text(function(d) { return d.name + ": $" + formatNumber(d.value); });

    g.append("text")
      .attr("font-family", "'Yanone Kaffeesatz'")
        .attr("font-size", "20px")
        .attr("fill", "#FFFFFF")
        .attr("dy", ".75em")
        .text(function(d) { return d.name; })
        .call(text);

        g.append("text")
        .attr("font-family", "'Open Sans'")
        .attr("font-size", "16px")
        .attr("fill", "#FFF")
        .attr("dy", "2.3em")
        .text(function(d) { return "$" + formatNumber(d.value); })
        .call(text);

    function transition(d) {
      if (transitioning || !d) return;
      transitioning = true;

      var g2 = display(d),
          t1 = g1.transition().duration(570),
          t2 = g2.transition().duration(570);

      // Update the domain only after entering new elements.
      x.domain([d.x, d.x + d.dx]);
      y.domain([d.y, d.y + d.dy]);

      // Enable anti-aliasing during the transition.
 //     svg.style("shape-rendering", null);

      // Draw child nodes on top of parent nodes.
      svg.selectAll(".depth").sort(function(a, b) { return a.depth - b.depth; });

      // Fade-in entering text.
      g2.selectAll("text").style("fill-opacity", 0);

      // Transition to the new view.
      t1.selectAll("text").call(text).style("fill-opacity", 0);
      t2.selectAll("text").call(text).style("fill-opacity", 1);
      t1.selectAll("rect").call(rect);
      t2.selectAll("rect").call(rect);

      // Remove the old node when the transition is finished.
      t1.remove().each("end", function() {
        svg.style("shape-rendering", "crispEdges");
        transitioning = false;
      });
    }

    return g;
  }

  function text(text) {
    text.attr("x", function(d) { return x(d.x) + 6; })
        .attr("y", function(d) { return y(d.y) + 10; });
  }

  function rect(rect) {
    rect.attr("x", function(d) { return x(d.x); })
        .attr("y", function(d) { return y(d.y); })
        .attr("width", function(d) { return x(d.x + d.dx) - x(d.x); })
        .attr("height", function(d) { return y(d.y + d.dy) - y(d.y); })
        .style("fill", function(d) {
      return color(d.name);
         });
  }

  function name(d) {
    return d.parent
        ? name(d.parent) + " — " + d.name
        : d.name;
  }
;
