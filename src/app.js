/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Declaro las variables que necesito para generar el nombre de dominio
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "puedes"];
const com = ".com";
let extension = [".com", ".net", ".us", ".io"];

function generarExtension(array) {
  return array[Math.floor(Math.random() * array.length)];
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let pronombre;
  let adjetivo;
  let nombre;

  for (let i = 0; i < pronoun.length; i++) {
    pronombre = pronoun[i];

    for (let x = 0; x < adj.length; x++) {
      adjetivo = adj[x];

      for (let y = 0; y < noun.length; y++) {
        nombre = noun[y];
        //Vamos a generar la extension aleatoria
        let extensionAleatoria = generarExtension(extension);

        let nombreArray = nombre.split("");
        let posUltimo = nombreArray[nombreArray.length - 1];
        let posPenultimo = nombreArray[nombreArray.length - 2];

        if (posPenultimo == "e" && posUltimo == "s") {
          document.getElementById("dominios").innerHTML +=
            "<p>" + pronombre + adjetivo + nombre + ".es" + "</p>";
        } else {
          document.getElementById("dominios").innerHTML +=
            "<p>" + pronombre + adjetivo + nombre + extensionAleatoria + "</p>";
        }
      }
    }
  }
};
