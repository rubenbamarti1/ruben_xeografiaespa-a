export function getRandomQuestion() {
	const indexArr = [];
	const mainQuestions = [];

	while (indexArr.length !== 10) {
		const rand = Math.floor(Math.random() * arrayOfQuestions.length);
		if (indexArr.includes(rand)) continue;

		indexArr.push(rand);
		mainQuestions.push(arrayOfQuestions[rand]);
	}
	console.log(mainQuestions, indexArr);

	return mainQuestions;
}

const arrayOfQuestions = [
	{
        question: "¿Cuántos archipiélagos forman parte de España?",
        answer: "Dos",
        choices: ["Uno", "Dos", "Tres"]
    },
    {
        question: "¿Cuál es la altitud media de España sobre el nivel del mar?",
        answer: "660 metros",
        choices: ["500 metros", "660 metros", "800 metros", "1000 metros"]
    },
    {
        question: "¿Cuál es la longitud aproximada de la costa española?",
        answer: "7.661 km",
        choices: ["5.000 km", "7.661 km", "10.000 km", "12.000 km"]
    },
    {
        question: "¿Cuál es la característica principal del relieve de España?",
        answer: "Montañoso",
        choices: ["Plano", "Montañoso", "Desértico", "Llano"]
    },
    {
        question: "¿Cuál es la temperatura media en las tierras del interior de España?",
        answer: "Entre 10 °C y 15,5 °C",
        choices: [
            "Entre 5 °C y 10 °C",
            "Entre 10 °C y 15,5 °C",
            "Entre 15,5 °C y 20 °C",
            "Más de 20 °C"
        ]
    },
    {
        question: "¿Cuál es el mes más frío en España?",
        answer: "Enero",
        choices: ["Enero", "Abril", "Julio", "Octubre"]
    },
	{
        question: "¿Cuál es el nombre de las dos ciudades autónomas de España en el norte de África?",
        answer: "Ceuta y Melilla",
        choices: ["Barcelona y Madrid", "Ceuta y Melilla", "Valencia y Sevilla", "Bilbao y Málaga"]
    },
    {
        question: "¿Cuál es la longitud del litoral peninsular de España en el mar Cantábrico?",
        answer: "770 km",
        choices: ["500 km", "770 km", "1000 km", "1200 km"]
    },
    {
        question: "¿Cuál es el nombre del cabo más septentrional de la península ibérica?",
        answer: "Estaca de Bares",
        choices: ["Cabo de Finisterre", "Cabo de Gata", "Estaca de Bares", "Cabo de San Vicente"]
    },
    {
        question: "¿Cuál es el rasgo más destacado de las costas atlánticas españolas?",
        answer: "Rigidez",
        choices: ["Suavidad", "Sinuosidad", "Rigidez", "Flexibilidad"]
    },
    {
        question: "¿Cuál es la temperatura media de las aguas del Mediterráneo en España?",
        answer: "Entre 15 °C y 18 °C",
        choices: ["Entre 10 °C y 15 °C", "Entre 15 °C y 18 °C", "Entre 20 °C y 25 °C", "Más de 25 °C"]
    },
    {
        question: "¿Cuál es la amplitud térmica en lugares como Canarias?",
        answer: "Menor",
        choices: ["Mayor", "Menor", "Igual", "Variable"]
    }
];
