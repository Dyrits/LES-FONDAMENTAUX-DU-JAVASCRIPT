const nombres = {};
for (var tirage = 1; Object.keys(nombres).length <  100; tirage ++) {
  nombres[Math.floor(Math.random() * 100)] = true;
}
console.log("Nombre de tirages: " + tirage);

