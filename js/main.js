/* async function consultaExchange() {
  const res = await fetch('https://criptoya.com/api/argenbtc/btc/ars/0.5')
  const data = await res.json();
  console.log('exchange');
  console.log(data);
} */

async function consultaCripto() {
  const res = await fetch('https://criptoya.com/api/btc/ars/0.1')
  const data = await res.json();
  console.log('cripto');
  console.log(data);

  const argenCompra = document.getElementById('argen-compra');
  const argenVenta = document.getElementById('argen-venta');
  const bitmoCompra = document.getElementById('bitmo-compra');
  const bitmoVenta = document.getElementById('bitmo-venta');
  const ripioCompra = document.getElementById('ripio-compra');
  const ripioVenta = document.getElementById('ripio-venta');
  const budaCompra = document.getElementById('buda-compra');
  const budaVenta = document.getElementById('buda-venta');
  const deCompra = document.getElementById('de-compra');
  const deVenta = document.getElementById('de-venta');
  const copterCompra = document.getElementById('copter-compra');
  const copterVenta = document.getElementById('copter-venta');
  const saldoCompra = document.getElementById('saldo-compra');
  const saldoVenta = document.getElementById('saldo-venta');
  const ftxCompra = document.getElementById('ftx-compra');
  const ftxVenta = document.getElementById('ftx-venta');
  const beloCompra = document.getElementById('belo-compra');
  const beloVenta = document.getElementById('belo-venta');
  const calypsoCompra = document.getElementById('calypso-compra');
  const calypsoVenta = document.getElementById('calypso-venta');
  const fiwindCompra = document.getElementById('fiwind-compra');
  const fiwindVenta = document.getElementById('fiwind-venta');
  const bitexCompra = document.getElementById('bitex-compra');
  const bitexVenta = document.getElementById('bitex-venta');

  argenCompra.innerHTML = `$` + data.argenbtc.totalAsk;
  argenVenta.innerHTML = `$` + data.argenbtc.totalBid;
  bitmoCompra.innerHTML = `$` + data.bitmonedero.totalAsk;
  bitmoVenta.innerHTML = `$` + data.bitmonedero.totalBid;
  ripioCompra.innerHTML = `$` + data.ripio.totalAsk;
  ripioVenta.innerHTML = `$` + data.ripio.totalBid;
  budaCompra.innerHTML = `$` + data.buda.totalAsk;
  budaVenta.innerHTML = `$` + data.buda.totalBid;
  deCompra.innerHTML = `$` + data.decrypto.totalAsk;
  deVenta.innerHTML = `$` + data.decrypto.totalBid;
  copterCompra.innerHTML = `$` + data.copter.totalAsk;
  copterVenta.innerHTML = `$` + data.copter.totalBid;
  saldoCompra.innerHTML = `$` + data.saldo.totalAsk;
  saldoVenta.innerHTML = `$` + data.saldo.totalBid;
  ftxCompra.innerHTML = `$` + data.ftx.totalAsk;
  ftxVenta.innerHTML = `$` + data.ftx.totalBid;
  beloCompra.innerHTML = `$` + data.belo.totalAsk;
  beloVenta.innerHTML = `$` + data.belo.totalBid;
  calypsoCompra.innerHTML = `$` + data.calypso.totalAsk;
  calypsoVenta.innerHTML = `$` + data.calypso.totalBid;
  fiwindCompra.innerHTML = `$` + data.fiwind.totalAsk;
  fiwindVenta.innerHTML = `$` + data.fiwind.totalBid;
  bitexCompra.innerHTML = `$` + data.bitex.totalAsk;
  bitexVenta.innerHTML = `$` + data.bitex.totalBid;
}

async function dolarOficial() {
  const res = await fetch('https://criptoya.com/api/dolar');
  const data = await res.json();
  console.log('dolar');
  console.log(data);

  const oficial = document.getElementById('oficial');
  const solidario = document.getElementById('solidario');
  const blue = document.getElementById('blue');
  const cripto = document.getElementById('cripto');

  oficial.innerHTML = data.oficial;
  solidario.innerHTML = data.solidario;
  blue.innerHTML = data.blue;
  cripto.innerHTML = data.ccb;
}

/* consultaExchange(); */
consultaCripto();
dolarOficial();



