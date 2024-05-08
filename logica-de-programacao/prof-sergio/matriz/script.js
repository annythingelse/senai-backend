let bt;
let brokenLine;
let tabuleiro = new Array(3);

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
    bt.setAttribute("onclick", "");
    bt.append(document.createTextNode(""));
    document.body.append(bt);
  }
}
