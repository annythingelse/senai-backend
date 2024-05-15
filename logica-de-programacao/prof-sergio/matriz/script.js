let bt,
  brokenLine,
  jogada = 1,
  tabuleiro = new Array(3);

for (let i = 0; i < tabuleiro.length; i++) {
  tabuleiro[i] = new Array(3);
}

for (let i = 0; i < tabuleiro.length; i++) {
  brokenLine = document.createElement("br");
  document.body.append(brokenLine);
  for (let j = 0; j < tabuleiro[i].length; j++) {
    bt = document.createElement("button");
    bt.setAttribute("type", "button");
    bt.setAttribute("id", "bt" + i + "" + j);
    bt.setAttribute("class", "bt-game" + i);
    bt.setAttribute("onclick", "marca(" + i + "," + j + ")");
    bt.append(document.createTextNode(""));
    document.body.append(bt);
  }
}

function marca(linha, coluna) {
  marcarCasa("bt" + linha + "" + coluna);
}

function marcarCasa(buttonName) {
  if (jogada % 2 == 0) {
    document.getElementById(buttonName).innerHTML = "O";
  } else {
    document.getElementById(buttonName).innerHTML = "X";
  }
  document.getElementById(buttonName).disabled = true;
  jogada++;
}
