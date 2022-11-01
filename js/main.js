/* async function consultaExchange() {
  const res = await fetch('https://criptoya.com/api/argenbtc/btc/ars/0.5')
  const data = await res.json();
  console.log('exchange');
  console.log(data);
} */

async function consultaCriptoBitcoin() {
  const res = await fetch('https://criptoya.com/api/btc/ars/0.1')
  const data = await res.json();
  console.log('bitcoin');
  console.log(data);

  const argenCompraBi = document.getElementById('argen-compra-bi');
  const argenVentaBi = document.getElementById('argen-venta-bi');
  const bitmoCompraBi = document.getElementById('bitmo-compra-bi');
  const bitmoVentaBi = document.getElementById('bitmo-venta-bi');
  const ripioCompraBi = document.getElementById('ripio-compra-bi');
  const ripioVentaBi = document.getElementById('ripio-venta-bi');
  const budaCompraBi = document.getElementById('buda-compra-bi');
  const budaVentaBi = document.getElementById('buda-venta-bi');
  const deCompraBi = document.getElementById('de-compra-bi');
  const deVentaBi = document.getElementById('de-venta-bi');
  const copterCompraBi = document.getElementById('copter-compra-bi');
  const copterVentaBi = document.getElementById('copter-venta-bi');
  const saldoCompraBi = document.getElementById('saldo-compra-bi');
  const saldoVentaBi = document.getElementById('saldo-venta-bi');
  const ftxCompraBi = document.getElementById('ftx-compra-bi');
  const ftxVentaBi = document.getElementById('ftx-venta-bi');
  const beloCompraBi = document.getElementById('belo-compra-bi');
  const beloVentaBi = document.getElementById('belo-venta-bi');
  const calypsoCompraBi = document.getElementById('calypso-compra-bi');
  const calypsoVentaBi = document.getElementById('calypso-venta-bi');
  const fiwindCompraBi = document.getElementById('fiwind-compra-bi');
  const fiwindVentaBi = document.getElementById('fiwind-venta-bi');
  const bitexCompraBi = document.getElementById('bitex-compra-bi');
  const bitexVentaBi = document.getElementById('bitex-venta-bi');
  const latamexCompraBi = document.getElementById('latamex-compra-bi');
  const latamexVentaBi = document.getElementById('latamex-venta-bi');
  const bitsoCompraBi = document.getElementById('bitso-compra-bi');
  const bitsoVentaBi = document.getElementById('bitso-venta-bi');
  const letsbitCompraBi = document.getElementById('letsbit-compra-bi');
  const letsbitVentaBi = document.getElementById('letsbit-venta-bi');

  argenCompraBi.innerHTML = `$` + data.argenbtc.totalAsk;
  argenVentaBi.innerHTML = `$` + data.argenbtc.totalBid;
  bitmoCompraBi.innerHTML = `$` + data.bitmonedero.totalAsk;
  bitmoVentaBi.innerHTML = `$` + data.bitmonedero.totalBid;
  ripioCompraBi.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaBi.innerHTML = `$` + data.ripio.totalBid;
  budaCompraBi.innerHTML = `$` + data.buda.totalAsk;
  budaVentaBi.innerHTML = `$` + data.buda.totalBid;
  deCompraBi.innerHTML = `$` + data.decrypto.totalAsk;
  deVentaBi.innerHTML = `$` + data.decrypto.totalBid;
  copterCompraBi.innerHTML = `$` + data.copter.totalAsk;
  copterVentaBi.innerHTML = `$` + data.copter.totalBid;
  saldoCompraBi.innerHTML = `$` + data.saldo.totalAsk;
  saldoVentaBi.innerHTML = `$` + data.saldo.totalBid;
  ftxCompraBi.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaBi.innerHTML = `$` + data.ftx.totalBid;
  beloCompraBi.innerHTML = `$` + data.belo.totalAsk;
  beloVentaBi.innerHTML = `$` + data.belo.totalBid;
  calypsoCompraBi.innerHTML = `$` + data.calypso.totalAsk;
  calypsoVentaBi.innerHTML = `$` + data.calypso.totalBid;
  fiwindCompraBi.innerHTML = `$` + data.fiwind.totalAsk;
  fiwindVentaBi.innerHTML = `$` + data.fiwind.totalBid;
  bitexCompraBi.innerHTML = `$` + data.bitex.totalAsk;
  bitexVentaBi.innerHTML = `$` + data.bitex.totalBid;
  latamexCompraBi.innerHTML = `$` + data.latamex.totalAsk;
  latamexVentaBi.innerHTML = `$` + data.latamex.totalBid;
  bitsoCompraBi.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaBi.innerHTML = `$` + data.bitso.totalBid;
  letsbitCompraBi.innerHTML = `$` + data.letsbit.totalAsk;
  letsbitVentaBi.innerHTML = `$` + data.letsbit.totalBid;
}

