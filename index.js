let botonEncriptar = document.querySelector(".btn-encrypt");
let botonDesencriptar = document.querySelector(".btn-decrypt");
let avatar = document.querySelector(".avatar-container");
let container = document.querySelector(".text-result-container");
let resultado = document.querySelector(".resultado");
let botonCopy = document.querySelector(".btn-copy");

botonEncriptar.onclick = encrypt;
botonDesencriptar.onclick = decrypt;

function encrypt() {
  hideForward();
  let textbox = recoverText();
  resultado.textContent = encryptText(textbox);
}

function decrypt() {
  hideForward();
  let textbox = recoverText();
  resultado.textContent = decryptText(textbox);
}

function recoverText() {
  let textbox = document.querySelector(".text-box");
  return textbox.value;
}

function hideForward() {
  avatar.style.visibility = "hidden";
  container.style.visibility = "hidden";
  botonCopy.style.visibility = "visible";
}

function encryptText(mensaje) {
  let text = mensaje;
  let finalText = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] == "a") {
      finalText = finalText + "ai";
    } else if (text[i] == "e") {
      finalText = finalText + "enter";
    } else if (text[i] == "i") {
      finalText = finalText + "imes";
    } else if (text[i] == "o") {
      finalText = finalText + "ober";
    } else if (text[i] == "u") {
      finalText = finalText + "ufat";
    } else {
      finalText = finalText + text[i];
    }
  }
  return finalText;
}

function decryptText(mensaje) {
  let text = mensaje;
  let finalText = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] == "a") {
      finalText = finalText + "a";
      i = i + 1;
    } else if (text[i] == "e") {
      finalText = finalText + "e";
      i = i + 4;
    } else if (text[i] == "i") {
      finalText = finalText + "i";
      i = i + 3;
    } else if (text[i] == "o") {
      finalText = finalText + "o";
      i = i + 3;
    } else if (text[i] == "u") {
      finalText = finalText + "u";
      i = i + 3;
    } else {
      finalText = finalText + text[i];
    }
  }
  return finalText;
}

function copiar() {
  let content = document.querySelector(".resultado").textContent;
  navigator.clipboard.writeText(content);
  console.log("Check");
}

botonCopy.addEventListener("click", copiar);
