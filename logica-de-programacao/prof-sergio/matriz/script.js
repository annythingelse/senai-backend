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
    document.getElementById(buttonName).style.color = "hotpink";
  } else {
    document.getElementById(buttonName).innerHTML = "X";
    document.getElementById(buttonName).style.color = "pink";
  }
  document.getElementById(buttonName).disabled = true;
  jogada++;
  if (jogada >= 5) {
    gameOver();
  }
}

function gameOver() {
  if (
    document.getElementById("bt00").innerText == document.getElementById("bt01").innerText &&
    document.getElementById("bt01").innerText == document.getElementById("bt02").innerText &&
    document.getElementById("bt00").innerText != ""
  ) {
    alert(`Jogo Finalizado, vencedor: ${document.getElementById("bt00").innerText}`);
    for(cont in tabuleiro) {
      document.getElementById("bt0" + cont ).style.color = "red"
    }
    
  }
  if (
    document.getElementById("bt10").innerText == document.getElementById("bt11").innerText &&
    document.getElementById("bt11").innerText == document.getElementById("bt12").innerText &&
    document.getElementById("bt10").innerText != ""
  ) {
    alert(`Jogo Finalizado, vencedor: ${document.getElementById("bt10").innerText}`);
    for(cont in tabuleiro) {
      document.getElementById("bt1" + cont ).style.color = "red"
    }
  }
  if (
    document.getElementById("bt20").innerText == document.getElementById("bt21").innerText &&
    document.getElementById("bt21").innerText == document.getElementById("bt22").innerText &&
    document.getElementById("bt20").innerText != ""
  ) {
    alert(`Jogo Finalizado, vencedor: ${document.getElementById("bt20").innerText}`);
    for(cont in tabuleiro) {
      document.getElementById("bt2" + cont ).style.color = "red"
    }
  }
  if (
    document.getElementById("bt00").innerText == document.getElementById("bt10").innerText &&
    document.getElementById("bt10").innerText == document.getElementById("bt20").innerText &&
    document.getElementById("bt00").innerText != ""
  ) {
    alert(`Jogo Finalizado, vencedor: ${document.getElementById("bt00").innerText}`);
    for(cont in tabuleiro) {
      document.getElementById("bt" + cont + "0").style.color = "red"
    }
  }
  if (
    document.getElementById("bt01").innerText == document.getElementById("bt11").innerText &&
    document.getElementById("bt11").innerText == document.getElementById("bt21").innerText &&
    document.getElementById("bt01").innerText != ""
  ) {
    alert(`Jogo Finalizado, vencedor: ${document.getElementById("bt01").innerText}`);
    for(cont in tabuleiro) {
      document.getElementById("bt" + cont + "1").style.color = "red"
    }
  }
  if (
    document.getElementById("bt02").innerText == document.getElementById("bt12").innerText &&
    document.getElementById("bt12").innerText == document.getElementById("bt22").innerText &&
    document.getElementById("bt02").innerText != ""
  ) {
    alert(`Jogo Finalizado, vencedor: ${document.getElementById("bt02").innerText}`);
    for(cont in tabuleiro) {
      document.getElementById("bt" + cont + "2").style.color = "red"
    }
  }
  if (
    document.getElementById("bt02").innerText == document.getElementById("bt11").innerText &&
    document.getElementById("bt11").innerText == document.getElementById("bt20").innerText &&
    document.getElementById("bt02").innerText != ""
  ) {
    alert(`Jogo Finalizado, vencedor: ${document.getElementById("bt02").innerText}`);
    let contRegressivo = tabuleiro.length -1
    for(cont in tabuleiro) {
      document.getElementById("bt" + cont + "" + contRegressivo--).style.color = "red"
    }
  }
  if (
    document.getElementById("bt00").innerText == document.getElementById("bt11").innerText &&
    document.getElementById("bt11").innerText == document.getElementById("bt22").innerText &&
    document.getElementById("bt00").innerText != ""
  ) {
    alert(`Jogo Finalizado, vencedor: ${document.getElementById("bt00").innerText}`);
    for(cont in tabuleiro) {
      document.getElementById("bt" + cont + "" + cont).style.color = "red"
    }
  }
}
