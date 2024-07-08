
function palindromo(palavra) {
  const frase = palavra;
  palavra == palavra.split(" ").join("");
  palavra == palavra.split(",").join("");
  const frase_ao_contrario = frase.split("").reverse("").join("");
  if (frase === frase_ao_contrario) {
    return true;
  } else {
    return false;
  }
}
module.exports = palindromo