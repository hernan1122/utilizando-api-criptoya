async function dolarOficial() {
  const res = await fetch('https://criptoya.com/api/dolar');
  const data = await res.json();
  console.log('dolar');
  console.log(data);

  const oficial = document.getElementById('oficial');
  const solidario = document.getElementById('solidario');
  const blue = document.getElementById('blue');
  const cripto = document.getElementById('cripto');

  oficial.innerHTML = `$` + data.oficial;
  solidario.innerHTML = `$` + data.solidario;
  blue.innerHTML = `$` + data.blue;
  cripto.innerHTML = `$` + data.ccb;
}

dolarOficial();