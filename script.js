function calcular() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const edad = parseInt(document.getElementById("edad").value);
  const sexo = document.getElementById("sexo").value;
  const actividad = parseFloat(document.getElementById("actividad").value);

  // Calcular IMC
  const alturaM = altura / 100;
  const imc = peso / (alturaM * alturaM);

  // Calcular TMB
  let tmb;
  if (sexo === "hombre") {
    tmb = 10 * peso + 6.25 * altura - 5 * edad + 5;
  } else {
    tmb = 10 * peso + 6.25 * altura - 5 * edad - 161;
  }

  // Calorías diarias necesarias
  const calorias = tmb * actividad;

  const resultado = `
    <p><strong>IMC:</strong> ${imc.toFixed(2)}</p>
    <p><strong>Tasa metabólica basal (TMB):</strong> ${tmb.toFixed(2)} kcal</p>
    <p><strong>Calorías diarias necesarias:</strong> ${calorias.toFixed(2)} kcal</p>
  `;
  document.getElementById("resultados").innerHTML = resultado;
}

let total = 0;

function agregarAlimento() {
  const entrada = document.getElementById("alimento").value;
  const partes = entrada.split(" ");
  const nombre = partes.slice(0, -1).join(" ");
  const calorias = parseFloat(partes[partes.length - 1]);

  if (!isNaN(calorias)) {
    const li = document.createElement("li");
    li.textContent = `${nombre} - ${calorias} kcal`;
    document.getElementById("listaAlimentos").appendChild(li);

    total += calorias;
    document.getElementById("totalCalorias").textContent = total;
    document.getElementById("alimento").value = "";
  } else {
    alert("Por favor, escribe el nombre del alimento seguido de sus calorías. Ej: Manzana 52");
  }
}