async function consultaCriptoEthereum() {
  const res = await fetch('https://criptoya.com/api/eth/ars/0.1');
  const data = await res.json();
  console.log('ethereum');
  console.log(data);

  const argenCompraEt = document.getElementById('argen-compra-et');
  const argenVentaEt = document.getElementById('argen-venta-et');
  const buenCompraEt = document.getElementById('buen-compra-et');
  const buenVentaEt = document.getElementById('buen-venta-et');
  const ripioCompraEt = document.getElementById('ripio-compra-et');
  const ripioVentaEt = document.getElementById('ripio-venta-et');
  const budaCompraEt = document.getElementById('buda-compra-et');
  const budaVentaEt = document.getElementById('buda-venta-et');
  const lemonCompraEt = document.getElementById('lemon-compra-et');
  const lemonVentaEt = document.getElementById('lemon-venta-et');
  const copterCompraEt = document.getElementById('copter-compra-et');
  const copterVentaEt = document.getElementById('copter-venta-et');
  const tiendaCompraEt = document.getElementById('tienda-compra-et');
  const tiendaVentaEt = document.getElementById('tienda-venta-et');
  const ftxCompraEt = document.getElementById('ftx-compra-et');
  const ftxVentaEt = document.getElementById('ftx-venta-et');
  const beloCompraEt = document.getElementById('belo-compra-et');
  const beloVentaEt = document.getElementById('belo-venta-et');
  const calypsoCompraEt = document.getElementById('calypso-compra-et');
  const calypsoVentaEt = document.getElementById('calypso-venta-et');
  const fiwindCompraEt = document.getElementById('fiwind-compra-et');
  const fiwindVentaEt = document.getElementById('fiwind-venta-et');
  const bitexCompraEt = document.getElementById('bitex-compra-et');
  const bitexVentaEt = document.getElementById('bitex-venta-et');
  const latamexCompraEt = document.getElementById('latamex-compra-et');
  const latamexVentaEt = document.getElementById('latamex-venta-et');
  const bitsoCompraEt = document.getElementById('bitso-compra-et');
  const bitsoVentaEt = document.getElementById('bitso-venta-et');
  const letsbitCompraEt = document.getElementById('letsbit-compra-et');
  const letsbitVentaEt = document.getElementById('letsbit-venta-et');

  argenCompraEt.innerHTML = `$` + data.argenbtc.totalBid;
  argenVentaEt.innerHTML = `$` + data.argenbtc.totalBid;
  buenCompraEt.innerHTML = `$` + data.buenbit.totalBid;
  buenVentaEt.innerHTML = `$` + data.buenbit.totalBid;
  ripioCompraEt.innerHTML = `$` + data.ripio.totalBid;
  ripioVentaEt.innerHTML = `$` + data.ripio.totalBid;
  budaCompraEt.innerHTML = `$` + data.buda.totalBid;
  budaVentaEt.innerHTML = `$` + data.buda.totalBid;
  lemonCompraEt.innerHTML = `$` + data.lemoncash.totalBid;
  lemonVentaEt.innerHTML = `$` + data.lemoncash.totalBid;
  copterCompraEt.innerHTML = `$` + data.copter.totalBid;
  copterVentaEt.innerHTML = `$` + data.copter.totalBid;
  tiendaCompraEt.innerHTML = `$` + data.tiendacrypto.totalBid;
  tiendaVentaEt.innerHTML = `$` + data.tiendacrypto.totalBid;
  ftxCompraEt.innerHTML = `$` + data.ftx.totalBid;
  ftxVentaEt.innerHTML = `$` + data.ftx.totalBid;
  beloCompraEt.innerHTML = `$` + data.belo.totalBid;
  beloVentaEt.innerHTML = `$` + data.belo.totalBid;
  calypsoCompraEt.innerHTML = `$` + data.calypso.totalBid;
  calypsoVentaEt.innerHTML = `$` + data.calypso.totalBid;
  fiwindCompraEt.innerHTML = `$` + data.fiwind.totalBid;
  fiwindVentaEt.innerHTML = `$` + data.fiwind.totalBid;
  bitexCompraEt.innerHTML = `$` + data.bitex.totalBid;
  bitexVentaEt.innerHTML = `$` + data.bitex.totalBid;
  latamexCompraEt.innerHTML = `$` + data.latamex.totalBid;
  latamexVentaEt.innerHTML = `$` + data.latamex.totalBid;
  bitsoCompraEt.innerHTML = `$` + data.bitso.totalBid;
  bitsoVentaEt.innerHTML = `$` + data.bitso.totalBid;
  letsbitCompraEt.innerHTML = `$` + data.letsbit.totalBid;
  letsbitVentaEt.innerHTML = `$` + data.letsbit.totalBid;
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

  oficial.innerHTML = `$` + data.oficial;
  solidario.innerHTML = `$` + data.solidario;
  blue.innerHTML = `$` + data.blue;
  cripto.innerHTML = `$` + data.ccb;
}

/* consultaExchange(); */
consultaCriptoBitcoin();
consultaCriptoEthereum()
dolarOficial();



