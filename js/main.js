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