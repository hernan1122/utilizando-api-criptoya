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
  const isEthereumClosed = tableEthereum.classList.contains('inactive');
  if (!isEthereumClosed) {
    tableEthereum.classList.add('inactive')
  }

  const isCardanoClosed = tableCardano.classList.contains('inactive');
  if (!isCardanoClosed) {
    tableCardano.classList.add('inactive')
  }

  const isBnbClosed = tableBnb.classList.contains('inactive');
  if (!isBnbClosed) {
    tableBnb.classList.add('inactive')
  }

  const isSolanaClosed = tableSolana.classList.contains('inactive');
  if (!isSolanaClosed) {
    tableSolana.classList.add('inactive')
  }

  const isPolkadotClosed = tablePolkadot.classList.contains('inactive');
  if (!isPolkadotClosed) {
    tablePolkadot.classList.add('inactive')
  }

  const isLitecoinClosed = tableLitecoin.classList.contains('inactive');
  if (!isLitecoinClosed) {
    tableLitecoin.classList.add('inactive')
  }

  const isAvalancheClosed = tableAvalanche.classList.contains('inactive');
  if (!isAvalancheClosed) {
    tableAvalanche.classList.add('inactive')
  }

  const isFantomClosed = tableFantom.classList.contains('inactive');
  if (!isFantomClosed) {
    tableFantom.classList.add('inactive')
  }

  const isAlgorandClosed = tableAlgorand.classList.contains('inactive');
  if (!isAlgorandClosed) {
    tableAlgorand.classList.add('inactive')
  }

  tableBitcoin.classList.toggle('inactive');
}
function toggleTableEthereum() {
  const isBitcoinClosed = tableBitcoin.classList.contains('inactive');
  if (!isBitcoinClosed) {
    tableBitcoin.classList.add('inactive')
  }

  const isCardanoClosed = tableCardano.classList.contains('inactive');
  if (!isCardanoClosed) {
    tableCardano.classList.add('inactive')
  }

  const isBnbClosed = tableBnb.classList.contains('inactive');
  if (!isBnbClosed) {
    tableBnb.classList.add('inactive')
  }

  const isSolanaClosed = tableSolana.classList.contains('inactive');
  if (!isSolanaClosed) {
    tableSolana.classList.add('inactive')
  }

  const isPolkadotClosed = tablePolkadot.classList.contains('inactive');
  if (!isPolkadotClosed) {
    tablePolkadot.classList.add('inactive')
  }

  const isLitecoinClosed = tableLitecoin.classList.contains('inactive');
  if (!isLitecoinClosed) {
    tableLitecoin.classList.add('inactive')
  }

  const isAvalancheClosed = tableAvalanche.classList.contains('inactive');
  if (!isAvalancheClosed) {
    tableAvalanche.classList.add('inactive')
  }

  const isFantomClosed = tableFantom.classList.contains('inactive');
  if (!isFantomClosed) {
    tableFantom.classList.add('inactive')
  }

  const isAlgorandClosed = tableAlgorand.classList.contains('inactive');
  if (!isAlgorandClosed) {
    tableAlgorand.classList.add('inactive')
  }

  tableEthereum.classList.toggle('inactive');
}
function toggleTableCardano() {
  const isBitcoinClosed = tableBitcoin.classList.contains('inactive');
  if (!isBitcoinClosed) {
    tableBitcoin.classList.add('inactive')
  }

  const isEthereumClosed = tableEthereum.classList.contains('inactive');
  if (!isEthereumClosed) {
    tableEthereum.classList.add('inactive')
  }

  const isBnbClosed = tableBnb.classList.contains('inactive');
  if (!isBnbClosed) {
    tableBnb.classList.add('inactive')
  }

  const isSolanaClosed = tableSolana.classList.contains('inactive');
  if (!isSolanaClosed) {
    tableSolana.classList.add('inactive')
  }

  const isPolkadotClosed = tablePolkadot.classList.contains('inactive');
  if (!isPolkadotClosed) {
    tablePolkadot.classList.add('inactive')
  }

  const isLitecoinClosed = tableLitecoin.classList.contains('inactive');
  if (!isLitecoinClosed) {
    tableLitecoin.classList.add('inactive')
  }

  const isAvalancheClosed = tableAvalanche.classList.contains('inactive');
  if (!isAvalancheClosed) {
    tableAvalanche.classList.add('inactive')
  }

  const isFantomClosed = tableFantom.classList.contains('inactive');
  if (!isFantomClosed) {
    tableFantom.classList.add('inactive')
  }

  const isAlgorandClosed = tableAlgorand.classList.contains('inactive');
  if (!isAlgorandClosed) {
    tableAlgorand.classList.add('inactive')
  }

  tableCardano.classList.toggle('inactive');
}
function toggleTableBnb() {
  const isBitcoinClosed = tableBitcoin.classList.contains('inactive');
  if (!isBitcoinClosed) {
    tableBitcoin.classList.add('inactive')
  }

  const isEthereumClosed = tableEthereum.classList.contains('inactive');
  if (!isEthereumClosed) {
    tableEthereum.classList.add('inactive')
  }

  const isCardanoClosed = tableCardano.classList.contains('inactive');
  if (!isCardanoClosed) {
    tableCardano.classList.add('inactive')
  }

  const isSolanaClosed = tableSolana.classList.contains('inactive');
  if (!isSolanaClosed) {
    tableSolana.classList.add('inactive')
  }

  const isPolkadotClosed = tablePolkadot.classList.contains('inactive');
  if (!isPolkadotClosed) {
    tablePolkadot.classList.add('inactive')
  }

  const isLitecoinClosed = tableLitecoin.classList.contains('inactive');
  if (!isLitecoinClosed) {
    tableLitecoin.classList.add('inactive')
  }

  const isAvalancheClosed = tableAvalanche.classList.contains('inactive');
  if (!isAvalancheClosed) {
    tableAvalanche.classList.add('inactive')
  }

  const isFantomClosed = tableFantom.classList.contains('inactive');
  if (!isFantomClosed) {
    tableFantom.classList.add('inactive')
  }

  const isAlgorandClosed = tableAlgorand.classList.contains('inactive');
  if (!isAlgorandClosed) {
    tableAlgorand.classList.add('inactive')
  }

  tableBnb.classList.toggle('inactive');
}
function toggleTableSolana() {
  const isBitcoinClosed = tableBitcoin.classList.contains('inactive');
  if (!isBitcoinClosed) {
    tableBitcoin.classList.add('inactive')
  }

  const isEthereumClosed = tableEthereum.classList.contains('inactive');
  if (!isEthereumClosed) {
    tableEthereum.classList.add('inactive')
  }

  const isCardanoClosed = tableCardano.classList.contains('inactive');
  if (!isCardanoClosed) {
    tableCardano.classList.add('inactive')
  }

  const isBnbClosed = tableBnb.classList.contains('inactive');
  if (!isBnbClosed) {
    tableBnb.classList.add('inactive')
  }

  const isPolkadotClosed = tablePolkadot.classList.contains('inactive');
  if (!isPolkadotClosed) {
    tablePolkadot.classList.add('inactive')
  }

  const isLitecoinClosed = tableLitecoin.classList.contains('inactive');
  if (!isLitecoinClosed) {
    tableLitecoin.classList.add('inactive')
  }

  const isAvalancheClosed = tableAvalanche.classList.contains('inactive');
  if (!isAvalancheClosed) {
    tableAvalanche.classList.add('inactive')
  }

  const isFantomClosed = tableFantom.classList.contains('inactive');
  if (!isFantomClosed) {
    tableFantom.classList.add('inactive')
  }

  const isAlgorandClosed = tableAlgorand.classList.contains('inactive');
  if (!isAlgorandClosed) {
    tableAlgorand.classList.add('inactive')
  }

  tableSolana.classList.toggle('inactive');
}
function toggleTablePolkadot() {
  const isBitcoinClosed = tableBitcoin.classList.contains('inactive');
  if (!isBitcoinClosed) {
    tableBitcoin.classList.add('inactive')
  }

  const isEthereumClosed = tableEthereum.classList.contains('inactive');
  if (!isEthereumClosed) {
    tableEthereum.classList.add('inactive')
  }

  const isCardanoClosed = tableCardano.classList.contains('inactive');
  if (!isCardanoClosed) {
    tableCardano.classList.add('inactive')
  }

  const isBnbClosed = tableBnb.classList.contains('inactive');
  if (!isBnbClosed) {
    tableBnb.classList.add('inactive')
  }

  const isSolanaClosed = tableSolana.classList.contains('inactive');
  if (!isSolanaClosed) {
    tableSolana.classList.add('inactive')
  }

  const isLitecoinClosed = tableLitecoin.classList.contains('inactive');
  if (!isLitecoinClosed) {
    tableLitecoin.classList.add('inactive')
  }

  const isAvalancheClosed = tableAvalanche.classList.contains('inactive');
  if (!isAvalancheClosed) {
    tableAvalanche.classList.add('inactive')
  }

  const isFantomClosed = tableFantom.classList.contains('inactive');
  if (!isFantomClosed) {
    tableFantom.classList.add('inactive')
  }

  const isAlgorandClosed = tableAlgorand.classList.contains('inactive');
  if (!isAlgorandClosed) {
    tableAlgorand.classList.add('inactive')
  }

  tablePolkadot.classList.toggle('inactive');
}
function toggleTableLitecoin() {
  const isBitcoinClosed = tableBitcoin.classList.contains('inactive');
  if (!isBitcoinClosed) {
    tableBitcoin.classList.add('inactive')
  }

  const isEthereumClosed = tableEthereum.classList.contains('inactive');
  if (!isEthereumClosed) {
    tableEthereum.classList.add('inactive')
  }

  const isCardanoClosed = tableCardano.classList.contains('inactive');
  if (!isCardanoClosed) {
    tableCardano.classList.add('inactive')
  }

  const isBnbClosed = tableBnb.classList.contains('inactive');
  if (!isBnbClosed) {
    tableBnb.classList.add('inactive')
  }

  const isSolanaClosed = tableSolana.classList.contains('inactive');
  if (!isSolanaClosed) {
    tableSolana.classList.add('inactive')
  }

  const isPolkadotClosed = tablePolkadot.classList.contains('inactive');
  if (!isPolkadotClosed) {
    tablePolkadot.classList.add('inactive')
  }

  const isAvalancheClosed = tableAvalanche.classList.contains('inactive');
  if (!isAvalancheClosed) {
    tableAvalanche.classList.add('inactive')
  }

  const isFantomClosed = tableFantom.classList.contains('inactive');
  if (!isFantomClosed) {
    tableFantom.classList.add('inactive')
  }

  const isAlgorandClosed = tableAlgorand.classList.contains('inactive');
  if (!isAlgorandClosed) {
    tableAlgorand.classList.add('inactive')
  }

  tableLitecoin.classList.toggle('inactive');
}
function toggleTableAvalanche() {
  const isBitcoinClosed = tableBitcoin.classList.contains('inactive');
  if (!isBitcoinClosed) {
    tableBitcoin.classList.add('inactive')
  }

  const isEthereumClosed = tableEthereum.classList.contains('inactive');
  if (!isEthereumClosed) {
    tableEthereum.classList.add('inactive')
  }

  const isCardanoClosed = tableCardano.classList.contains('inactive');
  if (!isCardanoClosed) {
    tableCardano.classList.add('inactive')
  }

  const isBnbClosed = tableBnb.classList.contains('inactive');
  if (!isBnbClosed) {
    tableBnb.classList.add('inactive')
  }

  const isSolanaClosed = tableSolana.classList.contains('inactive');
  if (!isSolanaClosed) {
    tableSolana.classList.add('inactive')
  }

  const isPolkadotClosed = tablePolkadot.classList.contains('inactive');
  if (!isPolkadotClosed) {
    tablePolkadot.classList.add('inactive')
  }

  const isLitecoinClosed = tableLitecoin.classList.contains('inactive');
  if (!isLitecoinClosed) {
    tableLitecoin.classList.add('inactive')
  }

  const isFantomClosed = tableFantom.classList.contains('inactive');
  if (!isFantomClosed) {
    tableFantom.classList.add('inactive')
  }

  const isAlgorandClosed = tableAlgorand.classList.contains('inactive');
  if (!isAlgorandClosed) {
    tableAlgorand.classList.add('inactive')
  }

  tableAvalanche.classList.toggle('inactive');
}
function toggleTableFantom() {
  const isBitcoinClosed = tableBitcoin.classList.contains('inactive');
  if (!isBitcoinClosed) {
    tableBitcoin.classList.add('inactive')
  }

  const isEthereumClosed = tableEthereum.classList.contains('inactive');
  if (!isEthereumClosed) {
    tableEthereum.classList.add('inactive')
  }

  const isCardanoClosed = tableCardano.classList.contains('inactive');
  if (!isCardanoClosed) {
    tableCardano.classList.add('inactive')
  }

  const isBnbClosed = tableBnb.classList.contains('inactive');
  if (!isBnbClosed) {
    tableBnb.classList.add('inactive')
  }

  const isSolanaClosed = tableSolana.classList.contains('inactive');
  if (!isSolanaClosed) {
    tableSolana.classList.add('inactive')
  }

  const isPolkadotClosed = tablePolkadot.classList.contains('inactive');
  if (!isPolkadotClosed) {
    tablePolkadot.classList.add('inactive')
  }

  const isLitecoinClosed = tableLitecoin.classList.contains('inactive');
  if (!isLitecoinClosed) {
    tableLitecoin.classList.add('inactive')
  }

  const isAvalancheClosed = tableAvalanche.classList.contains('inactive');
  if (!isAvalancheClosed) {
    tableAvalanche.classList.add('inactive')
  }

  const isAlgorandClosed = tableAlgorand.classList.contains('inactive');
  if (!isAlgorandClosed) {
    tableAlgorand.classList.add('inactive')
  }

  tableFantom.classList.toggle('inactive');
}
function toggleTableAlgorand() {
  const isBitcoinClosed = tableBitcoin.classList.contains('inactive');
  if (!isBitcoinClosed) {
    tableBitcoin.classList.add('inactive')
  }

  const isEthereumClosed = tableEthereum.classList.contains('inactive');
  if (!isEthereumClosed) {
    tableEthereum.classList.add('inactive')
  }

  const isCardanoClosed = tableCardano.classList.contains('inactive');
  if (!isCardanoClosed) {
    tableCardano.classList.add('inactive')
  }

  const isBnbClosed = tableBnb.classList.contains('inactive');
  if (!isBnbClosed) {
    tableBnb.classList.add('inactive')
  }

  const isSolanaClosed = tableSolana.classList.contains('inactive');
  if (!isSolanaClosed) {
    tableSolana.classList.add('inactive')
  }

  const isPolkadotClosed = tablePolkadot.classList.contains('inactive');
  if (!isPolkadotClosed) {
    tablePolkadot.classList.add('inactive')
  }

  const isLitecoinClosed = tableLitecoin.classList.contains('inactive');
  if (!isLitecoinClosed) {
    tableLitecoin.classList.add('inactive')
  }

  const isAvalancheClosed = tableAvalanche.classList.contains('inactive');
  if (!isAvalancheClosed) {
    tableAvalanche.classList.add('inactive')
  }

  const isFantomClosed = tableFantom.classList.contains('inactive');
  if (!isFantomClosed) {
    tableFantom.classList.add('inactive')
  }

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

// table bnb
async function consultaCriptoBnb() {
  const res = await fetch('https://criptoya.com/api/bnb/ars/0.1');
  const data = await res.json();
  console.log('bnb');
  console.log(data);

  const fiwindCompraBnb = document.getElementById('fiwind-compra-bnb');
  const fiwindVentaBnb = document.getElementById('fiwind-venta-bnb');
  const buenCompraBnb = document.getElementById('buen-compra-bnb');
  const buenVentaBnb = document.getElementById('buen-venta-bnb');
  const calipsoCompraBnb = document.getElementById('calipso-compra-bnb');
  const calipsoVentaBnb = document.getElementById('calipso-venta-bnb');
  const lemonCompraBnb = document.getElementById('lemon-compra-bnb');
  const lemonVentaBnb = document.getElementById('lemon-venta-bnb');
  const ftxCompraBnb = document.getElementById('ftx-compra-bnb');
  const ftxVentaBnb = document.getElementById('ftx-venta-bnb');
  const mktCompraBnb = document.getElementById('mkt-compra-bnb');
  const mktVentaBnb = document.getElementById('mkt-venta-bnb');
  const tiendaCompraBnb = document.getElementById('tienda-compra-bnb');
  const tiendaVentaBnb = document.getElementById('tienda-venta-bnb');

  fiwindCompraBnb.innerHTML = `$` + data.fiwind.totalAsk;
  fiwindVentaBnb.innerHTML = `$` + data.fiwind.totalBid;
  buenCompraBnb.innerHTML = `$` + data.buenbit.totalAsk;
  buenVentaBnb.innerHTML = `$` + data.buenbit.totalBid;
  calipsoCompraBnb.innerHTML = `$` + data.calypso.totalAsk;
  calipsoVentaBnb.innerHTML = `$` + data.calypso.totalBid;
  lemonCompraBnb.innerHTML = `$` + data.lemoncash.totalAsk;
  lemonVentaBnb.innerHTML = `$` + data.lemoncash.totalBid;
  ftxCompraBnb.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaBnb.innerHTML = `$` + data.ftx.totalBid;
  mktCompraBnb.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaBnb.innerHTML = `$` + data.cryptomkt.totalBid;
  tiendaCompraBnb.innerHTML = `$` + data.tiendacrypto.totalAsk;
  tiendaVentaBnb.innerHTML = `$` + data.tiendacrypto.totalBid;
}

// table solana
async function consultaCriptoSolana() {
  const res = await fetch('https://criptoya.com/api/sol/ars/0.1');
  const data = await res.json();
  console.log('solana');
  console.log(data);

  const ripioCompraSo = document.getElementById('ripio-compra-so');
  const ripioVentaSo = document.getElementById('ripio-venta-so');
  const letsbitCompraSo = document.getElementById('letsbit-compra-so');
  const letsbitVentaSo = document.getElementById('letsbit-venta-so');
  const ftxCompraSo = document.getElementById('ftx-compra-so');
  const ftxVentaSo = document.getElementById('ftx-venta-so');
  const bitsoCompraSo = document.getElementById('bitso-compra-so');
  const bitsoVentaSo = document.getElementById('bitso-venta-so');
  const satoshiCompraSo = document.getElementById('satoshi-compra-so');
  const satoshiVentaSo = document.getElementById('satoshi-venta-so');
  const lemonCompraSo = document.getElementById('lemon-compra-so');
  const lemonVentaSo = document.getElementById('lemon-venta-so');
  const tiendaCompraSo = document.getElementById('tienda-compra-so');
  const tiendaVentaSo = document.getElementById('tienda-venta-so');
  const buenbitCompraSo = document.getElementById('buenbit-compra-so');
  const buenbitVentaSo = document.getElementById('buenbit-venta-so');
  const mktCompraSo = document.getElementById('mkt-compra-so');
  const mktVentaSo = document.getElementById('mkt-venta-so');
  const fiwindCompraSo = document.getElementById('fiwind-compra-so');
  const fiwindVentaSo = document.getElementById('fiwind-venta-so');

  ripioCompraSo.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaSo.innerHTML = `$` + data.ripio.totalBid;
  letsbitCompraSo.innerHTML = `$` + data.letsbit.totalAsk;
  letsbitVentaSo.innerHTML = `$` + data.letsbit.totalBid;
  ftxCompraSo.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaSo.innerHTML = `$` + data.ftx.totalBid;
  bitsoCompraSo.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaSo.innerHTML = `$` + data.bitso.totalBid;
  satoshiCompraSo.innerHTML = `$` + data.satoshitango.totalAsk;
  satoshiVentaSo.innerHTML = `$` + data.satoshitango.totalBid;
  lemonCompraSo.innerHTML = `$` + data.lemoncash.totalAsk;
  lemonVentaSo.innerHTML = `$` + data.lemoncash.totalBid;
  tiendaCompraSo.innerHTML = `$` + data.tiendacrypto.totalAsk;
  tiendaVentaSo.innerHTML = `$` + data.tiendacrypto.totalBid;
  buenbitCompraSo.innerHTML = `$` + data.buenbit.totalAsk;
  buenbitVentaSo.innerHTML = `$` + data.buenbit.totalBid;
  mktCompraSo.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaSo.innerHTML = `$` + data.cryptomkt.totalBid;
  fiwindCompraSo.innerHTML = `$` + data.fiwind.totalAsk;
  fiwindVentaSo.innerHTML = `$` + data.fiwind.totalBid;
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
consultaCriptoBnb();
consultaCriptoSolana();
dolarOficial();