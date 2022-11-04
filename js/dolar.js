async function dolar() {
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

async function dolarBancoNacion() {
  const res = await fetch(' https://criptoya.com/api/bna');
  const data = await res.json();
  console.log('banco nacion');
  console.log(data);

  const compraNacion = document.getElementById('compra-nacion');
  const ventaNacion = document.getElementById('venta-nacion');

  compraNacion.innerHTML = `$` + data.totalAsk;
  ventaNacion.innerHTML = `$` + data.totalBid;
}

async function dolarBancoGalicia() {
  const res = await fetch(' https://criptoya.com/api/galicia');
  const data = await res.json();
  console.log('banco galicia');
  console.log(data);

  const compraGalicia = document.getElementById('compra-galicia');
  const ventaGalicia = document.getElementById('venta-galicia');

  compraGalicia.innerHTML = `$` + data.totalAsk;
  ventaGalicia.innerHTML = `$` + data.totalBid;
}

async function dolarBancoBbva() {
  const res = await fetch(' https://criptoya.com/api/bbva');
  const data = await res.json();
  console.log('banco bbva');
  console.log(data);

  const compraBbva = document.getElementById('compra-bbva');
  const ventaBbva = document.getElementById('venta-bbva');

  compraBbva.innerHTML = `$` + data.totalAsk;
  ventaBbva.innerHTML = `$` + data.totalBid;
}

async function dolarBancoMacro() {
  const res = await fetch(' https://criptoya.com/api/macro');
  const data = await res.json();
  console.log('banco macro');
  console.log(data);

  const compraMacro = document.getElementById('compra-macro');
  const ventaMacro = document.getElementById('venta-macro');

  compraMacro.innerHTML = `$` + data.totalAsk;
  ventaMacro.innerHTML = `$` + data.totalBid;
}

dolar();
dolarBancoNacion();
dolarBancoGalicia();
dolarBancoBbva();
dolarBancoMacro();