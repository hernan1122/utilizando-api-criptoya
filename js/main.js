// funcionalidad a los botones
const tableBitcoin = document.getElementById('table-bitcoin');
const btnBitcoin = document.getElementById('btn-bitcoin').addEventListener('click', toggleTableBitcoin);
const tableEthereum = document.getElementById('table-ethereum');
const btnEthereum = document.getElementById('btn-ethereum').addEventListener('click', toggleTableEthereum);
const tableCardano = document.getElementById('table-cardano');
const btnCardano = document.getElementById('btn-cardano').addEventListener('click', toggleTableCardano);
const tableBnb = document.getElementById('table-bnb');
const btnBnb = document.getElementById('btn-bnb').addEventListener('click', toggleTableBnb);
const tableSolana = document.getElementById('table-solana');
const btnSolana = document.getElementById('btn-solana').addEventListener('click', toggleTableSolana);
const tablePolkadot = document.getElementById('table-polkadot');
const btnPolkadot = document.getElementById('btn-polkadot').addEventListener('click', toggleTablePolkadot);
const tableLitecoin = document.getElementById('table-litecoin');
const btnLitecoin = document.getElementById('btn-litecoin').addEventListener('click', toggleTableLitecoin);
const tableAvalanche = document.getElementById('table-avalanche');
const btnAvalanche = document.getElementById('btn-avalanche').addEventListener('click', toggleTableAvalanche);
const tableFantom = document.getElementById('table-fantom');
const btnFantom = document.getElementById('btn-fantom').addEventListener('click', toggleTableFantom);
const tableAlgorand = document.getElementById('table-algorand');
const btnAlgorand = document.getElementById('btn-algorand').addEventListener('click', toggleTableAlgorand);

function toggleTableBitcoin() {
  tableBitcoin.classList.toggle('inactive');
}
function toggleTableEthereum() {
  tableEthereum.classList.toggle('inactive');
}
function toggleTableCardano() {
  tableCardano.classList.toggle('inactive');
}
function toggleTableBnb() {
  tableBnb.classList.toggle('inactive');
}
function toggleTableSolana() {
  tableSolana.classList.toggle('inactive');
}
function toggleTablePolkadot() {
  tablePolkadot.classList.toggle('inactive');
}
function toggleTableLitecoin() {
  tableLitecoin.classList.toggle('inactive');
}
function toggleTableAvalanche() {
  tableAvalanche.classList.toggle('inactive');
}
function toggleTableFantom() {
  tableFantom.classList.toggle('inactive');
}
function toggleTableAlgorand() {
  tableAlgorand.classList.toggle('inactive');
}

// table bitcoin
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

// table ethereum
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

  argenCompraEt.innerHTML = `$` + data.argenbtc.totalAsk;
  argenVentaEt.innerHTML = `$` + data.argenbtc.totalBid;
  buenCompraEt.innerHTML = `$` + data.buenbit.totalAsk;
  buenVentaEt.innerHTML = `$` + data.buenbit.totalBid;
  ripioCompraEt.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaEt.innerHTML = `$` + data.ripio.totalBid;
  budaCompraEt.innerHTML = `$` + data.buda.totalAsk;
  budaVentaEt.innerHTML = `$` + data.buda.totalBid;
  lemonCompraEt.innerHTML = `$` + data.lemoncash.totalAsk;
  lemonVentaEt.innerHTML = `$` + data.lemoncash.totalBid;
  copterCompraEt.innerHTML = `$` + data.copter.totalAsk;
  copterVentaEt.innerHTML = `$` + data.copter.totalBid;
  tiendaCompraEt.innerHTML = `$` + data.tiendacrypto.totalAsk;
  tiendaVentaEt.innerHTML = `$` + data.tiendacrypto.totalBid;
  ftxCompraEt.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaEt.innerHTML = `$` + data.ftx.totalBid;
  beloCompraEt.innerHTML = `$` + data.belo.totalAsk;
  beloVentaEt.innerHTML = `$` + data.belo.totalBid;
  calypsoCompraEt.innerHTML = `$` + data.calypso.totalAsk;
  calypsoVentaEt.innerHTML = `$` + data.calypso.totalBid;
  fiwindCompraEt.innerHTML = `$` + data.fiwind.totalAsk;
  fiwindVentaEt.innerHTML = `$` + data.fiwind.totalBid;
  bitexCompraEt.innerHTML = `$` + data.bitex.totalAsk;
  bitexVentaEt.innerHTML = `$` + data.bitex.totalBid;
  latamexCompraEt.innerHTML = `$` + data.latamex.totalAsk;
  latamexVentaEt.innerHTML = `$` + data.latamex.totalBid;
  bitsoCompraEt.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaEt.innerHTML = `$` + data.bitso.totalBid;
  letsbitCompraEt.innerHTML = `$` + data.letsbit.totalAsk;
  letsbitVentaEt.innerHTML = `$` + data.letsbit.totalBid;
}

// table cardano
async function consultaCriptoCardano() {
  const res = await fetch('https://criptoya.com/api/ada/ars/0.1');
  const data = await res.json();
  console.log('cardano');
  console.log(data);

  const bitsoCompraCa = document.getElementById('bitso-compra-ca');
  const bitsoVentaCa = document.getElementById('bitso-venta-ca');
  const satoshiCompraCa = document.getElementById('satoshi-compra-ca');
  const satoshiVentaCa = document.getElementById('satoshi-venta-ca');
  const ripioCompraCa = document.getElementById('ripio-compra-ca');
  const ripioVentaCa = document.getElementById('ripio-venta-ca');
  const buenCompraCa = document.getElementById('buen-compra-ca');
  const buenVentaCa = document.getElementById('buen-venta-ca');
  const mktCompraCa = document.getElementById('mkt-compra-ca');
  const mktVentaCa = document.getElementById('mkt-venta-ca');
  const fiwindCompraCa = document.getElementById('fiwind-compra-ca');
  const fiwindVentaCa = document.getElementById('fiwind-venta-ca');
  const lemonCompraCa = document.getElementById('lemon-compra-ca');
  const lemonVentaCa = document.getElementById('lemon-venta-ca');
  const letsbitCompraCa = document.getElementById('letsbit-compra-ca');
  const letsbitVentaCa = document.getElementById('letsbit-venta-ca');

  bitsoCompraCa.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaCa.innerHTML = `$` + data.bitso.totalBid;
  satoshiCompraCa.innerHTML = `$` + data.satoshitango.totalAsk;
  satoshiVentaCa.innerHTML = `$` + data.satoshitango.totalBid;
  ripioCompraCa.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaCa.innerHTML = `$` + data.ripio.totalBid;
  buenCompraCa.innerHTML = `$` + data.buenbit.totalAsk;
  buenVentaCa.innerHTML = `$` + data.buenbit.totalBid;
  mktCompraCa.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaCa.innerHTML = `$` + data.cryptomkt.totalBid;
  fiwindCompraCa.innerHTML = `$` + data.fiwind.totalAsk;
  fiwindVentaCa.innerHTML = `$` + data.fiwind.totalBid;
  lemonCompraCa.innerHTML = `$` + data.lemoncash.totalAsk;
  lemonVentaCa.innerHTML = `$` + data.lemoncash.totalBid;
  letsbitCompraCa.innerHTML = `$` + data.letsbit.totalAsk;
  letsbitVentaCa.innerHTML = `$` + data.letsbit.totalBid;
}

// cotizacion dolar
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

consultaCriptoBitcoin();
consultaCriptoEthereum();
consultaCriptoCardano();
dolarOficial();