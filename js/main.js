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

  argenCompra.innerHTML = `$` + data.argenbtc.totalAsk;
  argenVenta.innerHTML = `$` + data.argenbtc.totalBid;
  bitmoCompra.innerHTML = `$` + data.bitmonedero.totalAsk;
  bitmoVenta.innerHTML = `$` + data.bitmonedero.totalBid;
  ripioCompra.innerHTML = `$` + data.ripio.totalAsk;
  ripioVenta.innerHTML = `$` + data.ripio.totalBid;
  budaCompra.innerHTML = `$` + data.buda.totalAsk;
  budaVenta.innerHTML = `$` + data.buda.totalBid;
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



