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
const tableStellar = document.getElementById('table-stellar');
const btnStellar = document.getElementById('btn-stellar').addEventListener('click', toggleTableStellar);
const tableEos = document.getElementById('table-eos');
const btnEos = document.getElementById('btn-eos').addEventListener('click', toggleTableEos);
const tableRipple = document.getElementById('table-ripple');
const btnRipple = document.getElementById('btn-ripple').addEventListener('click', toggleTableRipple);
const tableTron = document.getElementById('table-tron');
const btnTron = document.getElementById('btn-tron').addEventListener('click', toggleTableTron);
const tableDogecoin = document.getElementById('table-dogecoin');
const btnDogecoin = document.getElementById('btn-dogecoin').addEventListener('click', toggleTableDogecoin);
const tableShibaInu = document.getElementById('table-shiba-inu');
const btnShibaInu = document.getElementById('btn-shiba-inu').addEventListener('click', toggleTableShibaInu);

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

  const isStellarClosed = tableStellar.classList.contains('inactive');
  if (!isStellarClosed) {
    tableStellar.classList.add('inactive')
  }

  const isEosClosed = tableEos.classList.contains('inactive');
  if (!isEosClosed) {
    tableEos.classList.add('inactive')
  }

  const isRippleClosed = tableRipple.classList.contains('inactive');
  if (!isRippleClosed) {
    tableRipple.classList.add('inactive')
  }

  const isTronClosed = tableTron.classList.contains('inactive');
  if (!isTronClosed) {
    tableTron.classList.add('inactive')
  }

  const isDogecoinClosed = tableDogecoin.classList.contains('inactive');
  if (!isDogecoinClosed) {
    tableDogecoin.classList.add('inactive')
  }

  const isShibaInuClosed = tableShibaInu.classList.contains('inactive');
  if (!isShibaInuClosed) {
    tableShibaInu.classList.add('inactive')
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

  const isStellarClosed = tableStellar.classList.contains('inactive');
  if (!isStellarClosed) {
    tableStellar.classList.add('inactive')
  }

  const isEosClosed = tableEos.classList.contains('inactive');
  if (!isEosClosed) {
    tableEos.classList.add('inactive')
  }

  const isRippleClosed = tableRipple.classList.contains('inactive');
  if (!isRippleClosed) {
    tableRipple.classList.add('inactive')
  }

  const isTronClosed = tableTron.classList.contains('inactive');
  if (!isTronClosed) {
    tableTron.classList.add('inactive')
  }

  const isDogecoinClosed = tableDogecoin.classList.contains('inactive');
  if (!isDogecoinClosed) {
    tableDogecoin.classList.add('inactive')
  }

  const isShibaInuClosed = tableShibaInu.classList.contains('inactive');
  if (!isShibaInuClosed) {
    tableShibaInu.classList.add('inactive')
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

  const isStellarClosed = tableStellar.classList.contains('inactive');
  if (!isStellarClosed) {
    tableStellar.classList.add('inactive')
  }

  const isEosClosed = tableEos.classList.contains('inactive');
  if (!isEosClosed) {
    tableEos.classList.add('inactive')
  }

  const isRippleClosed = tableRipple.classList.contains('inactive');
  if (!isRippleClosed) {
    tableRipple.classList.add('inactive')
  }

  const isTronClosed = tableTron.classList.contains('inactive');
  if (!isTronClosed) {
    tableTron.classList.add('inactive')
  }

  const isDogecoinClosed = tableDogecoin.classList.contains('inactive');
  if (!isDogecoinClosed) {
    tableDogecoin.classList.add('inactive')
  }

  const isShibaInuClosed = tableShibaInu.classList.contains('inactive');
  if (!isShibaInuClosed) {
    tableShibaInu.classList.add('inactive')
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

  const isStellarClosed = tableStellar.classList.contains('inactive');
  if (!isStellarClosed) {
    tableStellar.classList.add('inactive')
  }

  const isEosClosed = tableEos.classList.contains('inactive');
  if (!isEosClosed) {
    tableEos.classList.add('inactive')
  }

  const isRippleClosed = tableRipple.classList.contains('inactive');
  if (!isRippleClosed) {
    tableRipple.classList.add('inactive')
  }

  const isTronClosed = tableTron.classList.contains('inactive');
  if (!isTronClosed) {
    tableTron.classList.add('inactive')
  }

  const isDogecoinClosed = tableDogecoin.classList.contains('inactive');
  if (!isDogecoinClosed) {
    tableDogecoin.classList.add('inactive')
  }

  const isShibaInuClosed = tableShibaInu.classList.contains('inactive');
  if (!isShibaInuClosed) {
    tableShibaInu.classList.add('inactive')
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

  const isStellarClosed = tableStellar.classList.contains('inactive');
  if (!isStellarClosed) {
    tableStellar.classList.add('inactive')
  }

  const isEosClosed = tableEos.classList.contains('inactive');
  if (!isEosClosed) {
    tableEos.classList.add('inactive')
  }

  const isRippleClosed = tableRipple.classList.contains('inactive');
  if (!isRippleClosed) {
    tableRipple.classList.add('inactive')
  }

  const isTronClosed = tableTron.classList.contains('inactive');
  if (!isTronClosed) {
    tableTron.classList.add('inactive')
  }

  const isDogecoinClosed = tableDogecoin.classList.contains('inactive');
  if (!isDogecoinClosed) {
    tableDogecoin.classList.add('inactive')
  }

  const isShibaInuClosed = tableShibaInu.classList.contains('inactive');
  if (!isShibaInuClosed) {
    tableShibaInu.classList.add('inactive')
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

  const isStellarClosed = tableStellar.classList.contains('inactive');
  if (!isStellarClosed) {
    tableStellar.classList.add('inactive')
  }

  const isEosClosed = tableEos.classList.contains('inactive');
  if (!isEosClosed) {
    tableEos.classList.add('inactive')
  }

  const isRippleClosed = tableRipple.classList.contains('inactive');
  if (!isRippleClosed) {
    tableRipple.classList.add('inactive')
  }

  const isTronClosed = tableTron.classList.contains('inactive');
  if (!isTronClosed) {
    tableTron.classList.add('inactive')
  }

  const isDogecoinClosed = tableDogecoin.classList.contains('inactive');
  if (!isDogecoinClosed) {
    tableDogecoin.classList.add('inactive')
  }

  const isShibaInuClosed = tableShibaInu.classList.contains('inactive');
  if (!isShibaInuClosed) {
    tableShibaInu.classList.add('inactive')
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

  const isStellarClosed = tableStellar.classList.contains('inactive');
  if (!isStellarClosed) {
    tableStellar.classList.add('inactive')
  }

  const isEosClosed = tableEos.classList.contains('inactive');
  if (!isEosClosed) {
    tableEos.classList.add('inactive')
  }

  const isRippleClosed = tableRipple.classList.contains('inactive');
  if (!isRippleClosed) {
    tableRipple.classList.add('inactive')
  }

  const isTronClosed = tableTron.classList.contains('inactive');
  if (!isTronClosed) {
    tableTron.classList.add('inactive')
  }

  const isDogecoinClosed = tableDogecoin.classList.contains('inactive');
  if (!isDogecoinClosed) {
    tableDogecoin.classList.add('inactive')
  }

  const isShibaInuClosed = tableShibaInu.classList.contains('inactive');
  if (!isShibaInuClosed) {
    tableShibaInu.classList.add('inactive')
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

  const isStellarClosed = tableStellar.classList.contains('inactive');
  if (!isStellarClosed) {
    tableStellar.classList.add('inactive')
  }

  const isEosClosed = tableEos.classList.contains('inactive');
  if (!isEosClosed) {
    tableEos.classList.add('inactive')
  }

  const isRippleClosed = tableRipple.classList.contains('inactive');
  if (!isRippleClosed) {
    tableRipple.classList.add('inactive')
  }

  const isTronClosed = tableTron.classList.contains('inactive');
  if (!isTronClosed) {
    tableTron.classList.add('inactive')
  }

  const isDogecoinClosed = tableDogecoin.classList.contains('inactive');
  if (!isDogecoinClosed) {
    tableDogecoin.classList.add('inactive')
  }

  const isShibaInuClosed = tableShibaInu.classList.contains('inactive');
  if (!isShibaInuClosed) {
    tableShibaInu.classList.add('inactive')
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

  const isStellarClosed = tableStellar.classList.contains('inactive');
  if (!isStellarClosed) {
    tableStellar.classList.add('inactive')
  }

  const isEosClosed = tableEos.classList.contains('inactive');
  if (!isEosClosed) {
    tableEos.classList.add('inactive')
  }

  const isRippleClosed = tableRipple.classList.contains('inactive');
  if (!isRippleClosed) {
    tableRipple.classList.add('inactive')
  }

  const isTronClosed = tableTron.classList.contains('inactive');
  if (!isTronClosed) {
    tableTron.classList.add('inactive')
  }

  const isDogecoinClosed = tableDogecoin.classList.contains('inactive');
  if (!isDogecoinClosed) {
    tableDogecoin.classList.add('inactive')
  }

  const isShibaInuClosed = tableShibaInu.classList.contains('inactive');
  if (!isShibaInuClosed) {
    tableShibaInu.classList.add('inactive')
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

  const isStellarClosed = tableStellar.classList.contains('inactive');
  if (!isStellarClosed) {
    tableStellar.classList.add('inactive')
  }

  const isEosClosed = tableEos.classList.contains('inactive');
  if (!isEosClosed) {
    tableEos.classList.add('inactive')
  }

  const isRippleClosed = tableRipple.classList.contains('inactive');
  if (!isRippleClosed) {
    tableRipple.classList.add('inactive')
  }

  const isTronClosed = tableTron.classList.contains('inactive');
  if (!isTronClosed) {
    tableTron.classList.add('inactive')
  }

  const isDogecoinClosed = tableDogecoin.classList.contains('inactive');
  if (!isDogecoinClosed) {
    tableDogecoin.classList.add('inactive')
  }

  const isShibaInuClosed = tableShibaInu.classList.contains('inactive');
  if (!isShibaInuClosed) {
    tableShibaInu.classList.add('inactive')
  }

  tableAlgorand.classList.toggle('inactive');
}
function toggleTableStellar() {
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

  const isAlgorandClosed = tableAlgorand.classList.contains('inactive');
  if (!isAlgorandClosed) {
    tableAlgorand.classList.add('inactive')
  }

  const isEosClosed = tableEos.classList.contains('inactive');
  if (!isEosClosed) {
    tableEos.classList.add('inactive')
  }

  const isRippleClosed = tableRipple.classList.contains('inactive');
  if (!isRippleClosed) {
    tableRipple.classList.add('inactive')
  }

  const isTronClosed = tableTron.classList.contains('inactive');
  if (!isTronClosed) {
    tableTron.classList.add('inactive')
  }

  const isDogecoinClosed = tableDogecoin.classList.contains('inactive');
  if (!isDogecoinClosed) {
    tableDogecoin.classList.add('inactive')
  }

  const isShibaInuClosed = tableShibaInu.classList.contains('inactive');
  if (!isShibaInuClosed) {
    tableShibaInu.classList.add('inactive')
  }

  tableStellar.classList.toggle('inactive');
}
function toggleTableEos() {
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

  const isAlgorandClosed = tableAlgorand.classList.contains('inactive');
  if (!isAlgorandClosed) {
    tableAlgorand.classList.add('inactive')
  }

  const isStellarClosed = tableStellar.classList.contains('inactive');
  if (!isStellarClosed) {
    tableStellar.classList.add('inactive')
  }

  const isRippleClosed = tableRipple.classList.contains('inactive');
  if (!isRippleClosed) {
    tableRipple.classList.add('inactive')
  }

  const isTronClosed = tableTron.classList.contains('inactive');
  if (!isTronClosed) {
    tableTron.classList.add('inactive')
  }

  const isDogecoinClosed = tableDogecoin.classList.contains('inactive');
  if (!isDogecoinClosed) {
    tableDogecoin.classList.add('inactive')
  }

  const isShibaInuClosed = tableShibaInu.classList.contains('inactive');
  if (!isShibaInuClosed) {
    tableShibaInu.classList.add('inactive')
  }

  tableEos.classList.toggle('inactive');
}
function toggleTableRipple() {
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

  const isAlgorandClosed = tableAlgorand.classList.contains('inactive');
  if (!isAlgorandClosed) {
    tableAlgorand.classList.add('inactive')
  }

  const isStellarClosed = tableStellar.classList.contains('inactive');
  if (!isStellarClosed) {
    tableStellar.classList.add('inactive')
  }

  const isEosClosed = tableEos.classList.contains('inactive');
  if (!isEosClosed) {
    tableEos.classList.add('inactive')
  }

  const isTronClosed = tableTron.classList.contains('inactive');
  if (!isTronClosed) {
    tableTron.classList.add('inactive')
  }

  const isDogecoinClosed = tableDogecoin.classList.contains('inactive');
  if (!isDogecoinClosed) {
    tableDogecoin.classList.add('inactive')
  }

  const isShibaInuClosed = tableShibaInu.classList.contains('inactive');
  if (!isShibaInuClosed) {
    tableShibaInu.classList.add('inactive')
  }

  tableRipple.classList.toggle('inactive');
}
function toggleTableTron() {
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

  const isAlgorandClosed = tableAlgorand.classList.contains('inactive');
  if (!isAlgorandClosed) {
    tableAlgorand.classList.add('inactive')
  }

  const isStellarClosed = tableStellar.classList.contains('inactive');
  if (!isStellarClosed) {
    tableStellar.classList.add('inactive')
  }

  const isEosClosed = tableEos.classList.contains('inactive');
  if (!isEosClosed) {
    tableEos.classList.add('inactive')
  }

  const isRippleClosed = tableRipple.classList.contains('inactive');
  if (!isRippleClosed) {
    tableRipple.classList.add('inactive')
  }

  const isDogecoinClosed = tableDogecoin.classList.contains('inactive');
  if (!isDogecoinClosed) {
    tableDogecoin.classList.add('inactive')
  }

  const isShibaInuClosed = tableShibaInu.classList.contains('inactive');
  if (!isShibaInuClosed) {
    tableShibaInu.classList.add('inactive')
  }

  tableTron.classList.toggle('inactive');
}
function toggleTableDogecoin() {
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

  const isAlgorandClosed = tableAlgorand.classList.contains('inactive');
  if (!isAlgorandClosed) {
    tableAlgorand.classList.add('inactive')
  }

  const isStellarClosed = tableStellar.classList.contains('inactive');
  if (!isStellarClosed) {
    tableStellar.classList.add('inactive')
  }

  const isEosClosed = tableEos.classList.contains('inactive');
  if (!isEosClosed) {
    tableEos.classList.add('inactive')
  }

  const isRippleClosed = tableRipple.classList.contains('inactive');
  if (!isRippleClosed) {
    tableRipple.classList.add('inactive')
  }

  const isTronClosed = tableTron.classList.contains('inactive');
  if (!isTronClosed) {
    tableTron.classList.add('inactive')
  }

  const isShibaInuClosed = tableShibaInu.classList.contains('inactive');
  if (!isShibaInuClosed) {
    tableShibaInu.classList.add('inactive')
  }

  tableDogecoin.classList.toggle('inactive');
}
function toggleTableShibaInu() {
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

  const isAlgorandClosed = tableAlgorand.classList.contains('inactive');
  if (!isAlgorandClosed) {
    tableAlgorand.classList.add('inactive')
  }

  const isStellarClosed = tableStellar.classList.contains('inactive');
  if (!isStellarClosed) {
    tableStellar.classList.add('inactive')
  }

  const isEosClosed = tableEos.classList.contains('inactive');
  if (!isEosClosed) {
    tableEos.classList.add('inactive')
  }

  const isRippleClosed = tableRipple.classList.contains('inactive');
  if (!isRippleClosed) {
    tableRipple.classList.add('inactive')
  }

  const isTronClosed = tableTron.classList.contains('inactive');
  if (!isTronClosed) {
    tableTron.classList.add('inactive')
  }

  const isDogecoinClosed = tableDogecoin.classList.contains('inactive');
  if (!isDogecoinClosed) {
    tableDogecoin.classList.add('inactive')
  }

  tableShibaInu.classList.toggle('inactive');
}