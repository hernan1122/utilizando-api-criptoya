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

async function dolarBancoSupervielle() {
  const res = await fetch(' https://criptoya.com/api/supervielle');
  const data = await res.json();
  console.log('banco supervielle');
  console.log(data);

  const compraSupervielle = document.getElementById('compra-supervielle');
  const ventaSupervielle = document.getElementById('venta-supervielle');

  compraSupervielle.innerHTML = `$` + data.totalAsk;
  ventaSupervielle.innerHTML = `$` + data.totalBid;
}

async function dolarBrubank() {
  const res = await fetch(' https://criptoya.com/api/brubank');
  const data = await res.json();
  console.log('brubank');
  console.log(data);

  const compraBrubank = document.getElementById('compra-brubank');
  const ventaBrubank = document.getElementById('venta-brubank');

  compraBrubank.innerHTML = `$` + data.totalAsk;
  ventaBrubank.innerHTML = `$` + data.totalBid;
}

async function dolarNaranjaX() {
  const res = await fetch(' https://criptoya.com/api/naranjax');
  const data = await res.json();
  console.log('naranja x');
  console.log(data);

  const compraNaranja = document.getElementById('compra-naranja');
  const ventaNaranja = document.getElementById('venta-naranja');

  compraNaranja.innerHTML = `$` + data.totalAsk;
  ventaNaranja.innerHTML = `$` + data.totalBid;
}

async function dolarBuendolar() {
  const res = await fetch(' https://criptoya.com/api/buendolar');
  const data = await res.json();
  console.log('buendolar');
  console.log(data);

  const compraBuendolar = document.getElementById('compra-buendolar');
  const ventaBuendolar = document.getElementById('venta-buendolar');

  compraBuendolar.innerHTML = `$` + data.totalAsk;
  ventaBuendolar.innerHTML = `$` + data.totalBid;
}

dolar();
dolarBancoNacion();
dolarBancoGalicia();
dolarBancoBbva();
dolarBancoMacro();
dolarBancoSupervielle();
dolarBrubank();
dolarNaranjaX();
dolarBuendolar();